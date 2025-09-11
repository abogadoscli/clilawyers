
'use client';

import { Section } from '@/components/ui/section';
import { useLanguage } from '@/contexts/language-context';

export default function PoliticaPrivacidadPage() {
  const { language } = useLanguage();
  
  const content = {
    title: {
      es: 'Política de Privacidad',
      en: 'Privacy Policy',
      zh: '隐私政策'
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
          es: 'En C & LI Abogados y Asesores, nos comprometemos a proteger su privacidad. Esta política de privacidad explica cómo recopilamos, utilizamos y protegemos su información personal.',
          en: 'At C & LI Lawyers and Advisors, we are committed to protecting your privacy. This privacy policy explains how we collect, use, and protect your personal information.',
          zh: '在C&LI律师和顾问事务所，我们致力于保护您的隐私。本隐私政策解释了我们如何收集、使用和保护您的个人信息。'
        }
      },
      dataCollection: {
        title: {
          es: '2. Información que Recopilamos',
          en: '2. Information We Collect',
          zh: '2. 我们收集的信息'
        },
        content: {
          es: `
            <p>Recopilamos información que usted nos proporciona directamente, incluyendo:</p>
            <ul class="list-disc ml-6 space-y-2 mt-4">
              <li>Nombre y datos de contacto</li>
              <li>Información sobre su consulta legal</li>
              <li>Comunicaciones con nuestro despacho</li>
              <li>Información necesaria para prestar servicios legales</li>
            </ul>
          `,
          en: `
            <p>We collect information that you provide to us directly, including:</p>
            <ul class="list-disc ml-6 space-y-2 mt-4">
              <li>Name and contact information</li>
              <li>Information about your legal inquiry</li>
              <li>Communications with our firm</li>
              <li>Information necessary to provide legal services</li>
            </ul>
          `,
          zh: `
            <p>我们收集您直接向我们提供的信息，包括：</p>
            <ul class="list-disc ml-6 space-y-2 mt-4">
              <li>姓名和联系信息</li>
              <li>关于您法律咨询的信息</li>
              <li>与我们事务所的通信</li>
              <li>提供法律服务所需的信息</li>
            </ul>
          `
        }
      },
      dataUse: {
        title: {
          es: '3. Cómo Utilizamos su Información',
          en: '3. How We Use Your Information',
          zh: '3. 我们如何使用您的信息'
        },
        content: {
          es: `
            <p>Utilizamos su información personal para:</p>
            <ul class="list-disc ml-6 space-y-2 mt-4">
              <li>Proporcionar servicios legales</li>
              <li>Responder a sus consultas</li>
              <li>Comunicarnos con usted sobre su caso</li>
              <li>Cumplir con obligaciones legales y profesionales</li>
              <li>Mejorar nuestros servicios</li>
            </ul>
          `,
          en: `
            <p>We use your personal information to:</p>
            <ul class="list-disc ml-6 space-y-2 mt-4">
              <li>Provide legal services</li>
              <li>Respond to your inquiries</li>
              <li>Communicate with you about your case</li>
              <li>Comply with legal and professional obligations</li>
              <li>Improve our services</li>
            </ul>
          `,
          zh: `
            <p>我们使用您的个人信息来：</p>
            <ul class="list-disc ml-6 space-y-2 mt-4">
              <li>提供法律服务</li>
              <li>回应您的咨询</li>
              <li>就您的案件与您沟通</li>
              <li>履行法律和专业义务</li>
              <li>改进我们的服务</li>
            </ul>
          `
        }
      },
      dataProtection: {
        title: {
          es: '4. Protección de Datos',
          en: '4. Data Protection',
          zh: '4. 数据保护'
        },
        content: {
          es: 'Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción. Cumplimos con el RGPD y todas las normativas aplicables de protección de datos.',
          en: 'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. We comply with GDPR and all applicable data protection regulations.',
          zh: '我们实施适当的技术和组织安全措施，保护您的个人信息免受未经授权的访问、更改、披露或销毁。我们遵守GDPR和所有适用的数据保护法规。'
        }
      },
      rights: {
        title: {
          es: '5. Sus Derechos',
          en: '5. Your Rights',
          zh: '5. 您的权利'
        },
        content: {
          es: `
            <p>Usted tiene derecho a:</p>
            <ul class="list-disc ml-6 space-y-2 mt-4">
              <li>Acceder a su información personal</li>
              <li>Rectificar información inexacta</li>
              <li>Solicitar la eliminación de sus datos</li>
              <li>Limitar el procesamiento de sus datos</li>
              <li>Portabilidad de datos</li>
              <li>Oponerse al procesamiento</li>
            </ul>
          `,
          en: `
            <p>You have the right to:</p>
            <ul class="list-disc ml-6 space-y-2 mt-4">
              <li>Access your personal information</li>
              <li>Rectify inaccurate information</li>
              <li>Request deletion of your data</li>
              <li>Restrict processing of your data</li>
              <li>Data portability</li>
              <li>Object to processing</li>
            </ul>
          `,
          zh: `
            <p>您有权：</p>
            <ul class="list-disc ml-6 space-y-2 mt-4">
              <li>访问您的个人信息</li>
              <li>更正不准确的信息</li>
              <li>请求删除您的数据</li>
              <li>限制对您数据的处理</li>
              <li>数据可携性</li>
              <li>反对处理</li>
            </ul>
          `
        }
      },
      contact: {
        title: {
          es: '6. Contacto',
          en: '6. Contact',
          zh: '6. 联系我们'
        },
        content: {
          es: 'Para ejercer sus derechos o si tiene preguntas sobre esta política de privacidad, puede contactarnos en info@clilawyers.com o llamar al +34 666 232 223.',
          en: 'To exercise your rights or if you have questions about this privacy policy, you can contact us at info@clilawyers.com or call +34 666 232 223.',
          zh: '要行使您的权利或如果您对本隐私政策有疑问，可以通过info@clilawyers.com联系我们或拨打+34 666 232 223。'
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
