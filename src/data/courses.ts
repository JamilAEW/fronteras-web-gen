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
  horasPracticas?: number;
  modalidad?: 'presencial' | 'mixta' | 'online';
  duracionMeses?: number;
  precio?: number;
  matricula?: number;
  cuotas?: string;
  horario?: string;
  requisitos?: string[];
  proximaConvocatoria?: string;
  fechaInicio?: string;
  fechaFin?: string;
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
    horas: 750,
    modalidad: 'mixta',
    duracionMeses: 8,
    horario: 'Lunes a Viernes de 6pm a 9pm — 3 días presencial y 2 días aula virtual',
    requisitos: ['Pasaporte vigente'],
    proximaConvocatoria: 'Mayo 2026',
    fechaInicio: '11/05/2026',
    fechaFin: '22/01/2027',
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
    horas: 750,
    modalidad: 'mixta',
    duracionMeses: 8,
    horario: 'Lunes a Viernes de 6pm a 9pm — 3 días presencial y 2 días aula virtual',
    requisitos: ['Pasaporte vigente'],
    proximaConvocatoria: 'Abril 2026',
    fechaInicio: '27/04/2026',
    fechaFin: '18/12/2026',
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
    horas: 750,
    modalidad: 'mixta',
    duracionMeses: 8,
    precio: 2850,
    matricula: 300,
    cuotas: 'Hasta 10 cuotas de 285€',
    horario: 'Lunes a Viernes de 6pm a 9pm — 3 días presencial y 2 días aula virtual',
    requisitos: ['Pasaporte vigente'],
    proximaConvocatoria: 'Octubre 2026',
    fechaInicio: '05/10/2026',
    fechaFin: '19/06/2027',
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
    horas: 750,
    modalidad: 'mixta',
    duracionMeses: 8,
    precio: 2850,
    matricula: 300,
    cuotas: 'Hasta 10 cuotas de 285€',
    horario: 'Lunes a Viernes de 6pm a 9pm — 3 días presencial y 2 días aula virtual',
    requisitos: ['Pasaporte vigente'],
    proximaConvocatoria: 'Mayo 2026',
    fechaInicio: '04/05/2026',
    fechaFin: '22/01/2027',
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
    horas: 750,
    modalidad: 'mixta',
    duracionMeses: 10,
    precio: 2850,
    matricula: 300,
    cuotas: 'Hasta 10 cuotas de 285€',
    horario: 'Lunes a Viernes de 6pm a 9pm — 3 días presencial y 2 días aula virtual',
    requisitos: ['Pasaporte vigente'],
    proximaConvocatoria: 'Mayo 2026',
    fechaInicio: '11/05/2026',
    fechaFin: '27/03/2027',
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
    horas: 750,
    modalidad: 'mixta',
    duracionMeses: 8,
    precio: 2850,
    matricula: 300,
    cuotas: 'Hasta 10 cuotas de 285€',
    horario: 'Lunes a Viernes de 6pm a 9pm — 3 días presencial y 2 días aula virtual',
    requisitos: ['Pasaporte vigente', 'Conocimientos básicos de informática'],
    proximaConvocatoria: 'Mayo 2026',
    fechaInicio: '04/05/2026',
    fechaFin: '22/01/2027',
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
    horas: 750,
    modalidad: 'mixta',
    duracionMeses: 10,
    precio: 2850,
    matricula: 300,
    cuotas: 'Hasta 10 cuotas de 285€',
    horario: 'Alterna — Lunes a Viernes de MAÑANA',
    requisitos: ['Pasaporte vigente'],
    proximaConvocatoria: 'Mayo 2026',
    fechaInicio: '04/05/2026',
    fechaFin: '22/01/2027',
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
    slug: 'operaciones-auxiliares-servicios-administrativos-generales-adgg0408',
    titulo: 'ADGG0408 — Operaciones auxiliares de servicios administrativos y generales',
    categoria: 'arraigo',
    resumen: 'Certificado oficial orientado a tareas básicas de oficina, archivo, reproducción de documentación, atención y apoyo administrativo en empresas y entidades.',
    horas: 390,
    horasPracticas: 40,
    modalidad: 'presencial',
    duracionMeses: 4,
    horario: 'Lunes a Viernes de 9:30 a 14:00h',
    requisitos: [
      'Más de 2 años de residencia en España',
      'Sin antecedentes penales',
      'Pasaporte vigente',
    ],
    proximaConvocatoria: 'Mayo 2026',
    destacado: true,
    temario: [
      {
        codigo: 'MF0969_1',
        nombre: 'Técnicas administrativas básicas de oficina',
      },
      {
        codigo: 'MF0970_1',
        nombre: 'Operaciones básicas de comunicación',
      },
      {
        codigo: 'MF0971_1',
        nombre: 'Reproducción y archivo',
      },
      {
        codigo: 'MP0112',
        nombre: 'Módulo de prácticas profesionales no laborales',
      },
    ],
    salidaProfesional: [
      'Auxiliar de oficina',
      'Auxiliar de servicios generales',
      'Personal de apoyo administrativo',
      'Operador/a básico de documentación y archivo',
    ],
    faq: [
      {
        pregunta: '¿Qué salidas profesionales tiene?',
        respuesta: 'Podrás trabajar en tareas de apoyo administrativo, archivo, recepción de documentación y asistencia básica en oficinas, gestorías y empresas.',
      },
      ...faqsFinanciacion,
    ],
    etiquetas: ['Arraigo Socioformativo', 'Certificado oficial (CM/SEPE)', 'Prácticas incluidas'],
  },
  {
    slug: 'organizacion-y-gestion-de-almacenes-coml0309',
    titulo: 'COML0309 — Organización y gestión de almacenes',
    categoria: 'arraigo',
    resumen: 'Organiza y gestiona operaciones de almacenaje, stock, preparación de pedidos y flujos de mercancías con certificado oficial y prácticas.',
    horas: 310,
    horasPracticas: 80,
    modalidad: 'presencial',
    duracionMeses: 4,
    precio: 2200,
    matricula: 300,
    cuotas: 'Hasta 10 cuotas de 220€',
    horario: 'Lunes a Viernes — Semana alterna — 18:00 a 21:00h',
    requisitos: [
      'Más de 2 años de residencia en España',
      'Sin antecedentes penales',
      'Pasaporte vigente',
    ],
    proximaConvocatoria: 'Mayo 2026',
    fechaInicio: '11/05/2026',
    destacado: true,
    temario: [
      {
        codigo: 'MF1014_3',
        nombre: 'Organización de almacenes',
      },
      {
        codigo: 'MF1015_2',
        nombre: 'Gestión de stocks e inventarios',
      },
      {
        codigo: 'MF1005_3',
        nombre: 'Optimización de la cadena logística',
      },
      {
        codigo: 'MP0193',
        nombre: 'Módulo de prácticas profesionales no laborales',
      },
    ],
    salidaProfesional: [
      'Jefe/a de almacén',
      'Responsable de logística',
      'Coordinador/a de inventarios',
      'Supervisor/a de almacén',
    ],
    faq: [
      {
        pregunta: '¿Qué salidas profesionales tiene?',
        respuesta: 'Podrás trabajar en almacenes, centros logísticos, plataformas de distribución y departamentos de logística de diferentes sectores.',
      },
      ...faqsFinanciacion,
    ],
    etiquetas: ['Arraigo Socioformativo', 'Certificado oficial (CM/SEPE)', '80h prácticas'],
  },
  {
    slug: 'limpieza-de-superficies-y-mobiliario-en-edificios-y-locales-sscm0108',
    titulo: 'SSCM0108 — Limpieza de superficies y mobiliario en edificios y locales',
    categoria: 'arraigo',
    resumen: 'Formación oficial para limpieza profesional, mantenimiento básico de espacios y uso adecuado de útiles y maquinaria en edificios y locales.',
    horas: 150,
    horasPracticas: 80,
    modalidad: 'presencial',
    duracionMeses: 4,
    horario: 'Viernes virtual',
    requisitos: [
      'Más de 2 años de residencia en España',
      'Sin antecedentes penales',
      'Pasaporte vigente',
    ],
    proximaConvocatoria: 'Mayo 2026',
    destacado: true,
    temario: [
      {
        codigo: 'MF0972_1',
        nombre: 'Limpieza, tratamiento y mantenimiento de suelos, paredes y techos',
      },
      {
        codigo: 'MF0996_1',
        nombre: 'Limpieza del mobiliario interior',
      },
      {
        codigo: 'MF1087_1',
        nombre: 'Limpieza de cristales en edificios y locales',
      },
      {
        codigo: 'MF1088_1',
        nombre: 'Técnicas y procedimientos de limpieza con maquinaria',
      },
      {
        codigo: 'MP0102',
        nombre: 'Módulo de prácticas profesionales no laborales',
      },
    ],
    salidaProfesional: [
      'Limpiador/a profesional',
      'Operario/a de limpieza',
      'Especialista en mantenimiento de espacios',
      'Personal de limpieza en edificios y locales',
    ],
    faq: [
      {
        pregunta: '¿Qué salidas profesionales tiene?',
        respuesta: 'Podrás trabajar en empresas de limpieza, hospitales, centros educativos, hoteles, oficinas y edificios públicos o privados.',
      },
      ...faqsFinanciacion,
    ],
    etiquetas: ['Arraigo Socioformativo', 'Certificado oficial (CM/SEPE)', '80h prácticas'],
  },
  {
    slug: 'atencion-sociosanitaria-a-personas-dependientes-en-instituciones-sociales-sscs0208',
    titulo: 'SSCS0208 — Atención sociosanitaria a personas dependientes en instituciones sociales',
    categoria: 'arraigo',
    resumen: 'Certificado oficial para la atención integral de personas dependientes en instituciones, con formación en apoyo higiénico, alimentario y psicosocial.',
    horas: 370,
    horasPracticas: 80,
    modalidad: 'presencial',
    duracionMeses: 6,
    precio: 2000,
    matricula: 200,
    cuotas: 'Hasta 8 cuotas',
    horario: '1 día 18 a 21hrs — Sábado 9hrs a 13hrs y 15 a 18hrs',
    requisitos: [
      'Más de 2 años de residencia en España',
      'Sin antecedentes penales',
      'Pasaporte vigente',
    ],
    proximaConvocatoria: 'Mayo 2026',
    fechaInicio: '18/05/2026',
    destacado: true,
    temario: [
      {
        codigo: 'MF1016_2',
        nombre: 'Apoyo en la organización de intervenciones en el ámbito institucional',
      },
      {
        codigo: 'MF1017_2',
        nombre: 'Intervención en la atención higiénico-alimentaria en instituciones',
      },
      {
        codigo: 'MF1018_2',
        nombre: 'Intervención en la atención sociosanitaria en instituciones',
      },
      {
        codigo: 'MF1019_2',
        nombre: 'Apoyo psicosocial, atención relacional y comunicativa en instituciones',
      },
      {
        codigo: 'MP0029',
        nombre: 'Módulo de prácticas profesionales no laborales',
      },
    ],
    salidaProfesional: [
      'Cuidador/a de personas dependientes en instituciones',
      'Auxiliar de atención sociosanitaria',
      'Gerocultor/a en residencias',
      'Auxiliar de apoyo institucional',
    ],
    faq: [
      {
        pregunta: '¿Qué salidas profesionales tiene?',
        respuesta: 'Podrás trabajar en residencias, centros de día, instituciones sociales y recursos asistenciales para personas dependientes.',
      },
      ...faqsFinanciacion,
    ],
    etiquetas: ['Arraigo Socioformativo', 'Certificado oficial (CM/SEPE)', '80h prácticas'],
  },
  {
    slug: 'gestion-de-llamadas-de-teleasistencia-sscg0111',
    titulo: 'SSCG0111 — Gestión de llamadas de teleasistencia',
    categoria: 'arraigo',
    resumen: 'Formación oficial para atender, emitir y gestionar llamadas en servicios de teleasistencia, movilizando recursos de apoyo cuando sea necesario.',
    horas: 230,
    horasPracticas: 80,
    modalidad: 'presencial',
    duracionMeses: 4,
    precio: 1500,
    matricula: 200,
    cuotas: 'Hasta 6 cuotas de 250€',
    horario: 'Lunes a Viernes de 15 a 18hrs — 4 horas a 18hrs — Sábado 9hrs a 13hrs',
    requisitos: [
      'Más de 2 años de residencia en España',
      'Sin antecedentes penales',
      'Pasaporte vigente',
    ],
    proximaConvocatoria: 'Mayo 2026',
    fechaInicio: '18/05/2026',
    temario: [
      {
        codigo: 'MF1423_2',
        nombre: 'Atención y gestión de llamadas entrantes en teleasistencia',
      },
      {
        codigo: 'MF1424_2',
        nombre: 'Emisión y gestión de llamadas salientes en teleasistencia',
      },
      {
        codigo: 'MF1425_2',
        nombre: 'Herramientas, técnicas y habilidades para teleasistencia',
      },
      {
        codigo: 'MP0416',
        nombre: 'Módulo de prácticas profesionales no laborales',
      },
    ],
    salidaProfesional: [
      'Operador/a de teleasistencia',
      'Teleoperador/a de atención social',
      'Gestor/a de llamadas de apoyo asistencial',
      'Técnico/a de servicios remotos de atención',
    ],
    faq: [
      {
        pregunta: '¿Qué salidas profesionales tiene?',
        respuesta: 'Podrás trabajar en servicios de teleasistencia, centros de atención remota y plataformas de soporte social y asistencial.',
      },
      ...faqsFinanciacion,
    ],
    etiquetas: ['Arraigo Socioformativo', 'Certificado oficial (CM/SEPE)', '80h prácticas'],
  },
  {
    slug: 'montaje-y-mantenimiento-de-instalaciones-electricas-de-baja-tension-arraigo',
    titulo: 'Montaje y mantenimiento de instalaciones eléctricas de baja tensión',
    categoria: 'arraigo',
    resumen: 'Formación orientada al montaje, revisión y mantenimiento de instalaciones eléctricas de baja tensión con enfoque práctico en seguridad y ejecución.',
    horas: 750,
    modalidad: 'presencial',
    duracionMeses: 8,
    precio: 2850,
    matricula: 300,
    cuotas: 'Hasta 10 cuotas de 285€',
    horario: 'Taller sábado',
    requisitos: [
      'Más de 2 años de residencia en España',
      'Sin antecedentes penales',
      'Pasaporte vigente',
    ],
    proximaConvocatoria: 'Noviembre 2026',
    fechaInicio: '19/11/2026',
    fechaFin: '30/07/2027',
    temario: [
      {
        nombre: 'Montaje de instalaciones eléctricas interiores',
      },
      {
        nombre: 'Canalizaciones, cableado y mecanismos',
      },
      {
        nombre: 'Mantenimiento preventivo y correctivo',
      },
      {
        nombre: 'Verificación, medidas y seguridad eléctrica',
      },
    ],
    salidaProfesional: [
      'Ayudante de electricista',
      'Operario/a de mantenimiento eléctrico',
      'Instalador/a auxiliar de baja tensión',
      'Personal de apoyo en instalaciones eléctricas',
    ],
    faq: [
      {
        pregunta: '¿Qué salidas profesionales tiene?',
        respuesta: 'Podrás trabajar en apoyo al montaje y mantenimiento de instalaciones eléctricas de baja tensión en obra, rehabilitación y mantenimiento técnico.',
      },
      ...faqsFinanciacion,
    ],
    etiquetas: ['Arraigo Socioformativo', 'Formación profesional', 'Enfoque práctico'],
  },
];
