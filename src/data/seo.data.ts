import { academy } from './academy.data';
import { courses } from './courses.data';
import { faqs } from './faq.data';

export const seo = {
  title: 'Mercedes Astorima Academy | Maquillaje y Peinado Profesional',
  description: academy.description,
  canonical: '/',
  image: '/images/hero-mercedes-real-desktop.webp',
  themeColor: '#7d3f66'
} as const;

export const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: academy.name,
    description: academy.description,
    url: 'https://mercedesastorima.academy/',
    founder: {
      '@type': 'Person',
      name: academy.founder,
      jobTitle: academy.founderTitle
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: academy.name,
    url: 'https://mercedesastorima.academy/',
    logo: 'https://mercedesastorima.academy/favicon.svg'
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Cursos Mercedes Astorima Academy',
    itemListElement: courses.map((course, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Course',
        name: course.title,
        description: course.subtitle,
        provider: {
          '@type': 'EducationalOrganization',
          name: academy.name
        }
      }
    }))
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: 'https://mercedesastorima.academy/'
      }
    ]
  }
];
