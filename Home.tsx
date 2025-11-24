
import React from "react";
import Hero from "./components/home/Hero";
import Partners from "./components/home/Partners";
import Stats from "./components/home/Stats";
import HowItWorks from "./components/home/HowItWorks";
import Services from "./components/home/Services";
import Testimonials from "./components/home/Testimonials";
import ContactSection from "./components/home/ContactSection";
import FAQ from "./components/home/FAQ";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-white">
      <Hero />
      <Partners />
      <Stats />
      <HowItWorks />
      <Services />
      <Testimonials />
      <ContactSection />
      <FAQ />
    </div>
  );
}
