
'use client';

import { Shield, FileText, Scale, Gavel, CheckCircle, ArrowRight, Phone, Mail, MessageCircle, Users, Clock, Award, Lock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/language-context';
import { siteContent } from '@/lib/content';

export default function PenalPage() {
  const { language } = useLanguage();
  
  const getLangPath = (path: string) => {
    return language === 'es' ? path : `/${language}${path}`;
  };

  // Find the penal category from siteContent
  const penalCategory = siteContent.serviceCategories.find(cat => cat.id === 'penal');

  const pageContent = {
    hero: {
      title: {
        es: 'Derecho Penal',
        en: 'Criminal Law',
        zh: '刑法'
      },
      subtitle: {
        es: 'Defensa penal especializada y garantías jurídicas',
        en: 'Specialized criminal defense and legal guarantees',
        zh: '专业刑事辩护和法律保障'
      },
      description: {
        es: 'Casi 20 años defendiendo los derechos de nuestros clientes en procedimientos penales. Experiencia comprobada en todo tipo de delitos con resultados exitosos.',
        en: 'Almost 20 years defending our clients\' rights in criminal proceedings. Proven experience in all types of crimes with successful results.',
        zh: '近20年来在刑事诉讼中维护客户权利。在各种犯罪方面拥有成功的经验。'
      }
    },
    whyChooseUs: {
      title: {
        es: '¿Por qué elegir nuestra defensa penal?',
        en: 'Why choose our criminal defense?',
        zh: '为什么选择我们的刑事辩护？'
      },
      reasons: [
        {
          icon: Shield,
          title: {
            es: 'Defensa Garantizada',
            en: 'Guaranteed Defense',
            zh: '保证辩护'
          },
          description: {
            es: 'Protección integral de sus derechos desde la primera detención hasta la sentencia.',
            en: 'Comprehensive protection of your rights from first arrest to sentence.',
            zh: '从首次拘留到判决，全面保护您的权利。'
          }
        },
        {
          icon: Clock,
          title: {
            es: 'Disponibilidad 24/7',
            en: '24/7 Availability',
            zh: '24/7可用性'
          },
          description: {
            es: 'Asistencia letrada inmediata en comisarías y juzgados de guardia.',
            en: 'Immediate legal assistance in police stations and duty courts.',
            zh: '在警察局和值班法院提供即时法律援助。'
          }
        },
        {
          icon: Award,
          title: {
            es: 'Experiencia Probada',
            en: 'Proven Experience',
            zh: '经验证的经验'
          },
          description: {
            es: 'Miles de casos penales defendidos con éxito en tribunales de toda España.',
            en: 'Thousands of criminal cases successfully defended in courts throughout Spain.',
            zh: '在西班牙各地法院成功为数千起刑事案件辩护。'
          }
        },
        {
          icon: Lock,
          title: {
            es: 'Confidencialidad Total',
            en: 'Total Confidentiality',
            zh: '完全保密'
          },
          description: {
            es: 'Absoluta discreción y secreto profesional en todos nuestros casos.',
            en: 'Absolute discretion and professional secrecy in all our cases.',
            zh: '在我们所有案件中绝对保密和职业秘密。'
          }
        }
      ]
    },
    processSteps: {
      title: {
        es: 'Fases del Procedimiento Penal',
        en: 'Criminal Procedure Phases',
        zh: '刑事程序阶段'
      },
      steps: [
        {
          number: '01',
          title: {
            es: 'Detención/Citación',
            en: 'Arrest/Summons',
            zh: '拘留/传票'
          },
          description: {
            es: 'Asistencia inmediata en comisarías. Protegemos sus derechos desde el primer momento.',
            en: 'Immediate assistance in police stations. We protect your rights from the first moment.',
            zh: '在警察局提供即时援助。我们从第一时间保护您的权利。'
          }
        },
        {
          number: '02',
          title: {
            es: 'Instrucción',
            en: 'Investigation',
            zh: '调查'
          },
          description: {
            es: 'Defensa activa durante la investigación judicial. Preparación exhaustiva del caso.',
            en: 'Active defense during judicial investigation. Comprehensive case preparation.',
            zh: '在司法调查期间积极辩护。全面的案件准备。'
          }
        },
        {
          number: '03',
          title: {
            es: 'Juicio Oral',
            en: 'Trial',
            zh: '审判'
          },
          description: {
            es: 'Representación experta en el juicio oral con estrategia de defensa personalizada.',
            en: 'Expert representation in oral trial with personalized defense strategy.',
            zh: '在口头审判中进行专业代理，采用个性化的辩护策略。'
          }
        },
        {
          number: '04',
          title: {
            es: 'Recursos/Ejecución',
            en: 'Appeals/Execution',
            zh: '上诉/执行'
          },
          description: {
            es: 'Recursos de apelación y casación. Asesoramiento en fase de ejecución penal.',
            en: 'Appeals and cassation resources. Advice in criminal execution phase.',
            zh: '上诉和上诉法院资源。刑事执行阶段的咨询。'
          }
        }
      ]
    },
    emergencyContact: {
      title: {
        es: '¿Necesita asistencia penal urgente?',
        en: 'Do you need urgent criminal assistance?',
        zh: '您需要紧急刑事援助吗？'
      },
      subtitle: {
        es: 'Línea de emergencia 24 horas para detenciones y procedimientos urgentes',
        en: '24-hour emergency line for arrests and urgent procedures',
        zh: '24小时紧急热线，用于拘留和紧急程序'
      },
      phone: '+34 666 232 223'
    }
  };

  if (!penalCategory) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden" style={{background: 'linear-gradient(135deg, #000000 0%, #1d1d1b 50%, #961a19 100%)'}}>
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="relative h-full w-full">
            <Image
              src="https://static.vecteezy.com/system/resources/previews/052/543/862/non_2x/law-and-justice-court-of-law-scales-of-justice-judge-s-gavel-legal-books-professional-courtroom-photo.jpg"
              alt="Criminal law and justice courtroom"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="absolute inset-0" style={{background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.85) 0%, rgba(29, 29, 27, 0.80) 50%, rgba(150, 26, 25, 0.85) 100%)'}} />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="flex justify-center mb-8">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl shadow-2xl" style={{background: 'linear-gradient(135deg, #961a19 0%, #7a1517 100%)'}}>
                <Shield className="h-10 w-10 text-white" />
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
                <a href={`tel:${pageContent.emergencyContact.phone}`}>
                  <Phone className="mr-3 h-5 w-5" />
                  {language === 'es' ? 'Urgencias 24h' : language === 'en' ? '24h Emergency' : '24小时紧急'}
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-bold shadow-xl transform hover:scale-105 transition-all duration-300" asChild>
                <Link href={getLangPath('/contact')}>
                  <Gavel className="mr-3 h-5 w-5" />
                  {language === 'es' ? 'Consulta Legal' : language === 'en' ? 'Legal Consultation' : '法律咨询'}
                </Link>
              </Button>
            </div>
            
            <div className="pt-8">
              <p className="text-yellow-400 text-lg font-bold">
                ⚡ {language === 'es' ? 'URGENCIAS 24H' : language === 'en' ? '24H EMERGENCY' : '24小时紧急'} - {pageContent.emergencyContact.phone}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <Section background="white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {penalCategory.title[language]}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            {penalCategory.description[language]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {penalCategory.services.map((service, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Service Icon */}
              <div className="absolute top-6 right-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl shadow-lg" style={{background: 'linear-gradient(135deg, #961a19 0%, #7a1517 100%)'}}>
                  <Gavel className="h-6 w-6 text-white" />
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

      {/* Emergency Contact CTA */}
      <section className="relative py-24 overflow-hidden" style={{background: 'linear-gradient(135deg, #961a19 0%, #7a1517 50%, #000000 100%)'}}>
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="relative h-full w-full">
            <Image
              src="https://static.vecteezy.com/system/resources/previews/052/543/862/non_2x/law-and-justice-court-of-law-scales-of-justice-judge-s-gavel-legal-books-professional-courtroom-photo.jpg"
              alt="Criminal law emergency consultation"
              fill
              className="object-cover opacity-15"
            />
          </div>
          <div className="absolute inset-0" style={{background: 'linear-gradient(135deg, rgba(150, 26, 25, 0.90) 0%, rgba(122, 21, 23, 0.85) 50%, rgba(0, 0, 0, 0.90) 100%)'}} />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-6 py-3 bg-yellow-500 text-black font-bold text-lg rounded-full shadow-xl mb-6">
                ⚡ {language === 'es' ? 'URGENCIAS PENALES 24H' : language === 'en' ? '24H CRIMINAL EMERGENCY' : '24小时刑事紧急'}
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                {pageContent.emergencyContact.title[language]}
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-300">
                {pageContent.emergencyContact.subtitle[language]}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 text-lg font-bold shadow-xl transform hover:scale-105 transition-all duration-300" asChild>
                <a href={`tel:${pageContent.emergencyContact.phone}`}>
                  <Phone className="mr-3 h-5 w-5" />
                  {language === 'es' ? 'Llamar Urgente' : language === 'en' ? 'Emergency Call' : '紧急呼叫'}
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-bold shadow-xl transform hover:scale-105 transition-all duration-300" asChild>
                <Link href={getLangPath('/contact')}>
                  <Scale className="mr-3 h-5 w-5" />
                  {language === 'es' ? 'Consulta Normal' : language === 'en' ? 'Regular Consultation' : '常规咨询'}
                </Link>
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
                  ? '• Asistencia inmediata en comisarías • Defensa garantizada • Disponible 24/7 •'
                  : language === 'en'
                  ? '• Immediate assistance in police stations • Guaranteed defense • Available 24/7 •'
                  : '• 在警察局立即援助 • 保证辩护 • 24/7可用 •'
                }
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
