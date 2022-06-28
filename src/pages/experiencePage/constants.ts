import projectWriteups from 'src/assets/data/projects.json';
import bjmIcon from 'src/assets/icons/projects/bjm.svg';
import threeDPrintIcon from 'src/assets/icons/projects/3d_printing.svg';
import alexaIcon from 'src/assets/icons/projects/alexa.svg';
import pongIcon from 'src/assets/icons/projects/pong.svg';
import telegramIcon from 'src/assets/icons/projects/telegram.svg';

interface Project {
  title: string;
  subtitle: string;
  summary: string[];
  description: string;
  icon: string;
}

export enum ExperiencePageSectionName {
  CAREER_EXPERIENCE = 'Career Experience',
  ACHIEVEMENTS = 'Achievements',
  PROJECTS = 'Projects',
}

const icons = [bjmIcon, threeDPrintIcon, alexaIcon, pongIcon, telegramIcon];

export const experiencePageSections = [
  ExperiencePageSectionName.CAREER_EXPERIENCE,
  ExperiencePageSectionName.ACHIEVEMENTS,
  ExperiencePageSectionName.PROJECTS,
];

export const projects: Project[] = projectWriteups.map(
  (projectInfo, index) => ({
    ...projectInfo,
    icon: icons[index],
  })
);
