import arduinoIcon from 'src/assets/icons/skills/arduino/arduino-original.svg';
import bashIcon from 'src/assets/icons/skills/bash/bash-original.svg';
import bootstrapIcon from 'src/assets/icons/skills/bootstrap/bootstrap-original.svg';
import cIcon from 'src/assets/icons/skills/c/c-original.svg';
import cssIcon from 'src/assets/icons/skills/css3/css3-original.svg';
import dockerIcon from 'src/assets/icons/skills/docker/docker-original.svg';
import gitIcon from 'src/assets/icons/skills/git/git-original.svg';
import htmlIcon from 'src/assets/icons/skills/html5/html5-original.svg';
import javaIcon from 'src/assets/icons/skills/java/java-original.svg';
import javascriptIcon from 'src/assets/icons/skills/javascript/javascript-original.svg';
import kotlinIcon from 'src/assets/icons/skills/kotlin/kotlin-original.svg';
import linuxIcon from 'src/assets/icons/skills/linux/linux-original.svg';
import luaIcon from 'src/assets/icons/skills/lua/lua-original.svg';
import mySqlIcon from 'src/assets/icons/skills/mysql/mysql-original.svg';
import nodeJSIcon from 'src/assets/icons/skills/nodejs/nodejs-original.svg';
import postgreSQLIcon from 'src/assets/icons/skills/postgresql/postgresql.svg';
import pythonIcon from 'src/assets/icons/skills/python/python-original.svg';
import raspberryPiIcon from 'src/assets/icons/skills/raspberrypi/raspberrypi-original.svg';
import reactIcon from 'src/assets/icons/skills/react/react-original.svg';
import springIcon from 'src/assets/icons/skills/spring/spring-original.svg';
import typescriptIcon from 'src/assets/icons/skills/typescript/typescript.svg';
import unixIcon from 'src/assets/icons/skills/unix/unix-original.svg';
import vimIcon from 'src/assets/icons/skills/vim/vim-original.svg';
import vscodeIcon from 'src/assets/icons/skills/vscode/vscode-original.svg';
import vueJsIcon from 'src/assets/icons/skills/vuejs/vuejs.svg';
import webpackIcon from 'src/assets/icons/skills/webpack/webpack.svg';
import yarnIcon from 'src/assets/icons/skills/yarn/yarn-original.svg';

enum Types {
  MISCELLANEOUS = 'Miscellaneous',
  PROGRAMMING_LANGUAGES = 'Programming Languages',
  LIBRARIES_RUNTIMES_FRAMEWORKS = 'Libraries, Runtimes and Frameworks',
}

enum Proficiencys {
  VERY_HIGH = 'Very High',
  HIGH = 'High',
  FAIR = 'Fair',
}

interface Skill {
  icon: string;
  type: Types;
  proficiency: Proficiencys;
}

