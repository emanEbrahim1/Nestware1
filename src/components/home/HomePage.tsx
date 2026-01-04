import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import PurpleBand from './PurpleBand';
import Services from './Services';
import Vision from './Vision';
import Process from './Process';
import Testimonials from './Testimonials';
import CallToAction from './CallToAction';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#5A47FB] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <PurpleBand />
        <Services />
        <Vision />
        <Process />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
