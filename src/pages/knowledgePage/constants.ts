import ArduinoIcon from 'src/assets/icons/skills/arduino/arduino-original.svg';
import BashIcon from 'src/assets/icons/skills/bash/bash-original.svg';
import BootstrapIcon from 'src/assets/icons/skills/bootstrap/bootstrap-original.svg';
import CIcon from 'src/assets/icons/skills/c/c-original.svg';
import CSSIcon from 'src/assets/icons/skills/css3/css3-original.svg';
import DockerIcon from 'src/assets/icons/skills/docker/docker-original.svg';
import GitIcon from 'src/assets/icons/skills/git/git-original.svg';
import HTMLIcon from 'src/assets/icons/skills/html5/html5-original.svg';
import JavaIcon from 'src/assets/icons/skills/java/java-original.svg';
import JavascriptIcon from 'src/assets/icons/skills/javascript/javascript-original.svg';
import KotlinIcon from 'src/assets/icons/skills/kotlin/kotlin-original.svg';
import LinuxIcon from 'src/assets/icons/skills/linux/linux-original.svg';
import LuaIcon from 'src/assets/icons/skills/lua/lua-original.svg';
import MySqlIcon from 'src/assets/icons/skills/mysql/mysql-original.svg';
import NodeJSIcon from 'src/assets/icons/skills/nodejs/nodejs-original.svg';
import PythonIcon from 'src/assets/icons/skills/python/python-original.svg';
import RaspberryPiIcon from 'src/assets/icons/skills/raspberrypi/raspberrypi-original.svg';
import ReactIcon from 'src/assets/icons/skills/react/react-original.svg';
import SpringIcon from 'src/assets/icons/skills/spring/spring-original.svg';
import UnixIcon from 'src/assets/icons/skills/unix/unix-original.svg';
import VimIcon from 'src/assets/icons/skills/vim/vim-original.svg';
import VscodeIcon from 'src/assets/icons/skills/vscode/vscode-original.svg';
import YarnIcon from 'src/assets/icons/skills/yarn/yarn-original.svg';
import TypescriptIcon from 'src/assets/icons/skills/typescript/typescript.svg';
import WebpackIcon from 'src/assets/icons/skills/webpack/webpack.svg';
import VueJsIcon from 'src/assets/icons/skills/vuejs/vuejs.svg';
import PostgreSQLIcon from 'src/assets/icons/skills/postgresql/postgresql.svg';

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
  icon: React.ElementType;
  type: Types;
  proficiency: Proficiencys;
}

export const skills: {
  [key: string]: Skill;
} = {
  Arduino: {
    icon: ArduinoIcon,
    type: Types.MISCELLANEOUS,
    proficiency: Proficiencys.FAIR,
  },
  Bash: {
    icon: BashIcon,
    type: Types.MISCELLANEOUS,
    proficiency: Proficiencys.HIGH,
  },
  Bootstrap: {
    icon: BootstrapIcon,
    type: Types.MISCELLANEOUS,
    proficiency: Proficiencys.HIGH,
  },
  C: {
    icon: CIcon,
    type: Types.PROGRAMMING_LANGUAGES,
    proficiency: Proficiencys.HIGH,
  },
  CSS: {
    icon: CSSIcon,
    type: Types.MISCELLANEOUS,
    proficiency: Proficiencys.HIGH,
  },
  Docker: {
    icon: DockerIcon,
    type: Types.MISCELLANEOUS,
    proficiency: Proficiencys.FAIR,
  },
  Git: {
    icon: GitIcon,
    type: Types.MISCELLANEOUS,
    proficiency: Proficiencys.HIGH,
  },
  HTML: {
    icon: HTMLIcon,
    type: Types.MISCELLANEOUS,
    proficiency: Proficiencys.HIGH,
  },
  Java: {
    icon: JavaIcon,
    type: Types.PROGRAMMING_LANGUAGES,
    proficiency: Proficiencys.VERY_HIGH,
  },
  Javascript: {
    icon: JavascriptIcon,
    type: Types.PROGRAMMING_LANGUAGES,
    proficiency: Proficiencys.HIGH,
  },
  Kotlin: {
    icon: KotlinIcon,
    type: Types.PROGRAMMING_LANGUAGES,
    proficiency: Proficiencys.FAIR,
  },
  Linux: {
    icon: LinuxIcon,
    type: Types.MISCELLANEOUS,
    proficiency: Proficiencys.HIGH,
  },
  Lua: {
    icon: LuaIcon,
    type: Types.PROGRAMMING_LANGUAGES,
    proficiency: Proficiencys.FAIR,
  },
  MySql: {
    icon: MySqlIcon,
    type: Types.MISCELLANEOUS,
    proficiency: Proficiencys.FAIR,
  },
  NodeJS: {
    icon: NodeJSIcon,
    type: Types.LIBRARIES_RUNTIMES_FRAMEWORKS,
    proficiency: Proficiencys.FAIR,
  },
  Python: {
    icon: PythonIcon,
    type: Types.PROGRAMMING_LANGUAGES,
    proficiency: Proficiencys.VERY_HIGH,
  },
  'Raspberry Pi': {
    icon: RaspberryPiIcon,
    type: Types.MISCELLANEOUS,
    proficiency: Proficiencys.FAIR,
  },
  React: {
    icon: ReactIcon,
    type: Types.LIBRARIES_RUNTIMES_FRAMEWORKS,
    proficiency: Proficiencys.VERY_HIGH,
  },
  Spring: {
    icon: SpringIcon,
    type: Types.LIBRARIES_RUNTIMES_FRAMEWORKS,
    proficiency: Proficiencys.HIGH,
  },
  Unix: {
    icon: UnixIcon,
    type: Types.MISCELLANEOUS,
    proficiency: Proficiencys.HIGH,
  },
  Vim: {
    icon: VimIcon,
    type: Types.MISCELLANEOUS,
    proficiency: Proficiencys.HIGH,
  },
  VSCode: {
    icon: VscodeIcon,
    type: Types.MISCELLANEOUS,
    proficiency: Proficiencys.HIGH,
  },
  Yarn: {
    icon: YarnIcon,
    type: Types.MISCELLANEOUS,
    proficiency: Proficiencys.HIGH,
  },
  Typescript: {
    icon: TypescriptIcon,
    type: Types.PROGRAMMING_LANGUAGES,
    proficiency: Proficiencys.HIGH,
  },
  Webpack: {
    icon: WebpackIcon,
    type: Types.MISCELLANEOUS,
    proficiency: Proficiencys.HIGH,
  },
  Vuejs: {
    icon: VueJsIcon,
    type: Types.LIBRARIES_RUNTIMES_FRAMEWORKS,
    proficiency: Proficiencys.HIGH,
  },
  PostgreSQL: {
    icon: PostgreSQLIcon,
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

export const skillsSortingCriteriaDetails: { [key: string]: SkillsSortObject } =
  {
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
