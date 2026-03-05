export type Categoria = 'visado-estancia' | 'arraigo';

export interface Faq {
  pregunta: string;
  respuesta: string;
}

export interface Modulo {
  codigo?: string;
  nombre: string;
  unidades?: string[];
}

export interface Docente {
  nombre: string;
  titulo: string;
  imagen?: string;
}

export interface Curso {
  slug: string;
  titulo: string;
  categoria: Categoria;
  resumen: string;
  horas?: number;
  modalidad?: 'presencial' | 'mixta' | 'online';
  requisitos?: string[];
  proximaConvocatoria?: string;
  temario?: Modulo[];
  salidaProfesional?: string[];
  docentes?: Docente[];
  faq?: Faq[];
  etiquetas?: string[];
  destacado?: boolean;
}

// FAQs comunes de financiación (se añaden a todos los cursos)
export const faqsFinanciacion: Faq[] = [
  {
    pregunta: '¿Ofrecen financiación?',
    respuesta: 'Sí, ofrecemos financiación directa de la academia, sin necesidad de estudio bancario.',
  },
  {
    pregunta: '¿Cómo son las cuotas?',
    respuesta: 'Las cuotas son cómodas y encajan con tu día a día en España, ajustadas a tu situación económica.',
  },
];

export const courses: Curso[] = [
  // ========== VISADO / ESTANCIA ==========
  {
    slug: 'tecnicas-venta-online-y-marketing-digital',
    titulo: 'Técnicas de venta online y marketing digital',
    categoria: 'visado-estancia',
    resumen: 'Aprende captación, conversión y comunicación digital para vender online con criterio profesional y herramientas actuales.',
    horas: 300,
    modalidad: 'mixta',
    requisitos: ['Pasaporte vigente'],
    proximaConvocatoria: 'Próximamente',
    destacado: true,
    temario: [
      { nombre: 'Fundamentos del comercio electrónico' },
      { nombre: 'Estrategias de captación de tráfico' },
      { nombre: 'Técnicas de conversión y embudos de venta' },
      { nombre: 'Email marketing y automatización' },
      { nombre: 'Publicidad en redes sociales' },
    ],
    faq: [
      {
        pregunta: '¿Este curso sirve para Estancia y Visado por Estudios?',
        respuesta: 'Sí, este curso es válido tanto para Estancia por Estudios como para Visado por Estudios (unificado).',
      },
      {
        pregunta: '¿Qué modalidad tiene?',
        respuesta: 'Es semipresencial (mixta).',
      },
      ...faqsFinanciacion,
    ],
    etiquetas: ['Visado / Estancia'],
  },
  {
    slug: 'control-de-procesos-logisticos-en-la-empresa',
    titulo: 'Control de procesos logísticos en la empresa',
    categoria: 'visado-estancia',
    resumen: 'Desarrolla competencias en almacén, inventario, distribución y coordinación operativa dentro del entorno logístico empresarial.',
    horas: 300,
    modalidad: 'mixta',
    requisitos: ['Pasaporte vigente'],
    proximaConvocatoria: 'Próximamente',
    destacado: true,
    temario: [
      { nombre: 'Operativa logística y supply chain' },
      { nombre: 'Gestión de almacenes e inventarios' },
      { nombre: 'Planificación de transporte y distribución' },
      { nombre: 'Control de procesos y calidad' },
      { nombre: 'Herramientas digitales aplicadas a logística' },
    ],
    faq: [
      {
        pregunta: '¿Este curso sirve para Estancia y Visado por Estudios?',
        respuesta: 'Sí, este curso es válido tanto para Estancia por Estudios como para Visado por Estudios (unificado).',
      },
      {
        pregunta: '¿Qué modalidad tiene?',
        respuesta: 'Es semipresencial (mixta).',
      },
      ...faqsFinanciacion,
    ],
    etiquetas: ['Visado / Estancia'],
  },
  {
    slug: 'auxiliar-de-cocina',
    titulo: 'Auxiliar de Cocina',
    categoria: 'visado-estancia',
    resumen: 'Adquiere bases prácticas de preelaboración, apoyo en cocina, manipulación segura de alimentos y organización del puesto de trabajo.',
    horas: 300,
    modalidad: 'mixta',
    requisitos: ['Pasaporte vigente'],
    proximaConvocatoria: 'Próximamente',
    destacado: true,
    temario: [
      { nombre: 'Preelaboración y conservación de alimentos' },
      { nombre: 'Técnicas básicas de cocina' },
      { nombre: 'Seguridad e higiene alimentaria' },
      { nombre: 'Apoyo al servicio en cocina' },
      { nombre: 'Organización del área de trabajo' },
    ],
    faq: [
      {
        pregunta: '¿Este curso sirve para Estancia y Visado por Estudios?',
        respuesta: 'Sí, este curso es válido tanto para Estancia por Estudios como para Visado por Estudios (unificado).',
      },
      {
        pregunta: '¿Qué modalidad tiene?',
        respuesta: 'Es semipresencial (mixta).',
      },
      ...faqsFinanciacion,
    ],
    etiquetas: ['Visado / Estancia'],
  },
  {
    slug: 'atencion-sociosanitaria-instituciones-dependencia-discapacidad-visado',
    titulo: 'Atención sociosanitaria en instituciones a personas dependientes y con discapacidad',
    categoria: 'visado-estancia',
    resumen: 'Fórmate en cuidados básicos, apoyo psicosocial, movilización y acompañamiento profesional en entornos institucionales.',
    horas: 300,
    modalidad: 'mixta',
    requisitos: ['Pasaporte vigente'],
    proximaConvocatoria: 'Próximamente',
    destacado: true,
    temario: [
      { nombre: 'Introducción a la atención sociosanitaria' },
      { nombre: 'Higiene y cuidados básicos' },
      { nombre: 'Movilización y transferencias' },
      { nombre: 'Apoyo psicosocial' },
      { nombre: 'Primeros auxilios básicos' },
    ],
    faq: [
      {
        pregunta: '¿Este curso sirve para Estancia y Visado por Estudios?',
        respuesta: 'Sí, este curso es válido tanto para Estancia por Estudios como para Visado por Estudios (unificado).',
      },
      {
        pregunta: '¿Qué modalidad tiene?',
        respuesta: 'Es semipresencial (mixta).',
      },
      ...faqsFinanciacion,
    ],
    etiquetas: ['Visado / Estancia'],
  },
  {
    slug: 'montaje-y-mantenimiento-de-instalaciones-electricas-de-baja-tension',
    titulo: 'Montaje y mantenimiento de instalaciones eléctricas de baja tensión',
    categoria: 'visado-estancia',
    resumen: 'Aprende montaje, revisión y mantenimiento básico de instalaciones eléctricas de baja tensión con enfoque práctico y seguro.',
    horas: 300,
    modalidad: 'mixta',
    requisitos: ['Pasaporte vigente'],
    proximaConvocatoria: 'Próximamente',
    temario: [
      { nombre: 'Interpretación básica de instalaciones eléctricas' },
      { nombre: 'Montaje de circuitos y mecanismos' },
      { nombre: 'Mantenimiento preventivo y correctivo' },
      { nombre: 'Medidas de seguridad eléctrica' },
      { nombre: 'Herramientas y materiales de trabajo' },
    ],
    faq: [
      {
        pregunta: '¿Este curso sirve para Estancia y Visado por Estudios?',
        respuesta: 'Sí, este curso es válido tanto para Estancia por Estudios como para Visado por Estudios (unificado).',
      },
      {
        pregunta: '¿Qué modalidad tiene?',
        respuesta: 'Es semipresencial (mixta).',
      },
      ...faqsFinanciacion,
    ],
    etiquetas: ['Visado / Estancia'],
  },
  {
    slug: 'mantenimiento-y-soporte-de-sistemas-informaticos-y-redes',
    titulo: 'Mantenimiento y soporte de sistemas informáticos y redes',
    categoria: 'visado-estancia',
    resumen: 'Desarrolla habilidades para instalar, mantener y dar soporte básico a equipos, sistemas operativos y redes informáticas.',
    horas: 300,
    modalidad: 'mixta',
    requisitos: ['Pasaporte vigente', 'Conocimientos básicos de informática'],
    proximaConvocatoria: 'Próximamente',
    temario: [
      { nombre: 'Equipos y sistemas operativos' },
      { nombre: 'Mantenimiento preventivo y diagnóstico' },
      { nombre: 'Redes locales y conectividad' },
      { nombre: 'Soporte técnico a usuarios' },
      { nombre: 'Seguridad básica en entornos informáticos' },
    ],
    faq: [
      {
        pregunta: '¿Este curso sirve para Estancia y Visado por Estudios?',
        respuesta: 'Sí, este curso es válido tanto para Estancia por Estudios como para Visado por Estudios (unificado).',
      },
      {
        pregunta: '¿Qué modalidad tiene?',
        respuesta: 'Es semipresencial (mixta).',
      },
      ...faqsFinanciacion,
    ],
    etiquetas: ['Visado / Estancia'],
  },
  {
    slug: 'gestion-administrativa-y-organizativa-aplicada-al-sector-horeca',
    titulo: 'Gestión administrativa y organizativa aplicada al sector HORECA',
    categoria: 'visado-estancia',
    resumen: 'Capacitación en organización operativa, documentación, atención y apoyo administrativo para negocios de hostelería y restauración.',
    horas: 300,
    modalidad: 'mixta',
    requisitos: ['Pasaporte vigente'],
    proximaConvocatoria: 'Próximamente',
    temario: [
      { nombre: 'Estructura del sector HORECA' },
      { nombre: 'Gestión documental y administrativa' },
      { nombre: 'Organización de recursos y turnos' },
      { nombre: 'Atención al cliente y coordinación interna' },
      { nombre: 'Control básico de aprovisionamiento y costes' },
    ],
    faq: [
      {
        pregunta: '¿Este curso sirve para Estancia y Visado por Estudios?',
        respuesta: 'Sí, este curso es válido tanto para Estancia por Estudios como para Visado por Estudios (unificado).',
      },
      {
        pregunta: '¿Qué modalidad tiene?',
        respuesta: 'Es semipresencial (mixta).',
      },
      ...faqsFinanciacion,
    ],
    etiquetas: ['Visado / Estancia'],
  },

  // ========== ARRAIGO SOCIOFORMATIVO ==========
  {
    slug: 'organizacion-y-gestion-de-almacenes-coml0309',
    titulo: 'COML0309 — Organización y gestión de almacenes',
    categoria: 'arraigo',
    resumen: 'Organiza y gestiona operaciones de almacenaje y flujos de mercancías. Certificado oficial con 80 horas de prácticas en empresas.',
    horas: 390,
    modalidad: 'presencial',
    requisitos: [
      'Más de 2 años de residencia en España',
      'Sin antecedentes penales',
      'Pasaporte vigente',
    ],
    proximaConvocatoria: 'Próximamente',
    destacado: true,
    temario: [
      {
        codigo: 'MF1014_3',
        nombre: 'Organización de almacenes (190 horas)',
        unidades: [
          'UF0926: Diseño de la organización del almacén',
          'UF0927: Gestión del equipo de trabajo del almacén',
          'UF0928: Seguridad y prevención de riesgos en el almacén',
        ],
      },
      {
        codigo: 'MF1015_2',
        nombre: 'Gestión de stocks e inventarios (90 horas)',
        unidades: [
          'UF0929: Gestión de stocks',
          'UF0928: Seguridad y prevención de riesgos en el almacén',
        ],
      },
      {
        codigo: 'MF1005_3',
        nombre: 'Optimización de la cadena logística (90 horas)',
      },
      {
        codigo: 'MP0193',
        nombre: 'Módulo de prácticas profesionales no laborales (80 horas)',
      },
    ],
    salidaProfesional: [
      'Jefe/a de almacén',
      'Responsable de logística',
      'Coordinador/a de inventarios',
      'Supervisor/a de almacén',
      'Técnico/a en gestión de stocks',
    ],
    faq: [
      {
        pregunta: '¿Qué salidas profesionales tiene?',
        respuesta: 'Podrás trabajar como jefe/a de almacén, responsable de logística, coordinador/a de inventarios o técnico/a en gestión de stocks en empresas de distribución, almacenes y centros logísticos.',
      },
      ...faqsFinanciacion,
    ],
    etiquetas: ['Arraigo Socioformativo', 'Certificado oficial (CM/SEPE)', '80h prácticas'],
  },
  {
    slug: 'gestion-de-llamadas-de-teleasistencia-sscg0111',
    titulo: 'SSCG0111 — Gestión de llamadas de teleasistencia',
    categoria: 'arraigo',
    resumen: 'Gestiona llamadas de teleasistencia y moviliza recursos de atención. Certificado oficial con 80 horas de prácticas.',
    horas: 330,
    modalidad: 'presencial',
    requisitos: [
      'Más de 2 años de residencia en España',
      'Sin antecedentes penales',
      'Pasaporte vigente',
    ],
    proximaConvocatoria: 'Próximamente',
    destacado: true,
    temario: [
      {
        codigo: 'MF1423_2',
        nombre: 'Atención y gestión de llamadas entrantes en un servicio de teleasistencia (90 horas)',
      },
      {
        codigo: 'MF1424_2',
        nombre: 'Emisión y gestión de llamadas salientes en un servicio de teleasistencia (60 horas)',
      },
      {
        codigo: 'MF1425_2',
        nombre: 'Manejo de herramientas, técnicas y habilidades para la prestación de un servicio de teleasistencia (80 horas)',
      },
      {
        codigo: 'MP0416',
        nombre: 'Módulo de prácticas profesionales no laborales (80 horas)',
      },
    ],
    salidaProfesional: [
      'Operador/a de teleasistencia',
      'Teleoperador/a de atención social',
      'Técnico/a en servicios de teleasistencia',
      'Gestor/a de llamadas de emergencia social',
    ],
    faq: [
      {
        pregunta: '¿Qué salidas profesionales tiene?',
        respuesta: 'Podrás trabajar como operador/a de teleasistencia, teleoperador/a de atención social o técnico/a en servicios de emergencia y atención remota.',
      },
      ...faqsFinanciacion,
    ],
    etiquetas: ['Arraigo Socioformativo', 'Certificado oficial (CM/SEPE)', '80h prácticas'],
  },
  {
    slug: 'limpieza-de-superficies-y-mobiliario-sscm0108',
    titulo: 'SSCM0108 — Limpieza de superficies y mobiliario en edificios y locales',
    categoria: 'arraigo',
    resumen: 'Labores de limpieza profesional aplicando técnicas y maquinaria específica. Certificado oficial con 80 horas de prácticas.',
    horas: 270,
    modalidad: 'presencial',
    requisitos: [
      'Más de 2 años de residencia en España',
      'Sin antecedentes penales',
      'Pasaporte vigente',
    ],
    proximaConvocatoria: 'Próximamente',
    temario: [
      {
        codigo: 'MF0972_1',
        nombre: 'Limpieza, tratamiento y mantenimiento de suelos, paredes y techos en edificios y locales (60 horas)',
      },
      {
        codigo: 'MF0996_1',
        nombre: 'Limpieza del mobiliario interior (60 horas)',
      },
      {
        codigo: 'MF1087_1',
        nombre: 'Limpieza de cristales en edificios y locales (30 horas)',
      },
      {
        codigo: 'MF1088_1',
        nombre: 'Técnicas y procedimientos de limpieza con utilización de maquinaria (80 horas)',
      },
      {
        codigo: 'MP0102',
        nombre: 'Módulo de prácticas profesionales no laborales (80 horas)',
      },
    ],
    salidaProfesional: [
      'Limpiador/a profesional',
      'Especialista en limpieza de edificios',
      'Operario/a de limpieza',
      'Técnico/a en servicios de limpieza',
    ],
    faq: [
      {
        pregunta: '¿Qué salidas profesionales tiene?',
        respuesta: 'Podrás trabajar como limpiador/a profesional, operario/a de limpieza en empresas, edificios públicos, hospitales, hoteles y centros comerciales.',
      },
      ...faqsFinanciacion,
    ],
    etiquetas: ['Arraigo Socioformativo', 'Certificado oficial (CM/SEPE)', '80h prácticas'],
  },
  {
    slug: 'atencion-sociosanitaria-instituciones-sscs0208',
    titulo: 'SSCS0208 — Atención sociosanitaria a personas dependientes en instituciones sociales',
    categoria: 'arraigo',
    resumen: 'Certificado de profesionalidad oficial que capacita para la atención integral (higiene, alimentación, atención sociosanitaria y apoyo psicosocial) a personas dependientes en instituciones. Incluye 80 horas de prácticas profesionales.',
    horas: 450,
    modalidad: 'presencial',
    requisitos: [
      'Más de 2 años de residencia en España',
      'Sin antecedentes penales',
      'Pasaporte vigente',
    ],
    proximaConvocatoria: 'Próximamente',
    destacado: true,
    temario: [
      {
        codigo: 'MF1016_2',
        nombre: 'Apoyo en la organización de intervenciones en el ámbito institucional (100 horas)',
        unidades: [
          'UF0127: Apoyo en la recepción y acogida en instituciones',
          'UF0128: Apoyo en la organización de actividades',
        ],
      },
      {
        codigo: 'MF1017_2',
        nombre: 'Intervención en la atención higiénico-alimentaria en instituciones (70 horas)',
      },
      {
        codigo: 'MF1018_2',
        nombre: 'Intervención en la atención sociosanitaria en instituciones (70 horas)',
      },
      {
        codigo: 'MF1019_2',
        nombre: 'Apoyo psicosocial, atención relacional y comunicativa en instituciones (130 horas)',
        unidades: [
          'UF0129: Animación social de personas dependientes',
          'UF0130: Mantenimiento y mejora de las actividades diarias',
          'UF0131: Técnicas de comunicación con personas dependientes',
        ],
      },
      {
        codigo: 'MP0029',
        nombre: 'Módulo de prácticas profesionales no laborales (80 horas)',
      },
    ],
    salidaProfesional: [
      'Cuidador/a de personas dependientes en instituciones',
      'Auxiliar de atención sociosanitaria',
      'Gerocultor/a en residencias',
      'Auxiliar de ayuda a domicilio en instituciones',
    ],
    faq: [
      {
        pregunta: '¿Qué salidas profesionales tiene?',
        respuesta: 'Podrás trabajar en residencias de mayores, centros de día, instituciones para personas con discapacidad y hospitales como auxiliar de atención sociosanitaria.',
      },
      ...faqsFinanciacion,
    ],
    etiquetas: ['Arraigo Socioformativo', 'Certificado oficial (CM/SEPE)', '80h prácticas'],
  },
  {
    slug: 'operaciones-auxiliares-servicios-administrativos',
    titulo: 'Operaciones auxiliares de servicios administrativos generales',
    categoria: 'arraigo',
    resumen: 'Certificado de profesionalidad para la gestión básica de documentación, archivo, atención telefónica y tareas administrativas de apoyo en oficinas y empresas.',
    horas: 230,
    modalidad: 'presencial',
    requisitos: [
      'Más de 2 años de residencia en España',
      'Sin antecedentes penales',
      'Pasaporte vigente',
    ],
    proximaConvocatoria: 'Próximamente',
    temario: [
      {
        nombre: 'Técnicas administrativas básicas',
      },
      {
        nombre: 'Archivo y gestión documental',
      },
      {
        nombre: 'Atención telefónica y comunicación',
      },
      {
        nombre: 'Aplicaciones informáticas de oficina',
      },
    ],
    faq: [
      {
        pregunta: '¿Qué salidas profesionales tiene?',
        respuesta: 'Podrás trabajar como auxiliar administrativo/a en empresas, oficinas y administraciones públicas.',
      },
      ...faqsFinanciacion,
    ],
    etiquetas: ['Arraigo Socioformativo'],
  },
  {
    slug: 'transporte-y-distribucion-logistica',
    titulo: 'Transporte y distribución (Logística)',
    categoria: 'arraigo',
    resumen: 'Certificado de profesionalidad en operaciones de transporte, rutas de distribución, normativa del sector, documentación y sistemas de trazabilidad.',
    horas: 220,
    modalidad: 'mixta',
    requisitos: [
      'Más de 2 años de residencia en España',
      'Sin antecedentes penales',
      'Pasaporte vigente',
    ],
    proximaConvocatoria: 'Próximamente',
    temario: [
      {
        nombre: 'Operaciones de transporte',
      },
      {
        nombre: 'Planificación de rutas',
      },
      {
        nombre: 'Normativa y documentación',
      },
      {
        nombre: 'Trazabilidad y control de mercancías',
      },
    ],
    faq: [
      {
        pregunta: '¿Qué salidas profesionales tiene?',
        respuesta: 'Podrás trabajar en empresas de transporte, logística, distribución y almacenes como operario/a o coordinador/a de transporte.',
      },
      ...faqsFinanciacion,
    ],
    etiquetas: ['Arraigo Socioformativo'],
  },
  {
    slug: 'servicios-auxiliares-peluqueria',
    titulo: 'Servicios auxiliares de peluquería',
    categoria: 'arraigo',
    resumen: 'Certificado de profesionalidad para prestar servicios auxiliares de peluquería: atención al cliente, higiene, preparación de útiles y apoyo en técnicas básicas de peluquería.',
    horas: 200,
    modalidad: 'presencial',
    requisitos: [
      'Más de 2 años de residencia en España',
      'Sin antecedentes penales',
      'Pasaporte vigente',
    ],
    proximaConvocatoria: 'Próximamente',
    temario: [
      {
        nombre: 'Atención al cliente en peluquería',
      },
      {
        nombre: 'Higiene y asepsia',
      },
      {
        nombre: 'Preparación de equipos y útiles',
      },
      {
        nombre: 'Apoyo en técnicas básicas',
      },
    ],
    faq: [
      {
        pregunta: '¿Qué salidas profesionales tiene?',
        respuesta: 'Podrás trabajar como auxiliar de peluquería en salones, centros de estética y spas.',
      },
      ...faqsFinanciacion,
    ],
    etiquetas: ['Arraigo Socioformativo'],
  },
  {
    slug: 'operaciones-basicas-restaurante-bar',
    titulo: 'Operaciones básicas de restaurante y bar',
    categoria: 'arraigo',
    resumen: 'Certificado de profesionalidad para realizar operaciones básicas de servicio en sala, barra, montaje de mesas, atención al cliente y cumplimiento de protocolos de seguridad alimentaria.',
    horas: 210,
    modalidad: 'presencial',
    requisitos: [
      'Más de 2 años de residencia en España',
      'Sin antecedentes penales',
      'Pasaporte vigente',
    ],
    proximaConvocatoria: 'Próximamente',
    temario: [
      {
        nombre: 'Servicio en sala y barra',
      },
      {
        nombre: 'Montaje y decoración de mesas',
      },
      {
        nombre: 'Atención al cliente',
      },
      {
        nombre: 'Protocolo y seguridad alimentaria',
      },
    ],
    faq: [
      {
        pregunta: '¿Qué salidas profesionales tiene?',
        respuesta: 'Podrás trabajar como camarero/a, ayudante de barra, auxiliar de sala en restaurantes, bares, hoteles y eventos.',
      },
      ...faqsFinanciacion,
    ],
    etiquetas: ['Arraigo Socioformativo'],
  },
];
