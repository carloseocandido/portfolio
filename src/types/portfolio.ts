export type ThemeMode = "system" | "light" | "dark";
export type ResolvedTheme = "light" | "dark";

export interface NavigationItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
  external?: boolean;
}

export interface StatItem {
  label: string;
  value: string;
  detail: string;
}

export interface TechItem {
  name: string;
}

export interface TechCategory {
  title: string;
  description: string;
  items: TechItem[];
}

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  summary: string;
  highlights: string[];
  tone: "neutral" | "accent" | "primary";
  timeline?: ExperienceTimelineItem[];
  logoSrc?: string;
  logoAlt?: string;
}

export interface ExperienceTimelineItem {
  title: string;
  period: string;
  summary: string;
  highlights?: string[];
}

export interface ProjectItem {
  title: string;
  summary: string;
  challenge: string;
  solution: string;
  stack: string[];
  github?: string;
  external?: string;
}

export interface ArchitectureTopic {
  title: string;
  summary: string;
}

export interface ContactField {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  multiline?: boolean;
}
