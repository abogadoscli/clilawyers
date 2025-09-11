
'use client';

import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { ContactForm } from '@/components/forms/contact-form';
import { useLanguage } from '@/contexts/language-context';
import { siteContent } from '@/lib/content';

export default function ContactPage() {
  const { language } = useLanguage();
  const offices = siteContent.offices;

  const pageContent = {
    title: {
      es: 'Contacto',
      en: 'Contact',
      zh: '联系'
    },
    subtitle: {
      es: 'Estamos aquí para ayudarle con sus necesidades legales',
      en: 'We are here to help you with your legal needs',
      zh: '我们在这里为您解决法律需求'
    },
    formTitle: {
      es: 'Envíenos su consulta',
      en: 'Send us your inquiry',
      zh: '向我们发送您的咨询'
    },
    officesTitle: {
      es: 'Nuestras Oficinas',
      en: 'Our Offices',
      zh: '我们的办事处'
    },
    contactMethods: {
      es: 'Métodos de Contacto',
      en: 'Contact Methods',
      zh: '联系方式'
    },
    emergency: {
      es: 'Para urgencias fuera de horario:',
      en: 'For after-hours emergencies:',
      zh: '非工作时间紧急情况：'
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
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            {pageContent.subtitle[language]}
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mx-auto mb-4">
              <Phone className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {language === 'es' ? 'Teléfono' : language === 'en' ? 'Phone' : '电话'}
            </h3>
            <a 
              href="tel:+34666232223" 
              className="text-red-600 hover:text-red-700 font-medium"
            >
              +34 666 232 223
            </a>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mx-auto mb-4">
              <Mail className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {language === 'es' ? 'Email' : language === 'en' ? 'Email' : '电子邮件'}
            </h3>
            <a 
              href="mailto:info@clilawyers.com" 
              className="text-red-600 hover:text-red-700 font-medium"
            >
              info@clilawyers.com
            </a>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp</h3>
            <a 
              href="https://wa.me/34666232223" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-700 font-medium"
            >
              +34 666 232 223
            </a>
          </div>
        </div>
      </Section>

      {/* Contact Form */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              {pageContent.formTitle[language]}
            </h2>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8">
            <ContactForm />
          </div>
        </div>
      </Section>

      {/* Offices */}
      <Section background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            {pageContent.officesTitle[language]}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {offices.map((office, index) => (
            <div 
              key={office.location}
              className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                  <MapPin className="h-6 w-6 text-red-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {office.city[language]}
                  </h3>
                  <p className="text-gray-600">{office.country[language]}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-gray-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{office.address[language]}</p>
                </div>
                
                {office.phone ? (
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    <a 
                      href={`tel:${office.phone}`} 
                      className="text-gray-700 hover:text-red-600"
                    >
                      {office.phone}
                    </a>
                  </div>
                ) : (
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    <span className="text-gray-700">exigelo</span>
                  </div>
                )}
                
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  <a 
                    href={`mailto:${office.email}`} 
                    className="text-gray-700 hover:text-red-600"
                  >
                    {office.email}
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  <p className="text-gray-700">{office.hours[language]}</p>
                </div>
                
                <div className="pt-4">
                  <p className="text-sm font-medium text-gray-900 mb-2">
                    {language === 'es' ? 'Especialidades:' : language === 'en' ? 'Specialties:' : '专业：'}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {office.specialties[language].map((specialty, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 text-xs font-medium bg-red-100 text-blue-800 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Emergency Contact */}
      <Section background="brand">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {pageContent.emergency[language]}
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <a href="https://wa.me/34666232223" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp +34 666 232 223
              </a>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
