import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { getTranslation } from "../translations";

export default function FAQ() {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);
  
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: t('faq_q1'),
      answer: t('faq_a1')
    },
    {
      question: t('faq_q2'),
      answer: t('faq_a2')
    },
    {
      question: t('faq_q3'),
      answer: t('faq_a3')
    },
    {
      question: t('faq_q4'),
      answer: t('faq_a4')
    },
    {
      question: t('faq_q5'),
      answer: t('faq_a5')
    },
    {
      question: t('faq_q6'),
      answer: t('faq_a6')
    }
  ];

  return (
    <div id="faq" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            {t('faq_title')}
          </h2>
          <p className="text-xl text-slate-600">
            {t('faq_subtitle')}
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className="bg-white border-2 border-slate-200 rounded-xl overflow-hidden hover:border-blue-300 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="font-semibold text-slate-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === idx ? 'max-h-96 pb-5' : 'max-h-0'
                }`}
              >
                <p className="text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">{t('faq_more')}</p>
          <Button 
            className="bg-blue-600 hover:bg-blue-700"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            {t('faq_contact')}
          </Button>
        </div>
      </div>
    </div>
  );
}