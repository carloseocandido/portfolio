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
    items: [{ name: "Postman" }, { name: "Linux" }, { name: "VS Code" }],
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    title: "Bloom",
    company: "Bloom",
    period: "out de 2024 - o momento",
    summary:
      "Evolução dentro da Bloom começando em QA e seguindo para desenvolvimento backend. O foco atual está na construção de APIs escaláveis, arquitetura limpa, regras de negócio, integrações e modelagem de banco de dados.",
    highlights: ["TypeScript", "Node.js", "Fastify", "Express", "PostgreSQL"],
    tone: "primary",
    timeline: [
      {
        title: "Software Quality Assurance Tester",
        period: "out de 2024 - mar de 2025 · 6 meses",
        summary:
          "Garantia da qualidade de software por meio de testes funcionais e automatizados. Uso de Selenium e pytest para validar fluxos críticos, documentar casos de teste e manter rastreabilidade.",
        highlights: ["Selenium", "pytest", "Testes automatizados"],
      },
      {
        title: "Software Developer",
        period: "mar de 2025 - o momento",
        summary:
          "Desenvolvimento backend com foco em APIs escaláveis, arquitetura limpa, regras de negócio, integrações e modelagem de banco de dados. Trabalho com TypeScript, Node.js, Fastify, Express, MySQL, PostgreSQL e boas práticas para soluções robustas e de fácil manutenção.",
        highlights: [
          "TypeScript",
          "Node.js",
          "Fastify",
          "Express",
          "PostgreSQL",
          "APIs escaláveis",
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
      "Desenvolvedor com experiência em SQL Server e práticas ágeis (Scrum e Kanban). Atuando na correção, aprimoramento e otimização de software, tenho experiência na integração de web services e APIs (SOAP e JSON). Busco sempre implementando soluções eficientes e de alta qualidade.",
    highlights: ["SQL Server", "SOAP", "JSON", "Scrum", "Kanban"],
    tone: "neutral",
    logoSrc: desoftLogo,
    logoAlt: "Desoft7",
  },
];

export const projectItems: ProjectItem[] = [
  {
    title: "Backend de apoio a operações",
    summary:
      "Estrutura preparada para registrar integração entre regras de negócio, persistência e contratos de API em contexto backend.",
    challenge:
      "Manter separação de responsabilidades e previsibilidade nas integrações de domínio.",
    solution:
      "Organização por camadas com foco em legibilidade, testabilidade e evolução contínua.",
    stack: ["Node.js", "TypeScript", "REST APIs", "Clean Architecture"],
  },
  {
    title: "APIs Node.js com arquitetura limpa",
    summary:
      "Estrutura voltada a APIs REST com foco em organização interna, validação e manutenção simples.",
    challenge:
      "Evitar acoplamento desnecessário entre regra de negócio, acesso a dados e camada HTTP.",
    solution:
      "Aplicação de conceitos como use cases, repository pattern e DI para isolar responsabilidades.",
    stack: ["Fastify", "Express", "SOLID", "Repository Pattern"],
  },
  {
    title: "Solução com Drizzle ORM",
    summary:
      "Base de persistência tipada para fluxos backend que dependem de schema claro e migração controlada.",
    challenge:
      "Garantir consistência entre modelo de dados, consultas e evolução de schema.",
    solution:
      "Uso de Drizzle ORM para organizar acesso a dados com tipagem e previsibilidade.",
    stack: ["Drizzle ORM", "PostgreSQL", "MySQL", "Migrations"],
  },
  {
    title: "Base de testes automatizados",
    summary:
      "Estrutura destinada a sustentar automações e cenários de validação com foco em qualidade e confiabilidade.",
    challenge:
      "Reduzir regressão sem transformar a suíte em um ponto de acoplamento ao código produtivo.",
    solution:
      "Abordagem com Python e Selenium para automatizar verificações e apoiar a evolução do produto.",
    stack: ["Python", "Selenium", "QA Automation", "Testes"],
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
