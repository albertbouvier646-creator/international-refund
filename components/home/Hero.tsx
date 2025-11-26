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
    <div id="hero" className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 text-white scroll-mt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`
          ,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content (Non modifié) */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 backdrop-blur-sm rounded-full border border-amber-400/30">
              <Shield className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium text-amber-300">{t('government_approved')}</span>
            </div>
            
            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-header font-extrabold leading-tight">
              {t('hero_title')} <span className="text-blue-400">{t('hero_title_highlight')}</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl text-blue-200 max-w-lg">
              {t('hero_subtitle')}
            </p>
            
            {/* Verification Points */}
            <div className="grid grid-cols-2 gap-4 text-sm font-medium text-blue-100">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                {t('hero_verified_point_1')}
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                {t('hero_verified_point_2')}
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                {t('hero_verified_point_3')}
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold text-base shadow-xl shadow-amber-500/30"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('hero_start_claim')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/10 hover:bg-white/20 text-white border-white/30"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('hero_learn_more')}
              </Button>
            </div>
          </div>
          
          {/* Right Column - Video Integration - MODIFIÉ */}
          <div className="relative aspect-video w-full max-w-lg mx-auto lg:max-w-none">
            <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/10">
              {/* Le lecteur vidéo est ajouté ici */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                poster="/assets/legal-restitution.jpg" // Utiliser une image du logo Legal Restitution comme poster
              >
                <source src="/assets/legal-restitution-video.mp4" type="video/mp4" /> 
                Votre navigateur ne prend pas en charge la balise vidéo.
              </video>
            </div>
            {/* Stat Box Overlay */}
            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-11/12 bg-[#1a2947] rounded-2xl p-4 md:p-6 shadow-2xl border-2 border-white/10 z-20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
              
              <div className="pt-6 border-t border-white/10 mt-6">
                <div className="flex items-center gap-2 text-sm text-blue-200">
                  <Shield className="w-4 h-4 text-amber-400" />
                  <span>{t('hero_iso_certified')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave (Non modifié) */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 70C840 80 960 100 1080 100C1200 100 1320 80 1380 70L1440 60V120H0Z" fill="white"/>
        </svg>
      </div>
    </div>
  );
}