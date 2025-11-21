import React, { createContext, useContext, useState } from 'react';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { Label } from './components/ui/label';
import { Badge } from './components/ui/badge';
import { 
  Shield, ArrowRight, Building2, TrendingUp, Wallet, CreditCard, 
  Phone, Mail, MapPin, Send, MessageCircle, X, Sparkles, Zap, ThumbsUp, Globe
} from 'lucide-react';

// Language Context
const LanguageContext = createContext();

const translations = {
  en: {
    government_approved: "Government Approved Agency",
    hero_title: "Recover Your",
    hero_title_highlight: "Rightful Funds",
    hero_subtitle: "The only government-approved international agency specializing in recovering and returning funds to their rightful owners worldwide.",
    hero_start_claim: "Start Your Claim",
    partners_title: "Trusted Partners",
    services_title: "Our Services",
    service1_title: "Cryptocurrency Recovery",
    service2_title: "Investment Fraud Recovery",
    service3_title: "Insurance Claims",
    contact_title: "Start Your Recovery Today",
    contact_name: "Full Name",
    contact_email: "Email Address",
    contact_phone: "Phone Number",
    contact_submit: "Submit Your Claim",
    nav_services: "Services",
    nav_contact: "Contact"
  },
  fr: {
    government_approved: "Agence Approuvée par le Gouvernement",
    hero_title: "Récupérez Vos",
    hero_title_highlight: "Fonds Légitimes",
    hero_subtitle: "La seule agence internationale approuvée par le gouvernement spécialisée dans la récupération et le retour des fonds à leurs propriétaires légitimes.",
    hero_start_claim: "Démarrer Votre Réclamation",
    partners_title: "Partenaires de Confiance",
    services_title: "Nos Services",
    service1_title: "Récupération de Cryptomonnaie",
    service2_title: "Récupération de Fraude d'Investissement",
    service3_title: "Réclamations d'Assurance",
    contact_title: "Commencez Votre Récupération Aujourd'hui",
    contact_name: "Nom Complet",
    contact_email: "Adresse E-mail",
    contact_phone: "Numéro de Téléphone",
    contact_submit: "Soumettre Votre Réclamation",
    nav_services: "Services",
    nav_contact: "Contact"
  },
  es: {
    government_approved: "Agencia Aprobada por el Gobierno",
    hero_title: "Recupere Sus",
    hero_title_highlight: "Fondos Legítimos",
    hero_subtitle: "La única agencia internacional aprobada por el gobierno especializada en recuperar y devolver fondos a sus legítimos propietarios.",
    hero_start_claim: "Iniciar Reclamo",
    partners_title: "Socios de Confianza",
    services_title: "Nuestros Servicios",
    service1_title: "Recuperación de Criptomonedas",
    service2_title: "Recuperación de Fraude de Inversión",
    service3_title: "Reclamos de Seguros",
    contact_title: "Comience Su Recuperación Hoy",
    contact_name: "Nombre Completo",
    contact_email: "Dirección de Correo Electrónico",
    contact_phone: "Número de Teléfono",
    contact_submit: "Enviar Su Reclamo",
    nav_services: "Servicios",
    nav_contact: "Contacto"
  }
};

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  
  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguage = () => {
  const context = useContext(LanguageContext);
  return context;
};

const getTranslation = (language, key) => {
  return translations[language]?.[key] || translations['en'][key] || key;
};

