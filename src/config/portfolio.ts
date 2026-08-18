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
    "Desenvolvimento backend com foco em APIs, regras de negócio e arquiteturas escaláveis.",
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
  "Atualmente meu foco é o desenvolvimento Backend, com Node.js e TypeScript como base para criação de APIs, regras de negócio e serviços preparados para crescimento.",
  "Valorizo código limpo, boas práticas, testes automatizados e arquiteturas bem definidas, especialmente com Clean Architecture e DDD quando fazem sentido para o domínio.",
  "A minha trajetória começou em Help Desk, passou por estágio com Delphi, SQL Server e Firebird, seguiu por QA Automation com Python e Selenium e hoje está consolidada em Backend.",
  "Essa evolução me deu uma visão mais completa de produto, suporte, qualidade e engenharia, o que ajuda nas decisões técnicas do dia a dia.",
] as const;

export const aboutHighlights = [
  "Node.js e TypeScript",
  "APIs REST e regras de negócio",
  "Clean Architecture e DDD",
  "Testes automatizados e qualidade de código",
] as const;

export const techCategories: TechCategory[] = [
  {
    title: "Backend",
    description:
      "Tecnologias centrais do meu trabalho atual, com foco em APIs e serviços backend.",
    items: [
      { name: "Node.js" },
      { name: "TypeScript" },
      { name: "Fastify" },
      { name: "Express" },
    ],
  },
  {
    title: "Database",
    description:
      "Camadas de persistência e modelagem de dados para aplicações consistentes.",
    items: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "Drizzle ORM" },
      { name: "SQL" },
    ],
  },
  {
    title: "Testing",
    description:
      "Práticas que reforçam confiabilidade, regressão controlada e evolução segura.",
    items: [
      { name: "Selenium" },
      { name: "Python" },
      { name: "Jest" },
      { name: "Vitest" },
      { name: "pytest" },
      { name: "E2E" },
    ],
  },
  {
    title: "Architecture",
    description:
      "Princípios que orientam decisões técnicas com baixo acoplamento e manutenção previsível.",
    items: [{ name: "Clean Architecture" }, { name: "DDD" }, { name: "SOLID" }],
  },
  {
    title: "DevOps",
    description:
      "Ferramentas que apoiam entrega, padronização e ambiente de execução.",
    items: [
      { name: "Docker" },
      { name: "CI/CD" },
      { name: "Git" },
      { name: "GitHub Actions" },
    ],
  },
  {
    title: "Tools",
    description: "Ferramentas de apoio para desenvolvimento e produtividade.",
    items: [
      { name: "Postman" },
      { name: "Linux" },
      { name: "VS Code" },
      { name: "Cursor (IA com MCPs integrados)" },
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
        highlights: ["TypeScript", "Node.js", "TypeScript", "Express", "MySQL"],
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
    title: "Clean Architecture",
    summary:
      "Base para manter domínio isolado da infraestrutura e das decisões de framework.",
  },
  {
    title: "DDD",
    summary:
      "Aplicado quando ajuda a modelar regras de negócio com linguagem consistente.",
  },
  {
    title: "Repository Pattern",
    summary:
      "Separação entre persistência e regra de negócio para reduzir acoplamento.",
  },
  {
    title: "Use Cases",
    summary:
      "Organização da lógica de aplicação em unidades pequenas e testáveis.",
  },
  {
    title: "Dependency Injection",
    summary:
      "Composição que facilita teste, manutenção e troca de implementações.",
  },
  {
    title: "REST APIs",
    summary:
      "Construção de contratos claros para consumo previsível de serviços.",
  },
  {
    title: "Validação",
    summary: "Proteção da entrada antes de atingir domínio e persistência.",
  },
  {
    title: "Autenticação",
    summary:
      "Proteção de acesso com foco em segurança e clareza de implementação.",
  },
  {
    title: "ORM",
    summary:
      "Produtividade com tipagem, rastreabilidade e migrações controladas.",
  },
  {
    title: "Testes",
    summary:
      "Feedback rápido para manter estabilidade e confiança na evolução.",
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
