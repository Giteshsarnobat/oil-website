import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const PreLoader = ({ onFinish }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      onFinish();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!loading) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-yellow-50 flex flex-col justify-center items-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h1
        className="text-4xl md:text-5xl font-bold"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 60 }}
      >
        <span className="text-red-700">Swasti Shree</span>{" "}
        <span className="text-yellow-500">Brand</span>
      </motion.h1>

      <motion.h2
        className="text-3xl md:text-4xl text-red-700 italic mt-4"
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 60 }}
      >
        Maa Jagdamba Oil Mill
      </motion.h2>

      <motion.p
        className="text-sm md:text-lg text-yellow-800 mt-6 font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        "Pure Taste, Pure Tradition – The Essence of Every Kitchen"
      </motion.p>
    </motion.div>
  );
};

export default PreLoader;
