export const courses = [
  {
    id: 'maquillaje-social',
    slug: 'maquillaje-social',
    title: 'Especialización en Maquillaje Social',
    shortTitle: 'Maquillaje Social',
    subtitle:
      'Domina piel, ojos, cejas, labios, contorno y looks para día, noche y fotografía.',
    targetAudience:
      'Principiantes y maquilladoras que quieren ofrecer servicio a clientas.',
    durationEstimate: '8-10 semanas',
    image: '/images/course-bridal-makeup.webp',
    imageAlt: 'Aplicación profesional de maquillaje social sobre clienta',
    modules: [
      'Fundamentos Mercedes adaptados a clienta',
      'Look de día',
      'Look de noche y fiesta',
      'Editorial y fotografía',
      'Negocio y protocolo de atención'
    ]
  },
  {
    id: 'especializacion-novias',
    slug: 'maquillaje-de-novias',
    title: 'Especialización en Maquillaje de Novias',
    shortTitle: 'Maquillaje de Novias',
    subtitle:
      'Aprende técnica, protocolo, prueba de novia, piel de larga duración y negocio de bodas.',
    targetAudience:
      'Maquilladoras que quieren especializarse en el mercado de bodas.',
    durationEstimate: '8 semanas',
    image: '/images/course-novias-real.webp',
    imageAlt: 'Maquillaje profesional para novia en preparación de boda',
    modules: [
      'Consulta y psicología de la novia',
      'Piel de porcelana y larga duración',
      'Looks natural, clásico y glam',
      'Kit de emergencia',
      'Paquetes, precios y alianzas'
    ]
  },
  {
    id: 'master-peinado',
    slug: 'master-peinado-profesional',
    title: 'Master en Peinado Profesional',
    shortTitle: 'Peinado Profesional',
    subtitle:
      'Complementa tu servicio con ondas, recogidos, trenzas, novias, eventos y venta cruzada.',
    targetAudience:
      'Maquilladoras y peinadoras que buscan ampliar su oferta de servicios.',
    durationEstimate: '10-12 semanas',
    image: '/images/course-peinado-real.webp',
    imageAlt: 'Peinado profesional para novias y eventos',
    modules: [
      'Herramientas y brushing',
      'Ondas y coletas con volumen',
      'Recogidos y trenzas',
      'Novias y eventos',
      'Negocio del peinado'
    ]
  }
] as const;
