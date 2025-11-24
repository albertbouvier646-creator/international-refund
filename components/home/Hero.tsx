
import React from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Shield, CheckCircle2, ArrowRight } from "lucide-react";
import { useLanguage } from "../../LanguageContext";
import { getTranslation } from "../../translations";

export default function Hero() {
  const { language } = useLanguage();
  const t = (key: string) => getTranslation(language, key);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 backdrop-blur-sm rounded-full border border-amber-400/30">
              <Shield className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium text-amber-100">{t('government_approved')}</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              {t('hero_title')}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                {t('hero_title_highlight')}
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 leading-relaxed">
              {t('hero_subtitle')}
            </p>
            
            {/* Key Points */}
            <div className="space-y-3">
              {[
                t('hero_verified_point_1'),
                t('hero_verified_point_2'),
                t('hero_verified_point_3')
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-blue-50">{point}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold text-lg px-8 py-6 group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('hero_start_claim')}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                className="bg-white text-blue-900 hover:bg-blue-50 border-2 border-white text-lg px-8 py-6 transition-all font-semibold"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('hero_learn_more')}
              </Button>
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="relative">
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 p-8 space-y-6">
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <h3 className="text-2xl font-bold">{t('hero_trusted_globally')}</h3>
                <Badge className="bg-green-500/20 text-green-300 border-green-400/30">
                  {t('hero_active')}
                </Badge>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white/5 rounded-2xl">
                  <div className="text-4xl font-bold text-amber-400 mb-2">$2.4B+</div>
                  <div className="text-sm text-blue-200">{t('hero_funds_recovered')}</div>
                </div>
                <div className="text-center p-6 bg-white/5 rounded-2xl">
                  <div className="text-4xl font-bold text-amber-400 mb-2">150+</div>
                  <div className="text-sm text-blue-200">{t('hero_countries_served')}</div>
                </div>
                <div className="text-center p-6 bg-white/5 rounded-2xl">
                  <div className="text-4xl font-bold text-amber-400 mb-2">98%</div>
                  <div className="text-sm text-blue-200">{t('hero_success_rate')}</div>
                </div>
                <div className="text-center p-6 bg-white/5 rounded-2xl">
                  <div className="text-4xl font-bold text-amber-400 mb-2">24/7</div>
                  <div className="text-sm text-blue-200">{t('hero_support')}</div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 text-sm text-blue-200">
                  <Shield className="w-4 h-4 text-amber-400" />
                  <span>{t('hero_iso_certified')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgb(248 250 252)"/>
        </svg>
      </div>
    </div>
  );
}
