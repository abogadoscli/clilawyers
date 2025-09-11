'use client';

import { ArrowRight, Globe, Laptop, Handshake, Shield, Scale, Car, Building2, Users, FileText, Phone, Mail, MessageCircle, CheckCircle, Calculator } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { useLanguage } from '@/contexts/language-context';
import { siteContent } from '@/lib/content';
import { TestimonialsSection } from '@/components/sections/testimonials';

export default function HomePage() {
  const { language } = useLanguage();
  
  const getLangPath = (path: string) => {
    return language === 'es' ? path : `/${language}${path}`;
  };

  const hero = siteContent.hero;
  const valuePropositions = siteContent.valuePropositions;
  const offices = siteContent.offices;

  // Services content - updated with all services from both sites
  const servicesContent = {
    title: {
      es: "Nuestros Servicios Legales",
      en: "Our Legal Services",
      zh: "我们的法律服务"
    },
    subtitle: {
      es: "Especialistas en múltiples áreas del derecho con presencia internacional",
      en: "Specialists in multiple areas of law with international presence",
      zh: "在多个法律领域的专家，具有国际影响力"
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

  // Statistics content
  const statsContent = {
    title: {
      es: "Excelencia Comprobada",
      en: "Proven Excellence",
      zh: "卓越成就"
    },
    subtitle: {
      es: "Casi dos décadas de dedicación absoluta protegiendo los derechos de nuestros clientes",
      en: "Almost two decades of absolute dedication protecting our clients' rights",
      zh: "近二十年来全力保护客户权利"
    },
    stats: [
      {
        number: 20,
        suffix: "",
        label: {
          es: "Años de Experiencia",
          en: "Years of Experience", 
          zh: "年经验"
        }
      },
      {
        number: 2000,
        suffix: "+",
        label: {
          es: "Casos Resueltos",
          en: "Cases Resolved",
          zh: "已解决案件"
        }
      },
      {
        number: 95,
        suffix: "%",
        label: {
          es: "Casos Ganados",
          en: "Cases Won",
          zh: "胜诉率"
        }
      },
      {
        number: 21,
        suffix: "M€",
        label: {
          es: "Recuperado para Clientes",
          en: "Recovered for Clients",
          zh: "为客户追回"
        }
      }
    ]
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Sophisticated Overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://cdn.abacus.ai/images/0421f334-0318-411e-84d9-74352fefd2bb.png"
            alt="Ultra-Professional Law Firm Office"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-gray-900/50 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
        </div>

        {/* Elegant Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-6xl mx-auto">
            {/* Prestigious Title */}
            <h1 className="font-display text-6xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl mb-8 leading-tight">
              <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                {hero.title[language]}
              </span>
            </h1>
            
            {/* Sophisticated Subtitle */}
            <div className="relative mb-12">
              <h2 className="font-display text-2xl font-medium text-gray-200 sm:text-3xl lg:text-4xl leading-relaxed">
                {hero.subtitle[language]}
              </h2>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-0.5 elegant-gradient"></div>
            </div>
            
            {/* Premium Description */}
            <p className="text-xl text-gray-300 mb-16 leading-relaxed max-w-4xl mx-auto font-light tracking-wide">
              {hero.description[language]}
            </p>
            
            {/* Elegant CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Button 
                size="lg" 
                className="elegant-button text-white px-12 py-6 text-lg font-bold shadow-2xl transform hover:scale-105 transition-all duration-500 rounded-full" 
                asChild
              >
                <Link href={getLangPath('/contact')}>
                  <Phone className="mr-3 h-6 w-6" />
                  {hero.primaryCta[language]}
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="glass-effect border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 px-12 py-6 text-lg font-semibold shadow-xl transform hover:scale-105 transition-all duration-500 rounded-full backdrop-blur-md" 
                asChild
              >
                <Link href={getLangPath('/calculadora-indemnizacion')}>
                  <Calculator className="mr-3 h-6 w-6" />
                  {hero.secondaryCta[language]}
                </Link>
              </Button>
            </div>
          </div>
        </div>



        {/* Floating Particles Effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-white/15 rounded-full animate-pulse delay-2000"></div>
        </div>
      </section>

      {/* Value Propositions */}
      <Section background="white">
        <div className="text-center mb-20">
          <div className="relative inline-block mb-8">
            <h2 className="font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              {language === 'es' 
                ? '¿Por qué elegir C & LI Abogados y Asesores?'
                : language === 'en'
                ? 'Why choose C&LI Lawyers and Advisors?'
                : '为什么选择C&LI律师和顾问事务所？'
              }
            </h2>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-40 h-1 elegant-gradient"></div>
          </div>
          <p className="text-xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
            {language === 'es' 
              ? 'La combinación perfecta entre tradición jurídica, innovación tecnológica y excelencia en el servicio que distingue a los grandes bufetes internacionales'
              : language === 'en'
              ? 'The perfect combination of legal tradition, technological innovation and service excellence that distinguishes great international law firms'
              : '法律传统、技术创新和卓越服务的完美结合，这些都是伟大国际律师事务所的标志'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {valuePropositions.map((item, index) => {
            const icons = [Globe, Laptop, Shield, Users];
            const Icon = icons[index];
            
            return (
              <div 
                key={index}
                className="text-center group hover-lift elegant-card rounded-3xl p-8"
              >
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl shadow-2xl mb-8 elegant-gradient">
                  <Icon className="h-12 w-12 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold text-gray-900 mb-4">
                  {item.title[language]}
                </h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  {item.description[language]}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Services Overview */}
      <Section background="gray">
        <div className="text-center mb-20">
          <div className="relative inline-block mb-8">
            <h2 className="font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              {servicesContent.title[language]}
            </h2>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-40 h-1 elegant-gradient"></div>
          </div>
          <p className="text-xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
            {servicesContent.subtitle[language]}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {(() => {
            // Custom order: civil, accidentes, bancario, corporativo, inmobiliario, penal, laboral, extranjeria, otros
            const customOrder = ['civil', 'accidentes', 'bancario', 'corporativo', 'inmobiliario', 'penal', 'laboral', 'extranjeria', 'otros'];
            return customOrder.map(id => siteContent.serviceCategories.find(cat => cat.id === id)).filter((cat): cat is NonNullable<typeof cat> => Boolean(cat));
          })().map((category, index) => {
            const IconComponent = getIconComponent(category.icon);
            
            // Map category images
            const getImageForCategory = (categoryId: string) => {
              const imageMap = {
                'accidentes': "https://cdn.abacus.ai/images/a1352a16-9f15-4aa4-928c-b558825916ef.png",
                'bancario': "https://cdn.abacus.ai/images/0c818652-6885-4c36-ae82-11c01d89e6b3.png",
                'corporativo': "https://cdn.abacus.ai/images/0b060533-dc86-4441-a46b-801110185013.png",
                'laboral': "https://cdn.abacus.ai/images/e3855c46-6181-4ce8-8ad5-0e059a9c98e6.png",
                'civil': "https://cdn.abacus.ai/images/e3855c46-6181-4ce8-8ad5-0e059a9c98e6.png",
                'penal': "https://static.vecteezy.com/system/resources/previews/052/543/862/non_2x/law-and-justice-court-of-law-scales-of-justice-judge-s-gavel-legal-books-professional-courtroom-photo.jpg",
                'inmobiliario': "https://cdn.abacus.ai/images/bb82559b-785d-4929-9b74-c96d1fd10c31.png",
                'extranjeria': "https://cdn.abacus.ai/images/ea13a35b-cfd3-43eb-9808-692d2b0b2db1.png",
                'otros': "https://cdn.abacus.ai/images/1d631e2a-53fe-4ac9-a5fb-a24655cf7289.png"
              };
              return imageMap[categoryId as keyof typeof imageMap] || imageMap['otros'];
            };
            
            return (
              <div 
                key={category.id}
                className="group relative overflow-hidden rounded-3xl elegant-card hover-lift"
              >
                {/* Sophisticated Background Image */}
                <div className="absolute inset-0">
                  <div className="relative h-full w-full">
                    <Image
                      src={getImageForCategory(category.id)}
                      alt={`${category.title[language]} services`}
                      fill
                      className="object-cover opacity-25 group-hover:opacity-35 transition-all duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-white/90 to-white/95" />
                </div>
                
                {/* Premium Content */}
                <div className="relative z-10 p-10">
                  <div className="flex items-center mb-8">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl shadow-2xl group-hover:scale-110 transition-transform duration-500 elegant-gradient">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="ml-6">
                      <h3 className="font-display text-2xl font-bold text-gray-900 transition-colors duration-300">
                        {category.title[language]}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-8 leading-relaxed font-light text-lg">
                    {category.description[language]}
                  </p>
                  
                  <ul className="space-y-4 mb-10">
                    {category.services.slice(0, 4).map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center text-gray-700">
                        <div className="h-3 w-3 rounded-full mr-4 shadow-lg elegant-gradient" />
                        <span className="font-medium text-base">{service.name[language]}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full elegant-button text-white font-bold shadow-2xl py-4 rounded-full text-lg" asChild>
                    <Link href={
                      category.id === 'inmobiliario' ? getLangPath('/inmobiliario') :
                      category.id === 'penal' ? getLangPath('/penal') :
                      getLangPath('/services')
                    }>
                      {language === 'es' ? 'Más Información' : language === 'en' ? 'More Information' : '更多信息'}
                      <ArrowRight className="ml-3 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Statistics */}
      <section className="relative py-32 overflow-hidden">
        {/* Sophisticated Background with Boardroom Image */}
        <div className="absolute inset-0">
          <Image
            src="https://cdn.abacus.ai/images/2e18d451-e44c-43e2-9723-3971faa579d5.png"
            alt="Executive Boardroom"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-gray-900/70 to-black/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="relative inline-block mb-8">
              <h2 className="font-display text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                {statsContent.title[language]}
              </h2>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-400" style={{background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #B8860B 100%)'}}></div>
            </div>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed tracking-wide">
              {statsContent.subtitle[language]}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {statsContent.stats.map((stat, index) => (
              <div key={index} className="group text-center p-8 rounded-3xl glass-effect hover-lift luxury-shadow">
                <div className="text-6xl font-bold lg:text-7xl mb-4 group-hover:scale-110 transition-transform duration-500 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-400 bg-clip-text text-transparent" style={{background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #B8860B 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                  <AnimatedCounter 
                    end={stat.number} 
                    suffix={stat.suffix}
                  />
                </div>
                <p className="text-lg font-semibold text-white uppercase tracking-widest font-display">
                  {stat.label[language]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Elegant Decorative Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-gold-400/10 to-transparent rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-gold-400/10 to-transparent rounded-full blur-xl"></div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Accidentes e Indemnizaciones Section */}
      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center mb-10">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl shadow-2xl mr-8 elegant-gradient">
                <Car className="h-10 w-10 text-white" />
              </div>
              <div>
                <h2 className="font-display text-4xl font-bold text-gray-900 sm:text-5xl leading-tight">
                  {language === 'es' 
                    ? 'Accidentes e Indemnizaciones'
                    : language === 'en'
                    ? 'Accidents and Compensation'
                    : '事故和赔偿'
                  }
                </h2>
                <div className="w-24 h-1 elegant-gradient mt-4"></div>
              </div>
            </div>
            
            <p className="text-2xl text-gray-600 mb-12 leading-relaxed font-light">
              {language === 'es' 
                ? 'Especialistas en reclamación de indemnizaciones por accidentes. Luchamos por obtener la máxima compensación que le corresponde con la dedicación y expertise de una gran firma.'
                : language === 'en'
                ? 'Specialists in claiming compensation for accidents. We fight to get the maximum compensation you deserve with the dedication and expertise of a major firm.'
                : '事故赔偿索赔专家。我们以大型律师事务所的专业精神和专业知识为您争取应得的最大赔偿。'
              }
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-16">
              <div className="elegant-card rounded-2xl p-6 hover-lift">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-xl elegant-gradient flex items-center justify-center mr-4">
                    <Car className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-gray-900">
                    {language === 'es' ? 'Accidentes de Tráfico' : language === 'en' ? 'Traffic Accidents' : '交通事故'}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed font-light">
                  {language === 'es' ? 'Indemnizaciones completas por lesiones y daños materiales con máxima compensación' : language === 'en' ? 'Complete compensation for injuries and property damage with maximum recovery' : '伤害和财产损失的完全赔偿，最大回收'}
                </p>
              </div>
              
              <div className="elegant-card rounded-2xl p-6 hover-lift">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-xl elegant-gradient flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-gray-900">
                    {language === 'es' ? 'Accidentes Laborales' : language === 'en' ? 'Work Accidents' : '工伤事故'}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed font-light">
                  {language === 'es' ? 'Reclamaciones especializadas por lesiones en el lugar de trabajo' : language === 'en' ? 'Specialized claims for workplace injuries' : '工作场所伤害专业索赔'}
                </p>
              </div>
              
              <div className="elegant-card rounded-2xl p-6 hover-lift">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-xl elegant-gradient flex items-center justify-center mr-4">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-gray-900">
                    {language === 'es' ? 'Negligencias Médicas' : language === 'en' ? 'Medical Negligence' : '医疗过失'}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed font-light">
                  {language === 'es' ? 'Compensación experta por errores médicos y mala praxis profesional' : language === 'en' ? 'Expert compensation for medical errors and professional malpractice' : '医疗错误和专业医疗事故的专家赔偿'}
                </p>
              </div>
              
              <div className="elegant-card rounded-2xl p-6 hover-lift">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-xl elegant-gradient flex items-center justify-center mr-4">
                    <Scale className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-gray-900">
                    {language === 'es' ? 'Grandes Lesionados' : language === 'en' ? 'Serious Injuries' : '严重伤害'}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed font-light">
                  {language === 'es' ? 'Especialización premium en lesiones graves y permanentes' : language === 'en' ? 'Premium specialization in serious and permanent injuries' : '严重和永久性伤害的高端专业化'}
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button size="lg" className="elegant-button text-white font-bold shadow-2xl px-10 py-5 text-lg rounded-full" asChild>
                <Link href={getLangPath('/calculadora-indemnizacion')}>
                  <Calculator className="mr-3 h-6 w-6" />
                  {language === 'es' ? 'Calcular Indemnización' : language === 'en' ? 'Calculate Compensation' : '计算赔偿'}
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-2 glass-effect hover-lift px-10 py-5 text-lg rounded-full font-bold" style={{borderColor: '#961a19', color: '#961a19'}} asChild>
                <a href="tel:+34666232223">
                  <Phone className="mr-3 h-6 w-6" />
                  {language === 'es' ? 'Consulta Inmediata' : language === 'en' ? 'Immediate Consultation' : '立即咨询'}
                </a>
              </Button>
            </div>
          </div>
          
          {/* Premium Image */}
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden luxury-shadow hover-lift">
              <Image
                src="https://cdn.abacus.ai/images/92cb9622-3291-4b90-80d2-223d00f40c04.png"
                alt="Consulta Legal Profesional"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/30" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-effect rounded-2xl p-4">
                  <p className="text-white font-semibold">
                    {language === 'es' ? 'Consulta Profesional Especializada' : language === 'en' ? 'Specialized Professional Consultation' : '专业专业咨询'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Offices */}
      <section className="relative py-32 overflow-hidden">
        {/* International Cities Background */}
        <div className="absolute inset-0">
          <Image
            src="https://cdn.abacus.ai/images/6ea38721-119d-45d9-b710-1277674e38a4.png"
            alt="Madrid and Beijing International Presence"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/60 to-black/85" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="relative inline-block mb-8">
              <h2 className="font-display text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                {language === 'es' 
                  ? 'Presencia Internacional'
                  : language === 'en'
                  ? 'International Presence'
                  : '国际业务'
                }
              </h2>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-400" style={{background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #B8860B 100%)'}}></div>
            </div>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed tracking-wide">
              {language === 'es' 
                ? 'Dos continentes, una excelencia: España y China unidos por el compromiso con la justicia'
                : language === 'en'
                ? 'Two continents, one excellence: Spain and China united by commitment to justice'
                : '两大洲，一个卓越：西班牙和中国因对正义的承诺而团结'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {offices.map((office, index) => {
              const officeImages = [
                "https://upload.wikimedia.org/wikipedia/commons/c/c6/At_Palmetum_de_Santa_Cruz_de_Tenerife_2022_028.jpg", // Santa Cruz de Tenerife
                "https://cdn.abacus.ai/images/ccc230b1-1383-4147-81ce-7eb8885688b0.png"  // Tianjin
              ];
              
              return (
                <div 
                  key={office.location}
                  className="group relative overflow-hidden rounded-3xl glass-effect luxury-shadow hover-lift"
                >
                  {/* Premium Office Image */}
                  <div className="relative h-80 w-full overflow-hidden rounded-t-3xl">
                    <Image
                      src={officeImages[index]}
                      alt={`${office.city[language]} office location`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    
                    {/* Elegant City Label */}
                    <div className="absolute bottom-6 left-6">
                      <h3 className="font-display text-3xl font-bold text-white mb-2">
                        {office.city[language]}
                      </h3>
                      <p className="text-white font-medium text-lg">{office.country[language]}</p>
                      <div className="w-16 h-0.5 bg-gradient-to-r from-gold-400 to-gold-600 mt-3"></div>
                    </div>
                  </div>
                
                  {/* Sophisticated Office Details */}
                  <div className="p-10">
                    <div className="space-y-8">
                      <div className="glass-effect rounded-2xl p-6">
                        <p className="font-display text-lg font-semibold text-gray-900 mb-3">
                          {language === 'es' ? 'Dirección:' : language === 'en' ? 'Address:' : '地址：'}
                        </p>
                        <p className="text-gray-700 leading-relaxed font-light">
                          {office.address[language]}
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-4">
                        {office.phone ? (
                          <div className="flex items-center glass-effect rounded-xl p-4 hover-lift">
                            <div className="p-2 rounded-xl elegant-gradient mr-4">
                              <Phone className="h-5 w-5 text-white" />
                            </div>
                            <a href={`tel:${office.phone}`} className="font-semibold text-gray-900 hover:text-gray-700 transition-colors text-lg">
                              {office.phone}
                            </a>
                          </div>
                        ) : (
                          <div className="flex items-center glass-effect rounded-xl p-4 hover-lift">
                            <div className="p-2 rounded-xl elegant-gradient mr-4">
                              <MessageCircle className="h-5 w-5 text-white" />
                            </div>
                            <span className="font-semibold text-gray-900 text-lg">exigelo</span>
                          </div>
                        )}
                        <div className="flex items-center glass-effect rounded-xl p-4 hover-lift">
                          <div className="p-2 rounded-xl elegant-gradient mr-4">
                            <Mail className="h-5 w-5 text-white" />
                          </div>
                          <a href={`mailto:${office.email}`} className="font-semibold text-gray-900 hover:text-gray-700 transition-colors text-lg">
                            {office.email}
                          </a>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="glass-effect rounded-xl p-4">
                          <p className="font-display text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">
                            {language === 'es' ? 'Idiomas:' : language === 'en' ? 'Languages:' : '语言：'}
                          </p>
                          <p className="text-gray-700 font-medium">
                            {office.languages.join(' • ')}
                          </p>
                        </div>
                        
                        <div className="glass-effect rounded-xl p-4">
                          <p className="font-display text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">
                            {language === 'es' ? 'Horarios:' : language === 'en' ? 'Hours:' : '营业时间：'}
                          </p>
                          <p className="text-gray-700 font-medium">
                            {office.hours[language]}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative py-40 overflow-hidden">
        {/* Sophisticated Background with Scales of Justice */}
        <div className="absolute inset-0">
          <Image
            src="https://cdn.abacus.ai/images/1d631e2a-53fe-4ac9-a5fb-a24655cf7289.png"
            alt="Elegant Scales of Justice"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-gray-900/70 to-black/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto">
            <div className="relative inline-block mb-12">
              <h2 className="font-display text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                {language === 'es' 
                  ? 'Su Justicia, Nuestra Misión'
                  : language === 'en'
                  ? 'Your Justice, Our Mission'
                  : '您的正义，我们的使命'
                }
              </h2>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-400" style={{background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #B8860B 100%)'}}></div>
            </div>
            
            <p className="text-2xl text-gray-300 mb-16 font-light leading-relaxed tracking-wide max-w-4xl mx-auto">
              {language === 'es' 
                ? 'Contacte con nosotros y descubra por qué las mejores empresas e individuos confían en C & LI Abogados para sus asuntos más importantes'
                : language === 'en'
                ? 'Contact us and discover why the best companies and individuals trust C&LI Lawyers for their most important matters'
                : '联系我们，了解为什么最好的公司和个人信任C&LI律师处理他们最重要的事务'
              }
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Button size="lg" className="elegant-button text-white px-12 py-6 text-xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-500 rounded-full" asChild>
                <a href="tel:+34666232223">
                  <Phone className="mr-4 h-7 w-7" />
                  {language === 'es' ? 'Consulta Inmediata' : language === 'en' ? 'Immediate Consultation' : '立即咨询'}
                </a>
              </Button>
              <Button variant="outline" size="lg" className="glass-effect border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 px-12 py-6 text-xl font-bold shadow-xl transform hover:scale-105 transition-all duration-500 rounded-full backdrop-blur-md" asChild>
                <a href="mailto:info@clilawyers.com">
                  <Mail className="mr-4 h-7 w-7" />
                  {language === 'es' ? 'Email Profesional' : language === 'en' ? 'Professional Email' : '专业邮件'}
                </a>
              </Button>
              <Button className="bg-green-600 hover:bg-green-700 text-white px-12 py-6 text-xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-500 rounded-full" asChild>
                <a href="https://wa.me/34666232223" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-4 h-7 w-7" />
                  WhatsApp
                </a>
              </Button>
            </div>
            
            <div className="pt-12">
              <div className="glass-effect border-2 border-white/50 text-white rounded-2xl p-6 max-w-2xl mx-auto backdrop-blur-md shadow-xl bg-white/10 transition-all duration-300">
                <p className="text-white font-medium text-lg tracking-wide text-center">
                  {language === 'es' 
                    ? '• Consulta legal profesional • Asesoramiento experto • Respuesta en 24h •'
                    : language === 'en'
                    ? '• Professional legal consultation • Expert advice • Response within 24h •'
                    : '• 专业法律咨询 • 专家建议 • 24小时内回复 •'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Elegant Decorative Elements */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-gold-400/10 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-gold-400/10 to-transparent rounded-full blur-2xl"></div>
      </section>
    </div>
  );
}