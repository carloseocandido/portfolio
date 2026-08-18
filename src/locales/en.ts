const en = {
  translation: {
    language: "Language",
    languageNames: {
      ptBR: "Portuguese (Brazil)",
      en: "English",
      es: "Spanish",
    },
    scrollToTop: "Back to top",
    settings: "Settings",
    appearance: "Appearance",
    light: "Light",
    dark: "Dark",
    theme: {
      light: "Switch to light theme",
      dark: "Switch to dark theme",
    },
    profile: "profile",
    backendDeveloper: "Backend Developer",
    viewProjects: "View projects",
    contact: "Get in touch",
    engineering: "engineering",
    backendBuiltToEvolve: "Backend built to evolve",
    differentiator: "Differentiator",
    heroStackDescription:
      "Node.js, TypeScript, Express, Fastify, MySQL, and PostgreSQL, working with different persistence approaches.",
    heroDifferentiatorDescription:
      "Experience in development and QA, bringing attention to testability, reliability, and quality from implementation onward.",
    aboutCardTitle: "Experience in development and quality",
    aboutCardDescription:
      "My previous experience in QA Automation directly influences how I develop backend: I think about testability, regressions, contracts, and reliability from implementation onward.",
    stack: "Stack",
    about: "About",
    experience: "Experience",
    projects: "Projects",
    architecture: "Architecture",
    contactSection: "Contact",
    navigation: {
      about: "About",
      stack: "Stack",
      experience: "Experience",
      projects: "Projects",
      architecture: "Architecture",
      contact: "Contact",
    },
    sections: {
      aboutTitle:
        "A professional profile focused on backend, architecture, and software quality.",
      aboutDescription:
        "Previous experiences in support, desktop development, and QA Automation shaped the foundation of my backend specialization.",
      stackTitle: "A technical foundation organized by context, not trends.",
      stackDescription:
        "Technologies are grouped by function to show how each layer contributes to consistent and scalable backend delivery.",
      experienceTitle:
        "From quality to backend: a career built through practice.",
      experienceDescription:
        "My experience in support, development, and QA directly influences how I build and maintain backend systems today.",
      projectsTitle:
        "Structures ready to represent real backend work or receive your future projects.",
      projectsDescription:
        "This section avoids invented work and stays ready for the projects you want to highlight later.",
      architectureTitle: "How I structure backend systems",
      architectureDescription:
        "Rather than following patterns by convention, I separate responsibilities so business rules remain testable, independent, and easy to evolve.",
      contactTitle:
        "Direct contact for conversations about backend, architecture, and quality.",
      contactDescription:
        "Use the channels below to discuss opportunities, projects, or technical exchange objectively.",
    },
    cards: {
      challenge: "Challenge",
      solution: "Solution",
      sendMessage: "Send message",
      directEmail: "Direct email",
      channels: "Channels",
      message: "Message",
      name: "Name",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@example.com",
      messagePlaceholder: "Describe the context of your message",
    },
    footer:
      "Portfolio focused on backend development, software architecture, code quality, and scalable systems.",
    mail: {
      subject: "Contact via portfolio",
      newProject: "New project",
      name: "Name",
      email: "Email",
    },
    architectureDetails: {
      flow: "Request flow",
      flowTitle: "HTTP → application → domain → persistence",
      flowDescription:
        "The goal is to avoid coupling business rules to the HTTP framework or database.",
      controllerDescription:
        "Receives the request, validates input data, and forwards the operation.",
      useCaseDescription:
        "Orchestrates the operation and concentrates application rules.",
      domainDescription:
        "Represents the rules and behaviors that belong to the business.",
      repositoryDescription:
        "Abstracts persistence and prevents business rules from depending directly on the database.",
      infrastructureDescription:
        "Implements external details such as ORMs, databases, APIs, and other services.",
      principles: "Principles",
      couplingTitle: "The goal is to reduce coupling",
      couplingDescription:
        "Frameworks and tools can change. Business rules should not need to be rewritten every time that happens.",
      practical: "In practice",
      adaptedTitle: "Architecture adapted to the project",
      adaptedDescription:
        "I have worked with different combinations of frameworks and persistence, choosing the approach according to the application's context.",
    },
    contactDetails: {
      channelsTitle: "GitHub, LinkedIn, and email",
      channelsDescription:
        "If the conversation involves backend, integration, architecture, or software quality, you can use these channels:",
    },
    menu: {
      close: "Close menu",
      open: "Open menu",
      home: "Go to the top of the page",
    },
  },
} as const;

export default en;
