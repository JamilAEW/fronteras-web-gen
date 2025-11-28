import { Helmet } from 'react-helmet';

interface OrganizationSchemaProps {
  name?: string;
  description?: string;
  url?: string;
  logo?: string;
  sameAs?: string[];
}

export const OrganizationSchema = ({
  name = 'Educar Sin Fronteras',
  description = 'Centro de formación especializado en cursos para visado, estancia por estudios y arraigo socioformativo en Madrid',
  url = 'https://educarsinfronteras.es',
  logo = 'https://educarsinfronteras.es/logo.webp',
  sameAs = [],
}: OrganizationSchemaProps) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name,
    description,
    url,
    logo,
    sameAs,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Calle Doctor Esquerdo, 6',
      addressLocality: 'Madrid',
      postalCode: '28028',
      addressCountry: 'ES',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+34-658-40-39-06',
      contactType: 'Admissions',
      email: 'info@educarsinfronteras.es',
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

interface CourseSchemaProps {
  name: string;
  description: string;
  provider?: string;
  url: string;
  duration?: string;
  courseMode?: string;
}

export const CourseSchema = ({
  name,
  description,
  provider = 'Educar Sin Fronteras',
  url,
  duration,
  courseMode = 'blended',
}: CourseSchemaProps) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: provider,
      sameAs: 'https://educarsinfronteras.es',
    },
    url,
    courseMode,
    ...(duration && { timeRequired: duration }),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

interface FAQSchemaProps {
  faqs: Array<{ pregunta: string; respuesta: string }>;
}

export const FAQSchema = ({ faqs }: FAQSchemaProps) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.pregunta,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.respuesta,
      },
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

interface LocalBusinessSchemaProps {
  name: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
  };
  telephone?: string;
  email?: string;
}

export const LocalBusinessSchema = ({ name, address, telephone, email }: LocalBusinessSchemaProps) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name,
    address: {
      '@type': 'PostalAddress',
      ...address,
      addressCountry: 'ES',
    },
    ...(telephone && { telephone }),
    ...(email && { email }),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};
