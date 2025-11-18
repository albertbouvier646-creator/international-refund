import React from "react";
import { Wallet, TrendingUp, Building, Briefcase, CreditCard, Globe2 } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { getTranslation } from "../translations";

export default function Services() {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);
  
  const services = [
    {
      icon: Wallet,
      title: t('service1_title'),
      description: t('service1_desc'),
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: TrendingUp,
      title: t('service2_title'),
      description: t('service2_desc'),
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: Building,
      title: t('service3_title'),
      description: t('service3_desc'),
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: Briefcase,
      title: t('service4_title'),
      description: t('service4_desc'),
      gradient: "from-violet-500 to-purple-600"
    },
    {
      icon: CreditCard,
      title: t('service5_title'),
      description: t('service5_desc'),
      gradient: "from-pink-500 to-rose-600"
    },
    {
      icon: Globe2,
      title: t('service6_title'),
      description: t('service6_desc'),
      gradient: "from-indigo-500 to-blue-600"
    }
  ];

  return (
    <div id="services" className="py-20 bg-gradient-to-b from-slate-50 to-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            {t('services_title')}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t('services_subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className="group relative bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
              
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl`}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}