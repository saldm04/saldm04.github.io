import type {
  CommunityActivity,
  EducationItem,
  Interest,
  Language,
  MediaAsset,
  NavItem,
  PersonalInfo,
  Project,
  SkillCategory,
  SocialLink,
} from '../types/portfolio'

export const assetPaths = {
  profile: '/images/profile/salvatore-profile.webp',
  hiking: '/images/personal/hiking.webp',
  volunteering: '/images/personal/volunteering.webp',
  maioriRisona: '/images/personal/maiori-risona.webp',
  drone: '/images/personal/drone.webp',
} as const

export const personalInfo: PersonalInfo = {
  name: 'Salvatore Di Martino',
  initials: 'SDM',
  title: 'Studente magistrale in Informatica',
  university: 'Università degli Studi di Salerno',
  focus: ['Software Engineering', 'GIS', 'Data'],
  location: 'Maiori (SA), Italia',
  intro:
    'Studente magistrale in Informatica, interessato a Software Engineering, GIS, dati e ricerca. Dopo il progetto RECMOP, sto orientando progressivamente il mio percorso verso le tecnologie geospaziali.',
  email: 'tatodimartino@gmail.com',
  cvPath: '/documents/Salvatore_Di_Martino_CV.pdf',
  cvAvailable: true,
  profileImage: {
    src: assetPaths.profile,
    alt: 'Salvatore Di Martino nel giorno della laurea, con la corona d’alloro e la tesi',
    position: '50% 50%',
  },
}

export const navigation: NavItem[] = [
  { label: 'Chi sono', href: '#chi-sono' },
  { label: 'Formazione', href: '#formazione' },
  { label: 'Progetti', href: '#progetti' },
  { label: 'Competenze', href: '#competenze' },
  { label: 'Oltre il codice', href: '#oltre-il-codice' },
  { label: 'Contatti', href: '#contatti' },
]

export const socialLinks: SocialLink[] = [
  { label: 'Email', url: 'mailto:tatodimartino@gmail.com', kind: 'email', professional: true },
  { label: 'GitHub', url: 'https://github.com/saldm04', kind: 'github', professional: true },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/saldm', kind: 'linkedin', professional: true },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/salvatoreedimartino/',
    kind: 'instagram',
    professional: false,
  },
]

export const aboutParagraphs = [
  'Studio Informatica all’Università degli Studi di Salerno, nel curriculum Software Engineering and IT Management. Il mio percorso unisce progettazione del software, dati e interesse per la ricerca.',
  'La tesi e il tirocinio nel progetto RECMOP hanno rafforzato il mio interesse per GIS e calcolo geospaziale: un ambito nel quale intendo continuare a formarmi, mantenendo solide basi di software engineering e analisi dei dati.',
  'Vengo da Maiori, in Costiera Amalfitana. Il legame con il territorio continua anche fuori dall’università, attraverso volontariato, associazionismo e iniziative culturali e ambientali.',
]

export const education: EducationItem[] = [
  {
    degree: 'Laurea Magistrale in Informatica — LM-18',
    institution: 'Università degli Studi di Salerno',
    period: 'Settembre 2025 – presente',
    curriculum: 'Software Engineering and IT Management',
    coursework: [
      'Basi di Dati 2',
      'Ingegneria dei Linguaggi di Programmazione',
      'Ingegneria del Software: Tecniche Avanzate',
      'Programmazione Sicura',
      'Software Metrics, Analytics and Quality',
      'Statistica e Analisi dei Dati',
      'Strumenti Formali per la Bioinformatica',
    ],
    note: 'Direzione accademica futura: possibile tesi magistrale in ambito GIS.',
  },
  {
    degree: 'Laurea Triennale in Informatica — L-31',
    institution: 'Università degli Studi di Salerno',
    period: 'Settembre 2022 – Settembre 2025',
    grade: '110 e lode con menzione accademica',
    thesis:
      '“Renewable Energy Communities: Monitoring, Optimization and Planning – La filiera del dato”',
    supervisors: ['Prof.ssa Monica Maria Sebillo', 'Prof. Michele Grimaldi'],
    context:
      'Tesi e tirocinio curriculare presso LABGIS, con il coinvolgimento dei Dipartimenti di Informatica e di Ingegneria Civile dell’Università degli Studi di Salerno.',
  },
  {
    degree: 'Diploma di Perito in Informatica e Telecomunicazioni',
    institution: 'ISIS P. Comite, Maiori',
    period: '2022',
    grade: '100 e lode',
  },
]

