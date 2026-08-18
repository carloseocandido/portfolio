import type {
  ArchitectureTopic,
  ContactField,
  ExperienceItem,
  ProjectItem,
  TechCategory,
} from "../types/portfolio";
import bloomLogo from "../assets/logos/thebloom_group_logo.jpeg";
import desoftLogo from "../assets/logos/desoft7_logo.jpeg";

export const siteContent = {
  name: "Carlos",
  roles: ["Backend Developer", "Node.js Developer"],
  headline:
    "Construyo APIs y sistemas backend orientados a reglas de negocio, con foco en calidad, mantenimiento y rendimiento.",
  summary:
    "Trabajo principalmente con Node.js y TypeScript, desarrollando APIs REST, integraciones, reglas de negocio y soluciones orientadas a datos. Mi experiencia anterior en QA Automation también influye en mi forma de pensar en pruebas, confiabilidad y mantenimiento del software.",
  ctaLabel:
    "Enfoque en arquitectura de software, calidad de código y sistemas escalables.",
} as const;

export const aboutParagraphs = [
  "Actualmente trabajo como Backend Developer, utilizando principalmente Node.js y TypeScript para construir APIs, reglas de negocio, integraciones y servicios orientados a datos.",
  "Me gusta entender el problema antes de elegir la tecnología. En el desarrollo, busco mantener las responsabilidades bien definidas y crear soluciones que sigan siendo fáciles de entender y modificar a medida que el sistema crece.",
  "Mi trayectoria pasó por soporte, desarrollo con Delphi y bases de datos relacionales, QA Automation con Python y Selenium y, posteriormente, desarrollo backend. Cada etapa contribuyó a la forma en que hoy analizo problemas y tomo decisiones técnicas.",
  "La experiencia en QA es especialmente importante en mi forma de desarrollar: pienso en testabilidad, regresiones y confiabilidad no solo después de que el código está listo, sino durante la propia implementación.",
] as const;

export const aboutHighlights = [
  "Node.js y TypeScript",
  "APIs REST y reglas de negocio",
  "Arquitectura y bajo acoplamiento",
  "Testabilidad y calidad",
] as const;

export const techCategories: TechCategory[] = [
  {
    title: "Backend",
    description:
      "Tecnologías que utilizo para construir APIs, servicios y reglas de negocio.",
    items: [
      { name: "Node.js" },
      { name: "TypeScript" },
      { name: "Express" },
      { name: "Fastify" },
    ],
  },
  {
    title: "Bases de datos",
    description:
      "Experiencia con bases de datos relacionales, modelado de datos y consultas SQL.",
    items: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "SQL Server" },
      { name: "SQL" },
    ],
  },
  {
    title: "Acceso a datos",
    description:
      "Diferentes enfoques para persistencia y acceso tipado a los datos.",
    items: [{ name: "Drizzle ORM" }, { name: "Knex" }, { name: "Sequelize" }],
  },
  {
    title: "Pruebas",
    description:
      "Experiencia con pruebas automatizadas y garantía de calidad de software.",
    items: [
      { name: "Vitest" },
      { name: "Jest" },
      { name: "pytest" },
      { name: "Selenium" },
      { name: "E2E" },
    ],
  },
  {
    title: "Arquitectura",
    description:
      "Principios utilizados para mantener el código organizado, testeable y con bajo acoplamiento.",
    items: [
      { name: "Clean Architecture" },
      { name: "DDD" },
      { name: "SOLID" },
      { name: "Repository Pattern" },
      { name: "Dependency Injection" },
    ],
  },
  {
    title: "Infraestructura",
    description:
      "Herramientas utilizadas para desarrollar, ejecutar y entregar aplicaciones.",
    items: [
      { name: "Docker" },
      { name: "Git" },
      { name: "GitHub Actions" },
      { name: "Redis" },
      { name: "CI/CD" },
    ],
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    title: "Bloom",
    company: "Bloom",
    period: "oct de 2024 - actualidad",
    summary:
      "Mi trayectoria en Bloom comenzó en QA Automation y evolucionó hacia el desarrollo backend. Actualmente trabajo en la construcción y evolución de APIs, reglas de negocio, integraciones y persistencia de datos, con foco en calidad, mantenimiento y rendimiento.",
    highlights: [
      "Node.js",
      "TypeScript",
      "APIs REST",
      "Bases de datos",
      "Pruebas",
      "Arquitectura",
    ],
    tone: "primary",
    timeline: [
      {
        title: "Software Quality Assurance Tester",
        period: "oct de 2024 - mar de 2025 · 6 meses",
        summary:
          "Trabajo con pruebas funcionales y automatización de escenarios críticos utilizando Python, Selenium y pytest. Experiencia en identificación de regresiones, validación de flujos y creación de automatizaciones para aumentar la confiabilidad de las entregas.",
        highlights: ["Python", "Selenium", "pytest", "QA Automation"],
      },
      {
        title: "Software Developer",
        period: "mar de 2025 - actualidad",
        summary:
          "Desarrollo backend con Node.js y TypeScript, trabajando en la implementación de APIs, reglas de negocio, integraciones y persistencia de datos. Experiencia con diferentes arquitecturas y tecnologías backend, incluyendo Express, Fastify, MySQL, PostgreSQL, Knex, Sequelize y Drizzle ORM.",
        highlights: [
          "TypeScript",
          "Node.js",
          "Express",
          "Fastify",
          "MySQL",
          "PostgreSQL",
          "Drizzle ORM",
        ],
      },
    ],
    logoSrc: bloomLogo,
    logoAlt: "Bloom",
  },
  {
    title: "Desarrollador",
    company: "Desoft7",
    period: "oct de 2023 - oct de 2024 · 1 año 1 mes",
    summary:
      "Trabajo en el desarrollo y mantenimiento de sistemas, con foco en la corrección de problemas, implementación de mejoras y optimización de soluciones existentes. Experiencia con SQL Server e integración con servicios externos mediante APIs y servicios web.",
    highlights: [
      "Delphi",
      "SQL Server",
      "SOAP",
      "JSON",
      "APIs",
      "Scrum",
      "Kanban",
    ],
    tone: "neutral",
    logoSrc: desoftLogo,
    logoAlt: "Desoft7",
  },
];

