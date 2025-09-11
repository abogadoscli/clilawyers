
'use client';

import { Section } from '@/components/ui/section';
import { useLanguage } from '@/contexts/language-context';

export default function AccesibilidadPage() {
  const { language } = useLanguage();
  
  const content = {
    title: {
      es: 'Políticas de Accesibilidad',
      en: 'Accessibility Policies',
      zh: '可访问性政策'
    },
    lastUpdated: {
      es: 'Última actualización: Enero 2025',
      en: 'Last updated: January 2025',
      zh: '最后更新：2025年1月'
    },
    sections: {
      commitment: {
        title: {
          es: '1. Nuestro Compromiso',
          en: '1. Our Commitment',
          zh: '1. 我们的承诺'
        },
        content: {
          es: 'C & LI Abogados y Asesores se compromete a garantizar la accesibilidad digital para personas con discapacidades. Mejoramos continuamente la experiencia del usuario para todos y aplicamos los estándares de accesibilidad relevantes.',
          en: 'C & LI Lawyers and Advisors is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.',
          zh: 'C&LI律师和顾问事务所致力于确保残疾人士的数字可访问性。我们持续改进每个人的用户体验，并应用相关的可访问性标准。'
        }
      },
      standards: {
        title: {
          es: '2. Estándares de Accesibilidad',
          en: '2. Accessibility Standards',
          zh: '2. 可访问性标准'
        },
        content: {
          es: 'Nuestro sitio web se esfuerza por cumplir con las Pautas de Accesibilidad para el Contenido Web (WCAG) 2.1 nivel AA. Estas pautas explican cómo hacer que el contenido web sea más accesible para personas con discapacidades.',
          en: 'Our website strives to comply with Web Content Accessibility Guidelines (WCAG) 2.1 level AA. These guidelines explain how to make web content more accessible for people with disabilities.',
          zh: '我们的网站努力遵守网页内容可访问性指南(WCAG) 2.1 AA级。这些指南解释了如何使网页内容对残疾人更易访问。'
        }
      },
      features: {
        title: {
          es: '3. Características de Accesibilidad',
          en: '3. Accessibility Features',
          zh: '3. 可访问性功能'
        },
        content: {
          es: `
            <p>Nuestro sitio web incluye las siguientes características de accesibilidad:</p>
            <ul class="list-disc ml-6 space-y-2 mt-4">
              <li>Texto alternativo para todas las imágenes</li>
              <li>Navegación por teclado</li>
              <li>Contraste de color adecuado</li>
              <li>Estructura de encabezados clara</li>
              <li>Formularios con etiquetas descriptivas</li>
              <li>Enlaces descriptivos</li>
              <li>Soporte para lectores de pantalla</li>
            </ul>
          `,
          en: `
            <p>Our website includes the following accessibility features:</p>
            <ul class="list-disc ml-6 space-y-2 mt-4">
              <li>Alternative text for all images</li>
              <li>Keyboard navigation</li>
              <li>Adequate color contrast</li>
              <li>Clear heading structure</li>
              <li>Forms with descriptive labels</li>
              <li>Descriptive links</li>
              <li>Screen reader support</li>
            </ul>
          `,
          zh: `
            <p>我们的网站包括以下可访问性功能：</p>
            <ul class="list-disc ml-6 space-y-2 mt-4">
              <li>所有图片的替代文本</li>
              <li>键盘导航</li>
              <li>适当的颜色对比度</li>
              <li>清晰的标题结构</li>
              <li>带有描述性标签的表单</li>
              <li>描述性链接</li>
              <li>屏幕阅读器支持</li>
            </ul>
          `
        }
      },
      improvements: {
        title: {
          es: '4. Mejoras Continuas',
          en: '4. Continuous Improvements',
          zh: '4. 持续改进'
        },
        content: {
          es: 'Evaluamos regularmente nuestro sitio web para identificar y corregir cualquier problema de accesibilidad. Trabajamos con expertos en accesibilidad y utilizamos herramientas especializadas para garantizar el cumplimiento de los estándares.',
          en: 'We regularly evaluate our website to identify and correct any accessibility issues. We work with accessibility experts and use specialized tools to ensure compliance with standards.',
          zh: '我们定期评估我们的网站，以识别和纠正任何可访问性问题。我们与可访问性专家合作，使用专业工具确保符合标准。'
        }
      },
      assistiveTechnology: {
        title: {
          es: '5. Tecnología Asistiva',
          en: '5. Assistive Technology',
          zh: '5. 辅助技术'
        },
        content: {
          es: 'Nuestro sitio web es compatible con tecnologías asistivas como lectores de pantalla, software de reconocimiento de voz y navegación por teclado. Hemos probado la compatibilidad con las principales tecnologías asistivas.',
          en: 'Our website is compatible with assistive technologies such as screen readers, voice recognition software, and keyboard navigation. We have tested compatibility with major assistive technologies.',
          zh: '我们的网站与辅助技术兼容，如屏幕阅读器、语音识别软件和键盘导航。我们已经测试了与主要辅助技术的兼容性。'
        }
      },
      feedback: {
        title: {
          es: '6. Comentarios y Contacto',
          en: '6. Feedback and Contact',
          zh: '6. 反馈和联系'
        },
        content: {
          es: 'Si experimenta alguna dificultad para acceder a cualquier parte de este sitio web o tiene sugerencias sobre cómo podemos mejorar la accesibilidad, por favor contáctenos en info@clilawyers.com o llame al +34 666 232 223.',
          en: 'If you experience any difficulty accessing any part of this website or have suggestions about how we can improve accessibility, please contact us at info@clilawyers.com or call +34 666 232 223.',
          zh: '如果您在访问本网站的任何部分时遇到困难，或者对我们如何改进可访问性有建议，请通过info@clilawyers.com联系我们或拨打+34 666 232 223。'
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
