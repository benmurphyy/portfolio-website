import { ReactComponent as ArduinoIcon } from 'assets/icons/skills/arduino/arduino-original.svg';
import { ReactComponent as BashIcon } from 'assets/icons/skills/bash/bash-original.svg';
import { ReactComponent as BootstrapIcon } from 'assets/icons/skills/bootstrap/bootstrap-original.svg';
import { ReactComponent as CIcon } from 'assets/icons/skills/c/c-original.svg';
import { ReactComponent as CSSIcon } from 'assets/icons/skills/css3/css3-original.svg';
import { ReactComponent as DockerIcon } from 'assets/icons/skills/docker/docker-original.svg';
import { ReactComponent as GitIcon } from 'assets/icons/skills/git/git-original.svg';
import { ReactComponent as HTMLIcon } from 'assets/icons/skills/html5/html5-original.svg';
import { ReactComponent as JavaIcon } from 'assets/icons/skills/java/java-original.svg';
import { ReactComponent as JavascriptIcon } from 'assets/icons/skills/javascript/javascript-original.svg';
import { ReactComponent as KotlinIcon } from 'assets/icons/skills/kotlin/kotlin-original.svg';
import { ReactComponent as LinuxIcon } from 'assets/icons/skills/linux/linux-original.svg';
import { ReactComponent as LuaIcon } from 'assets/icons/skills/lua/lua-original.svg';
import { ReactComponent as MySqlIcon } from 'assets/icons/skills/mysql/mysql-original.svg';
import { ReactComponent as NodeJSIcon } from 'assets/icons/skills/nodejs/nodejs-original.svg';
import { ReactComponent as PythonIcon } from 'assets/icons/skills/python/python-original.svg';
import { ReactComponent as RaspberryPiIcon } from 'assets/icons/skills/raspberrypi/raspberrypi-original.svg';
import { ReactComponent as ReactIcon } from 'assets/icons/skills/react/react-original.svg';
import { ReactComponent as SpringIcon } from 'assets/icons/skills/spring/spring-original.svg';
import { ReactComponent as UnixIcon } from 'assets/icons/skills/unix/unix-original.svg';
import { ReactComponent as VimIcon } from 'assets/icons/skills/vim/vim-original.svg';
import { ReactComponent as VscodeIcon } from 'assets/icons/skills/vscode/vscode-original.svg';
import { ReactComponent as YarnIcon } from 'assets/icons/skills/yarn/yarn-original.svg';
import { ReactComponent as TypescriptIcon } from 'assets/icons/skills/typescript/typescript.svg';
import { ReactComponent as WebpackIcon } from 'assets/icons/skills/webpack/webpack.svg';
import { ReactComponent as VueJsIcon } from 'assets/icons/skills/vuejs/vuejs.svg';
import { ReactComponent as PostgreSQLIcon } from 'assets/icons/skills/postgresql/postgresql.svg';

enum Types {
  MISCELLANEOUS = "Miscellaneous",
  PROGRAMMING_LANGUAGES = "Programming Languages",
  LIBRARIES_RUNTIMES_FRAMEWORKS = "Libraries, Runtimes and Frameworks"
}

enum Proficiencys {
  VERY_HIGH = "Very High",
  HIGH = "High",
  FAIR = "Fair"
}

interface Skill {
  icon: React.ElementType,
  type: Types,
  proficiency: Proficiencys
}

export const skills: {
  [key: string]: Skill
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
  PROFICIENCY = 'proficiency'
}

export const skillsSortingCriteriaDetails: { [key: string]: SkillsSortObject } = {
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