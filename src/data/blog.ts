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
    slug: 'estudiar-espana-visado-estudios-trabajar-guia-2025',
    titulo: 'Estudiar en España con visado de estudios y luego trabajar: guía completa 2025',
    resumen: 'Descubre cómo obtener el visado de estudiante en España, qué requisitos hay en 2025, qué formación necesitas para poder quedarte a trabajar y cómo nuestros cursos oficiales te guían paso a paso.',
    contenido: `
      <h2>1. ¿Por qué España es una opción ideal para estudiar y trabajar?</h2>
      <p>Mientras muchos países endurecen los visados para estudiantes — duraciones largas de espera, restricciones para trabajar, cargas familiares — España se sitúa como una alternativa accesible, flexible y con buenas oportunidades.</p>
      <p>Aquí algunos puntos clave:</p>
      <ul>
        <li>Educación de calidad con matrícula en universidades, centros oficiales y certificados profesionales.</li>
        <li>Recientes reformas normativas que facilitan la estancia por estudios y permiten trabajar y luego cambiar a permiso de trabajo.</li>
        <li>Cultura, idioma, clima y entorno favorable para estudiantes internacionales.</li>
      </ul>

      <h2>2. Las 10 claves que necesitas conocer (y cómo se aplican en 2025)</h2>
      <p>Tomando como base las "10 Claves de la Estancia por Estudios", aquí tienes una versión adaptada y actualizada:</p>

      <h3>2.1 Formación válida para visado</h3>
      <p>Se requiere una formación completa: grado, máster, doctorado, FP de segundo grado, certificación profesional o título técnico.</p>
      <p><strong>Aplicación a tus cursos:</strong> Todos los programas de Educar Sin Fronteras — visado/estancia o arraigo socioformativo — son acreditados y cumplen con esta clave.</p>

      <h3>2.2 Matrícula a tiempo completo</h3>
      <p>Tu curso debe ser a tiempo completo (no bastan unas horas semanales). Nuestros módulos están diseñados como programas intensivos, compatibles con visado/estancia.</p>

      <h3>2.3 Modalidad presencial o semipresencial</h3>
      <p>Ahora se acepta modalidad semipresencial siempre que <strong>al menos el 50 %</strong> de las clases sean presenciales. Nuestros cursos "mixtos" están diseñados para cumplir esta norma.</p>

      <h3>2.4 Acreditación de medios económicos</h3>
      <p>Debes demostrar que dispones de medios económicos (habitualmente 100 % del IPREM al mes). Desde 2025, esa cantidad se ha actualizado; te ayudamos a calcularla en nuestro asesoramiento.</p>

      <h3>2.5 Seguro médico</h3>
      <p>Seguro privado o público válido en España, sin copago, con repatriación. Lo incluimos como servicio adicional para estudiantes de fuera de la UE.</p>

      <h3>2.6 Lugar de solicitud</h3>
      <p>Puedes pedir la estancia por estudios:</p>
      <ul>
        <li>En un Consulado de España en tu país.</li>
        <li>O <strong>en España</strong>, si ya estás legalmente y cumples los criterios (por ejemplo visado turístico). Este segundo camino es interesante para muchos estudiantes.</li>
      </ul>

      <h3>2.7 Estancia superior a 6 meses</h3>
      <p>Si tu curso es superior a 6 meses, necesitarás además certificado de antecedentes penales y certificado médico. Nuestros cursos tienen entre 200 y 750 horas (varios meses) y te preparamos para esta fase.</p>

      <h3>2.8 Familiar acompañante</h3>
      <p>En algunos casos, los hijos menores o cónyuges pueden acompañar al estudiante si el curso es superior y se cumplen otros requisitos. Esto puede aplicar en visado de estudios; te asesoramos sobre tu caso concreto.</p>

      <h3>2.9 Nuevo reglamento y ventajas laborales</h3>
      <p>El reglamento más reciente (2025) permite mayor flexibilidad, integración laboral, trabajo durante estudios, y vías para residir tras los estudios.</p>

      <h3>2.10 Asesoría profesional</h3>
      <p>Es clave contar con asesoramiento experto para evitar errores, denegaciones o trámites largos. Nuestro equipo en Educar Sin Fronteras ofrece este acompañamiento.</p>

      <h2>3. Beneficios concretos del visado de estudios + posibilidad de trabajar</h2>
      
      <h3>✔ Estudiar y trabajar</h3>
      <p>Con el visado de estudios en España, puedes trabajar <strong>hasta 20 horas semanales</strong> mientras estudias (según normativa vigente).</p>

      <h3>✔ Quedarte a trabajar después</h3>
      <p>Tras finalizar tu formación, existen vías legales para cambiar de visado de estudiante a permiso de residencia y trabajo. Esto convierte tu estancia en una <strong>oportunidad profesional real en España</strong>.</p>

      <h3>✔ Formación certificada</h3>
      <p>Nuestros cursos cumplen con certificaciones oficiales (EUNEIZ, Comunidad de Madrid, SEPE), lo que significa que tu solicitud de visado parte de una <strong>base fiable y reconocida</strong>.</p>

      <h2>4. Requisitos paso a paso para la solicitud</h2>
      <table class="w-full border-collapse">
        <thead>
          <tr class="bg-brand-50">
            <th class="border border-border p-3 text-left">Paso</th>
            <th class="border border-border p-3 text-left">Qué necesitas</th>
            <th class="border border-border p-3 text-left">Comentarios</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-border p-3">1</td>
            <td class="border border-border p-3">Carta de admisión de un centro oficial</td>
            <td class="border border-border p-3">Nosotros emitimos carta para tus cursos.</td>
          </tr>
          <tr>
            <td class="border border-border p-3">2</td>
            <td class="border border-border p-3">Pasaporte válido</td>
            <td class="border border-border p-3">Mínimo 12 meses recomendados.</td>
          </tr>
          <tr>
            <td class="border border-border p-3">3</td>
            <td class="border border-border p-3">Medios económicos</td>
            <td class="border border-border p-3">100 % del IPREM al mes, o menos si acreditas alojamiento.</td>
          </tr>
          <tr>
            <td class="border border-border p-3">4</td>
            <td class="border border-border p-3">Seguro médico español</td>
            <td class="border border-border p-3">Incluido como servicio adicional.</td>
          </tr>
          <tr>
            <td class="border border-border p-3">5</td>
            <td class="border border-border p-3">Certificado de antecedentes penales</td>
            <td class="border border-border p-3">Para estancias > 6 meses.</td>
          </tr>
          <tr>
            <td class="border border-border p-3">6</td>
            <td class="border border-border p-3">Certificado médico</td>
            <td class="border border-border p-3">General.</td>
          </tr>
          <tr>
            <td class="border border-border p-3">7</td>
            <td class="border border-border p-3">Pago de tasas</td>
            <td class="border border-border p-3">Alrededor de 60 € (varía por país).</td>
          </tr>
          <tr>
            <td class="border border-border p-3">8</td>
            <td class="border border-border p-3">Presentación del trámite</td>
            <td class="border border-border p-3">Consulado o en España (según caso).</td>
          </tr>
        </tbody>
      </table>

      <h2>5. Cómo nuestros cursos te preparan para todo esto</h2>
      <ul>
        <li>Formación oficial y actualizada para visado/estancia y arraigo.</li>
        <li>Asesoramiento para visado y trámite (documentación, plazos, traducción).</li>
        <li>Calendarios adaptados, horarios de fin de semana o mixtos.</li>
        <li>Financiación sin intereses, alta tasa de aprobación.</li>
        <li>Acompañamiento post-curso para encontrar empleo en España.</li>
      </ul>

      <h2>6. Consejos clave para tu aplicación y estancia</h2>
      <ul>
        <li>Presenta la solicitud <strong>60-90 días antes</strong> del comienzo del curso.</li>
        <li>Verifica que el centro esté debidamente acreditado.</li>
        <li>Asegúrate de que el pasaporte tenga al menos un año de validez.</li>
        <li>Traduce/apostilla los documentos extranjeros.</li>
        <li>Conserva copias de todo lo entregado.</li>
        <li>Durante tu estancia, mantente <strong>matriculado y asistente</strong> para renovar sin problemas.</li>
        <li>Planifica tu transición al trabajo: adapta tu CV al mercado español, aprende idioma o mejora niveles, participa en prácticas que ofrecemos.</li>
      </ul>

      <h2>7. Conclusión: tu futuro empieza hoy en España</h2>
      <p>Estudiar en España no solo es una oportunidad académica — es una <strong>puerta a tu carrera profesional y residencia en Europa</strong>. Con un visado de estudios correctamente gestionado, y la formación adecuada, puedes estudiar, trabajar y construir tu vida en España.</p>
      <p>📌 ¿Quieres dar el primer paso? Contáctanos ahora y descubre cómo nuestros cursos te abren la vía hacia el visado, la residencia y el empleo en España.</p>
    `,
    fecha: '2025-01-17',
    autor: 'Equipo Educar Sin Fronteras',
    categoria: 'visado',
    imagen: new URL('@/assets/blog/visado-estudios-espana.jpg', import.meta.url).href,
    destacado: true,
    tags: ['visado', 'estudiante', 'trabajo', 'España 2025', 'formación oficial']
  },
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
