import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Social from './components/Socials'
import './Estilos/section-hero-home.css'
import LinkedInIcon from './assets/linkedin.svg'
import Github from './assets/github.svg'
import Correo from './assets/correo.svg'
import Copy from './assets/copy.svg'
import Send from './assets/send.svg'
import Swal from "sweetalert2";

function App() {
  
  

  const correoDefoult = "jeissoncar97@gmail.com"
  const [copy, setCopy] = useState(correoDefoult) 

  const handleCopy = (event) =>{
      setCopy(event.target.value)
  }
  const handleSubmit = () =>{
    navigator.clipboard.writeText(copy)
    Swal.fire({
      text: "¡Correo compiado!",
      icon: "success",
      timer: 1500,
      customClass: {
        popup: 'custom-swal-wide'
      }
    })
  }
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
          link="mailto:jeissoncar97@gmail.com"
          title = "Jeisson Cardenas correo"
          className="correo-color"
          />
      </aside>
      <section className='home' id='home'>
        <div className="hero-home-inf">
          <h1>Hola, Soy Jeisson Cardenas</h1>
          <div className='hero-home-description'>
            <p>Soy estudiante de ingenieria en sistemas, apasionado por el <span>DESARROLLO WEB. </span>Me interesa aprender y aplicar tecnologías modernas para crear aplicaciones eficientes y funcionales. Mi objetivo es mejorar constantemente mis <span>habilidades técnicas</span> y contribuir de manera efectiva en los proyectos en los que participo.</p>
          </div>
          <div className='hero-home-email'>
            <input 
            className='input-hero-home'
            type="text" 
            name="email" 
            id="text" 
            value={copy}
            onChange={handleCopy}
            readOnly
            />
            <button id='btn' className='btn-hero-copy' onClick={handleSubmit}>
              <img src={Copy} alt="Copy"  />
            </button>
            <a  href='mailto:jeissoncar97@gmail.com' className='btn-hero-copy'>
              <img src={Send} alt="Send" />
            </a>
          </div>
          <div className="hero-home-button">
            <a href="#projects" className='button'>PROYECTOS</a>
          </div>
        </div>
      </section>
      
    </>
  )
}

export default App
