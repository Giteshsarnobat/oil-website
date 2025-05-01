import musterdOil from "../assets/oilPNG.png";

const Hero = ({ onBuyNowClick }) => {
  return (
    <>
      <section
        className="bg-yellow-100 py-30 md:py-20 px-6 md:px-12 h-210 md:h-auto"
        id="hero"
      >
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 md:my-0 lg:-my-10 -my-30">
          {/* Text Content */}
          <div className="text-center md:text-left flex-1">
            <h1 className="text-3xl md:text-6xl font-extrabold text-red-700 mb-15">
              Experience the Goodness of Pure Mustard Oil🌿
            </h1>
            <p className="text-black text-base md:text-xl mb-8">
              Our cold-pressed, traditionally made mustard oil brings flavor,
              health, and purity to your kitchen.
            </p>
            <button
              onClick={onBuyNowClick}
              className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg shadow transition duration-300"
            >
              Shop Now
            </button>
          </div>

          {/* Image + Semi-Circle Text */}
          <div className="flex-1 relative flex flex-col items-center">
            {/* Semi-Circle Text */}
            <svg viewBox="0 0 500 250" className="w-85 h-60 mb-[-110px]">
              <defs>
                <path
                  id="arc"
                  d="M 50 200 A 200 200 0 0 1 450 200"
                  fill="transparent"
                />
              </defs>
              <text fill="#b91c1c" fontSize="59" fontWeight="bold">
                <textPath href="#arc" startOffset="50%" textAnchor="middle">
                  Maa Jagdamba Oil Mill
                </textPath>
              </text>
            </svg>

            {/* Image */}
            <img
              src={musterdOil}
              alt="Mustard Oil Bottle"
              loading="lazy"
              className="w-80 h-90 max-w-md mx-auto drop-shadow-xl lg:w-100 lg:h-120"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
