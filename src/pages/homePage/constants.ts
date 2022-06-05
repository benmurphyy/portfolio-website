import GithubIcon from 'assets/icons/contact/github/github-original.svg';
import TelegramIcon from 'assets/icons/contact/telegram/telegram.svg';
import LinkedInIcon from 'assets/icons/contact/linkedin/linkedin-original.svg';
import EmailIcon from 'assets/icons/contact/email/email.svg';

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
const downloads = [
    {
        name: "Resume",
        link: "/assets/documents/Resume_Ben_Murphy.pdf",
    },
    {
        name: "Transcript",
        link: "/assets/documents/Transcript_Ben_Murphy.pdf"
    }
]
