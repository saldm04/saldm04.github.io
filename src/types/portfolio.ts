export type Theme = 'light' | 'dark'

export type SocialKind = 'email' | 'github' | 'linkedin' | 'instagram'

export interface MediaAsset {
  src: string
  alt: string
  position?: string
  caption?: string
}

export interface NavItem {
  label: string
  href: string
}

export interface SocialLink {
  label: string
  url: string
  kind: SocialKind
  professional: boolean
}

export interface PersonalInfo {
  name: string
  initials: string
  title: string
  university: string
  focus: string[]
  location: string
  intro: string
  email: string
  cvPath: string
  cvAvailable: boolean
  profileImage?: MediaAsset
}

export interface EducationItem {
  degree: string
  institution: string
  period: string
  curriculum?: string
  grade?: string
  thesis?: string
  supervisors?: string[]
  context?: string
  coursework?: string[]
  note?: string
}

export interface Project {
  id: string
  title: string
  shortTitle: string
  period: string
  context: string
  team?: string
  description: string
  contribution?: string
  highlights?: string[]
  technologies: string[]
  githubUrl: string
  externalUrl?: string
  image?: MediaAsset
  featured: boolean
}

export interface SkillCategory {
  title: string
  description: string
  skills: string[]
  emphasized?: boolean
}

export interface CommunityActivity {
  title: string
  organization?: string
  period: string
  role?: string
  description: string
  highlights?: string[]
  link?: string
  image?: MediaAsset
}

export interface Interest {
  title: string
  description: string
}

export interface Language {
  name: string
  level: string
  note?: string
}
