
import React, { useState } from "react";
import { LanguageProvider, useLanguage } from "./LanguageContext";
import ChatWidget from "./components/chat/ChatWidget";
import LanguageSelector from "./components/LanguageSelector";
import { Button } from "./components/ui/button";
import { Logo } from "./components/ui/Logo";
import { getTranslation } from "./translations";

interface LayoutProps {
  children?: React.ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
}

// Inner component to use the language hook
const FooterContent = ({ onNavigate, handleScrollLink }: { onNavigate: (page: string) => void, handleScrollLink: (e: React.MouseEvent, id: string) => void }) => {
    const { language } = useLanguage();
    const t = (key: string) => getTranslation(language, key);

    return (
        <footer className="bg-slate-900 text-white py-12 font-sans">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="col-span-2">
                <div className="mb-6">
                  <Logo classNameText="text-white" />
                </div>
                <p className="text-slate-400 mb-6 max-w-sm leading-relaxed">
                  Government-approved agency specializing in recovering and returning funds to rightful owners worldwide.
                </p>
                <div className="flex items-center gap-2 text-sm text-amber-400 font-medium">
                  <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                  Verified & Government Approved
                </div>
              </div>
              
              <div>
                <h4 className="font-header font-bold text-lg mb-6">Quick Links</h4>
                <ul className="space-y-3 text-slate-400">
                  <li><button onClick={() => onNavigate('home')} className="hover:text-white transition-colors hover:translate-x-1 duration-200 inline-block">Home</button></li>
                  <li><button onClick={(e) => handleScrollLink(e, 'services')} className="hover:text-white transition-colors hover:translate-x-1 duration-200 inline-block">Services</button></li>
                  <li><button onClick={(e) => handleScrollLink(e, 'testimonials')} className="hover:text-white transition-colors hover:translate-x-1 duration-200 inline-block">Testimonials</button></li>
                  <li><button onClick={(e) => handleScrollLink(e, 'faq')} className="hover:text-white transition-colors hover:translate-x-1 duration-200 inline-block">FAQ</button></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-header font-bold text-lg mb-6">Legal & Contact</h4>
                <ul className="space-y-3 text-slate-400">
                  <li><button onClick={() => onNavigate('terms')} className="hover:text-white transition-colors hover:translate-x-1 duration-200 inline-block">Terms & Conditions</button></li>
                  <li><button onClick={() => onNavigate('privacy')} className="hover:text-white transition-colors hover:translate-x-1 duration-200 inline-block">Privacy Policy</button></li>
                  <li className="pt-2 text-white/90 font-medium">info@international-refund.com</li>
                  <li className="text-white/90 font-medium">+44 7481 793562</li>
                  <li className="mt-2">
                    <a 
                      href="https://wa.me/447481793562" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition-colors font-medium text-sm"
                    >
                      <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                      {t('whatsapp_contact')}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm gap-4">
              <p>&copy; {new Date().getFullYear()} International Refund Agency. All rights reserved.</p>
              <div className="flex gap-6">
                <button onClick={() => onNavigate('terms')} className="hover:text-slate-300 transition-colors">Terms</button>
                <button onClick={() => onNavigate('privacy')} className="hover:text-slate-300 transition-colors">Privacy</button>
              </div>
            </div>
          </div>
        </footer>
    );
};


export default function Layout({ children, currentPage, onNavigate }: LayoutProps) {
  const handleScrollLink = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (currentPage !== 'home') {
      onNavigate('home');
      // Allow time for render then scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen relative flex flex-col font-sans">
        {/* Header */}
        <header className="sticky top-0 z-40 w-full border-b border-blue-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm">
          <div className="max-w-7xl mx-auto flex h-24 items-center justify-between px-4 sm:px-6 lg:px-8">
            <div 
              className="cursor-pointer hover:opacity-80 transition-opacity" 
              onClick={() => onNavigate('home')}
            >
              <Logo />
            </div>
            
            <div className="flex items-center gap-6">
              <nav className="hidden md:flex items-center gap-8 font-header text-sm font-semibold text-slate-600">
                <a 
                  href="#services" 
                  onClick={(e) => handleScrollLink(e, 'services')} 
                  className="hover:text-blue-600 transition-colors relative group py-2"
                >
                  Services
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                </a>
                <a 
                  href="#how-it-works" 
                  onClick={(e) => handleScrollLink(e, 'how-it-works')} 
                  className="hover:text-blue-600 transition-colors relative group py-2"
                >
                  How It Works
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                </a>
                <a 
                  href="#contact" 
                  onClick={(e) => handleScrollLink(e, 'contact')} 
                  className="hover:text-blue-600 transition-colors relative group py-2"
                >
                  Contact
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                </a>
              </nav>
              <div className="pl-6 border-l border-slate-200">
                <LanguageSelector />
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1">
          {children}
        </main>
        
        <ChatWidget />

        <FooterContent onNavigate={onNavigate} handleScrollLink={handleScrollLink} />
      </div>
    </LanguageProvider>
  );
}
