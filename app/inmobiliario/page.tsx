
'use client';

import { Building2, FileText, Shield, Scale, CheckCircle, ArrowRight, Phone, Mail, MessageCircle, Home, Key, Calculator, Users, MapPin, Briefcase } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/language-context';
import { siteContent } from '@/lib/content';

export default function InmobiliarioPage() {
  const { language } = useLanguage();
  
  const getLangPath = (path: string) => {
    return language === 'es' ? path : `/${language}${path}`;
  };

  // Find the inmobiliario category from siteContent
  const inmobiliarioCategory = siteContent.serviceCategories.find(cat => cat.id === 'inmobiliario');

  const pageContent = {
    hero: {
      title: {
        es: 'Derecho Inmobiliario',
        en: 'Real Estate Law',
        zh: '房地产法'
      },
      subtitle: {
        es: 'Expertos en todas las operaciones inmobiliarias',
        en: 'Experts in all real estate operations',
        zh: '房地产业务各方面的专家'
      },
      description: {
        es: 'Casi 20 años protegiendo inversiones inmobiliarias y derechos de propiedad. Asesoramiento integral desde la compraventa hasta la gestión de comunidades.',
        en: 'Almost 20 years protecting real estate investments and property rights. Comprehensive advice from sales to community management.',
        zh: '近20年来保护房地产投资和财产权。从销售到社区管理的全面咨询。'
      }
    },
    whyChooseUs: {
      title: {
        es: '¿Por qué elegir nuestros servicios inmobiliarios?',
        en: 'Why choose our real estate services?',
        zh: '为什么选择我们的房地产服务？'
      },
      reasons: [
        {
          icon: Shield,
          title: {
            es: 'Protección Total',
            en: 'Total Protection',
            zh: '全面保护'
          },
          description: {
            es: 'Protegemos completamente sus inversiones inmobiliarias con due diligence exhaustiva.',
            en: 'We fully protect your real estate investments with comprehensive due diligence.',
            zh: '通过全面的尽职调查完全保护您的房地产投资。'
          }
        },
        {
          icon: Users,
          title: {
            es: 'Equipo Especializado',
            en: 'Specialized Team',
            zh: '专业团队'
          },
          description: {
            es: 'Abogados especializados exclusivamente en derecho inmobiliario con amplia experiencia.',
            en: 'Lawyers specialized exclusively in real estate law with extensive experience.',
            zh: '专门从事房地产法的律师，经验丰富。'
          }
        },
        {
          icon: MapPin,
          title: {
            es: 'Presencia Internacional',
            en: 'International Presence',
            zh: '国际业务'
          },
          description: {
            es: 'Operamos en España y China, perfectos para inversiones inmobiliarias internacionales.',
            en: 'We operate in Spain and China, perfect for international real estate investments.',
            zh: '我们在西班牙和中国开展业务，非常适合国际房地产投资。'
          }
        },
        {
          icon: Calculator,
          title: {
            es: 'Sin Costes Ocultos',
            en: 'No Hidden Costs',
            zh: '无隐藏费用'
          },
          description: {
            es: 'Honorarios transparentes desde el primer día. Sin sorpresas en su facturación.',
            en: 'Transparent fees from day one. No surprises in your billing.',
            zh: '从第一天起就透明收费。账单中没有意外费用。'
          }
        }
      ]
    },
    processSteps: {
      title: {
        es: 'Nuestro Proceso de Trabajo',
        en: 'Our Work Process',
        zh: '我们的工作流程'
      },
      steps: [
        {
          number: '01',
          title: {
            es: 'Consulta Inicial',
            en: 'Initial Consultation',
            zh: '初步咨询'
          },
          description: {
            es: 'Analizamos su situación inmobiliaria y definimos la estrategia legal más adecuada.',
            en: 'We analyze your real estate situation and define the most appropriate legal strategy.',
            zh: '我们分析您的房地产情况并制定最合适的法律策略。'
          }
        },
        {
          number: '02',
          title: {
            es: 'Due Diligence',
            en: 'Due Diligence',
            zh: '尽职调查'
          },
          description: {
            es: 'Investigación exhaustiva de la propiedad, cargas, limitaciones y situación registral.',
            en: 'Comprehensive investigation of the property, encumbrances, limitations and registry status.',
            zh: '对财产、负担、限制和登记状况进行全面调查。'
          }
        },
        {
          number: '03',
          title: {
            es: 'Documentación',
            en: 'Documentation',
            zh: '文档处理'
          },
          description: {
            es: 'Preparación y revisión de todos los contratos y documentos necesarios.',
            en: 'Preparation and review of all necessary contracts and documents.',
            zh: '准备和审查所有必要的合同和文件。'
          }
        },
        {
          number: '04',
          title: {
            es: 'Cierre y Seguimiento',
            en: 'Closing and Follow-up',
            zh: '交割和跟进'
          },
          description: {
            es: 'Acompañamiento en el cierre de la operación y seguimiento post-venta.',
            en: 'Support in closing the operation and post-sale follow-up.',
            zh: '支持交易结束和售后跟进。'
          }
        }
      ]
    },
    cta: {
      title: {
        es: '¿Necesita asesoramiento inmobiliario?',
        en: 'Do you need real estate advice?',
        zh: '您需要房地产咨询吗？'
      },
      subtitle: {
        es: 'Nuestros especialistas en derecho inmobiliario están listos para proteger su inversión',
        en: 'Our real estate law specialists are ready to protect your investment',
        zh: '我们的房地产法专家随时准备保护您的投资'
      }
    }
  };

  if (!inmobiliarioCategory) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden" style={{background: 'linear-gradient(135deg, #961a19 0%, #7a1517 50%, #000000 100%)'}}>
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="relative h-full w-full">
            <Image
              src="https://cdn.abacus.ai/images/bb82559b-785d-4929-9b74-c96d1fd10c31.png"
              alt="Modern real estate and legal services"
              fill
              className="object-cover opacity-30"
              priority
            />
          </div>
          <div className="absolute inset-0" style={{background: 'linear-gradient(135deg, rgba(150, 26, 25, 0.90) 0%, rgba(122, 21, 23, 0.85) 50%, rgba(0, 0, 0, 0.90) 100%)'}} />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="flex justify-center mb-8">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl shadow-2xl" style={{background: 'linear-gradient(135deg, #961a19 0%, #7a1517 100%)'}}>
                <Building2 className="h-10 w-10 text-white" />
              </div>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                {pageContent.hero.title[language]}
              </h1>
              <p className="text-2xl font-semibold text-gray-200 sm:text-3xl">
                {pageContent.hero.subtitle[language]}
              </p>
              <p className="mx-auto max-w-4xl text-xl leading-relaxed text-gray-300">
                {pageContent.hero.description[language]}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <Button size="lg" className="bg-white hover:bg-gray-100 px-8 py-4 text-lg font-bold shadow-xl transform hover:scale-105 transition-all duration-300" style={{color: '#961a19'}} asChild>
                <Link href={getLangPath('/contact')}>
                  <Phone className="mr-3 h-5 w-5" />
                  {language === 'es' ? 'Consulta Legal' : language === 'en' ? 'Legal Consultation' : '法律咨询'}
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-bold shadow-xl transform hover:scale-105 transition-all duration-300" asChild>
                <a href="mailto:info@clilawyers.com">
                  <Mail className="mr-3 h-5 w-5" />
                  {language === 'es' ? 'Contactar Ahora' : language === 'en' ? 'Contact Now' : '立即联系'}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <Section background="white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {inmobiliarioCategory.title[language]}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            {inmobiliarioCategory.description[language]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {inmobiliarioCategory.services.map((service, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Service Icon */}
              <div className="absolute top-6 right-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl shadow-lg" style={{background: 'linear-gradient(135deg, #961a19 0%, #7a1517 100%)'}}>
                  <FileText className="h-6 w-6 text-white" />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {service.name[language]}
                    </h3>
                    {(service as any).unique === true && (
                      <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold text-white shadow-lg" style={{background: 'linear-gradient(135deg, #961a19 0%, #7a1517 100%)'}}>
                        ⭐ {language === 'es' ? 'Único' : language === 'en' ? 'Unique' : '独特'}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description[language]}
                  </p>
                </div>
                
                {(service as any).features && (service as any).features.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      {language === 'es' ? 'Servicios incluidos:' : language === 'en' ? 'Services included:' : '包含的服务：'}
                    </h4>
                    <ul className="space-y-2">
                      {(service as any).features.map((feature: string, featureIndex: number) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 mr-3 flex-shrink-0" style={{color: '#961a19'}} />
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section background="gray">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {pageContent.whyChooseUs.title[language]}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pageContent.whyChooseUs.reasons.map((reason, index) => (
            <div key={index} className="text-center group">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl shadow-xl mb-6 group-hover:scale-110 transition-transform duration-300" style={{background: 'linear-gradient(135deg, #961a19 0%, #7a1517 100%)'}}>
                <reason.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {reason.title[language]}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description[language]}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Process Steps */}
      <Section background="white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {pageContent.processSteps.title[language]}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pageContent.processSteps.steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connection Line */}
              {index < pageContent.processSteps.steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 z-0" style={{backgroundColor: '#961a19', opacity: 0.3}} />
              )}
              
              <div className="relative z-10 text-center">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full shadow-xl mb-6 group-hover:scale-110 transition-transform duration-300" style={{background: 'linear-gradient(135deg, #961a19 0%, #7a1517 100%)'}}>
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title[language]}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description[language]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact CTA */}
      <section className="relative py-24 overflow-hidden" style={{background: 'linear-gradient(135deg, #000000 0%, #1d1d1b 50%, #961a19 100%)'}}>
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="relative h-full w-full">
            <Image
              src="https://cdn.abacus.ai/images/bb82559b-785d-4929-9b74-c96d1fd10c31.png"
              alt="Professional real estate consultation"
              fill
              className="object-cover opacity-20"
            />
          </div>
          <div className="absolute inset-0" style={{background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.90) 0%, rgba(29, 29, 27, 0.85) 50%, rgba(150, 26, 25, 0.90) 100%)'}} />
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
                <a href="tel:+34666232223">
                  <Phone className="mr-3 h-5 w-5" />
                  {language === 'es' ? 'Llamar Ahora' : language === 'en' ? 'Call Now' : '立即致电'}
                </a>
              </Button>
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-bold shadow-xl transform hover:scale-105 transition-all duration-300" asChild>
                <a href="https://wa.me/34666232223" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-3 h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
            </div>
            
            <div className="pt-8">
              <p className="text-gray-300 text-sm">
                {language === 'es' 
                  ? '• Consulta inmobiliaria gratuita • Análisis de riesgo incluido • Respuesta en 24h •'
                  : language === 'en'
                  ? '• Free real estate consultation • Risk analysis included • Response within 24h •'
                  : '• 免费房地产咨询 • 包含风险分析 • 24小时内回复 •'
                }
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
