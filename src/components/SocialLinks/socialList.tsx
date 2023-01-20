import { TfiLinkedin } from 'react-icons/tfi'
import {BsGithub} from 'react-icons/bs'
import {MdOutlineEmail} from 'react-icons/md'

interface socialLinksProps {
  ICON: React.ReactNode
  NAME: string
  LINK: string
}

const socialLinks: socialLinksProps[] = [
  {
    ICON: <TfiLinkedin size={24}/>,
    NAME: 'Linkedin',
    LINK: 'https://www.linkedin.com/in/vitorgasparhu/'
  },
  {
    ICON: <BsGithub size={24}/>,
    NAME: 'Github',
    LINK: 'https://github.com/vitoraugustohu'
  },
  {
    ICON: <MdOutlineEmail size={24}/>,
    NAME: 'Email',
    LINK: ''
  }
]

export default socialLinks
