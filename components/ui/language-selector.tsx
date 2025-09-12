
'use client';

import { useState } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { Language, languages, languageNames } from '@/lib/i18n';
import { useLanguage } from '@/contexts/language-context';

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (newLanguage: Language) => {
    console.log('🌍 Cambiando idioma de', language, 'a', newLanguage);
    setLanguage(newLanguage);
    setIsOpen(false);
    
    // Pequeña animación visual para confirmar el cambio
    if (typeof window !== 'undefined') {
      const button = document.querySelector('[aria-label="Select language"]');
      if (button) {
        button.classList.add('scale-110');
        setTimeout(() => {
          button.classList.remove('scale-110');
        }, 200);
      }
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-red-600 transition-all duration-200 hover:scale-105"
        aria-label="Select language"
      >
        <Globe className="h-4 w-4" />
        <span>{languageNames[language]}</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)} 
          />
          
          {/* Dropdown */}
          <div className="absolute right-0 top-full mt-2 w-36 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 animate-in slide-in-from-top-2">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => handleLanguageChange(lang)}
                className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition-all duration-150 hover:pl-5 ${
                  language === lang ? 'text-red-600 bg-red-50 font-medium' : 'text-gray-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  {language === lang && <span className="text-red-500">●</span>}
                  {languageNames[lang]}
                </div>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
