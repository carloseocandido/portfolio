const es = {
  translation: {
    language: "Idioma",
    scrollToTop: "Volver arriba",
    settings: "Configuración",
    appearance: "Apariencia",
    light: "Claro",
    dark: "Oscuro",
    theme: {
      light: "Cambiar al tema claro",
      dark: "Cambiar al tema oscuro",
    },
    profile: "perfil",
    backendDeveloper: "Desarrollador Backend",
    viewProjects: "Ver proyectos",
    contact: "Contactar",
    engineering: "ingeniería",
    backendBuiltToEvolve: "Backend preparado para evolucionar",
    differentiator: "Diferencial",
    heroStackDescription:
      "Node.js, TypeScript, Express, Fastify, MySQL y PostgreSQL, trabajando con diferentes enfoques de persistencia.",
    heroDifferentiatorDescription:
      "Experiencia en desarrollo y QA, aportando atención a la testabilidad, confiabilidad y calidad desde la implementación.",
    aboutCardTitle: "Experiencia en desarrollo y calidad",
    aboutCardDescription:
      "Mi experiencia anterior en QA Automation influye directamente en mi forma de desarrollar backend: pienso en testabilidad, regresiones, contratos y confiabilidad desde la implementación.",
    stack: "Stack",
    about: "Sobre mí",
    experience: "Experiencia",
    projects: "Proyectos",
    architecture: "Arquitectura",
    contactSection: "Contacto",
    navigation: {
      about: "Sobre mí",
      stack: "Stack",
      experience: "Experiencia",
      projects: "Proyectos",
      architecture: "Arquitectura",
      contact: "Contacto",
    },
    sections: {
      aboutTitle:
        "Un perfil profesional orientado al backend, la arquitectura y la calidad de software.",
      aboutDescription:
        "Las experiencias anteriores en soporte, desarrollo de escritorio y QA Automation formaron la base de mi especialización actual en Backend.",
      stackTitle: "Una base técnica organizada por contexto, no por moda.",
      stackDescription:
        "Las tecnologías están separadas por función para mostrar cómo cada capa contribuye a una entrega backend consistente y escalable.",
      experienceTitle:
        "De la calidad al backend: una trayectoria construida en la práctica.",
      experienceDescription:
        "Mi experiencia en soporte, desarrollo y QA influye directamente en cómo construyo y mantengo sistemas backend hoy.",
      projectsTitle:
        "Estructuras preparadas para representar trabajo backend real o recibir tus futuros proyectos.",
      projectsDescription:
        "La sección evita inventar información y queda preparada para los proyectos que quieras destacar posteriormente.",
      architectureTitle: "Cómo estructuro sistemas backend",
      architectureDescription:
        "Más que seguir patrones por convención, busco separar responsabilidades para mantener las reglas de negocio testeables, independientes y fáciles de evolucionar.",
      contactTitle:
        "Contacto directo para conversaciones sobre backend, arquitectura y calidad.",
      contactDescription:
        "Utiliza los canales siguientes para hablar sobre oportunidades, proyectos o intercambio técnico de forma objetiva.",
    },
    cards: {
      challenge: "Desafío",
      solution: "Solución",
      sendMessage: "Enviar mensaje",
      directEmail: "Email directo",
      channels: "Canales",
      message: "Mensaje",
      name: "Nombre",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "tu@ejemplo.com",
      messagePlaceholder: "Describe el contexto del contacto",
    },
    footer:
      "Portafolio enfocado en desarrollo backend, arquitectura de software, calidad de código y sistemas escalables.",
    mail: {
      subject: "Contacto desde el portafolio",
      newProject: "Nuevo proyecto",
      name: "Nombre",
      email: "Email",
    },
    architectureDetails: {
      flow: "Flujo de una solicitud",
      flowTitle: "HTTP → aplicación → dominio → persistencia",
      flowDescription:
        "La idea es evitar que las reglas de negocio queden acopladas al framework HTTP o a la base de datos.",
      controllerDescription:
        "Recibe la solicitud, valida los datos de entrada y deriva la operación.",
      useCaseDescription:
        "Orquesta la operación y concentra las reglas de la aplicación.",
      domainDescription:
        "Representa las reglas y comportamientos que pertenecen al negocio.",
      repositoryDescription:
        "Abstrae la persistencia y evita que la regla de negocio dependa directamente de la base de datos.",
      infrastructureDescription:
        "Implementa detalles externos como ORM, bases de datos, APIs y otros servicios.",
      principles: "Principios",
      couplingTitle: "El objetivo es reducir el acoplamiento",
      couplingDescription:
        "Los frameworks y las herramientas pueden cambiar. La regla de negocio no debería tener que reescribirse cada vez que eso ocurre.",
      practical: "En la práctica",
      adaptedTitle: "Arquitectura adaptada al proyecto",
      adaptedDescription:
        "He trabajado con diferentes combinaciones de frameworks y persistencia, eligiendo el enfoque según el contexto de la aplicación.",
    },
    contactDetails: {
      channelsTitle: "GitHub, LinkedIn y email",
      channelsDescription:
        "Si la conversación involucra backend, integración, arquitectura o calidad de software, puedes utilizar estos canales:",
    },
    menu: {
      close: "Cerrar menú",
      open: "Abrir menú",
      home: "Ir al inicio de la página",
    },
  },
} as const;

export default es;
