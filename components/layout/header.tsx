
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Scale, Phone, Home } from 'lucide-react';
import { LanguageSelector } from '@/components/ui/language-selector';
import { useLanguage } from '@/contexts/language-context';
import { siteContent } from '@/lib/content';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language } = useLanguage();
  
  const navigation = siteContent.navigation;
  
  const navItems = [
    { key: 'services', href: '/services' },
    { key: 'inmobiliario', href: '/inmobiliario' },
    { key: 'penal', href: '/penal' },
    { key: 'accidentes', href: '/accidentes' },
    { key: 'about', href: '/about' },
    { key: 'contact', href: '/contact' },
    { key: 'blog', href: '/blog' },
  ];

  // Usar rutas directas sin prefijos de idioma

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full glass-effect luxury-shadow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <Link 
            href="/"
            className="flex items-center space-x-4 hover-lift"
          >
            <div className="relative h-20 w-32">
              <Image
                src="/logo.png"
                alt="C & LI Abogados y Asesores Logo"
                fill
                className="object-contain filter drop-shadow-lg"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center space-x-10">
              {/* Home Icon */}
              <li>
                <Link
                  href="/"
                  className="relative text-sm font-semibold text-gray-800 hover:text-gray-900 transition-all duration-300 group py-2 flex items-center"
                >
                  <Home className="h-5 w-5" />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 elegant-gradient transition-all duration-300 group-hover:w-full"></span>
                  <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
              </li>
              {/* Menu Items */}
              {navItems.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="relative text-sm font-semibold text-gray-800 hover:text-gray-900 transition-all duration-300 group py-2"
                  >
                    <span className="relative z-10">
                      {(navigation as any)[item.key][language]}
                    </span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 elegant-gradient transition-all duration-300 group-hover:w-full"></span>
                    <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right side - Contact & Language */}
          <div className="flex items-center space-x-6">
            {/* Contact Phone */}
            <a 
              href="tel:+34666232223"
              className="hidden lg:flex items-center space-x-3 px-4 py-2 rounded-full glass-effect hover-lift text-sm font-semibold text-gray-800 hover:text-gray-900 transition-all duration-300"
            >
              <div className="p-1.5 rounded-full elegant-gradient">
                <Phone className="h-4 w-4 text-white" />
              </div>
              <span>+34 666 232 223</span>
            </a>

            {/* Language Selector */}
            <LanguageSelector />

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md"
              onFocus={(e) => e.currentTarget.style.boxShadow = `0 0 0 2px #961a19`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {/* Home Icon */}
              <Link
                href="/"
                className="flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md transition-colors duration-200"
                onMouseEnter={(e) => e.currentTarget.style.color = '#961a19'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#374151'}
                onClick={() => setIsMenuOpen(false)}
              >
                <Home className="h-5 w-5 mr-3" />
                {navigation.home[language]}
              </Link>
              {/* Menu Items */}
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md transition-colors duration-200"
                  onMouseEnter={(e) => e.currentTarget.style.color = '#961a19'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#374151'}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {(navigation as any)[item.key][language]}
                </Link>
              ))}
              
              {/* Mobile Contact */}
              <a 
                href="tel:+34666232223"
                className="flex items-center space-x-2 px-3 py-2 text-base font-medium rounded-md transition-colors duration-200"
                style={{color: '#961a19', backgroundColor: '#fef2f2'}}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#7a1517';
                  e.currentTarget.style.backgroundColor = '#fee2e2';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#961a19';
                  e.currentTarget.style.backgroundColor = '#fef2f2';
                }}
              >
                <Phone className="h-4 w-4" />
                <span>+34 666 232 223</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
