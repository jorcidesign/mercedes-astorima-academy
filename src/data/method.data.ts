export const methodology = {
  name: 'Método ESENCIA',
  eyebrow: 'Nuestro método',
  intro:
    'El método que enseña a maquillar personas reales, no rostros perfectos.',
  origin:
    'Nace del lema de Mercedes: “Te enseñaré a resaltar la belleza, tu esencia”. Su diferencial es la personalización constante: según tipo de piel, edad, morfología, pigmentación y ocasión.',
  quote: 'Te enseñaré a resaltar la belleza, tu esencia.',
  quoteAuthor: 'Mercedes Astorima',
  quoteSupport:
    'Cada técnica se enseña según piel, edad, morfología y momento. Nunca de forma genérica.',
  pillars: [
    {
      id: 'diagnostica',
      number: '01',
      icon: 'diagnose',
      title: 'Diagnostica',
      description:
        'Analizamos tipo de piel, edad, morfología y pigmentación antes de tocar un solo producto.'
    },
    {
      id: 'personaliza',
      number: '02',
      icon: 'personalize',
      title: 'Personaliza',
      description:
        'Adaptamos cada técnica al rostro real que tienes frente a ti y al momento: día, noche, evento o cámara.'
    },
    {
      id: 'practica',
      number: '03',
      icon: 'practice',
      title: 'Practica',
      description:
        'Aplicas lo aprendido con ejercicios guiados y entregables que empiezan a construir tu portafolio.'
    },
    {
      id: 'feedback',
      number: '04',
      icon: 'feedback',
      title: 'Recibe feedback',
      description:
        'Resuelves dudas en la comunidad de WhatsApp y en sesiones en vivo mensuales con Mercedes.'
    },
    {
      id: 'certifica',
      number: '05',
      icon: 'certify',
      title: 'Certifícate y emprende',
      description:
        'Te certificas y sales con kit, precios y portafolio listos para atraer tus primeras clientas.'
    }
  ],
  frameworkPillars: [
    {
      name: 'Técnica Personalizada',
      description:
        'Diagnóstico antes que técnica: tipo de piel, morfología, edad y pigmentación.'
    },
    {
      name: 'Estilo Según Ocasión',
      description:
        'Looks adaptados al contexto real: día, noche, evento, cámara o boda.'
    },
    {
      name: 'Negocio y Presencia Digital',
      description:
        'Cómo cobrar, armar portafolio, preparar kit profesional y atraer clientas.'
    },
    {
      name: 'Comunidad Mercedes',
      description:
        'WhatsApp, feedback directo, Q&A mensual y acompañamiento entre alumnas.'
    }
  ]
} as const;
