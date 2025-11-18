import React from "react";
import { FileSearch, Shield, CheckCircle, Banknote } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { getTranslation } from "../translations";

export default function HowItWorks() {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);
  
  const steps = [
    {
      icon: FileSearch,
      title: t('how_step1_title'),
      description: t('how_step1_desc'),
      color: "bg-blue-500"
    },
    {
      icon: Shield,
      title: t('how_step2_title'),
      description: t('how_step2_desc'),
      color: "bg-indigo-500"
    },
    {
      icon: CheckCircle,
      title: t('how_step3_title'),
      description: t('how_step3_desc'),
      color: "bg-violet-500"
    },
    {
      icon: Banknote,
      title: t('how_step4_title'),
      description: t('how_step4_desc'),
      color: "bg-amber-500"
    }
  ];

  return (
    <div id="how-it-works" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            {t('how_title')}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t('how_subtitle')}
          </p>
        </div>
        
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 via-violet-500 to-amber-500 transform -translate-y-1/2"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 hover:border-blue-300 hover:shadow-xl transition-all duration-300 h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8 bg-gradient-to-br from-slate-900 to-slate-700 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {idx + 1}
                  </div>
                  
                  <div className={`${step.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}