// Navigation Component
const Navigation = () => {
  const { language, changeLanguage } = useLanguage();
  const t = (key) => getTranslation(language, key);

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-blue-600" />
            <span className="font-bold text-xl text-slate-900">IRA</span>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#services" className="text-slate-700 hover:text-blue-600 transition-colors hidden md:block">{t('nav_services')}</a>
            <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors hidden md:block">{t('nav_contact')}</a>
            
            <select 
              value={language} 
              onChange={(e) => changeLanguage(e.target.value)}
              className="px-3 py-1 border border-slate-300 rounded-lg text-sm bg-white"
            >
              {languages.map(lang => (
                <option key={lang.code} value={lang.code}>
                  {lang.flag} {lang.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Hero Component
const Hero = () => {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 text-white pt-20">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 backdrop-blur-sm rounded-full border border-amber-400/30">
              <Shield className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium text-amber-100">{t('government_approved')}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {t('hero_title')}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                {t('hero_title_highlight')}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
              {t('hero_subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold text-lg px-8 py-6"
                onClick={scrollToContact}
              >
                {t('hero_start_claim')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white/5 rounded-2xl">
                  <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">$2.4B+</div>
                  <div className="text-xs md:text-sm text-blue-200">Funds Recovered</div>
                </div>
                <div className="text-center p-6 bg-white/5 rounded-2xl">
                  <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">150+</div>
                  <div className="text-xs md:text-sm text-blue-200">Countries</div>
                </div>
                <div className="text-center p-6 bg-white/5 rounded-2xl">
                  <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">98%</div>
                  <div className="text-xs md:text-sm text-blue-200">Success Rate</div>
                </div>
                <div className="text-center p-6 bg-white/5 rounded-2xl">
                  <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">24/7</div>
                  <div className="text-xs md:text-sm text-blue-200">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Partners Component
const Partners = () => {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);
  
  const partners = [
    { name: "Blockchain", logo: "🔗" },
    { name: "AXA", logo: "🛡️" },
    { name: "ESMA", logo: "📊" },
    { name: "EU", logo: "🇪🇺" },
    { name: "IMF", logo: "🌍" }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">{t('partners_title')}</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {partners.map((partner, idx) => (
            <div key={idx} className="text-center p-6 bg-slate-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-2">{partner.logo}</div>
              <div className="text-sm font-semibold">{partner.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Services Component
const Services = () => {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);
  
  const services = [
    { icon: Wallet, title: t('service1_title'), gradient: "from-orange-500 to-red-600" },
    { icon: TrendingUp, title: t('service2_title'), gradient: "from-blue-500 to-cyan-600" },
    { icon: Building2, title: t('service3_title'), gradient: "from-emerald-500 to-teal-600" }
  ];

  return (
    <div id="services" className="py-20 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">{t('services_title')}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600">Expert recovery services with 98% success rate worldwide.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Contact Component
const ContactSection = () => {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Our team will contact you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div id="contact" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">{t('contact_title')}</h2>
        </div>
        
        <div className="bg-slate-50 rounded-2xl p-8 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label>{t('contact_name')}</Label>
              <Input 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="John Doe"
              />
            </div>
            <div>
              <Label>{t('contact_email')}</Label>
              <Input 
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="john@example.com"
              />
            </div>
          </div>
          
          <div>
            <Label>{t('contact_phone')}</Label>
            <Input 
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              placeholder="+1 (555) 123-4567"
            />
          </div>
          
          <div>
            <Label>Case Details</Label>
            <Textarea 
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              placeholder="Please describe your case..."
            />
          </div>
          
          <Button 
            onClick={handleSubmit}
            size="lg" 
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            <Send className="w-5 h-5 mr-2" />
            {t('contact_submit')}
          </Button>
        </div>
      </div>
    </div>
  );
};

// Chat Widget Component
const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 shadow-2xl flex items-center justify-center z-50 hover:scale-110 transition-transform"
        >
          <MessageCircle className="h-7 w-7 text-white" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></span>
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 bg-white rounded-2xl shadow-2xl border z-50">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex items-center justify-between rounded-t-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">Support Assistant</h3>
                <div className="flex items-center gap-1 text-xs text-blue-100">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                  Online - AI Powered
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="p-4 h-96 overflow-y-auto bg-slate-50">
            <div className="bg-white rounded-lg p-3 mb-4 shadow-sm">
              <p className="text-sm text-slate-700">
                👋 Hello! Welcome to International Refund Agency. How can I help you today?
              </p>
            </div>
          </div>

          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input 
                placeholder="Type your message..." 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Main App Component
export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navigation />
        <Hero />
        <Partners />
        <Services />
        <ContactSection />
        <ChatWidget />
        
        <footer className="bg-slate-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold mb-4">International Refund Agency</h3>
            <p className="text-slate-400 mb-4">
              Government-approved agency specializing in fund recovery worldwide.
            </p>
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} International Refund Agency. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </LanguageProvider>
  );
}