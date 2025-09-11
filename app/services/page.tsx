
'use client';

import { ArrowRight, Building2, Car, Globe, Users, FileText, Gavel, Scale, Phone, Mail, CheckCircle, Star, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/language-context';
import { siteContent } from '@/lib/content';

export default function ServicesPage() {
  const { language } = useLanguage();
  
  const getLangPath = (path: string) => {
    return language === 'es' ? path : `/${language}${path}`;
  };

  const pageContent = {
    title: {
      es: 'Nuestros Servicios Legales',
      en: 'Our Legal Services',
      zh: '我们的法律服务'
    },
    subtitle: {
      es: 'Especialistas en múltiples áreas del derecho con presencia internacional',
      en: 'Specialists in multiple areas of law with international presence',
      zh: '在多个法律领域的专家，具有国际影响力'
    },
    cta: {
      title: {
        es: '¿Necesita asesoramiento para su caso?',
        en: 'Need advice for your case?',
        zh: '需要为您的案件提供建议吗？'
      },
      subtitle: {
        es: 'Nuestros abogados especialistas están listos para ayudarle',
        en: 'Our specialist lawyers are ready to help you',
        zh: '我们的专业律师随时准备为您提供帮助'
      }
    }
  };

  // Get icon components
  const getIconComponent = (iconName: string) => {
    const icons = {
      'Car': Car,
      'Building2': Building2,
      'Globe': Globe,
      'Users': Users,
      'FileText': FileText,
      'Scale': Scale
    };
    return icons[iconName as keyof typeof icons] || Scale;
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
      </Section>

      {/* Services Categories */}
      {(() => {
        // Reorder categories: inmobiliario before otros
        const categories = [...siteContent.serviceCategories];
        const inmobiliarioIndex = categories.findIndex(cat => cat.id === 'inmobiliario');
        const otrosIndex = categories.findIndex(cat => cat.id === 'otros');
        
        if (inmobiliarioIndex > -1 && otrosIndex > -1 && inmobiliarioIndex > otrosIndex) {
          // Move inmobiliario before otros
          const inmobiliarioCategory = categories[inmobiliarioIndex];
          categories.splice(inmobiliarioIndex, 1);
          categories.splice(otrosIndex, 0, inmobiliarioCategory);
        }
        
        return categories;
      })().map((serviceCategory, categoryIndex) => {
        const IconComponent = getIconComponent(serviceCategory.icon);
        
        // Map category background images with new order (penal and inmobiliario before otros)
        const getImageForCategory = (categoryId: string) => {
          const imageMap = {
            'accidentes': "https://cdn.abacus.ai/images/a1352a16-9f15-4aa4-928c-b558825916ef.png",
            'bancario': "https://cdn.abacus.ai/images/0c818652-6885-4c36-ae82-11c01d89e6b3.png",
            'corporativo': "https://cdn.abacus.ai/images/0b060533-dc86-4441-a46b-801110185013.png",
            'laboral': "https://cdn.abacus.ai/images/e3855c46-6181-4ce8-8ad5-0e059a9c98e6.png",
            'civil': "https://cdn.abacus.ai/images/e3855c46-6181-4ce8-8ad5-0e059a9c98e6.png",
            'penal': "https://static.vecteezy.com/system/resources/previews/052/543/862/non_2x/law-and-justice-court-of-law-scales-of-justice-judge-s-gavel-legal-books-professional-courtroom-photo.jpg",
            'inmobiliario': "https://cdn.abacus.ai/images/bb82559b-785d-4929-9b74-c96d1fd10c31.png",
            'otros': "https://cdn.abacus.ai/images/1d631e2a-53fe-4ac9-a5fb-a24655cf7289.png"
          };
          return imageMap[categoryId as keyof typeof imageMap] || imageMap['otros'];
        };
        
        return (
          <section 
            key={serviceCategory.id}
            className="relative py-24 overflow-hidden"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <div className="relative h-full w-full">
                <Image
                  src={getImageForCategory(serviceCategory.id)}
                  alt={`${serviceCategory.title[language]} background`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className={`absolute inset-0 ${categoryIndex % 2 === 0 
                ? 'bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95' 
                : 'bg-gradient-to-br from-white/95 via-white/90 to-white/95'
              }`} />
            </div>
            
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Service Category Info */}
                <div className={categoryIndex % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                  <div className="flex items-center mb-8">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl shadow-xl" style={{background: 'linear-gradient(135deg, #961a19 0%, #7a1517 100%)'}}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h2 className={`ml-6 text-4xl font-bold ${
                      categoryIndex % 2 === 0 ? 'text-white' : 'text-gray-900'
                    }`}>
                      {serviceCategory.title[language]}
                    </h2>
                  </div>
                  
                  <p className={`text-xl leading-relaxed mb-10 ${
                    categoryIndex % 2 === 0 ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {serviceCategory.description[language]}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="text-white font-bold shadow-xl px-8 py-4" style={{background: 'linear-gradient(135deg, #961a19 0%, #7a1517 100%)'}} asChild>
                      <Link href={getLangPath('/contact')}>
                        {language === 'es' ? 'Consulta Legal' : language === 'en' ? 'Legal Consultation' : '法律咨询'}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg" className={`px-8 py-4 font-bold shadow-xl ${
                      categoryIndex % 2 === 0 
                        ? 'border-2 border-white text-white hover:bg-white hover:text-slate-900' 
                        : 'border-2 text-white hover:bg-white hover:text-gray-900'
                    }`} style={categoryIndex % 2 !== 0 ? {borderColor: '#961a19', color: '#961a19'} : undefined} asChild>
                      <a href="tel:+34666232223">
                        <Phone className="mr-2 h-5 w-5" />
                        {language === 'es' ? 'Llamar Ahora' : language === 'en' ? 'Call Now' : '立即致电'}
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Individual Services */}
                <div className={categoryIndex % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
                  <div className="grid grid-cols-1 gap-6">
                    {serviceCategory.services.map((service, serviceIndex) => (
                      <div 
                        key={serviceIndex}
                        className={`rounded-xl p-6 shadow-xl border transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl ${
                          categoryIndex % 2 === 0 
                            ? 'bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20' 
                            : 'bg-white border-gray-200 hover:shadow-2xl'
                        }`}
                      >
                        <div className="flex items-start">
                          <div className="flex-shrink-0">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl shadow-lg" style={{background: 'linear-gradient(135deg, #961a19 0%, #7a1517 100%)'}}>
                              <Gavel className="h-5 w-5 text-white" />
                            </div>
                          </div>
                          <div className="ml-4 flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <h3 className={`text-lg font-bold ${
                                categoryIndex % 2 === 0 ? 'text-white' : 'text-gray-900'
                              }`}>
                                {service.name[language]}
                              </h3>
                              {(service as any).unique === true && (
                                <span className="inline-flex items-center rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 px-3 py-1 text-xs font-bold text-yellow-900 shadow-lg">
                                  <Star className="h-3 w-3 mr-1" />
                                  {language === 'es' ? 'Único' : language === 'en' ? 'Unique' : '独特'}
                                </span>
                              )}
                            </div>
                            <p className={`text-sm mb-4 leading-relaxed ${
                              categoryIndex % 2 === 0 ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                              {service.description[language]}
                            </p>
                            
                            {(service as any).features && (service as any).features.length > 0 && (
                              <ul className="space-y-2">
                                {(service as any).features.slice(0, 3).map((feature: string, featureIndex: number) => (
                                  <li key={featureIndex} className={`flex items-center text-xs font-medium ${
                                    categoryIndex % 2 === 0 ? 'text-green-300' : 'text-green-700'
                                  }`}>
                                    <CheckCircle className={`h-4 w-4 mr-2 ${
                                      categoryIndex % 2 === 0 ? 'text-green-400' : 'text-green-600'
                                    }`} />
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden" style={{background: 'linear-gradient(135deg, #961a19 0%, #7a1517 50%, #000000 100%)'}}>
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="relative h-full w-full">
            <Image
              src="https://cdn.abacus.ai/images/2e18d451-e44c-43e2-9723-3971faa579d5.png"
              alt="Professional legal consultation"
              fill
              className="object-cover opacity-30"
            />
          </div>
          <div className="absolute inset-0" style={{background: 'linear-gradient(135deg, rgba(150, 26, 25, 0.90) 0%, rgba(122, 21, 23, 0.85) 50%, rgba(0, 0, 0, 0.90) 100%)'}} />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                {pageContent.cta.title[language]}
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-300">
                {pageContent.cta.subtitle[language]}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <Button size="lg" className="bg-white hover:bg-gray-100 px-8 py-4 text-lg font-bold shadow-xl transform hover:scale-105 transition-all duration-300" style={{color: '#961a19'}} asChild>
                <Link href={getLangPath('/contact')}>
                  <Scale className="mr-3 h-5 w-5" />
                  {language === 'es' ? 'Solicitar Consulta' : language === 'en' ? 'Request Consultation' : '申请咨询'}
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-bold shadow-xl transform hover:scale-105 transition-all duration-300" asChild>
                <a href="mailto:info@clilawyers.com">
                  <Mail className="mr-3 h-5 w-5" />
                  {language === 'es' ? 'Enviar Email' : language === 'en' ? 'Send Email' : '发送邮件'}
                </a>
              </Button>
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-bold shadow-xl transform hover:scale-105 transition-all duration-300" asChild>
                <a href="https://wa.me/34666232223" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-3 h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
