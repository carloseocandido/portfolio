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
    "I build APIs and backend systems driven by business rules, focused on quality, maintainability, and performance.",
  summary:
    "I am a Backend Developer specialized in Node.js and TypeScript, focused on building REST APIs, modeling business rules, and developing robust, performant, and maintainable applications.",
  ctaLabel:
    "Focused on software architecture, code quality, and scalable systems.",
} as const;

export const aboutParagraphs = [
  "I currently work as a Backend Developer, mainly using Node.js and TypeScript to build APIs, business rules, integrations, and data-oriented services.",
  "I like to understand the problem before choosing the technology. In development, I aim to keep responsibilities well defined and create solutions that remain easy to understand and modify as the system grows.",
  "My career went through support, Delphi development and relational databases, QA Automation with Python and Selenium, and later backend development. Each stage contributed to how I analyze problems and make technical decisions today.",
  "My QA experience is especially important to the way I develop: I think about testability, regressions, and reliability not only after the code is ready, but throughout implementation.",
] as const;

export const aboutHighlights = [
  "Node.js and TypeScript",
  "REST APIs and business rules",
  "Architecture and low coupling",
  "Testability and quality",
] as const;

export const techCategories: TechCategory[] = [
  {
    title: "Backend",
    description:
      "Technologies I use to build APIs, services, and business rules.",
    items: [
      { name: "Node.js" },
      { name: "TypeScript" },
      { name: "Express" },
      { name: "Fastify" },
    ],
  },
  {
    title: "Databases",
    description:
      "Experience with relational databases, data modeling, and SQL queries.",
    items: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "SQL Server" },
      { name: "SQL" },
    ],
  },
  {
    title: "Data Access",
    description: "Different approaches to persistence and typed data access.",
    items: [{ name: "Drizzle ORM" }, { name: "Knex" }, { name: "Sequelize" }],
  },
  {
    title: "Testing",
    description:
      "Experience with automated testing and software quality assurance.",
    items: [
      { name: "Vitest" },
      { name: "Jest" },
      { name: "pytest" },
      { name: "Selenium" },
      { name: "E2E" },
    ],
  },
  {
    title: "Architecture",
    description:
      "Principles used to keep code organized, testable, and loosely coupled.",
    items: [
      { name: "Clean Architecture" },
      { name: "DDD" },
      { name: "SOLID" },
      { name: "Repository Pattern" },
      { name: "Dependency Injection" },
    ],
  },
  {
    title: "Infrastructure",
    description: "Tools used to develop, run, and deliver applications.",
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
    period: "Oct 2024 - present",
    summary:
      "My journey at Bloom started in QA Automation and evolved into backend development. I currently work on building and evolving APIs, business rules, integrations, and data persistence, with a focus on quality, maintainability, and performance.",
    highlights: [
      "Node.js",
      "TypeScript",
      "REST APIs",
      "Databases",
      "Testing",
      "Architecture",
    ],
    tone: "primary",
    timeline: [
      {
        title: "Software Quality Assurance Tester",
        period: "Oct 2024 - Mar 2025 · 6 months",
        summary:
          "Worked with functional testing and automation of critical scenarios using Python, Selenium, and pytest. Experience identifying regressions, validating flows, and creating automations to increase delivery reliability.",
        highlights: ["Python", "Selenium", "pytest", "QA Automation"],
      },
      {
        title: "Software Developer",
        period: "Mar 2025 - present",
        summary:
          "Backend development with Node.js and TypeScript, working on APIs, business rules, integrations, and data persistence. Experience with different backend architectures and technologies, including Express, MySQL, Knex, and Sequelize.",
        highlights: ["TypeScript", "Node.js", "Express", "MySQL"],
      },
    ],
    logoSrc: bloomLogo,
    logoAlt: "Bloom",
  },
  {
    title: "Developer",
    company: "Desoft7",
    period: "Oct 2023 - Oct 2024 · 1 year 1 month",
    summary:
      "Worked on the development and maintenance of systems, focusing on problem correction, improvements, and optimization of existing solutions. Experience with SQL Server and integration with external services through APIs and web services.",
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
      "Backend platform developed in a monorepo, focused on business rules, REST APIs, typed persistence, and an architecture prepared for evolution.",
    challenge:
      "Organize different system responsibilities without creating excessive coupling between the domain, application, infrastructure, and external interfaces.",
    solution:
      "Architecture based on use cases, repositories, and dependency injection using TypeScript, Fastify, PostgreSQL, and Drizzle ORM.",
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
      "Backend application with payment integration and credit management, involving communication with external services and state synchronization.",
    challenge:
      "Ensure consistency when processing payments and updating credits even when confirmations are asynchronous.",
    solution:
      "Integration with an external API, webhook processing, and reconciliation mechanisms to keep payment and credit state consistent.",
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
    title: "Inventory and COGS system",
    summary:
      "Backend system for inventory operations, products, technical sheets, transformations, and cost calculation in restaurant contexts.",
    challenge:
      "Model business rules involving products, units, transformations, storage, technical sheets, and history without compromising data consistency.",
    solution:
      "Implementation of business rules, repositories, and SQL queries using Knex, focused on data consistency and operational performance.",
    stack: ["TypeScript", "Node.js", "Express", "MySQL", "Knex", "SQL"],
  },
];

export const architectureTopics: ArchitectureTopic[] = [
  {
    title: "REST APIs",
    summary:
      "Clear HTTP contracts, input validation, and well-defined responsibilities between layers.",
  },
  {
    title: "Validation",
    summary:
      "External data is validated before reaching business rules and persistence.",
  },
  {
    title: "Authentication",
    summary:
      "Access control is treated as part of the application, keeping security and responsibilities well defined.",
  },
  {
    title: "Testing",
    summary:
      "Use cases and business rules are structured to allow fast tests independent of infrastructure.",
  },
  {
    title: "Persistence",
    summary:
      "Data access is isolated from business rules, allowing different persistence strategies.",
  },
];

export const contactFields: ContactField[] = [
  { id: "name", label: "Name", type: "text", placeholder: "Your name" },
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "you@example.com",
  },
  {
    id: "message",
    label: "Message",
    type: "text",
    placeholder: "Describe the context of your message",
    multiline: true,
  },
];
