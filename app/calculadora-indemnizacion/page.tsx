
'use client';

import { useState } from 'react';
import { Calculator, AlertCircle, Phone, Mail } from 'lucide-react';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/language-context';
import Link from 'next/link';

export default function CompensationCalculatorPage() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    accidentType: '',
    injuryLevel: '',
    age: '',
    medicalCosts: '',
    lostIncome: '',
    daysOff: ''
  });
  const [result, setResult] = useState<number | null>(null);

  const getLangPath = (path: string) => {
    return language === 'es' ? path : `/${language}${path}`;
  };

  const pageContent = {
    title: {
      es: 'Calculadora de Indemnización',
      en: 'Compensation Calculator',
      zh: '赔偿计算器'
    },
    subtitle: {
      es: 'Estime el valor aproximado de su indemnización por accidente',
      en: 'Estimate the approximate value of your accident compensation',
      zh: '估算您的事故赔偿的近似价值'
    },
    disclaimer: {
      es: 'Esta calculadora proporciona una estimación orientativa. El cálculo exacto debe ser realizado por nuestros abogados especialistas.',
      en: 'This calculator provides an approximate estimate. The exact calculation must be performed by our specialist lawyers.',
      zh: '此计算器提供大致估计。确切计算必须由我们的专业律师进行。'
    },
    form: {
      accidentType: {
        label: {
          es: 'Tipo de accidente',
          en: 'Type of accident',
          zh: '事故类型'
        },
        options: {
          traffic: { es: 'Accidente de tráfico', en: 'Traffic accident', zh: '交通事故' },
          work: { es: 'Accidente laboral', en: 'Work accident', zh: '工伤事故' },
          medical: { es: 'Negligencia médica', en: 'Medical negligence', zh: '医疗过失' },
          other: { es: 'Otro', en: 'Other', zh: '其他' }
        }
      },
      injuryLevel: {
        label: {
          es: 'Nivel de lesión',
          en: 'Injury level',
          zh: '伤害程度'
        },
        options: {
          minor: { es: 'Leve', en: 'Minor', zh: '轻微' },
          moderate: { es: 'Moderada', en: 'Moderate', zh: '中等' },
          severe: { es: 'Grave', en: 'Severe', zh: '严重' },
          permanent: { es: 'Permanente', en: 'Permanent', zh: '永久性' }
        }
      },
      age: {
        label: {
          es: 'Edad',
          en: 'Age',
          zh: '年龄'
        }
      },
      medicalCosts: {
        label: {
          es: 'Gastos médicos (€)',
          en: 'Medical expenses (€)',
          zh: '医疗费用 (€)'
        }
      },
      lostIncome: {
        label: {
          es: 'Ingresos mensuales perdidos (€)',
          en: 'Lost monthly income (€)',
          zh: '月收入损失 (€)'
        }
      },
      daysOff: {
        label: {
          es: 'Días de baja',
          en: 'Days off work',
          zh: '休假天数'
        }
      },
      calculate: {
        es: 'Calcular Indemnización',
        en: 'Calculate Compensation',
        zh: '计算赔偿'
      }
    },
    result: {
      title: {
        es: 'Estimación de Indemnización',
        en: 'Compensation Estimate',
        zh: '赔偿估算'
      },
      amount: {
        es: 'Indemnización estimada:',
        en: 'Estimated compensation:',
        zh: '预估赔偿：'
      }
    },
    contact: {
      title: {
        es: '¿Quiere una evaluación exacta?',
        en: 'Want an exact evaluation?',
        zh: '想要精确评估吗？'
      },
      subtitle: {
        es: 'Nuestros abogados especialistas realizarán un cálculo preciso y gratuito',
        en: 'Our specialist lawyers will perform an accurate and free calculation',
        zh: '我们的专业律师将进行准确和免费的计算'
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateCompensation = () => {
    let baseAmount = 0;
    
    // Base amount by accident type
    const accidentMultipliers = {
      traffic: 1.0,
      work: 1.2,
      medical: 1.5,
      other: 1.0
    };
    
    // Base amount by injury level
    const injuryAmounts = {
      minor: 1500,
      moderate: 5000,
      severe: 15000,
      permanent: 50000
    };
    
    const accidentMultiplier = accidentMultipliers[formData.accidentType as keyof typeof accidentMultipliers] || 1.0;
    const injuryBase = injuryAmounts[formData.injuryLevel as keyof typeof injuryAmounts] || 0;
    
    baseAmount = injuryBase * accidentMultiplier;
    
    // Add medical costs
    const medicalCosts = parseFloat(formData.medicalCosts) || 0;
    
    // Add lost income
    const lostIncome = parseFloat(formData.lostIncome) || 0;
    const daysOff = parseFloat(formData.daysOff) || 0;
    const totalLostIncome = (lostIncome / 30) * daysOff;
    
    // Age factor (younger people get slightly more for future damages)
    const age = parseInt(formData.age) || 30;
    const ageFactor = age < 30 ? 1.1 : age > 60 ? 0.9 : 1.0;
    
    const totalCompensation = (baseAmount + medicalCosts + totalLostIncome) * ageFactor;
    
    setResult(Math.round(totalCompensation));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR'
    }).format(amount);
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

        {/* Disclaimer */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start space-x-3">
            <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-amber-800 text-sm">
              {pageContent.disclaimer[language]}
            </p>
          </div>
        </div>
      </Section>

      {/* Calculator Form */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex items-center mb-6">
                <Calculator className="h-8 w-8 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">
                  {language === 'es' ? 'Datos del Caso' : language === 'en' ? 'Case Information' : '案例信息'}
                </h2>
              </div>

              <div className="space-y-6">
                {/* Accident Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {pageContent.form.accidentType.label[language]}
                  </label>
                  <select
                    name="accidentType"
                    value={formData.accidentType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">
                      {language === 'es' ? 'Seleccionar...' : language === 'en' ? 'Select...' : '选择...'}
                    </option>
                    {Object.entries(pageContent.form.accidentType.options).map(([key, value]) => (
                      <option key={key} value={key}>{value[language]}</option>
                    ))}
                  </select>
                </div>

                {/* Injury Level */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {pageContent.form.injuryLevel.label[language]}
                  </label>
                  <select
                    name="injuryLevel"
                    value={formData.injuryLevel}
                    onChange={handleInputChange}
                    className="w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">
                      {language === 'es' ? 'Seleccionar...' : language === 'en' ? 'Select...' : '选择...'}
                    </option>
                    {Object.entries(pageContent.form.injuryLevel.options).map(([key, value]) => (
                      <option key={key} value={key}>{value[language]}</option>
                    ))}
                  </select>
                </div>

                {/* Age */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {pageContent.form.age.label[language]}
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    min="0"
                    max="100"
                    className="w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Medical Costs */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {pageContent.form.medicalCosts.label[language]}
                  </label>
                  <input
                    type="number"
                    name="medicalCosts"
                    value={formData.medicalCosts}
                    onChange={handleInputChange}
                    min="0"
                    step="0.01"
                    className="w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Lost Income */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {pageContent.form.lostIncome.label[language]}
                  </label>
                  <input
                    type="number"
                    name="lostIncome"
                    value={formData.lostIncome}
                    onChange={handleInputChange}
                    min="0"
                    step="0.01"
                    className="w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Days Off */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {pageContent.form.daysOff.label[language]}
                  </label>
                  <input
                    type="number"
                    name="daysOff"
                    value={formData.daysOff}
                    onChange={handleInputChange}
                    min="0"
                    className="w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <Button 
                  onClick={calculateCompensation}
                  disabled={!formData.accidentType || !formData.injuryLevel}
                  className="w-full"
                  size="lg"
                >
                  <Calculator className="mr-2 h-4 w-4" />
                  {pageContent.form.calculate[language]}
                </Button>
              </div>
            </div>

            {/* Result */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              {result !== null ? (
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {pageContent.result.title[language]}
                  </h3>
                  
                  <div className="bg-red-50 rounded-lg p-8 mb-8">
                    <p className="text-lg text-gray-700 mb-2">
                      {pageContent.result.amount[language]}
                    </p>
                    <p className="text-4xl font-bold text-red-600">
                      {formatCurrency(result)}
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <p className="text-sm text-gray-600">
                      {pageContent.disclaimer[language]}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-500">
                  <Calculator className="h-24 w-24 mx-auto mb-4 text-gray-300" />
                  <p>
                    {language === 'es' 
                      ? 'Complete el formulario para calcular su indemnización'
                      : language === 'en' 
                      ? 'Fill out the form to calculate your compensation'
                      : '填写表格以计算您的赔偿'
                    }
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* Contact CTA */}
      <Section background="brand">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {pageContent.contact.title[language]}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {pageContent.contact.subtitle[language]}
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href={getLangPath('/contact')}>
                <Calculator className="mr-2 h-5 w-5" />
                {language === 'es' ? 'Consulta Legal' : language === 'en' ? 'Legal Consultation' : '法律咨询'}
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
