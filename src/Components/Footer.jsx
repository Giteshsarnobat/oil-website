import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-red-800 text-yellow-50 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-200 mb-4">
            Swasti Shree Brand
          </h2>
          <p className="text-sm leading-relaxed">
            Bringing purity & tradition together. Our cold-pressed mustard oil
            is crafted with love for your health and taste.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="hover:text-yellow-300 cursor-pointer"
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
                className="hover:text-yellow-300 cursor-pointer"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="features"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="hover:text-yellow-300 cursor-pointer"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="hover:text-yellow-300 cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Products</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-yellow-300">
                500ml Bottle
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300">
                1L Bottle
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300">
                2L Bottle
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300">
                5L Bottle
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300">
                15L Bottle
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300">
                Bulk Order
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <ul className="text-sm space-y-2">
            <li>
              <span className="block">📍 Vill. Nawar, Block Rampura</span>
              <span className="block ml-6">Dist. Jalaun, U.P. - 285129</span>
            </li>
            <li>📞 +91 9324639058</li>
            <li>📞 +91 9554500006</li>
            <li>✉️ mustardgold@email.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-yellow-200 mt-10 pt-6 text-center text-sm text-yellow-200">
        © {new Date().getFullYear()} Swasti Shree Brand. All rights reserved. |
        <span className="ml-1 text-yellow-300 font-semibold">
          Designed by Ontrova Solutions
        </span>
      </div>
    </footer>
  );
};

export default Footer;
