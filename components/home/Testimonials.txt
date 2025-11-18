import React from "react";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { getTranslation } from "../translations";

export default function Testimonials() {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      country: "United Kingdom",
      amount: "$375,000",
      text: "After losing money to an investment scam, I thought I'd never see my funds again. The International Refund Agency recovered 100% of my investment. Their professionalism and dedication are unmatched.",
      rating: 5
    },
    {
      name: "Michael Chen",
      country: "Singapore",
      amount: "$262,500",
      text: "The team helped me recover funds from a cryptocurrency fraud. Their expertise in blockchain technology and international law made all the difference. Highly recommended!",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      country: "Spain",
      amount: "$192,000",
      text: "Professional, transparent, and results-driven. They kept me informed throughout the entire process and successfully recovered my insurance claim that was denied for years.",
      rating: 5
    },
    {
      name: "James Anderson",
      country: "Canada",
      amount: "$540,000",
      text: "I was scammed out of my retirement savings through a fake trading platform. The International Refund Agency worked tirelessly and recovered my entire investment within 6 weeks!",
      rating: 5
    },
    {
      name: "Maria Santos",
      country: "Brazil",
      amount: "$428,000",
      text: "Incredible service! They recovered funds from multiple international wire transfer failures. Their global network and expertise in cross-border cases is truly exceptional.",
      rating: 5
    },
    {
      name: "David Kim",
      country: "South Korea",
      amount: "$315,000",
      text: "After a complex corporate asset dispute, I thought recovery was impossible. Their legal team navigated international jurisdictions perfectly and recovered all our company assets.",
      rating: 5
    }
  ];

  return (
    <div id="testimonials" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            {t('testimonials_title')}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t('testimonials_subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx}
              className="relative bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 p-8 hover:shadow-xl transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-blue-100" />
              
              <div className="relative mb-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                
                <p className="text-slate-700 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
              </div>
              
              <div className="border-t border-slate-200 pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-500">{testimonial.country}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-emerald-600 font-bold">{testimonial.amount}</div>
                    <div className="text-xs text-slate-500">{t('testimonials_recovered')}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}