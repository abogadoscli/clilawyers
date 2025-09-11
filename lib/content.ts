
import type { Language } from './i18n';

export interface MultilingualText {
  es: string;
  en: string;
  zh: string;
}

export interface ServiceItem {
  name: MultilingualText;
  description: MultilingualText;
  features?: string[];
  unique?: boolean;
}

export interface ValueProposition {
  title: MultilingualText;
  description: MultilingualText;
}

export interface OfficeLocation {
  location: string;
  city: MultilingualText;
  country: MultilingualText;
  address: MultilingualText;
  phone: string;
  email: string;
  languages: string[];
  specialties: MultilingualText;
  hours: MultilingualText;
}

export interface ContactMethod {
  method: string;
  label: MultilingualText;
  value: string;
}

// Content data from JSON files
export const siteContent = {
  navigation: {
    home: { es: "Inicio", en: "Home", zh: "首页" },
    services: { es: "Servicios", en: "Services", zh: "服务" },
    inmobiliario: { es: "Inmobiliario", en: "Real Estate", zh: "房地产" },
    penal: { es: "Penal", en: "Criminal", zh: "刑法" },
    accidentes: { es: "Accidentes", en: "Accidents", zh: "事故" },
    about: { es: "Nosotros", en: "About", zh: "关于我们" },
    contact: { es: "Contacto", en: "Contact", zh: "联系" },
    blog: { es: "Blog", en: "Blog", zh: "博客" },
    civil: { es: "Civil", en: "Civil", zh: "民法" },
    bancario: { es: "Bancario", en: "Banking", zh: "银行法" },
    offices: { es: "Oficinas", en: "Offices", zh: "办事处" }
  },
  
  // Complete services catalog from both sites
  serviceCategories: [
    {
      id: 'accidentes',
      icon: 'Car',
      title: {
        es: "Accidentes e Indemnizaciones",
        en: "Accidents and Compensation",
        zh: "事故和赔偿"
      },
      description: {
        es: "Especialistas en todo tipo de accidentes. Luchamos por la máxima indemnización que le corresponde.",
        en: "Specialists in all types of accidents. We fight for the maximum compensation you deserve.",
        zh: "各类事故专家。我们为您争取应得的最大赔偿。"
      },
      services: [
        {
          name: {
            es: "Accidentes de Tráfico",
            en: "Traffic Accidents",
            zh: "交通事故"
          },
          description: {
            es: "Reclamación de indemnizaciones por accidentes de tráfico, incluyendo secuelas, muerte y daños materiales",
            en: "Compensation claims for traffic accidents, including injuries, death and material damage",
            zh: "交通事故赔偿索赔，包括伤害、死亡和物质损失"
          },
          features: ["Calculadora online", "Sin costes iniciales", "Éxito garantizado"]
        },
        {
          name: {
            es: "Accidentes Laborales",
            en: "Work Accidents",
            zh: "工伤事故"
          },
          description: {
            es: "Indemnizaciones por accidentes en el trabajo e incapacidades laborales",
            en: "Compensation for work accidents and work-related disabilities",
            zh: "工伤事故和工作相关残疾的赔偿"
          }
        },
        {
          name: {
            es: "Negligencias Médicas",
            en: "Medical Negligence",
            zh: "医疗过失"
          },
          description: {
            es: "Reclamaciones por malpráctica médica, errores de diagnóstico y falta de consentimiento informado",
            en: "Claims for medical malpractice, diagnostic errors and lack of informed consent",
            zh: "医疗事故、诊断错误和缺乏知情同意的索赔"
          }
        },
        {
          name: {
            es: "Caídas en Vía Pública",
            en: "Public Falls",
            zh: "公共场所跌倒"
          },
          description: {
            es: "Indemnizaciones por caídas en espacios públicos y establecimientos",
            en: "Compensation for falls in public spaces and establishments",
            zh: "公共场所和机构跌倒的赔偿"
          }
        },
        {
          name: {
            es: "Accidentes Aeronáuticos y Marítimos",
            en: "Aviation and Maritime Accidents",
            zh: "航空和海事事故"
          },
          description: {
            es: "Especialización en accidentes de aviación y marítimos",
            en: "Specialization in aviation and maritime accidents",
            zh: "航空和海事事故专业服务"
          }
        },
        {
          name: {
            es: "Grandes Lesionados",
            en: "Serious Injuries",
            zh: "重伤案件"
          },
          description: {
            es: "Especialistas en lesiones graves: paraplejias, tetraplejias, traumatismos cerebrales",
            en: "Specialists in serious injuries: paraplegia, quadriplegia, brain trauma",
            zh: "重伤专家：截瘫、四肢瘫痪、脑外伤"
          }
        }
      ]
    },
    {
      id: 'bancario',
      icon: 'Building2',
      title: {
        es: "Derecho Bancario y Financiero",
        en: "Banking and Financial Law",
        zh: "银行和金融法"
      },
      description: {
        es: "Especialistas en reclamaciones bancarias y productos financieros abusivos. Recuperamos su dinero.",
        en: "Specialists in banking claims and abusive financial products. We recover your money.",
        zh: "银行索赔和滥用金融产品专家。我们为您追回资金。"
      },
      services: [
        {
          name: {
            es: "Cláusulas Suelo",
            en: "Floor Clauses",
            zh: "最低利率条款"
          },
          description: {
            es: "Reclamación de dinero por cláusulas suelo abusivas en hipotecas",
            en: "Money recovery from abusive floor clauses in mortgages",
            zh: "从抵押贷款中滥用的最低利率条款中追回资金"
          },
          features: ["Sin coste inicial", "Gestión 100% online", "Éxito garantizado"]
        },
        {
          name: {
            es: "IRPH",
            en: "IRPH Index",
            zh: "IRPH指数"
          },
          description: {
            es: "Reclamación por Índice de Referencia de Préstamos Hipotecarios abusivo",
            en: "Claims for abusive Mortgage Loan Reference Index",
            zh: "针对滥用抵押贷款参考指数的索赔"
          }
        },
        {
          name: {
            es: "Hipotecas Multidivisa",
            en: "Multi-currency Mortgages",
            zh: "多币种抵押贷款"
          },
          description: {
            es: "Reclamaciones por hipotecas en moneda extranjera",
            en: "Claims for foreign currency mortgages",
            zh: "外币抵押贷款索赔"
          }
        },
        {
          name: {
            es: "Tarjetas Revolving",
            en: "Revolving Credit Cards",
            zh: "循环信用卡"
          },
          description: {
            es: "Reclamación por intereses abusivos en tarjetas de crédito revolving",
            en: "Claims for abusive interest on revolving credit cards",
            zh: "循环信用卡滥用利息索赔"
          },
          features: ["Wizink, IKEA VISA y otras entidades"]
        },
        {
          name: {
            es: "Gastos Hipotecarios",
            en: "Mortgage Expenses",
            zh: "抵押费用"
          },
          description: {
            es: "Reclamación de gastos hipotecarios pagados indebidamente",
            en: "Recovery of improperly paid mortgage expenses",
            zh: "追回不当支付的抵押费用"
          },
          features: ["Recuperación de tasación, gestoría, registro"]
        },
        {
          name: {
            es: "Comisión de Apertura",
            en: "Opening Commission",
            zh: "开户佣金"
          },
          description: {
            es: "Reclamación de comisiones de apertura de hipotecas",
            en: "Recovery of mortgage opening commissions",
            zh: "追回抵押贷款开户佣金"
          }
        }
      ]
    },
    {
      id: 'corporativo',
      icon: 'Globe',
      title: {
        es: "Derecho Corporativo Internacional",
        en: "International Corporate Law",
        zh: "国际公司法"
      },
      description: {
        es: "Asesoramiento integral para empresas que operan entre España y China. Soluciones personalizadas.",
        en: "Comprehensive advice for companies operating between Spain and China. Personalized solutions.",
        zh: "为在西班牙和中国之间运营的公司提供全面建议。个性化解决方案。"
      },
      services: [
        {
          name: {
            es: "Import & Export - China Consulting",
            en: "Import & Export - China Consulting",
            zh: "进出口 - 中国咨询"
          },
          description: {
            es: "Consultoría especializada en importación y exportación con China",
            en: "Specialized consulting for import and export with China",
            zh: "与中国进出口专业咨询"
          },
          features: [
            "Búsqueda de productos adecuados",
            "Gestión de fabricación",
            "Supervisión de transporte hasta almacén del cliente",
            "Profesionales españoles y chinos especializados"
          ]
        },
        {
          name: {
            es: "Inversiones Extranjeras",
            en: "Foreign Investments",
            zh: "外商投资"
          },
          description: {
            es: "Asesoramiento en inversiones extranjeras y establecimiento de empresas en China",
            en: "Advisory on foreign investments and company establishment in China",
            zh: "外商投资和在中国设立公司的咨询"
          }
        },
        {
          name: {
            es: "Fusiones y Adquisiciones",
            en: "Mergers & Acquisitions",
            zh: "并购"
          },
          description: {
            es: "Gestión integral de operaciones de M&A transfronterizas",
            en: "Comprehensive management of cross-border M&A operations",
            zh: "跨境并购业务的全面管理"
          }
        },
        {
          name: {
            es: "Derecho de Sociedades",
            en: "Corporate Law",
            zh: "公司法"
          },
          description: {
            es: "Constitución de sociedades, contratos comerciales y gobierno corporativo",
            en: "Company incorporation, commercial contracts and corporate governance",
            zh: "公司注册、商业合同和公司治理"
          }
        },
        {
          name: {
            es: "Propiedad Intelectual",
            en: "Intellectual Property",
            zh: "知识产权"
          },
          description: {
            es: "Protección de marcas, patentes y secretos comerciales en mercados internacionales",
            en: "Protection of trademarks, patents and trade secrets in international markets",
            zh: "在国际市场上保护商标、专利和商业秘密"
          }
        }
      ]
    },
    {
      id: 'laboral',
      icon: 'Users',
      title: {
        es: "Derecho Laboral",
        en: "Labor Law",
        zh: "劳动法"
      },
      description: {
        es: "Protección de derechos laborales y reclamaciones contra empleadores",
        en: "Protection of labor rights and claims against employers",
        zh: "保护劳动权利和对雇主的索赔"
      },
      services: [
        {
          name: {
            es: "Despidos Improcedentes",
            en: "Wrongful Dismissals",
            zh: "不当解雇"
          },
          description: {
            es: "Reclamación por despidos improcedentes y cálculo de indemnizaciones",
            en: "Claims for wrongful dismissals and compensation calculation",
            zh: "不当解雇索赔和赔偿计算"
          },
          features: ["15% de éxito sobre cantidad recuperada", "Gestión empática"]
        },
        {
          name: {
            es: "Reclamación de Deudas Laborales",
            en: "Labor Debt Recovery",
            zh: "劳动债务追收"
          },
          description: {
            es: "Recuperación de salarios impagados y deudas del empleador",
            en: "Recovery of unpaid wages and employer debts",
            zh: "追回未付工资和雇主债务"
          }
        },
        {
          name: {
            es: "Incapacidades Laborales",
            en: "Work Disabilities",
            zh: "工作残疾"
          },
          description: {
            es: "Tramitación de incapacidades permanentes y temporales",
            en: "Processing of permanent and temporary disabilities",
            zh: "永久和临时残疾的处理"
          }
        }
      ]
    },
    {
      id: 'civil',
      icon: 'FileText',
      title: {
        es: "Derecho Civil y de Familia",
        en: "Civil and Family Law",
        zh: "民法和家庭法"
      },
      description: {
        es: "Asuntos familiares, herencias, contratos y reclamaciones civiles",
        en: "Family matters, inheritance, contracts and civil claims",
        zh: "家庭事务、继承、合同和民事索赔"
      },
      services: [
        {
          name: {
            es: "Derecho de Familia",
            en: "Family Law",
            zh: "家庭法"
          },
          description: {
            es: "Divorcios, custodias, pensiones alimenticias y régimen de visitas",
            en: "Divorces, custody, alimony and visitation rights",
            zh: "离婚、监护权、赡养费和探视权"
          }
        },
        {
          name: {
            es: "Herencias y Sucesiones",
            en: "Inheritance and Succession",
            zh: "继承和遗产"
          },
          description: {
            es: "Tramitación de herencias, testamentos y sucesiones intestadas",
            en: "Processing of inheritance, wills and intestate succession",
            zh: "继承、遗嘱和无遗嘱继承的处理"
          },
          features: ["Especialistas reconocidos"]
        },
        {
          name: {
            es: "Reclamación de Deudas",
            en: "Debt Recovery",
            zh: "债务追收"
          },
          description: {
            es: "Recuperación de deudas y reclamaciones de cantidad",
            en: "Debt recovery and monetary claims",
            zh: "债务追收和金钱索赔"
          }
        },
        {
          name: {
            es: "Reclamaciones de Cantidad",
            en: "Monetary Claims",
            zh: "金钱索赔"
          },
          description: {
            es: "Reclamación judicial y extrajudicial de cantidades adeudadas",
            en: "Judicial and extrajudicial recovery of owed amounts",
            zh: "司法和庭外追收欠款"
          }
        }
      ]
    },
    {
      id: 'extranjeria',
      icon: 'Globe',
      title: {
        es: "Extranjería",
        en: "Immigration Law",
        zh: "移民法"
      },
      description: {
        es: "Especialistas en derecho de extranjería, visados, permisos de residencia y nacionalidad española.",
        en: "Specialists in immigration law, visas, residence permits and Spanish nationality.",
        zh: "移民法、签证、居留许可和西班牙国籍专家。"
      },
      services: [
        {
          name: {
            es: "Visados y Permisos",
            en: "Visas and Permits",
            zh: "签证和许可"
          },
          description: {
            es: "Tramitación de visados de trabajo, estudios, reagrupación familiar y permisos de residencia",
            en: "Processing work visas, study visas, family reunification and residence permits",
            zh: "办理工作签证、学习签证、家庭团聚和居留许可"
          }
        },
        {
          name: {
            es: "Nacionalidad Española",
            en: "Spanish Nationality",
            zh: "西班牙国籍"
          },
          description: {
            es: "Obtención de la nacionalidad española por residencia, carta de naturaleza y recuperación",
            en: "Obtaining Spanish nationality by residence, naturalization letter and recovery",
            zh: "通过居住、归化信函和恢复获得西班牙国籍"
          }
        },
        {
          name: {
            es: "Arraigo y Documentación",
            en: "Settlement and Documentation",
            zh: "定居和文件"
          },
          description: {
            es: "Procedimientos de arraigo social, laboral y familiar para regularización",
            en: "Social, labor and family settlement procedures for regularization",
            zh: "社会、劳动和家庭定居程序以实现正规化"
          }
        },
        {
          name: {
            es: "Recursos de Extranjería",
            en: "Immigration Appeals",
            zh: "移民上诉"
          },
          description: {
            es: "Recursos contra denegaciones y expulsiones del territorio español",
            en: "Appeals against denials and expulsions from Spanish territory",
            zh: "对拒绝和驱逐出西班牙领土的上诉"
          }
        }
      ]
    },
    {
      id: 'otros',
      icon: 'Scale',
      title: {
        es: "Otros Servicios Especializados",
        en: "Other Specialized Services",
        zh: "其他专业服务"
      },
      description: {
        es: "Servicios legales adicionales para cubrir todas sus necesidades jurídicas",
        en: "Additional legal services to cover all your legal needs",
        zh: "额外的法律服务，满足您的所有法律需求"
      },
      services: [
        {
          name: {
            es: "Mediación y Resolución de Conflictos",
            en: "Mediation and Conflict Resolution",
            zh: "调解和冲突解决"
          },
          description: {
            es: "Mediación especializada para evitar litigios costosos",
            en: "Specialized mediation to avoid costly litigation",
            zh: "专业调解，避免昂贵的诉讼"
          },
          features: [
            "Resolución rápida y efectiva",
            "Alternativa a procesos judiciales largos",
            "Especialistas en mediación"
          ]
        },
        {
          name: {
            es: "Derecho Administrativo",
            en: "Administrative Law",
            zh: "行政法"
          },
          description: {
            es: "Procedimientos administrativos y recursos",
            en: "Administrative procedures and appeals",
            zh: "行政程序和上诉"
          },
          features: [
            "Recursos administrativos",
            "Procedimientos sancionadores",
            "Contratación pública",
            "Responsabilidad patrimonial"
          ]
        },
        {
          name: {
            es: "Extranjería",
            en: "Immigration Law",
            zh: "移民法"
          },
          description: {
            es: "Tramitación de permisos de residencia y nacionalidad",
            en: "Processing of residence permits and nationality",
            zh: "居留许可和国籍处理"
          },
          features: [
            "Permisos de residencia",
            "Procesos de nacionalización",
            "Reagrupación familiar",
            "Visados de trabajo"
          ]
        },
        {
          name: {
            es: "Derecho Fiscal",
            en: "Tax Law",
            zh: "税法"
          },
          description: {
            es: "Asesoramiento fiscal y tributario para empresas y particulares",
            en: "Tax and fiscal advice for companies and individuals",
            zh: "为企业和个人提供税务和财政咨询"
          },
          features: [
            "Planificación fiscal",
            "Inspecciones de Hacienda",
            "Recursos tributarios",
            "Optimización fiscal"
          ]
        }
      ]
    },
    {
      id: 'penal',
      icon: 'Shield',
      title: {
        es: "Derecho Penal",
        en: "Criminal Law",
        zh: "刑法"
      },
      description: {
        es: "Defensa penal especializada en todo tipo de delitos. Protegemos sus derechos con la máxima garantía jurídica.",
        en: "Specialized criminal defense in all types of crimes. We protect your rights with maximum legal guarantee.",
        zh: "专业刑事辩护，涵盖所有类型的犯罪。我们以最大的法律保障保护您的权利。"
      },
      services: [
        {
          name: {
            es: "Delitos Económicos",
            en: "Economic Crimes",
            zh: "经济犯罪"
          },
          description: {
            es: "Defensa en delitos de estafa, apropiación indebida, blanqueo de capitales y delitos fiscales",
            en: "Defense in fraud, embezzlement, money laundering and tax crimes",
            zh: "欺诈、挪用公款、洗钱和税务犯罪的辩护"
          },
          features: [
            "Estafas y apropiaciones",
            "Blanqueo de capitales",
            "Delitos fiscales",
            "Insolvencias punibles"
          ]
        },
        {
          name: {
            es: "Delitos contra las Personas",
            en: "Crimes Against Persons",
            zh: "侵犯人身罪"
          },
          description: {
            es: "Defensa en homicidios, lesiones, amenazas, coacciones y delitos contra la libertad",
            en: "Defense in homicides, injuries, threats, coercion and crimes against freedom",
            zh: "杀人、伤害、威胁、胁迫和侵犯自由罪的辩护"
          },
          features: [
            "Homicidios y lesiones",
            "Amenazas y coacciones",
            "Delitos contra la libertad",
            "Violencia de género"
          ]
        },
        {
          name: {
            es: "Delitos contra el Patrimonio",
            en: "Property Crimes",
            zh: "财产犯罪"
          },
          description: {
            es: "Defensa en robos, hurtos, usurpaciones y daños contra la propiedad",
            en: "Defense in theft, burglary, usurpation and property damage",
            zh: "盗窃、入室盗窃、侵占和财产损害的辩护"
          },
          features: [
            "Robos y hurtos",
            "Usurpaciones",
            "Daños patrimoniales",
            "Delitos informáticos"
          ]
        },
        {
          name: {
            es: "Procedimiento Penal",
            en: "Criminal Procedure",
            zh: "刑事程序"
          },
          description: {
            es: "Asistencia letrada en todas las fases del procedimiento penal: instrucción, juicio oral y recursos",
            en: "Legal assistance in all phases of criminal procedure: investigation, trial and appeals",
            zh: "刑事程序各阶段的法律援助：调查、审判和上诉"
          },
          features: [
            "Asistencia en comisarías",
            "Defensa en instrucción",
            "Juicios orales",
            "Recursos de apelación"
          ]
        },
        {
          name: {
            es: "Delitos de Tráfico",
            en: "Traffic Crimes",
            zh: "交通犯罪"
          },
          description: {
            es: "Defensa en delitos contra la seguridad vial, conducción bajo influencias y homicidios imprudentes",
            en: "Defense in crimes against road safety, driving under influence and negligent homicides",
            zh: "道路安全犯罪、酒驾和过失杀人的辩护"
          },
          features: [
            "Alcoholemias y drogas",
            "Exceso de velocidad",
            "Conducción sin permiso",
            "Homicidios imprudentes"
          ]
        },
        {
          name: {
            es: "Delitos Societarios",
            en: "Corporate Crimes",
            zh: "公司犯罪"
          },
          description: {
            es: "Defensa de administradores y directivos en delitos societarios y de empresa",
            en: "Defense of managers and executives in corporate and business crimes",
            zh: "公司和商业犯罪中管理人员和高管的辩护"
          },
          features: [
            "Responsabilidad de administradores",
            "Delitos societarios",
            "Administración desleal",
            "Falsedad contable"
          ]
        },
        {
          name: {
            es: "Recursos y Casación",
            en: "Appeals and Cassation",
            zh: "上诉和上诉法院"
          },
          description: {
            es: "Especialistas en recursos de apelación y casación ante tribunales superiores",
            en: "Specialists in appeals and cassation before higher courts",
            zh: "高等法院上诉和上诉法院专家"
          },
          features: [
            "Recursos de apelación",
            "Casación penal",
            "Tribunal Supremo",
            "Tribunales Superiores"
          ]
        },
        {
          name: {
            es: "Ejecución Penal",
            en: "Criminal Execution",
            zh: "刑事执行"
          },
          description: {
            es: "Asesoramiento en fase de ejecución: libertad condicional, beneficios penitenciarios y recursos",
            en: "Advice in execution phase: parole, penitentiary benefits and appeals",
            zh: "执行阶段的咨询：假释、监狱福利和上诉"
          },
          features: [
            "Libertad condicional",
            "Beneficios penitenciarios",
            "Permisos de salida",
            "Suspensión de condenas"
          ]
        }
      ]
    },
    {
      id: 'inmobiliario',
      icon: 'Building2',
      title: {
        es: "Derecho Inmobiliario",
        en: "Real Estate Law",
        zh: "房地产法"
      },
      description: {
        es: "Asesoramiento jurídico integral en todas las operaciones inmobiliarias. Protegemos sus inversiones y derechos de propiedad.",
        en: "Comprehensive legal advice in all real estate operations. We protect your investments and property rights.",
        zh: "房地产业务的全面法律咨询。我们保护您的投资和财产权。"
      },
      services: [
        {
          name: {
            es: "Compraventa de Inmuebles",
            en: "Property Purchase and Sale",
            zh: "房地产买卖"
          },
          description: {
            es: "Gestión integral de compraventas inmobiliarias, desde la due diligence hasta la firma en notaría",
            en: "Comprehensive management of real estate transactions, from due diligence to notary signing",
            zh: "房地产交易的全面管理，从尽职调查到公证签约"
          },
          features: [
            "Revisión de documentación",
            "Due diligence inmobiliaria",
            "Negociación de contratos",
            "Acompañamiento notarial"
          ]
        },
        {
          name: {
            es: "Derecho Urbanístico",
            en: "Urban Planning Law",
            zh: "城市规划法"
          },
          description: {
            es: "Asesoramiento en normativas urbanísticas, licencias de construcción y planificación territorial",
            en: "Advice on urban planning regulations, construction permits and territorial planning",
            zh: "城市规划法规、建设许可和区域规划咨询"
          },
          features: [
            "Licencias urbanísticas",
            "Cambios de calificación",
            "Recursos administrativos",
            "Planificación territorial"
          ]
        },
        {
          name: {
            es: "Propiedad Horizontal",
            en: "Condominium Law",
            zh: "分层所有权法"
          },
          description: {
            es: "Especialistas en comunidades de propietarios, administración de fincas y conflictos vecinales",
            en: "Specialists in homeowners associations, property management and neighborhood disputes",
            zh: "业主社区、物业管理和邻里纠纷专家"
          },
          features: [
            "Gestión de comunidades",
            "Resolución de conflictos",
            "Administración de fincas",
            "Asesoramiento legal continuo"
          ]
        },
        {
          name: {
            es: "Arrendamientos",
            en: "Rental Law",
            zh: "租赁法"
          },
          description: {
            es: "Asesoramiento integral en contratos de alquiler, desahucios y relaciones arrendatario-propietario",
            en: "Comprehensive advice on rental contracts, evictions and tenant-landlord relations",
            zh: "租赁合同、驱逐和租户-房东关系的全面咨询"
          },
          features: [
            "Contratos de alquiler",
            "Procedimientos de desahucio",
            "Actualización de rentas",
            "Resolución de conflictos"
          ]
        },
        {
          name: {
            es: "Inversiones Inmobiliarias",
            en: "Real Estate Investment",
            zh: "房地产投资"
          },
          description: {
            es: "Asesoramiento jurídico para inversores inmobiliarios, REITs y fondos de inversión",
            en: "Legal advice for real estate investors, REITs and investment funds",
            zh: "为房地产投资者、REITs和投资基金提供法律咨询"
          },
          features: [
            "Estructuración de inversiones",
            "Análisis de riesgos legales",
            "Fiscalidad inmobiliaria",
            "Operaciones internacionales"
          ]
        },
        {
          name: {
            es: "Hipotecas y Financiación",
            en: "Mortgages and Financing",
            zh: "抵押贷款和融资"
          },
          description: {
            es: "Revisión de condiciones hipotecarias, renegociación de préstamos y cláusulas abusivas",
            en: "Review of mortgage conditions, loan renegotiation and abusive clauses",
            zh: "抵押贷款条件审查、贷款重新谈判和滥用条款"
          },
          features: [
            "Revisión de hipotecas",
            "Renegociación de préstamos",
            "Reclamación de gastos",
            "Cláusulas abusivas"
          ]
        },
        {
          name: {
            es: "Promociones Inmobiliarias",
            en: "Real Estate Development",
            zh: "房地产开发"
          },
          description: {
            es: "Asesoramiento integral para promotores inmobiliarios y constructoras en todos los aspectos legales",
            en: "Comprehensive advice for real estate developers and construction companies on all legal aspects",
            zh: "为房地产开发商和建筑公司提供全方位法律咨询"
          },
          features: [
            "Constitución de sociedades",
            "Licencias y permisos",
            "Contratos con contratistas",
            "Gestión de preventas"
          ]
        },
        {
          name: {
            es: "Derecho Registral",
            en: "Property Registry Law",
            zh: "房产登记法"
          },
          description: {
            es: "Gestión de inscripciones registrales, rectificación de asientos y problemáticas registrales",
            en: "Management of property registrations, correction of entries and registry issues",
            zh: "财产登记管理、条目更正和登记问题"
          },
          features: [
            "Inscripciones registrales",
            "Rectificación de asientos",
            "Cancelación de cargas",
            "Recursos registrales"
          ]
        }
      ]
    }
  ],
  hero: {
    title: { es: "C & LI Abogados", en: "C&LI Lawyers", zh: "C&LI律师事务所" },
    subtitle: {
      es: "Su Bufete Internacional de Confianza",
      en: "Your Trusted International Law Firm", 
      zh: "您值得信赖的国际律师事务所"
    },
    description: {
      es: "Especialistas en derecho civil, penal e inmobiliario con casi 20 años de experiencia. Protegemos sus derechos y su patrimonio con soluciones legales efectivas en España y China.",
      en: "Specialists in civil, criminal and real estate law with almost 20 years of experience. We protect your rights and assets with effective legal solutions in Spain and China.",
      zh: "民法、刑法和房地产法专家，拥有近20年的经验。我们在西班牙和中国为您提供有效的法律解决方案，保护您的权利和资产。"
    },
    primaryCta: {
      es: "Consulta Legal",
      en: "Legal Consultation",
      zh: "法律咨询"
    },
    secondaryCta: {
      es: "Calcular Indemnización",
      en: "Calculate Compensation", 
      zh: "计算赔偿"
    }
  },
  valuePropositions: [
    {
      title: {
        es: "Presencia Internacional",
        en: "International Presence",
        zh: "国际业务"
      },
      description: {
        es: "Oficinas en España y China con equipo multicultural y multilingüe para atender sus necesidades legales globales.",
        en: "Offices in Spain and China with multicultural and multilingual team to serve your global legal needs.",
        zh: "在西班牙和中国设有办事处，拥有多元文化和多语言团队，满足您的全球法律需求。"
      }
    },
    {
      title: {
        es: "Gestión 100% Online",
        en: "100% Online Management",
        zh: "100%在线管理"
      },
      description: {
        es: "Gestione su caso desde casa a través de teléfono móvil, tablet u ordenador. Documentación digital segura.",
        en: "Manage your case from home through mobile phone, tablet or computer. Secure digital documentation.",
        zh: "通过手机、平板电脑或计算机在家管理您的案件。安全的数字文档。"
      }
    },
    {
      title: {
        es: "Experiencia Comprobada",
        en: "Proven Experience",
        zh: "经验丰富"
      },
      description: {
        es: "Casi 20 años de experiencia en derecho civil, penal e inmobiliario. Miles de casos resueltos exitosamente.",
        en: "Almost 20 years of experience in civil, criminal and real estate law. Thousands of cases successfully resolved.",
        zh: "在民法、刑法和房地产法方面拥有近20年经验。成功解决了数千个案件。"
      }
    },
    {
      title: {
        es: "Asesoría por Abogados",
        en: "Legal Advisory by Lawyers",
        zh: "律师法律咨询"
      },
      description: {
        es: "Su caso será llevado por abogados especialistas que le acompañarán durante todo el proceso y le mantendrán informado.",
        en: "Your case will be handled by specialist lawyers who will accompany you throughout the entire process and keep you informed.",
        zh: "您的案件将由专业律师处理，他们将在整个过程中陪伴您并让您了解情况。"
      }
    }
  ],
  testimonials: [
    {
      id: 1,
      name: {
        es: "María González",
        en: "María González",
        zh: "玛丽亚·冈萨雷斯"
      },
      position: {
        es: "Empresaria, Madrid",
        en: "Businesswoman, Madrid",
        zh: "企业家，马德里"
      },
      content: {
        es: "Excelente servicio en mi reclamación bancaria. Recuperé más de 15.000€ en gastos hipotecarios que pensé que había perdido para siempre. Profesionales, rápidos y muy efectivos.",
        en: "Excellent service in my banking claim. I recovered over €15,000 in mortgage expenses that I thought were lost forever. Professional, fast and very effective.",
        zh: "在我的银行索赔中提供了出色的服务。我追回了超过15,000欧元的抵押贷款费用，我以为永远失去了。专业、快速且非常有效。"
      },
      rating: 5,
      case: {
        es: "Reclamación Bancaria",
        en: "Banking Claim",
        zh: "银行索赔"
      }
    },
    {
      id: 2,
      name: {
        es: "David Chen",
        en: "David Chen",
        zh: "陈大伟"
      },
      position: {
        es: "Inversor, Tianjín",
        en: "Investor, Tianjin",
        zh: "投资者，天津"
      },
      content: {
        es: "Necesitaba asesoramiento para una inversión inmobiliaria en España. Su equipo bilingüe me guió en todo el proceso. La operación fue un éxito total.",
        en: "I needed advice for a real estate investment in Spain. Their bilingual team guided me through the entire process. The operation was a complete success.",
        zh: "我需要在西班牙进行房地产投资的咨询。他们的双语团队指导我完成了整个过程。这次操作非常成功。"
      },
      rating: 5,
      case: {
        es: "Inversión Inmobiliaria",
        en: "Real Estate Investment",
        zh: "房地产投资"
      }
    },
    {
      id: 3,
      name: {
        es: "Ana Rodríguez",
        en: "Ana Rodríguez",
        zh: "安娜·罗德里格斯"
      },
      position: {
        es: "Víctima de Accidente, Tenerife",
        en: "Accident Victim, Tenerife",
        zh: "事故受害者，特内里费"
      },
      content: {
        es: "Después de mi accidente de tráfico, C&LI Lawyers se encargó de todo. Sin adelantar dinero, conseguimos una indemnización justa. Muy recomendable.",
        en: "After my traffic accident, C&LI Lawyers took care of everything. Without advancing money, we got fair compensation. Highly recommended.",
        zh: "在我的交通事故后，C&LI律师事务所处理了一切。无需预付费用，我们获得了公平的赔偿。强烈推荐。"
      },
      rating: 5,
      case: {
        es: "Accidente de Tráfico",
        en: "Traffic Accident",
        zh: "交通事故"
      }
    },
    {
      id: 4,
      name: {
        es: "Roberto Martín",
        en: "Roberto Martín",
        zh: "罗伯托·马丁"
      },
      position: {
        es: "Director de RRHH, Barcelona",
        en: "HR Director, Barcelona",
        zh: "人力资源总监，巴塞罗那"
      },
      content: {
        es: "Nos ayudaron con un ERE complejo en nuestra empresa. Su conocimiento del derecho laboral es excepcional. Logramos una solución beneficiosa para todos.",
        en: "They helped us with a complex layoff process in our company. Their knowledge of labor law is exceptional. We achieved a beneficial solution for everyone.",
        zh: "他们帮助我们处理了公司复杂的裁员程序。他们的劳动法知识非常出色。我们为所有人达成了有利的解决方案。"
      },
      rating: 5,
      case: {
        es: "Derecho Laboral",
        en: "Labor Law",
        zh: "劳动法"
      }
    },
    {
      id: 5,
      name: {
        es: "Jennifer Wang",
        en: "Jennifer Wang",
        zh: "王珍妮"
      },
      position: {
        es: "CEO, Shanghai",
        en: "CEO, Shanghai",
        zh: "首席执行官，上海"
      },
      content: {
        es: "Constituimos nuestra filial española con C&LI Lawyers. Su experiencia internacional fue clave para navegar las regulaciones. Proceso muy fluido.",
        en: "We established our Spanish subsidiary with C&LI Lawyers. Their international experience was key to navigating regulations. Very smooth process.",
        zh: "我们与C&LI律师事务所成立了西班牙子公司。他们的国际经验是应对法规的关键。过程非常顺利。"
      },
      rating: 5,
      case: {
        es: "Derecho Corporativo",
        en: "Corporate Law",
        zh: "公司法"
      }
    },
    {
      id: 6,
      name: {
        es: "Carmen López",
        en: "Carmen López",
        zh: "卡门·洛佩斯"
      },
      position: {
        es: "Propietaria, Las Palmas",
        en: "Property Owner, Las Palmas",
        zh: "业主，拉斯帕尔马斯"
      },
      content: {
        es: "Problema complejo con mi comunidad de propietarios. C&LI Lawyers resolvió todo en tiempo récord. Su especialización en propiedad horizontal es impresionante.",
        en: "Complex problem with my homeowners association. C&LI Lawyers solved everything in record time. Their specialization in condominium law is impressive.",
        zh: "我的业主社区出现复杂问题。C&LI律师事务所在创纪录的时间内解决了一切。他们在分层所有权法方面的专业化令人印象深刻。"
      },
      rating: 5,
      case: {
        es: "Propiedad Horizontal",
        en: "Condominium Law",
        zh: "分层所有权法"
      }
    }
  ],
  offices: [
    {
      location: "tenerife",
      city: {
        es: "Santa Cruz de Tenerife",
        en: "Santa Cruz de Tenerife", 
        zh: "圣克鲁斯-德特内里费"
      },
      country: { es: "España", en: "Spain", zh: "西班牙" },
      address: {
        es: "C. Pepita Serrador, Nº 2, Local 3, 38005 Santa Cruz de Tenerife",
        en: "C. Pepita Serrador, No. 2, Local 3, 38005 Santa Cruz de Tenerife",
        zh: "佩皮塔·塞拉多尔街2号，3号店铺，38005圣克鲁斯-德特内里费"
      },
      phone: "+34 666 232 223",
      email: "info@clilawyers.com",
      languages: ["Español", "English", "中文"],
      specialties: {
        es: ["Derecho Bancario", "Accidentes", "Derecho Civil", "Derecho Penal"],
        en: ["Banking Law", "Accidents", "Civil Law", "Criminal Law"],
        zh: ["银行法", "事故", "民法", "刑法"]
      },
      hours: {
        es: "Lunes a Viernes: 09:00-14:00 y 15:00-20:00",
        en: "Monday to Friday: 09:00-14:00 and 15:00-20:00",
        zh: "周一至周五：09:00-14:00 和 15:00-20:00"
      }
    },
    {
      location: "tianjin",
      city: { es: "Tianjín", en: "Tianjin", zh: "天津" },
      country: { es: "China", en: "China", zh: "中国" },
      address: {
        es: "Calle Yuliang, Hotel Meihau, Piso 3, Habitaciones 301-303, Distrito Nankai, Tianjin",
        en: "Yuliang Street, Meihau Hotel, 3rd Floor, Rooms 301-303, Nankai District, Tianjin",
        zh: "天津南开区豫良大街美豪酒店3楼301-303室"
      },
      phone: "",
      email: "info@clilawyers.com", 
      languages: ["中文", "English", "Español", "日本語", "Français"],
      specialties: {
        es: ["Derecho Corporativo", "Inversiones Extranjeras", "M&A", "Propiedad Intelectual"],
        en: ["Corporate Law", "Foreign Investment", "M&A", "Intellectual Property"],
        zh: ["公司法", "外商投资", "并购", "知识产权"]
      },
      hours: {
        es: "Lunes a Viernes: 09:00-18:00 (Hora de China)",
        en: "Monday to Friday: 09:00-18:00 (China Time)",
        zh: "周一至周五：09:00-18:00（中国时间）"
      }
    }
  ]
};

export function getLocalizedContent<T>(content: T, language: Language): any {
  if (typeof content === 'object' && content !== null) {
    if ('es' in content && 'en' in content && 'zh' in content) {
      return (content as any)[language];
    }
    
    // For nested objects
    const result: any = {};
    for (const [key, value] of Object.entries(content)) {
      result[key] = getLocalizedContent(value, language);
    }
    return result;
  }
  
  return content;
}
