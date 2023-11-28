
import Image from 'next/image'
import { Experience } from './components/experience/experience'
import { Header } from './components/header/header'
import {Info} from './components/information/information'



import './styles/home.scss'
import { EmailIcon } from './components/icons/email-icon'
import SocialBtns from './components/social-btns/social-btns'
import { InstaIcon } from './components/icons/insta-icon'
import { GitHubIcon } from './components/icons/github-icon'
import { TwitterIcon } from './components/icons/twiter-icon'


export default function Home() {
  return (
    <main className='container'>
      
      <Header/>
       <Experience/>
        <Info/>
          <div className="buttons">
        <SocialBtns/>
         
          <button className='btn-primary'>
            contact me
            <EmailIcon/>
            
           </button>
          </div>
     
    </main>
  )
}
