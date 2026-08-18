import type {
  ArchitectureTopic,
  ContactField,
  ExperienceItem,
  NavigationItem,
  ProjectItem,
  SocialLink,
  TechCategory,
} from "../types/portfolio";
import bloomLogo from "../assets/logos/thebloom_group_logo.jpeg";
import desoftLogo from "../assets/logos/desoft7_logo.jpeg";

export const siteContent = {
  name: "Carlos",
  roles: ["Backend Developer", "Node.js Developer"],
  headline:
    "Construo APIs e sistemas backend orientados a regras de negócio, com foco em qualidade, manutenção e performance.",
  summary:
    "Sou Desenvolvedor Backend especializado em Node.js e TypeScript, com atuação voltada à construção de APIs REST, modelagem de regras de negócio e desenvolvimento de aplicações robustas, performáticas e de fácil manutenção.",
  ctaLabel:
    "Foco em arquitetura de software, qualidade de código e sistemas escaláveis.",
} as const;

export const navigationItems: NavigationItem[] = [
  { label: "Sobre", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Experiência", href: "#experience" },
  { label: "Projetos", href: "#projects" },
  { label: "Arquitetura", href: "#architecture" },
  { label: "Contato", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/carloseocandido",
    icon: "code",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/carlos-candido/",
    icon: "business_center",
    external: true,
  },
  {
    label: "Email",
    href: "mailto:carloseocandido@gmail.com",
    icon: "mail",
  },
];

export const heroLinks = {
  github: socialLinks[0].href,
  linkedin: socialLinks[1].href,
  email: socialLinks[2].href,
} as const;

export const aboutParagraphs = [
  "Atualmente trabalho como Backend Developer, utilizando principalmente Node.js e TypeScript para construir APIs, regras de negócio, integrações e serviços orientados a dados.",

  "Gosto de entender o problema antes de escolher a tecnologia. No desenvolvimento, busco manter as responsabilidades bem definidas e criar soluções que continuem fáceis de entender e modificar conforme o sistema cresce.",

  "Minha trajetória passou por suporte, desenvolvimento com Delphi e bancos relacionais, QA Automation com Python e Selenium e, posteriormente, desenvolvimento backend. Cada etapa contribuiu para a forma como hoje analiso problemas e tomo decisões técnicas.",

  "A experiência em QA é especialmente importante na minha forma de desenvolver: penso em testabilidade, regressões e confiabilidade não apenas depois que o código está pronto, mas durante a própria implementação.",
] as const;

export const aboutHighlights = [
  "Node.js e TypeScript",
  "APIs REST e regras de negócio",
  "Arquitetura e baixo acoplamento",
  "Testabilidade e qualidade",
] as const;

export const techCategories: TechCategory[] = [
  {
    title: "Backend",
    description:
      "Tecnologias que utilizo para construir APIs, serviços e regras de negócio.",
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
      "Experiência com bancos relacionais, modelagem de dados e consultas SQL.",
    items: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "SQL Server" },
      { name: "SQL" },
    ],
  },
  {
    title: "Data Access",
    description:
      "Diferentes abordagens para persistência e acesso tipado aos dados.",
    items: [{ name: "Drizzle ORM" }, { name: "Knex" }, { name: "Sequelize" }],
  },
  {
    title: "Testing",
    description:
      "Experiência em testes automatizados e garantia de qualidade de software.",
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
      "Princípios utilizados para manter código organizado, testável e com baixo acoplamento.",
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
    description:
      "Ferramentas utilizadas para desenvolvimento, execução e entrega de aplicações.",
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
    period: "out de 2024 - o momento",
    summary:
      "Minha trajetória na Bloom começou em QA Automation e evoluiu para desenvolvimento backend. Atualmente atuo na construção e evolução de APIs, regras de negócio, integrações e persistência de dados, com foco em qualidade, manutenção e performance.",
    highlights: [
      "Node.js",
      "TypeScript",
      "APIs REST",
      "Banco de dados",
      "Testes",
      "Arquitetura",
    ],
    tone: "primary",
    timeline: [
      {
        title: "Software Quality Assurance Tester",
        period: "out de 2024 - mar de 2025 · 6 meses",
        summary:
          "Atuação com testes funcionais e automação de cenários críticos, utilizando Python, Selenium e pytest. Experiência com identificação de regressões, validação de fluxos e criação de automações para aumentar a confiabilidade das entregas.",
        highlights: ["Python", "Selenium", "pytest", "QA Automation"],
      },
      {
        title: "Software Developer",
        period: "mar de 2025 - o momento",
        summary:
          "Desenvolvimento backend com Node.js e TypeScript, atuando na implementação de APIs, regras de negócio, integrações e persistência de dados. Experiência com diferentes arquiteturas e tecnologias de backend, incluindo Express, MySQL, Knex, Sequelize.",
        highlights: [
          "TypeScript",
          "Express",
          "Node.js",
          "MySQL",
          "Knex",
          "Sequelize",
          "MongoDB",
        ],
      },
    ],
    logoSrc: bloomLogo,
    logoAlt: "Bloom",
  },
  {
    title: "Desenvolvedor",
    company: "Desoft7",
    period: "out de 2023 - out de 2024 · 1 ano 1 mês",
    summary:
      "Atuação no desenvolvimento e manutenção de sistemas, com foco na correção de problemas, implementação de melhorias e otimização de soluções existentes. Experiência com SQL Server e integração com serviços externos por meio de APIs e web services.",
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
      "Plataforma backend desenvolvida em monorepo, com foco em regras de negócio, APIs REST, persistência tipada e uma arquitetura preparada para evolução.",
    challenge:
      "Organizar diferentes responsabilidades do sistema sem criar acoplamento excessivo entre domínio, aplicação, infraestrutura e interfaces externas.",
    solution:
      "Arquitetura baseada em casos de uso, repositories e injeção de dependências, utilizando TypeScript, Fastify, PostgreSQL e Drizzle ORM.",
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
      "Aplicação backend com integração a pagamentos e gerenciamento de créditos, envolvendo comunicação com serviços externos e sincronização de estado.",
    challenge:
      "Garantir consistência no processamento de pagamentos e atualização de créditos mesmo diante de confirmações assíncronas.",
    solution:
      "Implementação de integração com API externa, processamento de webhooks e mecanismos de reconciliação para manter o estado dos pagamentos e créditos consistente.",
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
    title: "Sistema de estoque e CMV",
    summary:
      "Sistema backend para operações de estoque, produtos, fichas técnicas, transformações e cálculo de custos em contexto de restaurantes.",
    challenge:
      "Modelar regras de negócio envolvendo produtos, unidades, transformações, armazenamento, fichas técnicas e histórico sem comprometer a consistência dos dados.",
    solution:
      "Implementação de regras de negócio, repositories e consultas SQL utilizando Knex, com foco em consistência dos dados e desempenho das operações.",
    stack: ["TypeScript", "Node.js", "Express", "MySQL", "Knex", "SQL"],
  },
];
export const architectureTopics: ArchitectureTopic[] = [
  {
    title: "REST APIs",
    summary:
      "Contratos HTTP claros, validação de entrada e responsabilidades bem definidas entre as camadas.",
  },
  {
    title: "Validação",
    summary:
      "Dados externos são validados antes de alcançar as regras de negócio e a persistência.",
  },
  {
    title: "Autenticação",
    summary:
      "Controle de acesso tratado como parte da aplicação, mantendo segurança e responsabilidades bem definidas.",
  },
  {
    title: "Testes",
    summary:
      "Casos de uso e regras de negócio são estruturados para permitir testes rápidos e independentes de infraestrutura.",
  },
  {
    title: "Persistência",
    summary:
      "Acesso a dados isolado das regras de negócio, permitindo trabalhar com diferentes estratégias de persistência.",
  },
];

export const contactFields: ContactField[] = [
  { id: "name", label: "Nome", type: "text", placeholder: "Seu nome" },
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "voce@exemplo.com",
  },
  {
    id: "message",
    label: "Mensagem",
    type: "text",
    placeholder: "Descreva o contexto do contato",
    multiline: true,
  },
];