export const featuredProjects: Project[] = [
  {
    id: 'recmop',
    title: 'RECMOP — Renewable Energy Communities: Monitoring, Optimization and Planning',
    shortTitle: 'RECMOP',
    period: 'Aprile 2025 – Settembre 2025',
    context: 'Tesi triennale + tirocinio curriculare · LABGIS',
    team: 'Lavoro di tirocinio svolto in un team di due studenti',
    description:
      'Pipeline dati per supportare il monitoraggio, l’ottimizzazione e la pianificazione delle Comunità Energetiche Rinnovabili attraverso dati territoriali, ambientali, energetici e geospaziali eterogenei.',
    contribution:
      'Mi sono occupato principalmente della filiera del dato: raccolta automatizzata, normalizzazione, integrazione e preparazione dei dataset per successive analisi geospaziali e calcoli energetici, non del frontend della piattaforma.',
    highlights: [
      'Open data e dataset eterogenei',
      'Elaborazione e analisi geospaziale',
      'Collaborazione tra DICIV e DI, con Latitudo 40 S.R.L. e Nexsoft S.P.A.',
    ],
    technologies: ['Python', 'GIS', 'GeoPandas', 'GRASS GIS', 'Pandas', 'Open Data', 'Spatial Analysis'],
    githubUrl: 'https://github.com/saldm04/RECMOP',
    featured: true,
  },
  {
    id: 'issueinsight',
    title: 'IssueInsight / BD2-TEAM-11',
    shortTitle: 'IssueInsight',
    period: 'Febbraio 2026 – Giugno 2026',
    context: 'Basi di Dati 2',
    team: 'Progetto in team di tre persone',
    description:
      'Piattaforma NoSQL full-stack per esplorare e analizzare dataset di issue Jira, con interrogazioni e viste orientate alla data analytics.',
    contribution:
      'Sviluppo condiviso nel team; il mio coinvolgimento si è concentrato in particolare su query, analytics, MongoDB e documentazione.',
    technologies: ['MongoDB', 'FastAPI', 'React', 'Vite', 'Python', 'Docker', 'Data Analytics'],
    githubUrl: 'https://github.com/emanueleivn/BD2-TEAM-11',
    featured: true,
  },
  {
    id: 'codesmile',
    title: 'CodeSmile',
    shortTitle: 'CodeSmile',
    period: 'Ottobre 2025 – Gennaio 2026',
    context: 'Ingegneria del Software: Tecniche Avanzate',
    team: 'Progetto in team di tre persone',
    description:
      'Sistema per individuare code smell rilevanti nel codice Python orientato al machine learning, combinando analisi statica basata su regole con una componente AI/LLM.',
    contribution:
      'Sviluppo condiviso nel team, con un mio focus più marcato sull’analisi basata su AST.',
    technologies: ['Python', 'AST', 'Static Analysis', 'Software Quality', 'LLM', 'Docker'],
    githubUrl: 'https://github.com/Antonio-Caiazzo/smell_ai',
    featured: true,
  },
]

export const otherProjects: Project[] = [
  {
    id: 'grammo',
    title: 'Grammo',
    shortTitle: 'Grammo',
    period: 'Novembre 2025 – Febbraio 2026',
    context: 'Ingegneria dei Linguaggi di Programmazione · Progetto individuale',
    description:
      'Linguaggio didattico con compilatore end-to-end in Python: parser LALR con Lark, AST dedicato, analisi semantica e type checking, generazione e ottimizzazione LLVM IR ed esecuzione in memoria tramite MCJIT.',
    contribution: 'Progettato e sviluppato interamente da me.',
    technologies: ['Python', 'Lark', 'AST', 'LLVM IR', 'llvmlite', 'JIT'],
    githubUrl: 'https://github.com/saldm04/Grammo',
    featured: false,
  },
  {
    id: 'connect4ia',
    title: 'Connect4IA',
    shortTitle: 'Connect4IA',
    period: 'Dicembre 2024 – Gennaio 2025',
    context: 'Intelligenza Artificiale',
    team: 'Progetto in team di due persone',
    description:
      'Applicazione desktop di Forza 4 con tre livelli di difficoltà. L’avversario usa Minimax ottimizzato con potatura Alpha–Beta, iterative deepening, ordinamento euristico e beam search.',
    technologies: ['Python', 'Pygame', 'NumPy', 'Minimax', 'Alpha–Beta Pruning'],
    githubUrl: 'https://github.com/saldm04/Connect4IA',
    featured: false,
  },
  {
    id: 'hotelcampus',
    title: 'IS-HotelCampus',
    shortTitle: 'HotelCampus',
    period: 'Settembre 2024 – Gennaio 2025',
    context: 'Ingegneria del Software',
    team: 'Progetto in team di due persone',
    description:
      'Web app per la gestione digitale di camere, servizi e prenotazioni, con interfaccia Thymeleaf e persistenza JPA/MySQL. Include test unitari e test di sistema.',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'Thymeleaf', 'Maven', 'Mockito', 'Selenium IDE'],
    githubUrl: 'https://github.com/saldm04/IS-HotelCampus',
    featured: false,
  },
]