export const projectItems: ProjectItem[] = [
  {
    title: "Tag Royale",
    summary:
      "Plataforma backend desarrollada en un monorepo, enfocada en reglas de negocio, APIs REST, persistencia tipada y una arquitectura preparada para evolucionar.",
    challenge:
      "Organizar las diferentes responsabilidades del sistema sin crear un acoplamiento excesivo entre dominio, aplicación, infraestructura e interfaces externas.",
    solution:
      "Arquitectura basada en casos de uso, repositorios e inyección de dependencias, utilizando TypeScript, Fastify, PostgreSQL y Drizzle ORM.",
    stack: [
      "TypeScript",
      "Node.js",
      "Fastify",
      "PostgreSQL",
      "Drizzle ORM",
      "Docker",
    ],
  },
  {
    title: "Farol",
    summary:
      "Aplicación backend con integración de pagos y gestión de créditos, que involucra comunicación con servicios externos y sincronización de estado.",
    challenge:
      "Garantizar la consistencia en el procesamiento de pagos y la actualización de créditos incluso ante confirmaciones asíncronas.",
    solution:
      "Implementación de integración con una API externa, procesamiento de webhooks y mecanismos de reconciliación para mantener consistente el estado de pagos y créditos.",
    stack: [
      "JavaScript",
      "Node.js",
      "Express",
      "MySQL",
      "Sequelize",
      "Webhooks",
    ],
  },
  {
    title: "Sistema de inventario y CMV",
    summary:
      "Sistema backend para operaciones de inventario, productos, fichas técnicas, transformaciones y cálculo de costos en contextos de restaurantes.",
    challenge:
      "Modelar reglas de negocio relacionadas con productos, unidades, transformaciones, almacenamiento, fichas técnicas e historial sin comprometer la consistencia de los datos.",
    solution:
      "Implementación de reglas de negocio, repositorios y consultas SQL utilizando Knex, con foco en consistencia de datos y rendimiento de las operaciones.",
    stack: ["TypeScript", "Node.js", "Express", "MySQL", "Knex", "SQL"],
  },
];

export const architectureTopics: ArchitectureTopic[] = [
  {
    title: "REST APIs",
    summary:
      "Contratos HTTP claros, validación de entrada y responsabilidades bien definidas entre las capas.",
  },
  {
    title: "Validación",
    summary:
      "Los datos externos se validan antes de llegar a las reglas de negocio y la persistencia.",
  },
  {
    title: "Autenticación",
    summary:
      "El control de acceso se trata como parte de la aplicación, manteniendo la seguridad y las responsabilidades bien definidas.",
  },
  {
    title: "Pruebas",
    summary:
      "Los casos de uso y las reglas de negocio se estructuran para permitir pruebas rápidas e independientes de la infraestructura.",
  },
  {
    title: "Persistencia",
    summary:
      "El acceso a los datos se mantiene aislado de las reglas de negocio, permitiendo trabajar con diferentes estrategias de persistencia.",
  },
];

export const contactFields: ContactField[] = [
  { id: "name", label: "Nombre", type: "text", placeholder: "Tu nombre" },
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "tu@ejemplo.com",
  },
  {
    id: "message",
    label: "Mensaje",
    type: "text",
    placeholder: "Describe el contexto del contacto",
    multiline: true,
  },
];
