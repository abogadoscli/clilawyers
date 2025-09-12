

'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/contexts/language-context';
import dynamic from 'next/dynamic';

// Importar el componente de la página "contact" de forma dinámica
const ContactPage = dynamic(() => import('@/app/contact/page'), { ssr: false });

export default function EnglishContactPage() {
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    // Asegurar que el idioma esté establecido como inglés
    if (language !== 'en') {
      setLanguage('en');
    }
  }, [language, setLanguage]);

  return <ContactPage />;
}
