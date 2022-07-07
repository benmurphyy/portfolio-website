import { RefObject } from 'react';
import {
  ExperiencePageSectionName,
  experiencePageSections,
} from 'src/pages/experience/constants';
import {
  KnowledgePageSectionName,
  knowledgePageSections,
} from 'src/pages/knowledge/constants';
import routes, { PageName } from 'src/routes';

/**
 * Definition of an object representing a page section.
 */
export interface PageSection {
  /** Name of the page section. */
  name: string;
  /** Title of the page section, like when a link to it is displayed in SubNavbar.*/
  title: string;
  /** Query param of the page section in URL, used for quicklinks to that section of a page. */
  queryParam?: string;
}

/**
 * Contains all the information needed to display and operate a quicklink.
 */
export interface QuickLink extends PageSection {
  path: string;
  buttonColor: string;
}

export interface PageSectionWithRef extends PageSection {
  /** Ref to the main container of the page section. */
  ref: RefObject<HTMLDivElement>;
}

console.log(
  routes[PageName.KNOWLEDGE].path +
    '?' +
    knowledgePageSections[KnowledgePageSectionName.SKILLS]
);

export const quickLinks: QuickLink[] = [
  {
    name: KnowledgePageSectionName.UNIVERSITY_MODULES,
    title:
      knowledgePageSections[KnowledgePageSectionName.UNIVERSITY_MODULES].title,
    path:
      routes[PageName.KNOWLEDGE].path +
      '?' +
      knowledgePageSections[KnowledgePageSectionName.UNIVERSITY_MODULES]
        .queryParam,
    buttonColor: '#373F51',
  },
  {
    name: KnowledgePageSectionName.SKILLS,
    title: knowledgePageSections[KnowledgePageSectionName.SKILLS].title,
    path:
      routes[PageName.KNOWLEDGE].path +
      '?' +
      knowledgePageSections[KnowledgePageSectionName.SKILLS].queryParam,
    buttonColor: '#58A4B0',
  },
  {
    name: ExperiencePageSectionName.CAREER_EXPERIENCE,
    title:
      experiencePageSections[ExperiencePageSectionName.CAREER_EXPERIENCE].title,
    path:
      routes[PageName.EXPERIENCE].path +
      '?' +
      experiencePageSections[ExperiencePageSectionName.CAREER_EXPERIENCE]
        .queryParam,
    buttonColor: '#CE8147',
  },
  {
    name: ExperiencePageSectionName.PROJECTS,
    title: experiencePageSections[ExperiencePageSectionName.PROJECTS].title,
    path:
      routes[PageName.EXPERIENCE].path +
      '?' +
      experiencePageSections[ExperiencePageSectionName.PROJECTS].queryParam,
    buttonColor: '#931621',
  },
];
