
'use client';

import { Users, Globe, Award, Shield, Scale, CheckCircle, Phone, Mail, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { useLanguage } from '@/contexts/language-context';
import { siteContent } from '@/lib/content';

export default function AboutPage() {
  const { language } = useLanguage();
  const offices = siteContent.offices;
  
  const getLangPath = (path: string) => {
    return language === 'es' ? path : `/${language}${path}`;
  };

  const pageContent = {
    title: {
      es: 'Sobre Nosotros',
      en: 'About Us',
      zh: '关于我们'
    },
    subtitle: {
      es: 'Casi 20 años protegiendo los derechos de nuestros clientes',
      en: 'Almost 20 years protecting our clients\' rights',
      zh: '近20年来保护客户权利'
    },
    history: {
      title: {
        es: 'Nuestra Historia',
        en: 'Our History',
        zh: '我们的历史'
      },
      content: {
        es: 'C & LI Abogados y Asesores nace de la fusión de décadas de experiencia en el derecho español e internacional. Desde nuestros inicios, hemos mantenido un compromiso inquebrantable con la excelencia jurídica y la satisfacción del cliente. Nuestra presencia en España y China nos permite ofrecer un servicio legal integral a empresas y particulares que operan en estos mercados.',
        en: 'C&LI Lawyers and Advisors was born from the merger of decades of experience in Spanish and international law. Since our beginnings, we have maintained an unwavering commitment to legal excellence and client satisfaction. Our presence in Spain and China allows us to offer comprehensive legal services to companies and individuals operating in these markets.',
        zh: 'C&LI律师和顾问事务所诞生于西班牙和国际法数十年经验的融合。自成立以来，我们始终坚持对法律卓越和客户满意的不懈承诺。我们在西班牙和中国的业务使我们能够为在这些市场运营的公司和个人提供全面的法律服务。'
      }
    },
    mission: {
      title: {
        es: 'Nuestra Misión',
        en: 'Our Mission',
        zh: '我们的使命'
      },
      content: {
        es: 'Proteger los derechos de nuestros clientes con dedicación, experiencia y resultados tangibles. Creemos en la justicia accesible y en soluciones legales efectivas que generen un impacto real en la vida de las personas.',
        en: 'To protect our clients\' rights with dedication, experience and tangible results. We believe in accessible justice and effective legal solutions that make a real impact on people\'s lives.',
        zh: '以奉献精神、经验和切实成果保护客户权利。我们相信可获得的正义和有效的法律解决方案，为人们的生活带来真正的影响。'
      }
    },
    values: {
      title: {
        es: 'Nuestros Valores',
        en: 'Our Values',
        zh: '我们的价值观'
      },
      list: [
        {
          icon: Shield,
          title: {
            es: 'Integridad',
            en: 'Integrity',
            zh: '诚信'
          },
          description: {
            es: 'Actuamos con honestidad y transparencia en todas nuestras relaciones profesionales.',
            en: 'We act with honesty and transparency in all our professional relationships.',
            zh: '我们在所有专业关系中诚实透明地行事。'
          }
        },
        {
          icon: Award,
          title: {
            es: 'Excelencia',
            en: 'Excellence',
            zh: '卓越'
          },
          description: {
            es: 'Buscamos la excelencia en cada caso, utilizando nuestro conocimiento y experiencia.',
            en: 'We strive for excellence in every case, using our knowledge and experience.',
            zh: '我们利用我们的知识和经验，在每个案件中追求卓越。'
          }
        },
        {
          icon: Users,
          title: {
            es: 'Compromiso',
            en: 'Commitment',
            zh: '承诺'
          },
          description: {
            es: 'Nos comprometemos plenamente con cada cliente y su caso particular.',
            en: 'We are fully committed to each client and their particular case.',
            zh: '我们完全致力于每个客户和他们的特殊案例。'
          }
        },
        {
          icon: Globe,
          title: {
            es: 'Visión Internacional',
            en: 'International Vision',
            zh: '国际视野'
          },
          description: {
            es: 'Comprendemos los desafíos legales en un mundo globalizado.',
            en: 'We understand legal challenges in a globalized world.',
            zh: '我们了解全球化世界中的法律挑战。'
          }
        }
      ]
    },
    team: {
      title: {
        es: 'Nuestro Equipo',
        en: 'Our Team',
        zh: '我们的团队'
      },
      description: {
        es: 'Un equipo multicultural y multilingüe de abogados especialistas comprometidos con la excelencia jurídica.',
        en: 'A multicultural and multilingual team of specialist lawyers committed to legal excellence.',
        zh: '致力于法律卓越的多元文化和多语言专业律师团队。'
      }
    },
    achievements: {
      title: {
        es: 'Nuestros Logros',
        en: 'Our Achievements',
        zh: '我们的成就'
      },
      stats: [
        {
          number: 40,
          suffix: '+',
          label: {
            es: 'Años de Experiencia',
            en: 'Years of Experience',
            zh: '年经验'
          }
        },
        {
          number: 2000,
          suffix: '+',
          label: {
            es: 'Casos Exitosos',
            en: 'Successful Cases',
            zh: '成功案例'
          }
        },
        {
          number: 95,
          suffix: '%',
          label: {
            es: 'Tasa de Éxito',
            en: 'Success Rate',
            zh: '成功率'
          }
        },
        {
          number: 50,
          suffix: 'M€',
          label: {
            es: 'Recuperado para Clientes',
            en: 'Recovered for Clients',
            zh: '为客户追回'
          }
        }
      ]
    },
    principles: {
      title: {
        es: 'Nuestros Principios de Trabajo',
        en: 'Our Work Principles',
        zh: '我们的工作原则'
      },
      list: [
        {
          es: 'Gestión 100% online para su comodidad',
          en: '100% online management for your convenience',
          zh: '为您方便100%在线管理'
        },
        {
          es: 'Atención personalizada en múltiples idiomas',
          en: 'Personalized attention in multiple languages',
          zh: '多语言个性化服务'
        },
        {
          es: 'Presencia internacional España-China',
          en: 'International presence Spain-China',
          zh: '西班牙-中国国际业务'
        },
        {
          es: 'Secreto profesional y confidencialidad absoluta',
          en: 'Professional secrecy and absolute confidentiality',
          zh: '专业保密和绝对机密性'
        }
      ]
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
      </Section>

      {/* History */}
      <Section background="gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              {pageContent.history.title[language]}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {pageContent.history.content[language]}
            </p>
            <div className="pt-6">
              <Button className="text-white font-semibold shadow-lg" style={{background: 'linear-gradient(135deg, #961a19 0%, #7a1517 100%)'}} asChild>
                <Link href={getLangPath('/services')}>
                  {language === 'es' ? 'Conocer nuestros servicios' : language === 'en' ? 'Learn about our services' : '了解我们的服务'}
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://cdn.abacus.ai/images/2e18d451-e44c-43e2-9723-3971faa579d5.png"
                alt="Modern law firm office interior"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </Section>

      {/* Mission with Team Image */}
      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative lg:order-1">
            <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://cdn.abacus.ai/images/e3855c46-6181-4ce8-8ad5-0e059a9c98e6.png"
                alt="Professional legal team working together"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          </div>
          
          <div className="lg:order-2 space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              {pageContent.mission.title[language]}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {pageContent.mission.content[language]}
            </p>
            <div className="pt-6">
              <Button className="text-white font-semibold shadow-lg" style={{background: 'linear-gradient(135deg, #961a19 0%, #7a1517 100%)'}} asChild>
                <Link href={getLangPath('/contact')}>
                  {language === 'es' ? 'Solicitar consulta' : language === 'en' ? 'Request consultation' : '申请咨询'}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section background="brand">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {pageContent.values.title[language]}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pageContent.values.list.map((value, index) => (
            <div key={index} className="text-center group">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white group-hover:bg-blue-600 transition-colors duration-200">
                <value.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-200" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">
                {value.title[language]}
              </h3>
              <p className="mt-4 text-gray-600 text-sm">
                {value.description[language]}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Achievements */}
      <Section background="gray">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {pageContent.achievements.title[language]}
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {pageContent.achievements.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-600 lg:text-5xl">
                <AnimatedCounter 
                  end={stat.number} 
                  suffix={stat.suffix}
                />
              </div>
              <p className="mt-2 text-sm font-medium text-gray-700 lg:text-base">
                {stat.label[language]}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Work Principles */}
      <Section background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {pageContent.principles.title[language]}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pageContent.principles.list.map((principle, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors duration-200">
                <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 font-medium">{principle[language]}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Offices Section */}
      <Section background="gray">
        <div className="text-center mb-20">
          <div className="relative inline-block mb-8">
            <h2 className="font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              {language === 'es' 
                ? 'Nuestras Oficinas'
                : language === 'en'
                ? 'Our Offices'
                : '我们的办事处'
              }
            </h2>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-40 h-1 elegant-gradient"></div>
          </div>
          <p className="text-xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
            {language === 'es' 
              ? 'Presencia internacional para servir mejor a nuestros clientes en España y China'
              : language === 'en'
              ? 'International presence to better serve our clients in Spain and China'
              : '国际业务为在西班牙和中国的客户提供更好的服务'
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
                className="group relative overflow-hidden rounded-3xl elegant-card hover-lift"
              >
                {/* Office Image */}
                <div className="relative h-80 w-full overflow-hidden rounded-t-3xl">
                  <Image
                    src={officeImages[index]}
                    alt={`${office.city[language]} office location`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  
                  {/* City Label */}
                  <div className="absolute bottom-6 left-6">
                    <h3 className="font-display text-3xl font-bold text-white mb-2">
                      {office.city[language]}
                    </h3>
                    <p className="text-white font-medium text-lg">{office.country[language]}</p>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-gold-400 to-gold-600 mt-3"></div>
                  </div>
                </div>
              
                {/* Office Details */}
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
                      <div className="flex items-center glass-effect rounded-xl p-4 hover-lift">
                        <Phone className="h-5 w-5 text-gray-600 mr-4" />
                        <a href={`tel:${office.phone}`} className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
                          {office.phone}
                        </a>
                      </div>
                      
                      <div className="flex items-center glass-effect rounded-xl p-4 hover-lift">
                        <Mail className="h-5 w-5 text-gray-600 mr-4" />
                        <a href={`mailto:${office.email}`} className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
                          {office.email}
                        </a>
                      </div>
                      
                      <div className="flex items-center glass-effect rounded-xl p-4">
                        <Clock className="h-5 w-5 text-gray-600 mr-4" />
                        <span className="text-gray-700 font-medium">{office.hours[language]}</span>
                      </div>
                    </div>
                    
                    <div className="glass-effect rounded-2xl p-6">
                      <div className="flex items-center mb-4">
                        <Users className="h-5 w-5 text-gray-600 mr-3" />
                        <p className="font-display text-lg font-semibold text-gray-900">
                          {language === 'es' ? 'Especialidades:' : language === 'en' ? 'Specialties:' : '专业：'}
                        </p>
                      </div>
                      <div className="grid grid-cols-1 gap-3">
                        {office.specialties[language].map((specialty, idx) => (
                          <div key={idx} className="flex items-center">
                            <div className="h-3 w-3 rounded-full mr-4 elegant-gradient" />
                            <span className="text-gray-700 font-medium">{specialty}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="white">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {language === 'es' 
              ? '¿Listo para trabajar con nosotros?'
              : language === 'en'
              ? 'Ready to work with us?'
              : '准备好与我们合作了吗？'
            }
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {language === 'es' 
              ? 'Nuestro equipo está preparado para ayudarle con sus necesidades legales'
              : language === 'en'
              ? 'Our team is ready to help you with your legal needs'
              : '我们的团队准备为您解决法律需求'
            }
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href={getLangPath('/contact')}>
                <Scale className="mr-2 h-5 w-5" />
                {language === 'es' ? 'Contactar Ahora' : language === 'en' ? 'Contact Now' : '立即联系'}
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
