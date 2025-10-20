// ==========================================
// TIPOS DE DATOS PARA BLOG
// ==========================================
// Define la estructura de cada entrada del blog

export interface BlogPost {
  slug: string;           // Identificador único para URL (ej: "guia-arraigo-2024")
  titulo: string;         // Título de la entrada
  resumen: string;        // Descripción corta para la tarjeta
  contenido: string;      // Contenido completo del artículo
  fecha: string;          // Fecha de publicación (formato: "2024-01-15")
  autor: string;          // Nombre del autor
  categoria: 'visado' | 'arraigo' | 'general'; // Categoría del post
  imagen?: string;        // URL de imagen destacada (opcional)
  destacado?: boolean;    // Si aparece en destacados
  tags?: string[];        // Etiquetas para filtrado (ej: ['visado', 'documentos'])
}

// ==========================================
// DATOS DE ENTRADAS DEL BLOG
// ==========================================
// Array con todas las entradas del blog
// MODIFICAR AQUÍ para agregar/editar/eliminar entradas

export const blogPosts: BlogPost[] = [
  {
    slug: 'guia-completa-arraigo-socioformativo-2024',
    titulo: 'Guía Completa del Arraigo Socioformativo 2024',
    resumen: 'Todo lo que necesitas saber sobre el arraigo socioformativo: requisitos, documentación y pasos a seguir para obtener tu permiso de residencia en España.',
    contenido: `
      <h2>¿Qué es el Arraigo Socioformativo?</h2>
      <p>El arraigo socioformativo es una vía legal para obtener la residencia en España mediante la realización de cursos de formación oficial.</p>
      
      <h3>Requisitos principales</h3>
      <ul>
        <li>Haber permanecido en España de manera continuada durante al menos 2 años</li>
        <li>No tener antecedentes penales</li>
        <li>Matricularse en un curso de formación oficial</li>
        <li>Contar con un compromiso de contratación</li>
      </ul>
      
      <h3>Documentación necesaria</h3>
      <p>La documentación requerida incluye certificados de empadronamiento, certificado de antecedentes penales, y matrícula del curso de formación.</p>
    `,
    fecha: '2024-12-15',
    autor: 'Equipo Educar Sin Fronteras',
    categoria: 'arraigo',
    destacado: true,
    tags: ['arraigo', 'documentación', 'requisitos']
  },
  {
    slug: 'diferencias-visado-estancia-arraigo',
    titulo: 'Diferencias entre Visado de Estancia y Arraigo Socioformativo',
    resumen: 'Descubre las diferencias clave entre estas dos opciones de formación en España y cuál es la más adecuada para tu situación personal.',
    contenido: `
      <h2>Visado de Estancia vs Arraigo Socioformativo</h2>
      <p>Ambas opciones permiten formarse en España, pero tienen requisitos y beneficios diferentes.</p>
      
      <h3>Visado de Estancia</h3>
      <ul>
        <li>Requiere solicitarse desde el país de origen</li>
        <li>Duración limitada al curso</li>
        <li>No requiere permanencia previa en España</li>
      </ul>
      
      <h3>Arraigo Socioformativo</h3>
      <ul>
        <li>Se solicita estando ya en España</li>
        <li>Requiere 2 años de permanencia continuada</li>
        <li>Puede convertirse en permiso de trabajo</li>
      </ul>
    `,
    fecha: '2024-12-10',
    autor: 'Equipo Educar Sin Fronteras',
    categoria: 'general',
    destacado: true,
    tags: ['visado', 'arraigo', 'comparación']
  },
  {
    slug: 'cursos-mas-demandados-arraigo-2024',
    titulo: 'Los Cursos Más Demandados para Arraigo en 2024',
    resumen: 'Conoce cuáles son los cursos con mayor demanda laboral que te ayudarán a conseguir tu arraigo socioformativo con mayores posibilidades de éxito.',
    contenido: `
      <h2>Top Cursos para Arraigo 2024</h2>
      <p>La elección del curso adecuado puede marcar la diferencia en tu proceso de arraigo.</p>
      
      <h3>1. Atención Sociosanitaria</h3>
      <p>Con el envejecimiento de la población, hay una gran demanda de profesionales en este sector.</p>
      
      <h3>2. Limpieza Profesional</h3>
      <p>Sector en constante crecimiento con múltiples oportunidades laborales.</p>
      
      <h3>3. Logística y Almacén</h3>
      <p>El auge del comercio electrónico ha aumentado la demanda de estos profesionales.</p>
    `,
    fecha: '2024-12-05',
    autor: 'Equipo Educar Sin Fronteras',
    categoria: 'arraigo',
    destacado: true,
    tags: ['cursos', 'empleo', 'arraigo']
  },
  {
    slug: 'pasos-solicitar-visado-estudiante-espana',
    titulo: 'Pasos para Solicitar un Visado de Estudiante en España',
    resumen: 'Guía paso a paso del proceso de solicitud de visado de estudiante desde tu país de origen, documentación necesaria y tiempos de tramitación.',
    contenido: `
      <h2>Proceso de Solicitud de Visado de Estudiante</h2>
      <p>Solicitar un visado de estudiante requiere planificación y preparación adecuada.</p>
      
      <h3>Paso 1: Matrícula en el Centro</h3>
      <p>Primero debes matricularte en un centro de formación oficial en España.</p>
      
      <h3>Paso 2: Reunir Documentación</h3>
      <ul>
        <li>Pasaporte vigente</li>
        <li>Certificado de matrícula</li>
        <li>Seguro médico</li>
        <li>Justificante de medios económicos</li>
      </ul>
      
      <h3>Paso 3: Cita en Consulado</h3>
      <p>Solicita cita en el consulado español de tu país.</p>
    `,
    fecha: '2024-11-28',
    autor: 'Equipo Educar Sin Fronteras',
    categoria: 'visado',
    destacado: false,
    tags: ['visado', 'estudiante', 'trámites']
  },
  {
    slug: 'errores-comunes-solicitud-arraigo',
    titulo: '5 Errores Comunes al Solicitar el Arraigo que Debes Evitar',
    resumen: 'Aprende de los errores más frecuentes que cometen los solicitantes de arraigo y cómo evitarlos para aumentar tus posibilidades de éxito.',
    contenido: `
      <h2>Errores Frecuentes en Solicitudes de Arraigo</h2>
      <p>Conocer los errores comunes te ayudará a evitarlos.</p>
      
      <h3>1. Documentación Incompleta</h3>
      <p>Asegúrate de tener todos los documentos requeridos antes de presentar la solicitud.</p>
      
      <h3>2. Empadronamiento Discontinuo</h3>
      <p>Verifica que tu empadronamiento sea continuo durante los 2 años requeridos.</p>
      
      <h3>3. Curso No Homologado</h3>
      <p>Confirma que el curso esté oficialmente reconocido para arraigo socioformativo.</p>
      
      <h3>4. Falta de Compromiso de Contratación Válido</h3>
      <p>El compromiso debe cumplir con todos los requisitos legales.</p>
      
      <h3>5. Presentación Fuera de Plazo</h3>
      <p>Respeta los plazos establecidos para cada fase del proceso.</p>
    `,
    fecha: '2024-11-20',
    autor: 'Equipo Educar Sin Fronteras',
    categoria: 'arraigo',
    destacado: false,
    tags: ['arraigo', 'errores', 'consejos']
  },
  {
    slug: 'beneficios-formacion-oficial-espana',
    titulo: 'Beneficios de la Formación Oficial en España',
    resumen: 'Descubre las ventajas de realizar cursos de formación oficial en España y cómo pueden impulsar tu carrera profesional y tu situación legal.',
    contenido: `
      <h2>Ventajas de la Formación Oficial</h2>
      <p>La formación oficial ofrece múltiples beneficios más allá de la obtención de certificados.</p>
      
      <h3>Reconocimiento Legal</h3>
      <p>Los certificados oficiales son reconocidos por empresas y administraciones públicas.</p>
      
      <h3>Mejora de Empleabilidad</h3>
      <p>Aumenta significativamente tus oportunidades en el mercado laboral español.</p>
      
      <h3>Vía para Regularización</h3>
      <p>Puede ser el primer paso hacia la obtención de permisos de residencia y trabajo.</p>
      
      <h3>Desarrollo Profesional</h3>
      <p>Adquiere habilidades actualizadas y demandadas en el mercado.</p>
    `,
    fecha: '2024-11-15',
    autor: 'Equipo Educar Sin Fronteras',
    categoria: 'general',
    destacado: false,
    tags: ['formación', 'beneficios', 'empleo']
  }
];

// ==========================================
// FUNCIONES AUXILIARES
// ==========================================

/**
 * Obtiene un post por su slug
 */
export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

/**
 * Obtiene posts destacados
 */
export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.destacado);
};

/**
 * Filtra posts por categoría
 */
export const getPostsByCategory = (categoria: BlogPost['categoria']): BlogPost[] => {
  return blogPosts.filter(post => post.categoria === categoria);
};

/**
 * Obtiene posts recientes (limitados a n resultados)
 */
export const getRecentPosts = (limit: number = 6): BlogPost[] => {
  return [...blogPosts]
    .sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime())
    .slice(0, limit);
};
