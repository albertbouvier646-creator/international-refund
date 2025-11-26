import React, { useState } from "react";
import { LanguageProvider, useLanguage } from "./LanguageContext";
import { getTranslation } from "./translations";
import ChatWidget from "./components/chat/ChatWidget";
import LanguageSelector from "./components/LanguageSelector";
import { Button } from "./components/ui/button";
import { Logo } from "./components/ui/Logo";
import { Phone, Mail, MessageCircle } from "lucide-react"; // MessageCircle AJOUTÉ

interface LayoutProps {
  children?: React.ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Layout({ children, currentPage, onNavigate }: LayoutProps) {
  const { language } = useLanguage();
  const t = (key: string) => getTranslation(language, key);

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
        {/* Header (Non modifié) */}
        <header className="sticky top-0 z-40 w-full border-b border-blue-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm">
          <div className="max-w-7xl mx-auto flex h-24 items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-12">
              <Logo showText={true} />
              <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium">
                <a 
                  href="#hero" 
                  onClick={(e) => handleScrollLink(e, 'hero')} 
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  {t('nav_home')}
                </a>
                <a 
                  href="#services" 
                  onClick={(e) => handleScrollLink(e, 'services')} 
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  {t('nav_services')}
                </a>
                <a 
                  href="#testimonials" 
                  onClick={(e) => handleScrollLink(e, 'testimonials')} 
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  {t('nav_testimonials')}
                </a>
                <a 
                  href="#faq" 
                  onClick={(e) => handleScrollLink(e, 'faq')} 
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  {t('nav_faq')}
                </a>
              </nav>
            </div>
            
            <div className="flex items-center gap-4">
              <LanguageSelector />
              <Button 
                className="bg-blue-600 hover:bg-blue-700 hidden sm:inline-flex"
                onClick={() => handleScrollLink(new MouseEvent('click') as any, 'contact')}
              >
                {t('nav_contact')}
              </Button>
            </div>
          </div>
        </header>

        <main className="flex-1">
          {children}
        </main>
        
        <ChatWidget />

        {/* Footer - MODIFIÉ */}
        <footer className="bg-[#1a2947] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <Logo classNameText="text-white" />
                <p className="text-slate-400 text-sm mt-4 leading-relaxed max-w-xs">
                  {t('hero_subtitle')}
                </p>
                <div className="mt-6 flex items-center gap-3 text-sm font-medium text-amber-400">
                  <span className="text-emerald-500">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"></path></svg>
                  </span>
                  {t('hero_trusted_globally')}
                </div>
              </div>
              
              <div>
                <h4 className="font-header font-bold text-lg mb-6">{t('nav_services')}</h4>
                <ul className="space-y-3 text-slate-400">
                  <li><a href="#services" onClick={(e) => handleScrollLink(e, 'services')} className="hover:text-white transition-colors hover:translate-x-1 duration-200 inline-block">{t('service1_title')}</a></li>
                  <li><a href="#services" onClick={(e) => handleScrollLink(e, 'services')} className="hover:text-white transition-colors hover:translate-x-1 duration-200 inline-block">{t('service2_title')}</a></li>
                  <li><a href="#services" onClick={(e) => handleScrollLink(e, 'services')} className="hover:text-white transition-colors hover:translate-x-1 duration-200 inline-block">{t('service3_title')}</a></li>
                  <li><a href="#services" onClick={(e) => handleScrollLink(e, 'services')} className="hover:text-white transition-colors hover:translate-x-1 duration-200 inline-block">{t('service4_title')}</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-header font-bold text-lg mb-6">{t('nav_company')}</h4>
                <ul className="space-y-3 text-slate-400">
                  <li><a href="#how-it-works" onClick={(e) => handleScrollLink(e, 'how-it-works')} className="hover:text-white transition-colors hover:translate-x-1 duration-200 inline-block">{t('how_title')}</a></li>
                  <li><a href="#testimonials" onClick={(e) => handleScrollLink(e, 'testimonials')} className="hover:text-white transition-colors hover:translate-x-1 duration-200 inline-block">{t('testimonials_title')}</a></li>
                  <li><a href="#faq" onClick={(e) => handleScrollLink(e, 'faq')} className="hover:text-white transition-colors hover:translate-x-1 duration-200 inline-block">{t('faq_title')}</a></li>
                  <li><a href="#partners" onClick={(e) => handleScrollLink(e, 'partners')} className="hover:text-white transition-colors hover:translate-x-1 duration-200 inline-block">{t('partners_badge')}</a></li>
                </ul>
              </div>
              
              {/* Legal & Contact Block - MODIFIÉ */}
              <div>
                <h4 className="font-header font-bold text-lg mb-6">Legal & Contact</h4>
                <ul className="space-y-3 text-slate-400">
                  <li><button onClick={() => onNavigate('terms')} className="hover:text-white transition-colors hover:translate-x-1 duration-200 inline-block">Terms & Conditions</button></li>
                  <li><button onClick={() => onNavigate('privacy')} className="hover:text-white transition-colors hover:translate-x-1 duration-200 inline-block">Privacy Policy</button></li>
                  
                  {/* Updated Email */}
                  <li className="pt-4 text-white/90 font-medium flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    info@international-refund.com
                  </li>
                  
                  {/* Updated Phone */}
                  <li className="text-white/90 font-medium flex items-center gap-2">
                    <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    +447481793562
                  </li>
                  
                  {/* NOUVEAU LIEN WHATSAPP */}
                  <li className="pt-4">
                    <a 
                      href="https://wa.me/447481793562" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 px-3 py-2 bg-emerald-500 hover:bg-emerald-600 transition-colors rounded-full text-white font-medium text-sm shadow-lg shadow-emerald-500/30"
                    >
                      <MessageCircle className="w-4 h-4" />
                      {t('footer_whatsapp')}
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
      </div>
    </LanguageProvider>
  );
}