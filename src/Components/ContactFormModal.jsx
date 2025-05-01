import { useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

const ContactFormModal = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const tempErrors = {};

    if (!name.trim()) {
      tempErrors.name = "Name is required.";
    }

    if (!email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = "Invalid email format.";
    }

    if (!phone.trim()) {
      tempErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(phone)) {
      tempErrors.phone = "Phone must be exactly 10 digits.";
    }

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  const PUBLICKEY = "_YYKSgaDdqvbIStmn";
  const SERVICEID = "service_de0edyo";
  const TEMPLATEID = "template_hfolr7a";

  const sendEmail = (e) => {
    e.preventDefault();
    const templateParams = {
      name,
      phone,
      email,
      message,
    };

    // Validation
    if (validate()) {
      setLoading(true);
      emailjs
        .send(SERVICEID, TEMPLATEID, templateParams, {
          publicKey: PUBLICKEY,
        })
        .then(
          () => {
            toast.success("Message sent successfully!", {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });

            setName("");
            setPhone("");
            setEmail("");
            setMessage("");
            setLoading(false);
          },
          (error) => {
            toast.error("Failed to send message. Please try again.");
            setLoading(false);
          }
        );
      setErrors({});
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-40 backdrop-blur transition-all duration-300">
      <div className="bg-white w-full max-w-md p-8 rounded-xl relative shadow-xl/20">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-4xl text-red-600 hover:text-red-800"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-red-700 mb-6 text-center">
          Contact Us
        </h2>
        <form onSubmit={sendEmail} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full border border-yellow-300 rounded px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full border border-yellow-300 rounded px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              className="w-full border border-yellow-300 rounded px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {errors.phone && (
              <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              className="w-full border border-yellow-300 rounded px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none resize-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition disabled:bg-gray-400"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactFormModal;
