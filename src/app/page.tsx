import { Header } from './components/header/header'
import './styles/home.scss'


export default function Home() {
  return (
    <main className='container'>
      
      <Header/>
        <div className='experience'>
        <h3>Experience</h3>
        <p>texto</p>
        <div/>
        <div className='experience-time'>

        </div>
        <div className='infos'>
          <h3>Languages</h3>
          <div className="languages-info">
            <span> 🇺🇸 EN- Intermediary</span>
            <span>🇧🇷 PT-BR- Native Speaker</span>
          </div>
          <h3>Education</h3>
          <div className="educational-info">
           
            <span>🎓</span>
            <span>Analisis and Systems Development Degree- Faculdade Pitágoras Anhanguera Unopar</span>
          </div>
          <div className="buttons">

            <div className="social">

            </div>
          </div>
          <button>contact me</button>
        </div>

        </div>
     
    </main>
  )
}
