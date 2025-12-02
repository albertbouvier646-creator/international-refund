
import React from "react";
import { Building2 } from "lucide-react";
import { useLanguage } from "../../LanguageContext";
import { getTranslation } from "../../translations";

export default function Partners() {
  const { language } = useLanguage();
  const t = (key: string) => getTranslation(language, key);
  
  const partners = [
    { 
      name: "Blockchain.com", 
      logoUrl: "https://logo.clearbit.com/blockchain.com",
    },
    { 
      name: "AXA", 
      logoUrl: "https://i.postimg.cc/DmVWZ2K9/axa.png",
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
    {
      name: "Fia-Crypto",
      logoUrl: "https://i.postimg.cc/0rg6Q8sx/fia-crypto.png"
    },
    {
      name: "Money Recovery",
      logoUrl: "https://i.postimg.cc/w3Ktv6px/money-recovery.jpg"
    },
    {
      name: "Global Recovery Solution",
      logoUrl: "https://i.postimg.cc/qgftRkdW/global-recovery.png"
    },
    {
      name: "On Chain Forensic",
      logoUrl: "https://i.postimg.cc/1R8JfJQM/onchain-forensic.png"
    },
    {
      name: "Legal Restitution",
      logoUrl: "https://i.postimg.cc/Yjc49pHM/legal-restitution.png"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
            <Building2 className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-900">{t('partners_badge')}</span>
          </div>
          <h2 className="text-4xl font-header font-bold text-slate-900 mb-4">
            {t('partners_title')}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t('partners_subtitle')}
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 items-stretch">
          {partners.map((partner, idx) => (
            <div 
              key={idx}
              className="group relative flex flex-col items-center justify-between p-6 bg-white rounded-2xl border border-slate-100 w-48 h-44 cursor-default
                         transition-all duration-300 ease-out
                         hover:scale-105 hover:shadow-xl hover:shadow-blue-100 hover:border-blue-200 hover:bg-gradient-to-b hover:from-white hover:to-blue-50/50"
            >
              <div className="flex-1 flex items-center justify-center w-full h-24 overflow-hidden p-2 relative">
                {/* Glow effect behind logo on hover */}
                <div className="absolute inset-0 bg-blue-400/0 group-hover:bg-blue-400/5 rounded-full blur-xl transition-colors duration-300"></div>
                
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
