export interface AboutContent {
  mision: string;
  vision: string;
  quienesSomos: string[];
  acreditaciones: {
    titulo: string;
    descripcion: string;
    tipo: 'visado' | 'arraigo';
  }[];
  ctas: {
    primary: { texto: string; href: string };
    secondary: { texto: string; href: string };
  };
}

export const aboutData: AboutContent = {
  mision:
    'En Educar Sin Fronteras, nuestra misión es ser el puente que conecta tus aspiraciones de vida y desarrollo profesional en España con la realidad. Nos dedicamos a ofrecer una formación de alta calidad y un acompañamiento experto para estudiantes y profesionales internacionales, facilitando su integración legal, laboral y social en el país.',
  vision:
    'Creemos firmemente que la educación es la llave para derribar barreras y abrir nuevas oportunidades sin importar tu origen.',
  quienesSomos: [
    'Nos enfocamos en el bienestar educativo, social y económico de nuestros estudiantes. Ofrecemos cursos de arraigo socioformativo, que permiten regularizar la residencia en España a personas con más de dos años en el país y sin antecedentes penales.',
    'La inscripción es sencilla: solo necesitas tu pasaporte y realizar la matrícula. Nuestros cursos tienen horarios de fin de semana, lo que facilita la asistencia sin interferir con tus actividades diarias.',
    'Ofrecemos financiación directa sin intereses, adaptada a tu situación económica. Nuestros programas tienen una alta tasa de aprobación y están diseñados para que completes tu formación con éxito.',
    'Con sede en Madrid y amplia experiencia en el sector educativo, hemos ayudado a muchos estudiantes a mejorar su calidad de vida y regularizar su situación legal en España.',
  ],
  acreditaciones: [
    {
      titulo: 'Visado y Estancias por Estudios',
      descripcion:
        'Somos la mejor academia de formación para tu proceso de visado o estancia por estudios. Con la certificación de la Universidad EUNEIZ, nuestros cursos cumplen todos los requisitos legales exigidos para obtener tu visado o estancia por estudios en España.',
      tipo: 'visado',
    },
    {
      titulo: 'Arraigo Socioformativo',
      descripcion:
        'Contamos con certificación oficial otorgada por la Comunidad de Madrid y el SEPE, garantizando que nuestros certificados de profesionalidad cumplen con toda la normativa vigente para procesos de arraigo socioformativo.',
      tipo: 'arraigo',
    },
  ],
  ctas: {
    primary: {
      texto: 'Habla con un asesor',
      href: '/contacto',
    },
    secondary: {
      texto: 'Ver cursos',
      href: '/#cursos',
    },
  },
};
