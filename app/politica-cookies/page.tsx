
'use client';

import { Section } from '@/components/ui/section';
import { useLanguage } from '@/contexts/language-context';

export default function PoliticaCookiesPage() {
  const { language } = useLanguage();
  
  const content = {
    title: {
      es: 'Política de Cookies',
      en: 'Cookie Policy',
      zh: '网站Cookie政策'
    },
    lastUpdated: {
      es: 'Última actualización: Enero 2025',
      en: 'Last updated: January 2025',
      zh: '最后更新：2025年1月'
    },
    sections: {
      intro: {
        title: {
          es: '1. Introducción',
          en: '1. Introduction',
          zh: '1. 介绍'
        },
        content: {
          es: 'En C & LI Abogados y Asesores, utilizamos cookies para mejorar la funcionalidad de nuestro sitio web y proporcionar una mejor experiencia de usuario. Esta política explica qué son las cookies, cómo las utilizamos y cómo puede controlarlas.',
          en: 'At C & LI Lawyers and Advisors, we use cookies to improve our website functionality and provide a better user experience. This policy explains what cookies are, how we use them, and how you can control them.',
          zh: '在C&LI律师和顾问事务所，我们使用Cookie来改善我们网站的功能并提供更好的用户体验。本政策解释了什么是Cookie、我们如何使用它们以及您如何控制它们。'
        }
      },
      whatAreCookies: {
        title: {
          es: '2. ¿Qué son las Cookies?',
          en: '2. What are Cookies?',
          zh: '2. 什么是Cookie？'
        },
        content: {
          es: 'Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro sitio web. Estas cookies nos permiten recordar sus preferencias y mejorar su experiencia de navegación.',
          en: 'Cookies are small text files that are stored on your device when you visit our website. These cookies allow us to remember your preferences and improve your browsing experience.',
          zh: 'Cookie是访问我们网站时存储在您设备上的小型文本文件。这些Cookie使我们能够记住您的偏好并改善您的浏览体验。'
        }
      },
      typesOfCookies: {
        title: {
          es: '3. Tipos de Cookies que Utilizamos',
          en: '3. Types of Cookies We Use',
          zh: '3. 我们使用的Cookie类型'
        },
        content: {
          es: `
            <ul class="list-disc ml-6 space-y-2">
              <li><strong>Cookies Esenciales:</strong> Necesarias para el funcionamiento básico del sitio web.</li>
              <li><strong>Cookies de Funcionalidad:</strong> Recordar sus preferencias como idioma y configuración.</li>
              <li><strong>Cookies Analíticas:</strong> Nos ayudan a entender cómo los usuarios interactúan con nuestro sitio.</li>
              <li><strong>Cookies de Marketing:</strong> Utilizadas para mostrar contenido relevante y personalizado.</li>
            </ul>
          `,
          en: `
            <ul class="list-disc ml-6 space-y-2">
              <li><strong>Essential Cookies:</strong> Necessary for basic website functionality.</li>
              <li><strong>Functionality Cookies:</strong> Remember your preferences like language and settings.</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how users interact with our site.</li>
              <li><strong>Marketing Cookies:</strong> Used to display relevant and personalized content.</li>
            </ul>
          `,
          zh: `
            <ul class="list-disc ml-6 space-y-2">
              <li><strong>必要Cookie：</strong> 网站基本功能所必需的。</li>
              <li><strong>功能性Cookie：</strong> 记住您的偏好，如语言和设置。</li>
              <li><strong>分析Cookie：</strong> 帮助我们了解用户如何与我们的网站互动。</li>
              <li><strong>营销Cookie：</strong> 用于显示相关和个性化的内容。</li>
            </ul>
          `
        }
      },
      control: {
        title: {
          es: '4. Cómo Controlar las Cookies',
          en: '4. How to Control Cookies',
          zh: '4. 如何控制Cookie'
        },
        content: {
          es: 'Puede controlar y/o eliminar las cookies como desee. Puede eliminar todas las cookies que ya están en su ordenador y configurar la mayoría de navegadores para evitar que se almacenen. Sin embargo, si hace esto, puede que tenga que ajustar manualmente algunas preferencias cada vez que visite el sitio.',
          en: 'You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit a site.',
          zh: '您可以根据需要控制和/或删除Cookie。您可以删除已经在您计算机上的所有Cookie，并可以设置大多数浏览器阻止它们的放置。但是，如果您这样做，您可能每次访问网站时都必须手动调整一些偏好。'
        }
      },
      contact: {
        title: {
          es: '5. Contacto',
          en: '5. Contact',
          zh: '5. 联系我们'
        },
        content: {
          es: 'Si tiene preguntas sobre nuestra política de cookies, puede contactarnos en info@clilawyers.com o llamar al +34 666 232 223.',
          en: 'If you have questions about our cookie policy, you can contact us at info@clilawyers.com or call +34 666 232 223.',
          zh: '如果您对我们的Cookie政策有疑问，可以通过info@clilawyers.com联系我们或拨打+34 666 232 223。'
        }
      }
    }
  };

  return (
    <div className="py-16">
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
              {content.title[language]}
            </h1>
            <p className="text-lg text-gray-600">
              {content.lastUpdated[language]}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            {Object.entries(content.sections).map(([key, section]) => (
              <div key={key} className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {section.title[language]}
                </h2>
                <div 
                  className="text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: section.content[language] }}
                />
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
