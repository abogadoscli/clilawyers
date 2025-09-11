
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import { useLanguage } from '@/contexts/language-context';
import { Phone, Mail, MapPin, MessageCircle, User, FileText, Building, Clock } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  service_type: string;
  preferred_language: string;
  preferred_office: string;
}

export function ContactForm() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    service_type: '',
    preferred_language: language,
    preferred_office: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const content = {
    title: {
      es: 'Contacte con Nosotros',
      en: 'Contact Us',
      zh: '联系我们'
    },
    subtitle: {
      es: 'Estamos aquí para ayudarle con sus necesidades legales',
      en: 'We are here to help you with your legal needs',
      zh: '我们在这里为您解决法律需求'
    },
    form: {
      name: {
        es: 'Nombre completo',
        en: 'Full name',
        zh: '全名'
      },
      email: {
        es: 'Correo electrónico',
        en: 'Email address',
        zh: '电子邮件'
      },
      phone: {
        es: 'Teléfono',
        en: 'Phone',
        zh: '电话'
      },
      subject: {
        es: 'Asunto',
        en: 'Subject',
        zh: '主题'
      },
      message: {
        es: 'Mensaje',
        en: 'Message',
        zh: '消息'
      },
      serviceType: {
        es: 'Tipo de servicio',
        en: 'Type of service',
        zh: '服务类型'
      },
      preferredLanguage: {
        es: 'Idioma preferido',
        en: 'Preferred language',
        zh: '首选语言'
      },
      preferredOffice: {
        es: 'Oficina preferida',
        en: 'Preferred office',
        zh: '首选办事处'
      },
      submit: {
        es: 'Enviar consulta',
        en: 'Send inquiry',
        zh: '发送咨询'
      }
    },
    services: {
      banking: { es: 'Derecho Bancario', en: 'Banking Law', zh: '银行法' },
      accidents: { es: 'Accidentes', en: 'Accidents', zh: '事故' },
      corporate: { es: 'Derecho Corporativo', en: 'Corporate Law', zh: '公司法' },
      labor: { es: 'Derecho Laboral', en: 'Labor Law', zh: '劳动法' },
      civil: { es: 'Derecho Civil', en: 'Civil Law', zh: '民法' },
      criminal: { es: 'Derecho Penal', en: 'Criminal Law', zh: '刑法' },
      other: { es: 'Otro', en: 'Other', zh: '其他' }
    },
    offices: {
      tenerife: { es: 'Tenerife, España', en: 'Tenerife, Spain', zh: '特内里费，西班牙' },
      tianjin: { es: 'Tianjin, China', en: 'Tianjin, China', zh: '天津，中国' },
      any: { es: 'Cualquiera', en: 'Either', zh: '任何一个' }
    },
    languages: {
      es: 'Español',
      en: 'English',
      zh: '中文'
    },
    success: {
      es: '¡Gracias por su consulta! Nos pondremos en contacto con usted muy pronto.',
      en: 'Thank you for your inquiry! We will contact you very soon.',
      zh: '感谢您的咨询！我们将很快与您联系。'
    },
    error: {
      es: 'Ha ocurrido un error. Por favor, inténtelo de nuevo.',
      en: 'An error occurred. Please try again.',
      zh: '发生错误。请重试。'
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          service_type: '',
          preferred_language: language,
          preferred_office: ''
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (err) {
      setError(content.error[language]);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            {language === 'es' ? '¡Enviado!' : language === 'en' ? 'Sent!' : '已发送！'}
          </h3>
          <p className="text-gray-600 mb-8">{content.success[language]}</p>
          <Button onClick={() => setSubmitted(false)}>
            {language === 'es' ? 'Enviar otra consulta' : language === 'en' ? 'Send another inquiry' : '发送另一个咨询'}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name and Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            {content.form.name[language]} *
          </label>
          <div className="relative">
            <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
              placeholder={content.form.name[language]}
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            {content.form.email[language]} *
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
              placeholder={content.form.email[language]}
            />
          </div>
        </div>
      </div>

      {/* Phone and Subject */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            {content.form.phone[language]}
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
              placeholder={content.form.phone[language]}
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
            {content.form.subject[language]} *
          </label>
          <div className="relative">
            <FileText className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
              placeholder={content.form.subject[language]}
            />
          </div>
        </div>
      </div>

      {/* Service Type and Preferred Office */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="service_type" className="block text-sm font-medium text-gray-700 mb-2">
            {content.form.serviceType[language]}
          </label>
          <div className="relative">
            <Building className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <select
              id="service_type"
              name="service_type"
              value={formData.service_type}
              onChange={handleInputChange}
              className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
            >
              <option value="">
                {language === 'es' ? 'Seleccionar...' : language === 'en' ? 'Select...' : '选择...'}
              </option>
              {Object.entries(content.services).map(([key, value]) => (
                <option key={key} value={key}>{value[language]}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div>
          <label htmlFor="preferred_office" className="block text-sm font-medium text-gray-700 mb-2">
            {content.form.preferredOffice[language]}
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <select
              id="preferred_office"
              name="preferred_office"
              value={formData.preferred_office}
              onChange={handleInputChange}
              className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
            >
              <option value="">
                {language === 'es' ? 'Seleccionar...' : language === 'en' ? 'Select...' : '选择...'}
              </option>
              {Object.entries(content.offices).map(([key, value]) => (
                <option key={key} value={key}>{value[language]}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          {content.form.message[language]} *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          rows={6}
          className="w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
          placeholder={content.form.message[language]}
        />
      </div>

      {/* Submit Button */}
      <div className="text-center">
        {error && (
          <p className="text-red-600 mb-4">{error}</p>
        )}
        <Button 
          type="submit" 
          disabled={loading}
          size="lg"
          className="w-full sm:w-auto"
        >
          {loading ? (
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              {language === 'es' ? 'Enviando...' : language === 'en' ? 'Sending...' : '发送中...'}
            </div>
          ) : (
            content.form.submit[language]
          )}
        </Button>
      </div>
    </form>
  );
}
