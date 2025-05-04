import musterdOil from "../assets/oilPNG.png";
import { motion } from "framer-motion";
import ShopNow from "./ShopNow";
import { useState } from "react";

const Hero = ({ onBuyNowClick }) => {
  const [showShopNow, setShowShopNow] = useState(false);
  return (
    <>
      <section
        className="bg-yellow-100 py-30 md:py-20 px-6 md:px-12 h-210 md:h-auto"
        id="hero"
      >
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 md:my-0 lg:-my-10 -my-30">
          {/* Text Content */}
          <motion.div
            className="text-center md:text-left flex-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-3xl md:text-6xl font-extrabold text-red-700 mb-8">
              Experience the Goodness of Pure Mustard Oil🌿
            </h1>

            <p className="text-black text-base md:text-xl mb-8">
              Our cold-pressed, traditionally made mustard oil brings flavor,
              health, and purity to your kitchen.
            </p>

            <motion.button
              onClick={()=>setShowShopNow(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg shadow transition duration-300"
            >
              Shop Now
            </motion.button>
          </motion.div>

          {/* Image + Semi-Circle Text */}
          <motion.div
            className="flex-1 relative flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
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

            <img
              src={musterdOil}
              alt="Mustard Oil Bottle"
              loading="lazy"
              className="w-80 h-90 max-w-md mx-auto drop-shadow-xl lg:w-100 lg:h-120"
            />
          </motion.div>
        </div>
      </section>

      {showShopNow && <ShopNow onClose={()=>setShowShopNow(false)} />}
    </>
  );
};

export default Hero;
