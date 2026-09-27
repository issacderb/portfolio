export interface AuthorProfile {
  name: string;
  shortName: string;
  greeting: string;
  major: string;
  positioning: string;
  secondaryDescriptor: string;
  university: string;
  gpa: string;
  intro: string;
  aboutP1: string;
  aboutP2: string;
  email: string;
  phone: string;
  cvUrl: string;
  socials: {
    zalo: string;
    linkedIn: string;
    behance: string;
  };
}

export interface MarqueeTile {
  title: string;
  category: string;
  imageUrl: string;
  aspect: 'landscape' | 'portrait' | 'square';
}

export interface CapabilityItem {
  number: string;
  title: string;
  description: string;
  skills: string[];
}

export interface ProjectImages {
  col1Top: string;
  col1Bottom?: string;
  col2Tall: string;
  extraMedia?: string[];
}

export interface MasterProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  focus: string[];
  description: string;
  software?: string;
  duration?: string;
  videoUrl?: string;
  posterUrl?: string;
  images: ProjectImages;
  ctaText: string;
  note?: string;
}
