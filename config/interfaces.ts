export interface ProjectProps {
  id: number;
  title: string;
  description: string;
  techStack: {
    id: number;
    name: string;
  }[];
  externalLink: string;
  repoLink: string;
  photo: StaticImageData;
}

export interface SideProjectProps {
  id: number;
  title: string;
  description: string;
  techStack: {
    id: number;
    name: string;
  }[];
  repoLink: string;
}

export interface TechList {
  id: number;
  techName: string;
  icon: any;
  proficiency: 'awesome' | 'good' | 'learning';
}

export interface OrgData {
  id: number;
  name: string;
  website: string;
  position: string;
  startDate: string;
  endDate: string;
  work: Work[];
}

interface Work {
  id: number;
  title: string;
}
