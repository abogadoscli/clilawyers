
'use client';

import { Star, Quote, Phone, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { siteContent } from '@/lib/content';
import { Section } from '@/components/ui/section';

export function TestimonialsSection() {
  const { language } = useLanguage();

  const sectionContent = {
    title: {
      es: "Lo que dicen nuestros clientes",
      en: "What our clients say",
      zh: "客户评价"
    },
    subtitle: {
      es: "Más de 10.000 casos resueltos con éxito en casi 20 años de experiencia",
      en: "Over 10,000 cases successfully resolved in almost 20 years of experience",
      zh: "近20年经验，成功解决超过10,000个案件"
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <Section background="gray">
      <div className="text-center mb-20">
        <div className="relative inline-block mb-8">
          <h2 className="font-display text-5xl font-bold text-gray-900 sm:text-6xl">
            {sectionContent.title[language]}
          </h2>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-40 h-1 elegant-gradient"></div>
        </div>
        <p className="text-2xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
          {sectionContent.subtitle[language]}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {siteContent.testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="group relative elegant-card rounded-3xl hover-lift overflow-hidden"
          >
            {/* Elegant Quote Icon */}
            <div className="absolute top-8 right-8 opacity-30 group-hover:opacity-50 transition-opacity duration-500">
              <Quote className="h-16 w-16 text-red-500" />
            </div>
            
            {/* Premium Content */}
            <div className="p-10">
              {/* Luxurious Stars */}
              <div className="flex items-center mb-6">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    className={`h-6 w-6 mr-1 ${
                      i < testimonial.rating ? 'text-yellow-400 fill-current drop-shadow-lg' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              {/* Sophisticated Testimonial Text */}
              <blockquote className="font-light text-gray-700 leading-relaxed mb-8 text-lg italic text-center">
                "{testimonial.content[language]}"
              </blockquote>
              
              {/* Premium Author Info */}
              <div className="border-t border-gray-200 pt-8 text-center">
                <div className="font-display font-bold text-gray-900 text-xl mb-2">
                  {testimonial.name[language]}
                </div>
                <div className="text-gray-500 mb-4 font-medium">
                  {testimonial.position[language]}
                </div>
                <div className="flex justify-center">
                  <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold text-white elegant-gradient shadow-lg">
                    {testimonial.case[language]}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Elegant Hover Effect Border */}
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gold-200 transition-colors duration-500" />
          </div>
        ))}
      </div>

      {/* Elegant CTA */}
      <div className="text-center mt-20">
        <div className="elegant-card rounded-3xl luxury-shadow p-12 max-w-5xl mx-auto hover-lift">
          <div className="relative inline-block mb-8">
            <h3 className="font-display text-3xl font-bold text-gray-900 sm:text-4xl">
              {language === 'es' 
                ? '¿Quiere ser nuestro próximo caso de éxito?'
                : language === 'en'
                ? 'Want to be our next success story?'
                : '想成为我们的下一个成功案例吗？'
              }
            </h3>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-0.5 elegant-gradient"></div>
          </div>
          <p className="text-xl text-gray-600 mb-10 font-light leading-relaxed max-w-3xl mx-auto">
            {language === 'es'
              ? 'Únase a miles de clientes satisfechos que han confiado en nuestra experiencia legal excepcional para resolver sus casos más complejos.'
              : language === 'en'
              ? 'Join thousands of satisfied clients who have trusted our exceptional legal expertise to resolve their most complex cases.'
              : '加入数千位信任我们卓越法律专业知识来解决他们最复杂案件的满意客户。'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:+34666232223"
              className="elegant-button inline-flex items-center justify-center px-12 py-5 text-white font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-500 text-lg"
            >
              <Phone className="mr-3 h-6 w-6" />
              {language === 'es' ? 'Consulta Legal' : language === 'en' ? 'Legal Consultation' : '法律咨询'}
            </a>
            <a
              href="https://wa.me/34666232223"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-12 py-5 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-500 text-lg"
            >
              <MessageCircle className="mr-3 h-6 w-6" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
