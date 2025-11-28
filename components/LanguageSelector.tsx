
import React, { useState } from "react";
import { Button } from "./ui/button";
import { ChevronDown, Check } from "lucide-react";
import { useLanguage } from "../LanguageContext";

const languages = [
  { code: 'en', name: 'English', countryCode: 'gb' },
  { code: 'es', name: 'Español', countryCode: 'es' },
  { code: 'fr', name: 'Français', countryCode: 'fr' },
  { code: 'de', name: 'Deutsch', countryCode: 'de' }
];

export default function LanguageSelector() {
  const { language, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  
  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  return (
    <div className="relative">
      <Button 
        variant="outline" 
        size="sm"
        className="gap-2 bg-white hover:bg-slate-50 border-slate-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img 
          src={`https://flagcdn.com/w40/${currentLanguage.countryCode}.png`}
          srcSet={`https://flagcdn.com/w80/${currentLanguage.countryCode}.png 2x`}
          width="20"
          height="15"
          alt={currentLanguage.name}
          className="rounded-sm object-cover"
        />
        <span className="hidden sm:inline font-medium">{currentLanguage.name}</span>
        <ChevronDown className="w-4 h-4 text-slate-500" />
      </Button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)} 
          />
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20 border border-slate-200">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  changeLanguage(lang.code);
                  setIsOpen(false);
                }}
                className="w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 flex items-center justify-between transition-colors"
              >
                <div className="flex items-center gap-3">
                  <img 
                    src={`https://flagcdn.com/w40/${lang.countryCode}.png`}
                    srcSet={`https://flagcdn.com/w80/${lang.countryCode}.png 2x`}
                    width="24"
                    height="18"
                    alt={lang.name}
                    className="rounded-sm object-cover shadow-sm"
                  />
                  <span>{lang.name}</span>
                </div>
                {language === lang.code && (
                  <Check className="w-4 h-4 text-blue-600" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
