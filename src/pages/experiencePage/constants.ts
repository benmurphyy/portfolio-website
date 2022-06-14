export const careerExperienceFontResizeBreakpoint = 576; // same as bootstrap sm width

import BjmIcon from 'src/assets/icons/projects/bjm.svg';
import ThreeDPrintIcon from 'src/assets/icons/projects/3d_printing.svg';
import AlexaIcon from 'src/assets/icons/projects/alexa.svg';
import PongIcon from 'src/assets/icons/projects/pong.svg';
import TelegramIcon from 'src/assets/icons/projects/telegram.svg';

interface Project {
  title: string;
  subtitle: string;
  summary: string[];
  description: string;
  icon: React.ElementType;
}

export const projects: Project[] = [
  {
    title: 'This Webpage',
    subtitle: 'My portfolio website using React',
    summary: [
      'Objective was to create a space to share my skills and projects, along with industrial experience. and develop my skill in front-end dev at the same time',
      'Libraries used: react-router, react-spring, react-bootstrap',
    ],
    description:
      'This webpage was built using React with Bootstrap to help in the layouts. React-router was used for routing and React-spring for the animations. No template was used, as I wanted to fashion the website from the ground up, so I could impart my own style and also maximise the learning experience.',
    icon: BjmIcon,
  },
  {
    title: 'Thinking in 3 Dimensions',
    subtitle: '3D printing',
    summary: [
      'Extensive experience in building and maintaining 3D printers',
      'Parametric modelling in Fusion360 to develop parts for own projects',
      'Marketed 3d printing services to supplement financial cost of hobby',
    ],
    description:
      "I got into 3d printing as a hobby as I found the ability to fabricate parts at home exciting, and useful for electronic projects. I also liked the idea that a hobbyist like myself could harness such seemingly cutting-edge technology, thanks to the open-source nature of the 3d printing community. \nI first started in 2017, when I built a cheap 3d printer out of parts from China to minimise cost. Since then, I've honed my ability to debug the myriad of errors that 3d printers can encounter and how to fix them to get great prints. Addtionally I've also done some 3d modelling in Autodesk Fusion360 to make my own parts for projects. \nNow I'm using a printer that is considerably better than the one i first started with, upgraded with custom components to enhance print quality. I've also marketed 3d printing services, which has almost entirely eliminated the financial cost of the hobby.",
    icon: ThreeDPrintIcon,
  },
  {
    title: 'Smart Room',
    subtitle: 'Making regular room appliances smart',
    summary: [
      'Objective was to enhance the convenience features of appliances in my room',
      'Remote controls of appliances wired up to GPIO pins of Raspberry Pi, which acted as a backend server for controlling all appliances in room',
      'Built simple android app to communicate with Raspberry Pi server, so phone served as unified remote',
      'Utilised Alexa Skills Kit (ASK) to add voice control by using alexa device to send the interpreted commands to the Raspberry Pi server',
    ],
    description:
      "This project was born from the desire to make the simple remote-controlled appliances in my room like the fan, lights and air-conditioning 'smart' (an example would be turning on the lights at a specific time of day). \nThe main problem I faced stemmed from the fact that these devices were not designed to be 'smart', hence to interface the applicances with my Raspberry Pi (the control hub), I had to wire up their remote controls to the GPIO outputs of the Pi, and write python programs that triggered the right output (with correct timing of 'button presses') depending on the action wanted. \nWith the Raspberry Pi as a backend server, I later built a simple android app to control the devices through my phone (to use as my unified remote control for all appliances), and also incorporated voice control through the Alexa Skills Kit (ASK).",
    icon: AlexaIcon,
  },
  {
    title: 'Fridge View Bot',
    subtitle: 'A Telegram bot to reduce food waste',
    summary: [
      'University module sustainability project',
      'Utilised python-telegram-bot module to build the bot',
      'Raspberry Pi backend server, with data logging and storage of user information in pickle files, along with image storage.',
    ],
    description:
      'This was a project I undertook for a sustainability module I took in the National University of Singapore (NUS), GEH1074. It was designed to be a solution to the problem of food wastage by hostel residents who left food till expiry in hostel fridges, either by forgetting or not being able to finish their food. \nA Telegram bot was chosen as Telegram is an application used by pretty much everyone in NUS, thus reducing the onboarding process. Fridge view bot provided students with a convenient platform to log the food they placed in the refrigerators, and put their items up for sharing in the bot when they were nearing expiry and they could not finish them. Fridge view bot also sent reminders to students as their items neared expiry. \nOne problem faced in implemenation was how to allow other people to know where a shared item was in the fridge. A simple solution I came up with was to incorporate storing of images of the locations of the items in the fridge on the backend server, and sending the image to a user corresponding to the item being retrieved by that user.',
    icon: TelegramIcon,
  },
  {
    title: 'Pong Connect',
    subtitle: 'Multiplayer Pong over the Internet',
    summary: [
      'Project undertaken purely out of interest',
      'Based on the CS50 game development course pong game, with some enhancements, the main one being internet multiplayer',
      'Client Hosted multiplayer set-up',
    ],
    description:
      "This was a fun mini-project I undertook as I was trying out Harvard's CS50 Game Development course. I was interested in the complexities of implementing a multiplayer game (which I discovered were immense as I researched for the project).\nI settled on a simple setup whereby one player would be the server and the other the client. The game would essentially run on the server machine, and deliver and receive data from the client via UDP packets. The game was designed to be able to handle lost packets as long as not too many were lost. Upon playing the finished game, an acceptable framerate of around 40-60 fps with little choppiness being observed on the client's computer.\nWhile the premise of the project, the game pong, is extremely simple, by simply trying to make a multiplayer version, it became a lot more complex and exposed me to some of challenges faced in multiplayer game development, like handling packet delays/losses, interpolation etc. It was also pretty fun to play the finished product with a friend! ",
    icon: PongIcon,
  },
];
