
'use client';

import { Car, Users, Shield, AlertCircle, Plane, Ship, Phone, Mail, Scale, Calculator, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/language-context';

export default function AccidentesPage() {
  const { language } = useLanguage();
  
  const getLangPath = (path: string) => {
    return language === 'es' ? path : `/${language}${path}`;
  };

  const pageContent = {
    title: {
      es: 'Accidentes e Indemnizaciones',
      en: 'Accidents and Compensation',
      zh: '事故和赔偿'
    },
    subtitle: {
      es: 'Especialistas en reclamación de indemnizaciones por todo tipo de accidentes',
      en: 'Specialists in claiming compensation for all types of accidents',
      zh: '各类事故赔偿索赔专家'
    },
    description: {
      es: 'Nuestro equipo de abogados especialistas en accidentes lucha por obtener la máxima indemnización que le corresponde. Con años de experiencia y un enfoque personalizado, le acompañamos durante todo el proceso legal.',
      en: 'Our team of accident specialist lawyers fights to obtain the maximum compensation you deserve. With years of experience and a personalized approach, we accompany you throughout the entire legal process.',
      zh: '我们的事故专业律师团队为您争取应得的最大赔偿。凭借多年经验和个性化方法，我们在整个法律过程中陪伴您。'
    },
    services: [
      {
        title: {
          es: "Accidentes de Tráfico",
          en: "Traffic Accidents",
          zh: "交通事故"
        },
        description: {
          es: "Reclamación de indemnizaciones por accidentes de tráfico, incluyendo secuelas, muerte y daños materiales",
          en: "Compensation claims for traffic accidents, including injuries, death and material damage",
          zh: "交通事故赔偿索赔，包括伤害、死亡和物质损失"
        },
        icon: Car
      },
      {
        title: {
          es: "Accidentes Laborales",
          en: "Work Accidents",
          zh: "工伤事故"
        },
        description: {
          es: "Indemnizaciones por accidentes en el trabajo e incapacidades laborales",
          en: "Compensation for work accidents and work-related disabilities",
          zh: "工伤事故和工作相关残疾的赔偿"
        },
        icon: Users
      },
      {
        title: {
          es: "Negligencias Médicas",
          en: "Medical Negligence",
          zh: "医疗过失"
        },
        description: {
          es: "Reclamaciones por malpráctica médica, errores de diagnóstico y falta de consentimiento informado",
          en: "Claims for medical malpractice, diagnostic errors and lack of informed consent",
          zh: "医疗事故、诊断错误和缺乏知情同意的索赔"
        },
        icon: Shield
      },
      {
        title: {
          es: "Caídas en Vía Pública",
          en: "Public Falls",
          zh: "公共场所跌倒"
        },
        description: {
          es: "Indemnizaciones por caídas en espacios públicos y establecimientos",
          en: "Compensation for falls in public spaces and establishments",
          zh: "公共场所和机构跌倒的赔偿"
        },
        icon: AlertCircle
      },
      {
        title: {
          es: "Accidentes Aeronáuticos y Marítimos",
          en: "Aeronautical and Maritime Accidents",
          zh: "航空和海事事故"
        },
        description: {
          es: "Especialización en accidentes de aviación y marítimos",
          en: "Specialization in aviation and maritime accidents",
          zh: "航空和海事事故专业化"
        },
        icon: Plane
      },
      {
        title: {
          es: "Grandes Lesionados",
          en: "Serious Injuries",
          zh: "严重伤害"
        },
        description: {
          es: "Especialización premium en lesiones graves y permanentes con atención personalizada",
          en: "Premium specialization in serious and permanent injuries with personalized attention",
          zh: "严重和永久性伤害的高端专业化服务"
        },
        icon: Scale
      }
    ],
    whyChooseUs: {
      title: {
        es: "¿Por qué elegir nuestros servicios de accidentes?",
        en: "Why choose our accident services?",
        zh: "为什么选择我们的事故服务？"
      },
      benefits: [
        {
          es: "Sin costes iniciales - Solo cobramos si ganamos su caso",
          en: "No initial costs - We only charge if we win your case",
          zh: "无初始费用 - 只有在我们赢得案件时才收费"
        },
        {
          es: "Calculadora online gratuita de indemnizaciones",
          en: "Free online compensation calculator",
          zh: "免费在线赔偿计算器"
        },
        {
          es: "Acompañamiento personalizado durante todo el proceso",
          en: "Personalized accompaniment throughout the entire process",
          zh: "整个过程中的个性化陪伴"
        },
        {
          es: "Especialistas con años de experiencia en cada tipo de accidente",
          en: "Specialists with years of experience in each type of accident",
          zh: "在各类事故方面具有多年经验的专家"
        }
      ]
    }
  };

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://cdn.abacus.ai/images/a1352a16-9f15-4aa4-928c-b558825916ef.png"
            alt="Accidentes e Indemnizaciones"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/70 to-black/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/60" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="font-display text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl mb-8 leading-tight">
              {pageContent.title[language]}
            </h1>
            
            <div className="relative mb-12">
              <h2 className="font-display text-xl font-medium text-gray-200 sm:text-2xl lg:text-3xl leading-relaxed">
                {pageContent.subtitle[language]}
              </h2>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-0.5 elegant-gradient"></div>
            </div>
            
            <p className="text-lg text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto font-light">
              {pageContent.description[language]}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                size="lg" 
                className="elegant-button text-white px-12 py-5 text-lg font-bold shadow-2xl rounded-full" 
                asChild
              >
                <Link href={getLangPath('/calculadora-indemnizacion')}>
                  <Calculator className="mr-3 h-6 w-6" />
                  {language === 'es' ? 'Calcular Indemnización' : language === 'en' ? 'Calculate Compensation' : '计算赔偿'}
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="glass-effect border-2 border-white/30 text-white hover:bg-white/20 px-12 py-5 text-lg font-semibold shadow-xl rounded-full" 
                asChild
              >
                <a href="tel:+34666232223">
                  <Phone className="mr-3 h-6 w-6" />
                  {language === 'es' ? 'Consulta Inmediata' : language === 'en' ? 'Immediate Consultation' : '立即咨询'}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Section background="white">
        <div className="text-center mb-20">
          <div className="relative inline-block mb-8">
            <h2 className="font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              {language === 'es' 
                ? 'Tipos de Accidentes que Atendemos'
                : language === 'en'
                ? 'Types of Accidents We Handle'
                : '我们处理的事故类型'
              }
            </h2>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-40 h-1 elegant-gradient"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {pageContent.services.map((service, index) => (
            <div 
              key={index}
              className="group elegant-card rounded-3xl p-8 hover-lift"
            >
              <div className="flex items-center mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl shadow-2xl mr-6 elegant-gradient group-hover:scale-110 transition-transform duration-500">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                    {service.title[language]}
                  </h3>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed font-light text-base">
                {service.description[language]}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section background="gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative inline-block mb-8">
              <h2 className="font-display text-4xl font-bold text-gray-900 sm:text-5xl leading-tight">
                {pageContent.whyChooseUs.title[language]}
              </h2>
              <div className="absolute -bottom-4 left-0 w-32 h-1 elegant-gradient"></div>
            </div>
            
            <div className="space-y-6 mb-8">
              {pageContent.whyChooseUs.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full elegant-gradient flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <p className="text-gray-700 font-medium text-lg leading-relaxed">
                    {benefit[language]}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="elegant-button text-white font-bold shadow-2xl px-8 py-4 rounded-full" 
                asChild
              >
                <Link href={getLangPath('/contact')}>
                  <Scale className="mr-3 h-5 w-5" />
                  {language === 'es' ? 'Consulta Gratuita' : language === 'en' ? 'Free Consultation' : '免费咨询'}
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 px-8 py-4 rounded-full font-bold hover-lift" 
                style={{borderColor: '#961a19', color: '#961a19'}} 
                asChild
              >
                <a href="tel:+34666232223">
                  <Phone className="mr-3 h-5 w-5" />
                  +34 666 232 223
                </a>
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden luxury-shadow hover-lift">
              <Image
                src="https://cdn.abacus.ai/images/92cb9622-3291-4b90-80d2-223d00f40c04.png"
                alt="Consulta Legal Especializada en Accidentes"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/30" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-effect rounded-2xl p-4">
                  <p className="text-white font-semibold">
                    {language === 'es' ? 'Especialistas en Accidentes' : language === 'en' ? 'Accident Specialists' : '事故专家'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="brand">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
            {language === 'es' 
              ? '¿Ha sufrido un accidente?'
              : language === 'en'
              ? 'Have you suffered an accident?'
              : '您遭受了事故吗？'
            }
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
            {language === 'es' 
              ? 'No espere más. Contacte con nuestros especialistas para una evaluación gratuita de su caso.'
              : language === 'en'
              ? 'Don\'t wait any longer. Contact our specialists for a free evaluation of your case.'
              : '不要再等了。联系我们的专家免费评估您的案件。'
            }
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="elegant-button text-white px-10 py-5 text-lg font-bold rounded-full shadow-2xl" asChild>
              <Link href={getLangPath('/calculadora-indemnizacion')}>
                <Calculator className="mr-3 h-6 w-6" />
                {language === 'es' ? 'Calcular mi Indemnización' : language === 'en' ? 'Calculate my Compensation' : '计算我的赔偿'}
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" className="border-2 border-gray-600 text-gray-700 hover:bg-gray-100 px-10 py-5 text-lg font-bold rounded-full" asChild>
              <a href={`mailto:info@cliliabogados.com`}>
                <Mail className="mr-3 h-6 w-6" />
                {language === 'es' ? 'Enviar Consulta' : language === 'en' ? 'Send Inquiry' : '发送查询'}
              </a>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
