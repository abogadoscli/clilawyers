
'use client';

import { MapPin, Phone, Mail, Clock, Globe, Users, Scale } from 'lucide-react';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/language-context';
import { siteContent } from '@/lib/content';
import Link from 'next/link';

export default function OfficesPage() {
  const { language } = useLanguage();
  const offices = siteContent.offices;
  
  const getLangPath = (path: string) => {
    return language === 'es' ? path : `/${language}${path}`;
  };

  const pageContent = {
    title: {
      es: 'Nuestras Oficinas',
      en: 'Our Offices',
      zh: '我们的办事处'
    },
    subtitle: {
      es: 'Presencia internacional para servir mejor a nuestros clientes',
      en: 'International presence to better serve our clients',
      zh: '国际业务为客户提供更好的服务'
    },
    description: {
      es: 'Con oficinas estratégicamente ubicadas en España y China, ofrecemos servicios legales especializados adaptados a las necesidades de cada mercado. Nuestro equipo multicultural y multilingüe garantiza una comunicación efectiva y un entendimiento profundo de las particularidades legales de cada jurisdicción.',
      en: 'With offices strategically located in Spain and China, we offer specialized legal services adapted to the needs of each market. Our multicultural and multilingual team ensures effective communication and a deep understanding of the legal particularities of each jurisdiction.',
      zh: '凭借在西班牙和中国战略布局的办事处，我们提供适应各市场需求的专业法律服务。我们的多元文化和多语言团队确保有效沟通和对各司法管辖区法律特点的深入了解。'
    },
    coverage: {
      title: {
        es: 'Cobertura de Servicios',
        en: 'Service Coverage',
        zh: '服务覆盖范围'
      },
      spain: {
        title: {
          es: 'España - Especialidades',
          en: 'Spain - Specialties',
          zh: '西班牙 - 专业'
        },
        services: [
          { es: 'Derecho Bancario y Financiero', en: 'Banking and Financial Law', zh: '银行和金融法' },
          { es: 'Accidentes e Indemnizaciones', en: 'Accidents and Compensation', zh: '事故和赔偿' },
          { es: 'Derecho Civil y Penal', en: 'Civil and Criminal Law', zh: '民法和刑法' },
          { es: 'Derecho Laboral', en: 'Labor Law', zh: '劳动法' },
          { es: 'Reclamaciones Bancarias', en: 'Banking Claims', zh: '银行索赔' }
        ]
      },
      china: {
        title: {
          es: 'China - Especialidades',
          en: 'China - Specialties',
          zh: '中国 - 专业'
        },
        services: [
          { es: 'Derecho Corporativo', en: 'Corporate Law', zh: '公司法' },
          { es: 'Inversiones Extranjeras', en: 'Foreign Investment', zh: '外商投资' },
          { es: 'Fusiones y Adquisiciones', en: 'Mergers & Acquisitions', zh: '并购' },
          { es: 'Propiedad Intelectual', en: 'Intellectual Property', zh: '知识产权' },
          { es: 'Comercio Internacional', en: 'International Trade', zh: '国际贸易' }
        ]
      }
    },
    contact: {
      title: {
        es: '¿Necesita asesoramiento?',
        en: 'Need advice?',
        zh: '需要建议吗？'
      },
      subtitle: {
        es: 'Contacte con la oficina que mejor se adapte a sus necesidades',
        en: 'Contact the office that best suits your needs',
        zh: '联系最适合您需求的办事处'
      }
    }
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

        <div className="max-w-4xl mx-auto">
          <p className="text-gray-600 leading-relaxed text-center">
            {pageContent.description[language]}
          </p>
        </div>
      </Section>

      {/* Offices */}
      <Section background="gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {offices.map((office, index) => (
            <div 
              key={office.location}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Office Header */}
              <div className="flex items-center mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100">
                  <Scale className="h-8 w-8 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {office.city[language]}
                  </h2>
                  <p className="text-gray-600 font-medium">{office.country[language]}</p>
                </div>
              </div>
              
              {/* Contact Information */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{office.address[language]}</p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <a 
                    href={`tel:${office.phone}`} 
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    {office.phone}
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <a 
                    href={`mailto:${office.email}`} 
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    {office.email}
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <p className="text-gray-700">{office.hours[language]}</p>
                </div>
              </div>
              
              {/* Languages */}
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Globe className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <p className="text-sm font-medium text-gray-900">
                    {language === 'es' ? 'Idiomas:' : language === 'en' ? 'Languages:' : '语言：'}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {office.languages.map((lang, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Specialties */}
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-3">
                  <Users className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <p className="text-sm font-medium text-gray-900">
                    {language === 'es' ? 'Especialidades:' : language === 'en' ? 'Specialties:' : '专业：'}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {office.specialties[language].map((specialty, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="h-2 w-2 bg-blue-600 rounded-full" />
                      <span className="text-sm text-gray-700">{specialty}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Contact Button */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="flex-1" asChild>
                  <a href={`tel:${office.phone}`}>
                    <Phone className="mr-2 h-4 w-4" />
                    {language === 'es' ? 'Llamar' : language === 'en' ? 'Call' : '电话'}
                  </a>
                </Button>
                <Button variant="outline" className="flex-1" asChild>
                  <a href={`mailto:${office.email}`}>
                    <Mail className="mr-2 h-4 w-4" />
                    {language === 'es' ? 'Email' : language === 'en' ? 'Email' : '邮件'}
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Service Coverage */}
      <Section background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {pageContent.coverage.title[language]}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Spain Coverage */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              {pageContent.coverage.spain.title[language]}
            </h3>
            <div className="space-y-3">
              {pageContent.coverage.spain.services.map((service, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-blue-600 rounded-full flex-shrink-0" />
                  <span className="text-gray-700">{service[language]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* China Coverage */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              {pageContent.coverage.china.title[language]}
            </h3>
            <div className="space-y-3">
              {pageContent.coverage.china.services.map((service, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="h-2 w-2 bg-blue-600 rounded-full flex-shrink-0" />
                  <span className="text-gray-700">{service[language]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Contact CTA */}
      <Section background="brand">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {pageContent.contact.title[language]}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {pageContent.contact.subtitle[language]}
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href={getLangPath('/contact')}>
                <Scale className="mr-2 h-5 w-5" />
                {language === 'es' ? 'Formulario de Contacto' : language === 'en' ? 'Contact Form' : '联系表格'}
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:+34666232223">
                <Phone className="mr-2 h-5 w-5" />
                +34 666 232 223
              </a>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
