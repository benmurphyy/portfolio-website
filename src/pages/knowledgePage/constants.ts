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

export const skills = {
  Arduino: {
    icon: ArduinoIcon,
    Type: 'Miscellaneous',
    Proficiency: 'Fair',
  },
  Bash: {
    icon: BashIcon,
    Type: 'Miscellaneous',
    Proficiency: 'High',
  },
  Bootstrap: {
    icon: BootstrapIcon,
    Type: 'Miscellaneous',
    Proficiency: 'High',
  },
  C: {
    icon: CIcon,
    Type: 'Programming Languages',
    Proficiency: 'High',
  },
  CSS: {
    icon: CSSIcon,
    Type: 'Miscellaneous',
    Proficiency: 'High',
  },
  Docker: {
    icon: DockerIcon,
    Type: 'Miscellaneous',
    Proficiency: 'Fair',
  },
  Git: {
    icon: GitIcon,
    Type: 'Miscellaneous',
    Proficiency: 'High',
  },
  HTML: {
    icon: HTMLIcon,
    Type: 'Miscellaneous',
    Proficiency: 'High',
  },
  Java: {
    icon: JavaIcon,
    Type: 'Programming Languages',
    Proficiency: 'Very High',
  },
  Javascript: {
    icon: JavascriptIcon,
    Type: 'Programming Languages',
    Proficiency: 'High',
  },
  Kotlin: {
    icon: KotlinIcon,
    Type: 'Programming Languages',
    Proficiency: 'Fair',
  },
  Linux: {
    icon: LinuxIcon,
    Type: 'Miscellaneous',
    Proficiency: 'High',
  },
  Lua: {
    icon: LuaIcon,
    Type: 'Programming Languages',
    Proficiency: 'Fair',
  },
  MySql: {
    icon: MySqlIcon,
    Type: 'Miscellaneous',
    Proficiency: 'Fair',
  },
  NodeJS: {
    icon: NodeJSIcon,
    Type: 'Libraries, Runtimes & Frameworks',
    Proficiency: 'Fair',
  },
  Python: {
    icon: PythonIcon,
    Type: 'Programming Languages',
    Proficiency: 'Very High',
  },
  'Raspberry Pi': {
    icon: RaspberryPiIcon,
    Type: 'Miscellaneous',
    Proficiency: 'Fair',
  },
  React: {
    icon: ReactIcon,
    Type: 'Libraries, Runtimes & Frameworks',
    Proficiency: 'Very High',
  },
  Spring: {
    icon: SpringIcon,
    Type: 'Libraries, Runtimes & Frameworks',
    Proficiency: 'High',
  },
  Unix: {
    icon: UnixIcon,
    Type: 'Miscellaneous',
    Proficiency: 'High',
  },
  Vim: {
    icon: VimIcon,
    Type: 'Miscellaneous',
    Proficiency: 'High',
  },
  VSCode: {
    icon: VscodeIcon,
    Type: 'Miscellaneous',
    Proficiency: 'High',
  },
  Yarn: {
    icon: YarnIcon,
    Type: 'Miscellaneous',
    Proficiency: 'High',
  },
  Typescript: {
    icon: TypescriptIcon,
    Type: 'Programming Languages',
    Proficiency: 'High',
  },
  Webpack: {
    icon: WebpackIcon,
    Type: 'Miscellaneous',
    Proficiency: 'High',
  },
  Vuejs: {
    icon: VueJsIcon,
    Type: 'Libraries, Runtimes & Frameworks',
    Proficiency: 'High',
  },
  PostgreSQL: {
    icon: PostgreSQLIcon,
    Type: 'Miscellaneous',
    Proficiency: 'High',
  },
};

//all the sorting categories for each type of sorting criteria
export const sortingCategories = {
  Type: [
    'Programming Languages',
    'Libraries, Runtimes & Frameworks',
    'Miscellaneous',
  ],
  Proficiency: ['Very High', 'High', 'Fair'],
};

export enum SkillsSortingCriteria {
  ALPHABET = "Alphabet",
  TYPE = "Type",
  PROFICIENCY = "Proficiency"
}