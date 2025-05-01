import { FaLeaf, FaSeedling, FaHandsHelping, FaHeartbeat } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaLeaf className="text-red-600 text-3xl" />,
      title: "100% Natural",
      desc: "Cold-pressed from premium mustard seeds with no chemicals or additives.",
    },
    {
      icon: <FaSeedling className="text-red-600 text-3xl" />,
      title: "Rich Aroma & Flavor",
      desc: "Brings authentic taste to your food with a bold, traditional aroma.",
    },
    {
      icon: <FaHeartbeat className="text-red-600 text-3xl" />,
      title: "Heart-Healthy",
      desc: "Packed with Omega-3 & antioxidants, great for cholesterol and immunity.",
    },
    {
      icon: <FaHandsHelping className="text-red-600 text-3xl" />,
      title: "Supports Farmers",
      desc: "Sourced directly from local farms, promoting rural livelihoods.",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-12" id="features">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-red-700">Why Choose Our Oil?</h2>
        <p className="text-gray-700 mt-2">Pure goodness in every drop — here's what makes us special.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:mx-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-yellow-50 p-6 rounded-xl shadow hover:shadow-md transition duration-300 text-center"
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-red-700 mb-2">{feature.title}</h3>
            <p className="text-gray-700">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
