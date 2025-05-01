import Marquee from "react-fast-marquee";
import provider1 from "../assets/provider1.jpg";
import provider2 from "../assets/provider2.jpg";
import provider3 from "../assets/provider3.jpg";
import provider4 from "../assets/provider4.jpg";


const serviceProviders = [
  provider1,
  provider2,
  provider3,
  provider4
];

const ServiceProvider = () => {
  return (
    <section className="bg-yellow-50 py-10 lg:px-50">
      <h2 className="text-center text-3xl font-bold text-red-700 mb-15">
        Our Trusted Service Providers
      </h2>
      <Marquee
        gradient={false}
        speed={60}
        pauseOnHover={false}
        className="overflow-hidden"
      >
        {serviceProviders.map((logo, index) => (
          <div
            key={index}
            className="mx-10 flex items-center justify-center w-50 h-40 bg-white shadow-md"
          >
            <img
              src={logo}
              alt={`Provider ${index + 1}`}
              className="object-fit w-50 h-40 rounded-xl"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default ServiceProvider;
