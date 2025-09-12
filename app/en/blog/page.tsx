

'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/contexts/language-context';
import dynamic from 'next/dynamic';

// Importar el componente de la página "blog" de forma dinámica
const BlogPage = dynamic(() => import('@/app/blog/page'), { ssr: false });

export default function EnglishBlogPage() {
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    // Asegurar que el idioma esté establecido como inglés
    if (language !== 'en') {
      setLanguage('en');
    }
  }, [language, setLanguage]);

  return <BlogPage />;
}
