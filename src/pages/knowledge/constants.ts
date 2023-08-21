import { PageSection } from 'src/constants';

export enum KnowledgePageSectionName {
  SKILLS = 'skills',
  UNIVERSITY_MODULES = 'modules',
}

export const knowledgePageSections: {
  [key in KnowledgePageSectionName]: PageSection;
} = {
  [KnowledgePageSectionName.SKILLS]: {
    name: KnowledgePageSectionName.SKILLS,
    title: 'Skills',
    queryParam: KnowledgePageSectionName.SKILLS,
  },
  [KnowledgePageSectionName.UNIVERSITY_MODULES]: {
    name: KnowledgePageSectionName.UNIVERSITY_MODULES,
    title: 'University Courses',
    queryParam: KnowledgePageSectionName.UNIVERSITY_MODULES,
  },
};
