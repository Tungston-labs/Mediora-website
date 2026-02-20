import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";

import HeroServices from "../components/heroServices/HeroServices";
import HowMediora from "../components/howMediora/HowMediora";
import About from "../components/about/About";
import TrustSection from "../components/trustSection/TrustSection";
import Services from "../components/services/Services";
import Testimonials from "../components/testimonials/Testimonials";
import Footer from "../components/footer/Footer";

const Home = ({ openContact }) => {
  return (
    <>
      <Navbar openContact={openContact} />
      <div id="home">
        <Hero />
        <HeroServices />
        <HowMediora />
        <About />
        <TrustSection />
        <Services />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default Home;
