
'use client';

import Link from 'next/link';
import { Scale, MapPin, Phone, Mail, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { siteContent } from '@/lib/content';

export function Footer() {
  const { language } = useLanguage();
  
  const getLangPath = (path: string) => {
    return language === 'es' ? path : `/${language}${path}`;
  };

  const footerContent = {
    copyright: {
      es: "© 2025 C & LI Abogados y Asesores. Todos los derechos reservados.",
      en: "© 2025 C&LI Lawyers and Advisors. All rights reserved.",
      zh: "© 2025 C&LI律师和顾问事务所。保留所有权利。"
    },
    disclaimer: {
      es: "Publicidad de abogados. Los resultados anteriores no garantizan resultados similares.",
      en: "Attorney advertising. Prior results do not guarantee similar outcomes.",
      zh: "律师广告。过往结果不保证类似结果。"
    },
    quickLinks: {
      es: "Enlaces Rápidos",
      en: "Quick Links", 
      zh: "快速链接"
    },
    ourOffices: {
      es: "Nuestras Oficinas",
      en: "Our Offices",
      zh: "我们的办事处"
    },
    contactUs: {
      es: "Contacto",
      en: "Contact Us",
      zh: "联系我们"
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo & Description */}
            <div className="lg:col-span-2">
              <Link href={getLangPath('/')} className="flex items-center space-x-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded" style={{background: '#961a19'}}>
                  <Scale className="h-5 w-5 text-white" />
                </div>
                <div className="font-bold">
                  <span className="text-lg">C&LI</span>
                  <span className="text-sm text-red-400 ml-1">Lawyers</span>
                </div>
              </Link>
              
              <p className="text-gray-300 mb-4 max-w-md">
                {language === 'es' 
                  ? "Bufete internacional especializado en derecho civil, penal e inmobiliario con casi 20 años de experiencia."
                  : language === 'en'
                  ? "International law firm specialized in civil, criminal and real estate law with almost 20 years of experience."
                  : "专业从事民法、刑法、房地产法的国际律师事务所，拥有近20年经验。"
                }
              </p>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Globe className="h-4 w-4 text-red-400" />
                  <span className="text-sm text-gray-300">España • China</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">{footerContent.quickLinks[language]}</h3>
              <ul className="space-y-2">
                <li>
                  <Link 
                    href={getLangPath('/about')}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {siteContent.navigation.about[language]}
                  </Link>
                </li>
                <li>
                  <Link 
                    href={getLangPath('/services')}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {siteContent.navigation.services[language]}
                  </Link>
                </li>
                <li>
                  <Link 
                    href={getLangPath('/offices')}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {siteContent.navigation.offices[language]}
                  </Link>
                </li>
                <li>
                  <Link 
                    href={getLangPath('/blog')}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {siteContent.navigation.blog[language]}
                  </Link>
                </li>
                <li>
                  <Link 
                    href={getLangPath('/contact')}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {siteContent.navigation.contact[language]}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">{footerContent.contactUs[language]}</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-300">Tenerife, España</p>
                    <p className="text-xs text-gray-400">Tianjin, China</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-red-400 flex-shrink-0" />
                  <a 
                    href="tel:+34666232223"
                    className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    +34 666 232 223
                  </a>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-red-400 flex-shrink-0" />
                  <a 
                    href="mailto:info@clilawyers.com"
                    className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    info@clilawyers.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-400">
                {footerContent.copyright[language]}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {footerContent.disclaimer[language]}
              </p>
              <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-xs">
                <Link href={getLangPath('/politica-privacidad')} className="text-gray-500 hover:text-white transition-colors duration-200">
                  {language === 'es' ? 'Política de Privacidad' : language === 'en' ? 'Privacy Policy' : '隐私政策'}
                </Link>
                <Link href={getLangPath('/politica-cookies')} className="text-gray-500 hover:text-white transition-colors duration-200">
                  {language === 'es' ? 'Política de Cookies' : language === 'en' ? 'Cookie Policy' : 'Cookie政策'}
                </Link>
                <Link href={getLangPath('/accesibilidad')} className="text-gray-500 hover:text-white transition-colors duration-200">
                  {language === 'es' ? 'Accesibilidad' : language === 'en' ? 'Accessibility' : '可访问性'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
