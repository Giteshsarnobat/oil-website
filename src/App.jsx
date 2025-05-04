import { useState } from "react";
import AboutUs from "./Components/AboutUs";
import Cards from "./Components/Cards";
import Contact from "./Components/Contact";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import TeamCard from "./Components/TeamCard";
import ContactFormModal from "./Components/ContactFormModal";
import ServiceProvider from "./Components/serviceProviders";
import "./App.css";
import PreLoader from "./Components/Preloader";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <PreLoader onFinish={() => setLoading(false)} />;
  }

  return (
    <>
      <Navbar onBuyNowClick={() => setShowModal(true)} />
      {showModal && <ContactFormModal onClose={() => setShowModal(false)} />}
      <Hero onBuyNowClick={() => setShowModal(true)} />
      {showModal && <ContactFormModal onClose={() => setShowModal(false)} />}
      <Features />
      <Cards onBuyNowClick={() => setShowModal(true)} />
      {showModal && <ContactFormModal onClose={() => setShowModal(false)} />}
      <Contact />
      <TeamCard />
      <AboutUs />
      <ServiceProvider />
      <Footer />
    </>
  );
}

export default App;
