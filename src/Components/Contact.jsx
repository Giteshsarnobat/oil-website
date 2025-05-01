import contactImage from "../assets/download.jpeg";
import { useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const PUBLICKEY = "_YYKSgaDdqvbIStmn";
  const SERVICEID = "service_de0edyo";
  const TEMPLATEID = "template_hfolr7a";

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
    <section className="bg-yellow-50 py-16 px-6 md:px-12" id="contact">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 bg-white rounded-xl shadow-md overflow-hidden">
        {/* Left Image */}
        <div className="hidden md:block">
          <img
            src={contactImage}
            alt="Contact"
            loading="lazy"
            className="h-175 w-full object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="p-8">
          <h2 className="text-3xl font-bold text-red-700 text-center mb-4">
            Contact Us
          </h2>
          <p className="text-center text-gray-700 mb-8">
            Have questions? Reach out and we’ll get back to you as soon as
            possible.
          </p>

          <form onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="block mb-1 font-semibold text-red-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              {errors.name && (
                <p className="text-red-600 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block mb-1 font-semibold text-red-700">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your Phone (10 digits)"
                className="w-full px-4 py-2 border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              {errors.phone && (
                <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            <div>
              <label className="block mb-1 font-semibold text-red-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block mb-1 font-semibold text-red-700">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message"
                className="w-full px-4 py-2 border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition disabled:bg-gray-400"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
