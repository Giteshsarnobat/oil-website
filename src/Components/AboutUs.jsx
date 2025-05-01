import aboutImage from "../assets/AboutUsImg.jpeg";

const AboutUs = () => {
  return (
    <section className="bg-yellow-50 py-16 px-4 md:px-12" id="about">
      <div className="max-w-2xl md:max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-40 items-center">
        {/* Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-6">
            About Us
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            We are passionate about bringing the purest, most flavorful mustard
            oil straight from the farms to your kitchen. Our oil is{" "}
            <span className="text-red-600 font-semibold">cold-pressed</span>{" "}
            using traditional wooden churners (lakdi ghani), preserving
            nutrients and authentic aroma.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Sourced directly from trusted farmers, every bottle supports rural
            livelihoods and promotes healthy living. Whether for cooking,
            massage, or Ayurvedic use, our mustard oil is{" "}
            <span className="text-red-600 font-semibold">
              100% natural, chemical-free
            </span>
            , and crafted with care.
          </p>
          <button className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg">
            Learn More
          </button>
        </div>

        {/* Image */}
        <div className="w-full -mt-20 lg:mt-3 flex justify-center items-center lg:w-100">
          <img
            src={aboutImage}
            alt="About Us"
            loading="lazy"
            className="w-3/4 sm:w-2/3 md:w-full h-auto mx-auto md:mx-0 rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
