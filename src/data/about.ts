// ==========================================
// INTERFAZ DE TIPOS (TypeScript)
// ==========================================
// Define la estructura de datos para la página "Quiénes Somos"
// Esto asegura que los datos tengan el formato correcto

export interface AboutContent {
  // ========================================
  // MISIÓN Y VISIÓN
  // ========================================
  mision: string;   // Texto de la misión de la empresa (string simple)
  vision: string;   // Texto de la visión de la empresa (string simple)
  
  // ========================================
  // SECCIÓN "¿QUIÉNES SOMOS?"
  // ========================================
  quienesSomos: string[];  // Array de strings, cada uno es un párrafo
  
  // ========================================
  // GARANTÍAS Y ACREDITACIONES
  // ========================================
  acreditaciones: {
    titulo: string;           // Título de la acreditación
    descripcion: string;      // Descripción detallada
    tipo: 'visado' | 'arraigo';  // Solo puede ser 'visado' o 'arraigo' (define el color del badge)
  }[];  // Array de objetos, cada uno es una acreditación
  
  // ========================================
  // BOTONES DE LLAMADA A LA ACCIÓN (CTAs)
  // ========================================
  ctas: {
    primary: { texto: string; href: string };    // Botón principal (con icono)
    secondary: { texto: string; href: string };  // Botón secundario (outline)
  };
}

// ==========================================
// DATOS DE CONTENIDO
// ==========================================
// ESTE ES EL ARCHIVO PRINCIPAL PARA MODIFICAR TEXTOS
// Cambia aquí los textos sin necesidad de tocar componentes

export const aboutData: AboutContent = {
  // ========================================
  // MISIÓN (aparece en la primera tarjeta)
  // ========================================
  // MODIFICAR: Cambia el texto aquí para actualizar la misión
  mision:
    'En Educar Sin Fronteras, nuestra misión es ser el puente que conecta tus aspiraciones de vida y desarrollo profesional en España con la realidad. Nos dedicamos a ofrecer una formación de alta calidad y un acompañamiento experto para estudiantes y profesionales internacionales, facilitando su integración legal, laboral y social en el país.',
  
  // ========================================
  // VISIÓN (aparece en la segunda tarjeta)
  // ========================================
  // MODIFICAR: Cambia el texto aquí para actualizar la visión
  vision:
    'Creemos firmemente que la educación es la llave para derribar barreras y abrir nuevas oportunidades sin importar tu origen.',
  
  // ========================================
  // SECCIÓN "¿QUIÉNES SOMOS?"
  // ========================================
  // Array de párrafos que se muestran en la sección principal
  // AGREGAR PÁRRAFO: Añade un nuevo string al array
  // ELIMINAR PÁRRAFO: Quita un elemento del array
  // MODIFICAR PÁRRAFO: Cambia el texto del string correspondiente
  quienesSomos: [
    // Párrafo 1
    'Nos enfocamos en el bienestar educativo, social y económico de nuestros estudiantes. Ofrecemos cursos de arraigo socioformativo, que permiten regularizar la residencia en España a personas con más de dos años en el país y sin antecedentes penales.',
    
    // Párrafo 2
    'La inscripción es sencilla: solo necesitas tu pasaporte y realizar la matrícula. Nuestros cursos tienen horarios de fin de semana, lo que facilita la asistencia sin interferir con tus actividades diarias.',
    
    // Párrafo 3
    'Ofrecemos financiación directa sin intereses, adaptada a tu situación económica. Nuestros programas tienen una alta tasa de aprobación y están diseñados para que completes tu formación con éxito.',
    
    // Párrafo 4
    'Con sede en Madrid y amplia experiencia en el sector educativo, hemos ayudado a muchos estudiantes a mejorar su calidad de vida y regularizar su situación legal en España.',
  ],
  
  // ========================================
  // GARANTÍAS Y ACREDITACIONES
  // ========================================
  // Array de objetos, cada uno representa una acreditación
  // AGREGAR ACREDITACIÓN: Añade un nuevo objeto al array
  // ELIMINAR ACREDITACIÓN: Quita un objeto del array
  acreditaciones: [
    // ========================================
    // Acreditación 1: VISADO
    // ========================================
    {
      titulo: 'Visado y Estancias por Estudios',
      descripcion:
        'Somos la mejor academia de formación para tu proceso de visado o estancia por estudios. Con la certificación de la Universidad EUNEIZ, nuestros cursos cumplen todos los requisitos legales exigidos para obtener tu visado o estancia por estudios en España.',
      tipo: 'visado',  // Tipo 'visado' muestra badge amarillo (brand-yellow)
    },
    
    // ========================================
    // Acreditación 2: ARRAIGO
    // ========================================
    {
      titulo: 'Arraigo Socioformativo',
      descripcion:
        'Contamos con certificación oficial otorgada por la Comunidad de Madrid y el SEPE, garantizando que nuestros certificados de profesionalidad cumplen con toda la normativa vigente para procesos de arraigo socioformativo.',
      tipo: 'arraigo',  // Tipo 'arraigo' muestra badge rojo (brand-red)
    },
  ],
  
  // ========================================
  // BOTONES DE LLAMADA A LA ACCIÓN (CTAs)
  // ========================================
  // Dos botones que aparecen al final de la página
  ctas: {
    // Botón principal (color primary, con icono de cohete)
    primary: {
      texto: 'Habla con un asesor',  // Texto del botón
      href: '/contacto',              // Ruta a la que lleva el botón
    },
    
    // Botón secundario (estilo outline, sin fondo)
    secondary: {
      texto: 'Ver cursos',  // Texto del botón
      href: '/#cursos',     // Ruta a la que lleva el botón (ancla a sección de cursos)
    },
  },
};
