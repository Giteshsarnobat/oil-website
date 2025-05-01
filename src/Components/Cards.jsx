import oilImg2 from "../assets/oilImg2.jpg";
import oilImg4 from "../assets/oilImg4.jpg";
import gheImg from "../assets/gheImg.png";
import oilImg6 from "../assets/oilImg6.jpg";
import TinOilImg from "../assets/TinOilImg.jpg";

const Cards = ({ onBuyNowClick }) => {
  const products = [
    {
      title: "Kachi Ghani Mustard Oil",
      description: "100% organic, traditional flavor and aroma preserved.",
      quantity: "500ml,1L, 2L, 5L,15L",
      image: oilImg2,
    },
    {
      title: "Premium Kachi Ghani Mustard Oil",
      description:
        "Cold-pressed and chemical-free, perfect for cooking and massages.",
      quantity: "500ml,1L, 2L, 5L,15L",
      image: oilImg4,
    },
    {
      title: "Premium Desi Ghee",
      description:
        "Rich in healthy fats and antioxidants, our Desi Ghee boosts immunity and digestion.",
      quantity: "500ml,1L, 2L, 5L,15L",
      image: gheImg,
    },
    {
      title: "Cold Pressed Mustard Oil",
      description:
        "Naturally rich in omega-3 and antioxidants, Kachi Ghani Mustard Oil supports heart health and enhances flavor in every dish.",
      quantity: "500ml,1L, 2L, 5L,15L",
      image: TinOilImg,
    },
  ];

  return (
    <section className="bg-yellow-50 py-16 px-4 md:px-12" id="products">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-red-700">
          Our Products
        </h2>
        <p className="text-gray-700 mt-2">
          Pure, healthy, and full of tradition.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-4 flex w-full md:w-[70%] md:h-70 lg:w-[40%] lg:h-90 flex-col"
          >
            <div className="flex flex-row md:flex-row items-center lg:px-10 gap-2">
              {/* Image */}
              <img
                src={product.image}
                alt={product.title}
                loading="lazy"
                className="w-30 h-70 md:w-40 md:h-65 lg:w-300 lg:h-80 object-contain rounded-md"
              />

              {/* Details */}
              <div className="flex-1 text-start md:text-left">
                <h3 className="text-lg md:text-2xl font-bold text-red-700 md:text-center">
                  {product.title}
                </h3>
                <p className="text-gray-700 text-sm my-3">
                  {product.description}
                </p>
                <p className="text-gray-600 text-sm mb-6">
                  <span className="text-yellow-600 font-medium md:text-lg">
                    Sizes:
                  </span>{" "}
                  <span className="text-black font-bold">
                    {product.quantity}
                  </span>
                </p>
                <button
                  onClick={onBuyNowClick}
                  className="bg-red-600 text-white px-4 py-1  text-lg rounded-lg w-50 lg:w-60 hover:bg-red-700 transition"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
