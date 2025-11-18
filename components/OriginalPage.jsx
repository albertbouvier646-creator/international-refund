        'use client'
        export default function OriginalPage(){ 
          return (
            <div className="max-w-6xl mx-auto px-6 py-12">
              <h1 className="text-3xl font-bold">Original page (imported)</h1>
              <p className="mt-4 text-sm text-gray-600">The original page source (first 2000 chars) is shown below for reference.</p>
              <pre className="mt-4 bg-gray-50 p-4 rounded text-xs whitespace-pre-wrap">{`import React from "react";
import Hero from "../components/home/Hero";
import Partners from "../components/home/Partners";
import Stats from "../components/home/Stats";
import HowItWorks from "../components/home/HowItWorks";
import Services from "../components/home/Services";
import Testimonials from "../components/home/Testimonials";
import ContactSection from "../components/home/ContactSection";
import FAQ from "../components/home/FAQ";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Hero />
      <Partners />
      <Stats />
      <HowItWorks />
      <Services />
      <Testimonials />
      <ContactSection />
      <FAQ />

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold mb-4">International Refund Agency</h3>
              <p className="text-slate-400 mb-4">
                Government-approved agency specializing in recovering and returning funds to rightful owners worldwide.
              </p>
              <div className="flex items-center gap-2 text-sm text-amber-400">
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                Verified & Government Approved
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#faq`}</pre>
              <p className="mt-4 text-sm text-gray-500">You should edit components in /components to recreate the exact layout.</p>
            </div>
          )
        }