export const skillCategories: SkillCategory[] = [
  {
    title: 'GIS & Geospatial',
    description: 'Direzione di studio e sviluppo',
    skills: ['GIS', 'GeoPandas', 'GRASS GIS', 'Geospatial Data Processing', 'Open Data', 'Spatial Analysis'],
    emphasized: true,
  },
  {
    title: 'Software Engineering',
    description: 'Progettazione, qualità e strumenti',
    skills: ['Java', 'Spring Boot', 'Software Design', 'Software Quality', 'Testing', 'Git', 'Maven'],
  },
  {
    title: 'Data & Databases',
    description: 'Dati relazionali, NoSQL e analisi',
    skills: ['SQL', 'MySQL', 'MongoDB', 'Pandas', 'Data Analysis', 'Statistics'],
  },
  {
    title: 'Programming & AI',
    description: 'Linguaggi, analisi e compilazione',
    skills: ['Python', 'C', 'Artificial Intelligence', 'Static Analysis', 'AST', 'Compiler Design', 'LLVM'],
  },
  {
    title: 'Web',
    description: 'Applicazioni e interfacce web',
    skills: ['JavaScript', 'TypeScript', 'React', 'HTML', 'CSS', 'FastAPI'],
  },
  {
    title: 'Tools',
    description: 'Ambienti e strumenti di lavoro',
    skills: ['Git', 'GitHub', 'Docker', 'IntelliJ IDEA', 'Eclipse'],
  },
]

export const communityActivities: CommunityActivity[] = [
  {
    title: 'Hiking The Amalfi Coast',
    organization: 'Associazione di promozione sociale',
    period: 'Dal 2023',
    role: 'Socio fondatore · Membro del direttivo',
    description:
      'Contribuisco all’organizzazione e al coordinamento di attività dedicate alla tutela e valorizzazione della Costiera Amalfitana, tra escursionismo, turismo sostenibile, educazione ambientale e iniziative culturali.',
    highlights: [
      'Leadership e lavoro di squadra',
      'Cura del territorio e dei sentieri',
      'Collaborazione con comunità e istituzioni',
    ],
    link: 'https://github.com/saldm04/hiking-the-amalfi-coast.org',
    image: {
      src: assetPaths.volunteering,
      alt: 'Volontario di Hiking The Amalfi Coast mentre rinnova la segnaletica di un sentiero affacciato sul mare',
      position: '50% 45%',
    },
  },
  {
    title: 'Maiori Risona',
    organization: 'Festival delle culture e delle tradizioni popolari',
    period: 'Settembre 2026',
    description:
      'Ho contribuito all’ideazione e all’organizzazione di Maiori Risona, insieme al Comune di Maiori e ad altri giovani del territorio. Il festival promuove la cultura e le tradizioni popolari del Sud Italia attraverso musica, ballo, incontri e laboratori, con un’attenzione particolare alle tradizioni di Maiori e della Madonna dell’Avvocata.',
    image: {
      src: assetPaths.maioriRisona,
      alt: 'Gruppo di organizzatori e partecipanti di Maiori Risona riunito sul palco al termine del festival',
      position: '50% 60%',
    },
  },
]

export const interests: Interest[] = [
  {
    title: 'Territorio e movimento',
    description:
      'Trekking, montagna, running, tennis e padel: modi diversi di vivere gli spazi e restare in movimento.',
  },
  {
    title: 'Musica e chitarra',
    description:
      'La musica è una presenza quotidiana e la chitarra uno spazio personale di pratica e ascolto.',
  },
  {
    title: 'Tecnologia e prospettive',
    description:
      'Coltivo l’interesse per la tecnologia e pratico l’uso del drone e la fotografia aerea come hobby, per osservare paesaggi e territorio da un punto di vista diverso.',
  },
]

export const interestHighlights = [
  { label: 'All’aria aperta', title: 'Trekking' },
  { label: 'Legame con i luoghi', title: 'Territorio' },
  { label: 'Nuove prospettive', title: 'Drone e fotografia aerea' },
] as const

export const secondaryInterests = [
  { label: 'Sport', value: 'Tennis, padel e running' },
  { label: 'Musica', value: 'Ascolto e chitarra' },
] as const

export const personalGallery: MediaAsset[] = [
  {
    src: assetPaths.hiking,
    alt: 'Escursionista su una roccia lungo un sentiero panoramico affacciato sulla Costiera Amalfitana',
    position: '50% 50%',
    caption: 'Trekking e territorio',
  },
  {
    src: assetPaths.drone,
    alt: 'Veduta aerea della Badia di Santa Maria de Olearia e della costa, ripresa con drone',
    position: '50% 50%',
    caption: 'Drone e fotografia aerea',
  },
]

export const languages: Language[] = [
  { name: 'Italiano', level: 'Madrelingua' },
  {
    name: 'Inglese',
    level: 'Livello B2 tramite percorso universitario',
    note: 'Certificazione ufficiale: Cambridge English B1 Preliminary (PET).',
  },
]