export const skills: {
  [key: string]: Skill;
} = {
  Arduino: {
    icon: arduinoIcon,
    type: Types.MISCELLANEOUS,
    proficiency: Proficiencys.FAIR,
  },
  Bash: {
    icon: bashIcon,
    type: Types.MISCELLANEOUS,
    proficiency: Proficiencys.HIGH,
  },
  Bootstrap: {
    icon: bootstrapIcon,
    type: Types.MISCELLANEOUS,
    proficiency: Proficiencys.HIGH,
  },
  C: {
    icon: cIcon,
    type: Types.PROGRAMMING_LANGUAGES,
    proficiency: Proficiencys.HIGH,
  },
  CSS: {
    icon: cssIcon,
    type: Types.MISCELLANEOUS,
    proficiency: Proficiencys.HIGH,
  },
  Docker: {
    icon: dockerIcon,
    type: Types.MISCELLANEOUS,
    proficiency: Proficiencys.FAIR,
  },
  Git: {
    icon: gitIcon,
    type: Types.MISCELLANEOUS,
    proficiency: Proficiencys.HIGH,
  },
  HTML: {
    icon: htmlIcon,
    type: Types.MISCELLANEOUS,
    proficiency: Proficiencys.HIGH,
  },
  Java: {
    icon: javaIcon,
    type: Types.PROGRAMMING_LANGUAGES,
    proficiency: Proficiencys.VERY_HIGH,
  },
  Javascript: {
    icon: javascriptIcon,
    type: Types.PROGRAMMING_LANGUAGES,
    proficiency: Proficiencys.HIGH,
  },
  Kotlin: {
    icon: kotlinIcon,
    type: Types.PROGRAMMING_LANGUAGES,
    proficiency: Proficiencys.FAIR,
  },
  Linux: {
    icon: linuxIcon,
    type: Types.MISCELLANEOUS,
    proficiency: Proficiencys.HIGH,
  },
  Lua: {
    icon: luaIcon,
    type: Types.PROGRAMMING_LANGUAGES,
    proficiency: Proficiencys.FAIR,
  },
  MySql: {
    icon: mySqlIcon,
    type: Types.MISCELLANEOUS,
    proficiency: Proficiencys.FAIR,
  },
  NodeJS: {
    icon: nodeJSIcon,
    type: Types.LIBRARIES_RUNTIMES_FRAMEWORKS,
    proficiency: Proficiencys.FAIR,
  },
  Python: {
    icon: pythonIcon,
    type: Types.PROGRAMMING_LANGUAGES,
    proficiency: Proficiencys.VERY_HIGH,
  },
  'Raspberry Pi': {
    icon: raspberryPiIcon,
    type: Types.MISCELLANEOUS,
    proficiency: Proficiencys.FAIR,
  },
  React: {
    icon: reactIcon,
    type: Types.LIBRARIES_RUNTIMES_FRAMEWORKS,
    proficiency: Proficiencys.VERY_HIGH,
  },
  Spring: {
    icon: springIcon,
    type: Types.LIBRARIES_RUNTIMES_FRAMEWORKS,
    proficiency: Proficiencys.HIGH,
  },
  Unix: {
    icon: unixIcon,
    type: Types.MISCELLANEOUS,
    proficiency: Proficiencys.HIGH,
  },
  Vim: {
    icon: vimIcon,
    type: Types.MISCELLANEOUS,
    proficiency: Proficiencys.HIGH,
  },
  VSCode: {
    icon: vscodeIcon,
    type: Types.MISCELLANEOUS,
    proficiency: Proficiencys.HIGH,
  },
  Yarn: {
    icon: yarnIcon,
    type: Types.MISCELLANEOUS,
    proficiency: Proficiencys.HIGH,
  },
  Typescript: {
    icon: typescriptIcon,
    type: Types.PROGRAMMING_LANGUAGES,
    proficiency: Proficiencys.HIGH,
  },
  Webpack: {
    icon: webpackIcon,
    type: Types.MISCELLANEOUS,
    proficiency: Proficiencys.HIGH,
  },
  Vuejs: {
    icon: vueJsIcon,
    type: Types.LIBRARIES_RUNTIMES_FRAMEWORKS,
    proficiency: Proficiencys.HIGH,
  },
  PostgreSQL: {
    icon: postgreSQLIcon,
    type: Types.MISCELLANEOUS,
    proficiency: Proficiencys.HIGH,
  },
};

//all the sorting categories for each type of sorting criteria
export const sortingCategories = {
  type: [
    Types.PROGRAMMING_LANGUAGES,
    Types.LIBRARIES_RUNTIMES_FRAMEWORKS,
    Types.MISCELLANEOUS,
  ],
  proficiency: [Proficiencys.VERY_HIGH, Proficiencys.HIGH, Proficiencys.FAIR],
};

// object that contains the information for a particular sorting criteria
interface SkillsSortObject {
  // tht title of the sorting criteria in the button that activates it
  title: string;
  // the background color of the header when this sorting criteria is active
  backgroundColor: string;
}

export enum SkillsSortingCriteria {
  ALPHABET = 'alphabet',
  TYPE = 'type',
  PROFICIENCY = 'proficiency',
}

type SkillsSortingCriteriaDetails = {
  [key in SkillsSortingCriteria]: SkillsSortObject;
};

export const skillsSortingCriteriaDetails: SkillsSortingCriteriaDetails = {
  [SkillsSortingCriteria.ALPHABET]: {
    title: 'Alphabet',
    backgroundColor: '#EEF4D4',
  },
  [SkillsSortingCriteria.TYPE]: {
    title: 'Type',
    backgroundColor: '#DAEFB3',
  },
  [SkillsSortingCriteria.PROFICIENCY]: {
    title: 'Proficiency',
    backgroundColor: '#EA9E8D',
  },
};
