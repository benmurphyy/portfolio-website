import projectWriteups from 'src/assets/data/projects.json';
import threeDPrintIcon from 'src/assets/icons/projects/3d_printing.svg';
import alexaIcon from 'src/assets/icons/projects/alexa.svg';
import bjmIcon from 'src/assets/icons/projects/bjm.svg';
import pongIcon from 'src/assets/icons/projects/pong.svg';
import telegramIcon from 'src/assets/icons/projects/telegram.svg';

interface Project {
  title: string;
  subtitle: string;
  summary: string[];
  description: string;
  repository: string;
  icon: string;
}

export enum ExperiencePageSectionName {
  CAREER_EXPERIENCE = 'Career Experience',
  ACHIEVEMENTS = 'Achievements',
  PROJECTS = 'Projects',
}

/**
 * Icons for each project in the SAME order that they are written in the json file.
 */
const icons = [bjmIcon, threeDPrintIcon, alexaIcon, telegramIcon, pongIcon];

export const experiencePageSections = [
  ExperiencePageSectionName.CAREER_EXPERIENCE,
  ExperiencePageSectionName.ACHIEVEMENTS,
  ExperiencePageSectionName.PROJECTS,
];

/**
 * The array of Projects, which contains information from the json file,
 * combined with the icon svg for each project.
 */
export const projects: Project[] = projectWriteups.map(
  (projectInfo, index) => ({
    ...projectInfo,
    icon: icons[index],
  })
);
