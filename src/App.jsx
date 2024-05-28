import './App.css'
import Header from './components/Header'
import Social from './components/Socials'
import LinkedInIcon from './assets/linkedin.svg'
import Github from './assets/github.svg'
import Correo from './assets/correo.svg'

function App() {
  return (
    <>
      <Header />
      <aside className="social">
        <Social 
          img={LinkedInIcon}
          alt="Jeisson Cardenas Linkedin"
          link="https://www.linkedin.com/in/jeisson-cardenas/"
          title = "Jeisson Cardenas Linkedin"
        />
        <Social 
          img={Github}
          alt="Jeisson Cardenas Github"
          link="https://www.linkedin.com/in/jeisson-cardenas/"
          title = "Jeisson Cardenas Github"
        />
        <Social 
          img={Correo}
          alt="Jeisson Cardenas Correo"
          link="mailto:jeissonca98@gmail.com"
          title = "Jeisson Cardenas correo"
          className="correo-color"
          />
      </aside>
      <div>
        

      </div>
    </>
  )
}

export default App
