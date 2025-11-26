import React from "react";
import { Building2 } from "lucide-react";
import { useLanguage } from "../../LanguageContext";
import { getTranslation } from "../../translations";

export default function Partners() {
  const { language } = useLanguage();
  const t = (key: string) => getTranslation(language, key);
  
  // LISTE COMPLÈTE MISE À JOUR AVEC LES NOUVEAUX PARTENAIRES ET LES CHEMINS DE LOGOS
  const partners = [
    { 
      name: "Blockchain.com", 
      logoUrl: "https://logo.clearbit.com/blockchain.com",
    },
    { 
      name: "AXA Recovery", // Nom changé
      logoUrl: "https://logo.clearbit.com/axa.com", 
    },
    { 
      name: "ESMA", 
      logoUrl: "https://logo.clearbit.com/esma.europa.eu",
    },
    { 
      name: "European Union", 
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg",
    },
    { 
      name: "IMF", 
      logoUrl: "https://logo.clearbit.com/imf.org",
    },
    // NOUVEAUX PARTENAIRES AVEC LOGOS (CHEMINS À VÉRIFIER)
    { 
      name: "On chain forensic", 
      // Assurez-vous que ce fichier est dans public/assets/
      logoUrl: "/assets/on-chain-forensic-(1).jpg", 
    },
    { 
      name: "Legal Restitution", 
      // Assurez-vous que ce fichier est dans public/assets/
      logoUrl: "/assets/legal-restitution.jpg", 
    },
    { 
      name: "Fia-Crypto", 
      logoUrl: "https://logo.clearbit.com/fiat-crypto.com", // Clearbit pour cet exemple
    },
    { 
      name: "Money recovery", 
      logoUrl: "https://logo.clearbit.com/moneycorp.com", // Clearbit pour cet exemple
    },
    { 
      name: "Global Recovery Solution", 
      logoUrl: "https://logo.clearbit.com/globalrecoverysolutions.com", // Clearbit pour cet exemple
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
            <Building2 className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">
              {t('partners_badge')}
            </span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            {t('partners_title')}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t('partners_subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-6 gap-y-12">
          {partners.map((partner, idx) => (
            <div key={idx} className="flex flex-col items-center group cursor-pointer">
              <div className="relative w-full h-20 flex items-center justify-center p-4 bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:border-blue-200">
                <div className="absolute inset-0 bg-blue-400/5 rounded-full blur-xl transition-colors duration-300"></div>
                
                <img 
                  src={partner.logoUrl} 
                  alt={`${partner.name} logo`}
                  className="max-w-full max-h-16 w-auto object-contain transition-all duration-300 group-hover:scale-110 group-hover:brightness-110 relative z-10"
                  onError={(e) => {
                    // Fallback if image fails
                    const target = e.target as HTMLImageElement;
                    const parent = target.parentElement;
                    if (parent) {
                        target.style.display = 'none';
                        parent.innerText = partner.name[0];
                        parent.classList.add('flex', 'items-center', 'justify-center', 'text-4xl', 'font-bold', 'text-slate-300', 'h-full', 'w-full');
                    }
                  }}
                />
              </div>
              <div className="mt-4 text-center w-full relative z-10">
                <span className="text-sm font-semibold text-slate-500 group-hover:text-blue-700 transition-colors duration-300 line-clamp-2">
                    {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm font-medium">
            {t('partners_footer')}
          </p>
        </div>
      </div>
    </div>
  );
}