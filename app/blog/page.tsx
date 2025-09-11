
'use client';

import { Calendar, User, ArrowRight, FileText, Search } from 'lucide-react';
import Link from 'next/link';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/language-context';
import { useState, useEffect } from 'react';

interface BlogPost {
  id: number;
  slug: string;
  category: string;
  title_es: string;
  title_en: string;
  title_zh: string;
  excerpt_es?: string;
  excerpt_en?: string;
  excerpt_zh?: string;
  createdAt: string;
  featured_image?: string;
  published: boolean;
}

export default function BlogPage() {
  const { language } = useLanguage();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const getLangPath = (path: string) => {
    return language === 'es' ? path : `/${language}${path}`;
  };

  // Mock data for demonstration - In real app this would come from API
  useEffect(() => {
    const mockPosts: BlogPost[] = [
      {
        id: 1,
        slug: 'como-reclamar-clausula-suelo',
        category: 'banking',
        title_es: 'Cómo reclamar la cláusula suelo en su hipoteca',
        title_en: 'How to claim the floor clause in your mortgage',
        title_zh: '如何在您的抵押贷款中申请最低利率条款',
        excerpt_es: 'Guía completa para entender y reclamar las cláusulas suelo abusivas en hipotecas.',
        excerpt_en: 'Complete guide to understand and claim abusive floor clauses in mortgages.',
        excerpt_zh: '理解和申请抵押贷款中滥用最低利率条款的完整指南。',
        createdAt: '2024-01-15',
        featured_image: '/blog/clausula-suelo.jpg',
        published: true
      },
      {
        id: 2,
        slug: 'indemnizacion-accidente-trafico',
        category: 'accidents',
        title_es: 'Calculando la indemnización por accidente de tráfico',
        title_en: 'Calculating compensation for traffic accidents',
        title_zh: '计算交通事故赔偿',
        excerpt_es: 'Todo lo que necesita saber sobre el cálculo de indemnizaciones por accidentes.',
        excerpt_en: 'Everything you need to know about calculating compensation for accidents.',
        excerpt_zh: '关于事故赔偿计算您需要知道的一切。',
        createdAt: '2024-01-10',
        featured_image: '/blog/accidente-trafico.jpg',
        published: true
      },
      {
        id: 3,
        slug: 'inversion-extranjera-china',
        category: 'corporate',
        title_es: 'Inversión extranjera en China: Guía 2024',
        title_en: 'Foreign investment in China: 2024 Guide',
        title_zh: '中国外商投资：2024年指南',
        excerpt_es: 'Las últimas regulaciones y oportunidades para invertir en el mercado chino.',
        excerpt_en: 'Latest regulations and opportunities to invest in the Chinese market.',
        excerpt_zh: '投资中国市场的最新法规和机会。',
        createdAt: '2024-01-05',
        featured_image: '/blog/china-investment.jpg',
        published: true
      },
      {
        id: 4,
        slug: 'despido-improcedente-derechos',
        category: 'labor',
        title_es: 'Sus derechos ante un despido improcedente',
        title_en: 'Your rights facing wrongful dismissal',
        title_zh: '面对不当解雇的权利',
        excerpt_es: 'Qué hacer y cómo actuar cuando enfrenta un despido injustificado.',
        excerpt_en: 'What to do and how to act when facing unjustified dismissal.',
        excerpt_zh: '面对不公正解雇时该做什么和如何行动。',
        createdAt: '2024-01-01',
        featured_image: '/blog/despido-improcedente.jpg',
        published: true
      }
    ];

    setTimeout(() => {
      setPosts(mockPosts);
      setLoading(false);
    }, 1000);
  }, []);

  const pageContent = {
    title: {
      es: 'Blog Legal',
      en: 'Legal Blog',
      zh: '法律博客'
    },
    subtitle: {
      es: 'Información y consejos legales actualizados',
      en: 'Updated legal information and advice',
      zh: '最新的法律信息和建议'
    },
    searchPlaceholder: {
      es: 'Buscar artículos...',
      en: 'Search articles...',
      zh: '搜索文章...'
    },
    categories: {
      all: { es: 'Todos', en: 'All', zh: '全部' },
      banking: { es: 'Derecho Bancario', en: 'Banking Law', zh: '银行法' },
      accidents: { es: 'Accidentes', en: 'Accidents', zh: '事故' },
      corporate: { es: 'Derecho Corporativo', en: 'Corporate Law', zh: '公司法' },
      labor: { es: 'Derecho Laboral', en: 'Labor Law', zh: '劳动法' }
    },
    readMore: {
      es: 'Leer más',
      en: 'Read more',
      zh: '阅读更多'
    },
    noResults: {
      es: 'No se encontraron artículos.',
      en: 'No articles found.',
      zh: '未找到文章。'
    }
  };

  const getTitle = (post: BlogPost) => {
    return post[`title_${language}` as keyof BlogPost] as string;
  };

  const getExcerpt = (post: BlogPost) => {
    return post[`excerpt_${language}` as keyof BlogPost] as string;
  };

  const filteredPosts = posts.filter(post => {
    const matchesSearch = getTitle(post).toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (getExcerpt(post) || '').toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory && post.published;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'zh' ? 'zh-CN' : language === 'en' ? 'en-US' : 'es-ES');
  };

  return (
    <div className="py-16">
      {/* Header */}
      <Section background="white">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {pageContent.title[language]}
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            {pageContent.subtitle[language]}
          </p>
        </div>

        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder={pageContent.searchPlaceholder[language]}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white"
            >
              {Object.entries(pageContent.categories).map(([key, value]) => (
                <option key={key} value={key}>
                  {value[language]}
                </option>
              ))}
            </select>
          </div>
        </div>
      </Section>

      {/* Blog Posts */}
      <Section background="gray">
        {loading ? (
          <div className="text-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">
              {language === 'es' ? 'Cargando artículos...' : language === 'en' ? 'Loading articles...' : '加载文章...'}
            </p>
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-16">
            <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">{pageContent.noResults[language]}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
              >
                {/* Featured Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                  <FileText className="h-12 w-12 text-red-600" />
                </div>
                
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                      {pageContent.categories[post.category as keyof typeof pageContent.categories][language]}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {getTitle(post)}
                  </h2>
                  
                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {getExcerpt(post)}
                  </p>
                  
                  {/* Metadata */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <time>{formatDate(post.createdAt)}</time>
                    </div>
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>C & LI Abogados</span>
                    </div>
                  </div>
                  
                  {/* Read More Button */}
                  <Button variant="outline" size="sm" asChild>
                    <Link href={getLangPath(`/blog/${post.slug}`)}>
                      {pageContent.readMore[language]}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        )}
      </Section>
    </div>
  );
}
