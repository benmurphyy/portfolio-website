//Download Files
import resumeFile from 'src/assets/downloads/Resume_Ben_Murphy.pdf';
import transcriptFile from 'src/assets/downloads/Transcript_Ben_Murphy.pdf';
import EmailIcon from 'src/assets/icons/contact/email/email.svg';
import GithubIcon from 'src/assets/icons/contact/github/github-original.svg';
import LinkedInIcon from 'src/assets/icons/contact/linkedin/linkedin-original.svg';
import TelegramIcon from 'src/assets/icons/contact/telegram/telegram.svg';

export const subPages = ['About Me', 'Contact'];

//array of contact objects, corresponding to contact links
export const contacts = [
  {
    name: 'LinkedIn',
    icon: LinkedInIcon,
    link: 'https://www.linkedin.com/in/ben-murphyy',
  },
  {
    name: 'Github',
    icon: GithubIcon,
    link: 'https://github.com/benmurphyy',
  },
  {
    name: 'Telegram',
    icon: TelegramIcon,
    link: 'https://t.me/murph99',
  },
  {
    name: 'Email',
    icon: EmailIcon,
    link: 'mailto:benmurphyyy99@gmail.com',
  },
];

//array of download objects, corresponding to items we want to download
export const downloads = [
  {
    name: 'Resume',
    file: resumeFile,
  },
  {
    name: 'Transcript',
    file: transcriptFile,
  },
];
