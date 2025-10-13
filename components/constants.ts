
export const PLATFORM_NAMES = {
  PRIMARY: 'Contri Builders',
  SECONDARY: 'Salone Progress', 
  TERTIARY: 'Kukuna', 
  ALTERNATIVE: 'Anmoyah', 
} as const;

export const PLATFORM_NAME = PLATFORM_NAMES.PRIMARY;

export const PLATFORM_TAGLINES = {
  PRIMARY: 'Transforming Sierra Leone through community-driven development',
  AGRICULTURE_FOCUS: 'Cultivating prosperity, harvesting progress for Salone',
  YOUTH_FOCUS: 'Empowering Sierra Leonean youth to build a better nation',
  COMMUNITY_FOCUS: 'Community by community, building a better Sierra Leone',
  COMPREHENSIVE: 'Fighting drug abuse, growing agriculture, building futures',
  ACTION_ORIENTED: 'Your vision, our platform, Sierra Leone\'s progress',
} as const;

export const PLATFORM_TAGLINE = PLATFORM_TAGLINES.PRIMARY;

export const PLATFORM_DESCRIPTION = {
  FULL: `A community-driven platform empowering Sierra Leoneans to propose and fund initiatives that address national challenges. From agricultural development to drug abuse prevention, we provide the tools to turn visionary ideas into tangible community impact.`,
  
  SHORT: 'Turning visionary ideas into community impact across Sierra Leone',
  
  MISSION: 'To democratize development by enabling every Sierra Leonean to contribute to national progress through funded community initiatives',
} as const;

export const FOCUS_AREA_TAGLINES = {
  AGRICULTURE: {
    NAME: 'Green Salone Initiative',
    TAGLINE: 'From seed to harvest, building food security for Sierra Leone',
    DESCRIPTION: 'Transforming agriculture through community farming projects and modern techniques'
  },
  
  DRUG_ABUSE: {
    NAME: 'Safe Pikin Dem Program',
    TAGLINE: 'Protecting our youth, securing our future from drug abuse',
    DESCRIPTION: 'Community-based prevention and rehabilitation programs for drug abuse'
  },
  
  YOUTH_EMPOWERMENT: {
    NAME: 'Yoot Enterprise Hub',
    TAGLINE: 'Investing in Sierra Leone\'s greatest resource: our youth',
    DESCRIPTION: 'Skills development and entrepreneurship opportunities for young Sierra Leoneans'
  },
  
  EDUCATION: {
    NAME: 'Pikin Learn Initiative',
    TAGLINE: 'Building minds, building nation, one child at a time',
    DESCRIPTION: 'Improving educational access and quality across Sierra Leone'
  },
  
  HEALTHCARE: {
    NAME: 'Welbodi Salone',
    TAGLINE: 'Healthy communities, prosperous nation',
    DESCRIPTION: 'Improving healthcare access and awareness in local communities'
  }
} as const;


export const LOCAL_TERMS = {
  KRIO: {
    WENAR: 'WeNar', 
    BETTA: 'Betta', 
    SALONE: 'Salone', 
    PIKIN: 'Pikin', 
    UMAN: 'Uman',
    YOOT: 'Yoot',
    KOMBIN: 'Kompin', 
    FAMBUL: 'Fambul',
    KUKUNA: 'Kukuna', 
    BOTEH: 'Boteh', 
  },
  
  MENDE: {
    ANMOYAH: 'Anmoyah', 
    NDEWOH: 'Ndewoh',
    BAMBEH: 'Bambeh',
  },
  
  TEMNE: {
    GBASSAY: 'Gbassay', 
    ASHIRA: 'Ashira', 
  }
} as const;


export const CALL_TO_ACTION = {
  SUBMIT_IDEA: 'Share your vision for Sierra Leone',
  JOIN_MOVEMENT: 'Join the movement transforming our nation',
  SUPPORT_PROJECTS: 'Support community projects making a difference',
  BECOME_CHAMPION: 'Become a development champion in your community',
  START_JOURNEY: 'Start your journey to national impact today',
} as const;


export const SOCIAL_MEDIA = {
  HASHTAG_PRIMARY: '#WeNarBetta',
  HASHTAG_SECONDARY: '#SaloneProgress',
  HANDLE: '@WeNarBettaSL',
  CAMPAIGN_TAGS: ['#SierraLeoneRising', '#CommunityFirst', '#SaloneDevelopment']
} as const;


export const PLATFORM_VALUES = {
  CORE: [
    'Community-Driven',
    'Transparent',
    'Impact-Focused',
    'Nationally Minded',
    'Locally Grounded'
  ],
  
  PRINCIPLES: [
    'Every voice matters',
    'Local solutions for local challenges',
    'Accountability in action',
    'Progress through partnership',
    'Sierra Leone first'
  ]
} as const;

export const PLATFORM_CONFIG = {
  NAME: PLATFORM_NAME,
  TAGLINE: PLATFORM_TAGLINE,
  DESCRIPTION: PLATFORM_DESCRIPTION.SHORT,
  FOCUS_AREAS: FOCUS_AREA_TAGLINES,
  CALL_TO_ACTION: CALL_TO_ACTION.SUBMIT_IDEA,
} as const;

export const CAMPAIGN_TAGLINES = {
  DRUG_ABUSE: {
    PRIMARY: '#KushFreeFuture',
    SECONDARY: '#DrugFreeSalone',
    TERTIARY: '#SafePikinDem',
    ALTERNATIVE: '#CleanFutureSL'
  },
  
  AGRICULTURE: {
    PRIMARY: '#GreenSalone',
    SECONDARY: '#FarmToFuture',
    TERTIARY: '#GrowSalone'
  },
  
  YOUTH: {
    PRIMARY: '#YootPower',
    SECONDARY: '#FutureBuildersSL'
  },
  
  GENERAL: {
    PRIMARY: '#WeNarBetta',
    SECONDARY: '#SaloneProgress'
  }
} as const;

export const ACTIVE_CAMPAIGN = CAMPAIGN_TAGLINES.DRUG_ABUSE.PRIMARY;

export const CAMPAIGN_DESCRIPTIONS = {
  KUSH_FREE: 'Join the movement to create a drug-free future for Sierra Leone\'s youth',
  GREEN_SALONE: 'Transforming agriculture for food security and economic growth',
  YOUTH_POWER: 'Empowering the next generation of Sierra Leonean leaders'
} as const;

export const SOCIAL_LINKS = {
  FACEBOOK: {
    URL: "https://www.facebook.com/share/17JgyeLStD/?mibextid=wwXIfr",
    HANDLE: "@WeNarBettaSL",
    SHARE_TEXT: "Join the movement transforming Sierra Leone!",
  },
  
  TWITTER: {
    URL: "https://twitter.com/WeNarBettaSL",
    HANDLE: "@WeNarBettaSL",
  },
  
  INSTAGRAM: {
    URL: "https://instagram.com/WeNarBettaSL",
    HANDLE: "@WeNarBettaSL",
  },
  
  WHATSAPP: {
    URL: "https://wa.me/232000000000",
    TEXT: "Hello! I'm interested in the WeNar Betta platform.",
  },
  
  EMAIL: {
    ADDRESS: "contact@wenarbetta.sl",
    SUBJECT: "Inquiry about WeNar Betta Platform",
  },
  
  WEBSITE: {
    URL: "https://wenarbetta.sl", 
    NAME: "WeNarBetta.sl",
  }
} as const;
