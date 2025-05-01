import { useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/Logo.jpg";

const Navbar = ({ onBuyNowClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-yellow-100 transition-all duration-300 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex justify-center items-center">
          <img className="h-15 w-15" src={logo} alt="logo" loading="lazy" />
          <p className="text-2xl font-bold text-red-700">
            Swasti Shree<span className="text-yellow-500"> Brand</span>
          </p>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-red-700 font-medium">
          <li>
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="hover:text-yellow-500 transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="hover:text-yellow-500 transition"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="features"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="hover:text-yellow-500 transition"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              to="products"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="hover:text-yellow-500 transition"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="hover:text-yellow-500 transition"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* CTA Button */}
        <button
          onClick={onBuyNowClick}
          className="bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition hidden md:block"
        >
          Buy Now
        </button>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-red-700 transition-transform duration-300"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden px-4 pb-4 transition-all duration-500 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="space-y-4 text-red-700 font-medium">
          <li>
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-400}
              duration={500}
              className="block hover:text-yellow-500"
              onClick={handleNavClick}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-300}
              duration={500}
              className="block hover:text-yellow-500"
              onClick={handleNavClick}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="features"
              spy={true}
              smooth={true}
              offset={-300}
              duration={500}
              className="block hover:text-yellow-500"
              onClick={handleNavClick}
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              to="products"
              spy={true}
              smooth={true}
              offset={-300}
              duration={500}
              className="hover:text-yellow-500 transition"
              onClick={handleNavClick}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-300}
              duration={500}
              className="block hover:text-yellow-500"
              onClick={handleNavClick}
            >
              Contact
            </Link>
          </li>
          <li>
            <button
              className="bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition"
              onClick={onBuyNowClick}
            >
              Buy Now
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
