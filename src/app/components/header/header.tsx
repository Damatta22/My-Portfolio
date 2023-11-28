import Image from 'next/image'
import './header.scss'

export function Header(){
    return(
        <div className='header'>
            
            <div>

              <h1>Hi, I´m Flávio da Mata!👋 </h1>
              <h2>Front-end Developer</h2>
            </div>

            <Image
              src="/Fdm.png"
              alt="My Image"
         
              width={280}
              height={280}
              priority
              />
            </div>
    )
}


