import React from "react";
import { Building2 } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { getTranslation } from "../translations";

export default function Partners() {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);
  
  const partners = [
    { name: "Blockchain", logo: "🔗" },
    { name: "AXA", logo: "🛡️" },
    { name: "ESMA", logo: "📊" },
    { name: "European Union", logo: "🇪🇺" },
    { name: "IMF", logo: "🌍" }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
            <Building2 className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-900">{t('partners_badge')}</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            {t('partners_title')}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t('partners_subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {partners.map((partner, idx) => (
            <div 
              key={idx}
              className="group relative bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-center space-y-4">
                <div className="text-6xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                  {partner.logo}
                </div>
                <div className="font-semibold text-slate-800">{partner.name}</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-amber-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm">
            {t('partners_footer')}
          </p>
        </div>
      </div>
    </div>
  );
}