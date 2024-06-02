import { useState } from 'react'
import './Estilos/projects.css'
import './App.css'
import './Estilos/section-hero-home.css'
import './Estilos/about.css'
import './Estilos/contact.css'
import Header from './components/Header'
import Foto from './assets/foto.jpg'
import Social from './components/Socials'
import LinkedInIcon from './assets/linkedin.svg'
import Github from './assets/github.svg'
import Correo from './assets/correo.svg'
import Copy from './assets/copy.svg'
import Send from './assets/send.svg'
import Swal from "sweetalert2";
import Project from './components/Project'
import Imagenprueba from './assets/prueba.png'
import Person from './assets/person.svg'
import Tecnologias from './components/Tecnologias'
import ReactIcon from './components/icons/React'
import NodeIcon from './components/icons/Node'
import FirebaseIcon  from './components/icons/Firebase'
import HtmlIcon from './components/icons/Html5'
import CssIcon from './components/icons/Css3'
import MongoDBIcon from './components/icons/MongoDB'
import ContactForm from './components/contact'
import CV from './assets/CVJeissonCardenas.pdf'
import GithubIcon from './components/icons/Github'
import './Estilos/footer.css'

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
      
      <section className='home' id='home'>
        <div className="hero-home-inf">
          <h1>Hola, Soy Jeisson Cardenas</h1>
          <div className='hero-home-description'>
            <p>Estudiante de ingenieria en sistemas, apasionado por el <span>DESARROLLO WEB. </span></p>
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
        <div className="home-hero__mouse-scroll-cont">
          <div className='mouse'></div>
        </div>
      </section>
      <section className='proyectos' id='projects'>
        <h2><img src="" alt="Code" className='icon'/> Proyectos</h2>
        <div className="cont-linear">
          <div className="linea"></div>
        </div>
        <div className='projects-all'>
          <Project 
          nameProject='Inicio de sesion'
          imgProject={Imagenprueba}
          alt='Imagen proyecto inicio de sesión'
          skill1= 'React'
          skill2= 'Firebase'
          skill3= 'Mongo'
          skill4= 'Express'
          projectDescription = 'En este proyecto, hice un inicio de sesión con React y Firebase, donde se puede acceder de forma segura con clave encriptada. ¡Adentro tiene un juego increíble!'
          linkGithub='#'
          linkPage='#'
          />
          <Project 
          nameProject='Inicio de sesion'
          imgProject={Imagenprueba}
          alt='Imagen proyecto inicio de sesión'
          skill1= 'React'
          skill2= 'Firebase'
          skill3= 'Mongo'
          skill4= 'Express'
          projectDescription = 'En este proyecto, hice un inicio de sesión con React y Firebase, donde se puede acceder de forma segura con clave encriptada. ¡Adentro tiene un juego increíble!'
          linkGithub='#'
          linkPage='#'
          />
          <Project 
          nameProject='Inicio de sesion'
          imgProject={Imagenprueba}
          alt='Imagen proyecto inicio de sesión'
          skill1= 'React'
          skill2= 'Firebase'
          skill3= 'Mongo'
          skill4= 'Express'
          projectDescription = 'En este proyecto, hice un inicio de sesión con React y Firebase, donde se puede acceder de forma segura con clave encriptada. ¡Adentro tiene un juego increíble!'
          linkGithub='#'
          linkPage='#'
          />
        </div>
      </section>
      <section className="aboutSection">
        <h2>
          <img src={Person} alt="Code" className='icon'/> Sobre mí
            <div className="cont-linear">
                <div className="linea"></div>  
            </div>
        </h2>
        
        <div className="cont-about">
          <div className='about'>
            <div className='about-description'>
              <h3>Conoceme</h3>
              <div className="cont-foto">
                <img src={Foto} alt="Foto Jeisson Cardenas" />
              </div>
              <p>Estudiante de ingeniería en sistemas, enfocado en el <span>desarrollo de software</span>, con experiencia en administración de restaurantes y servicio al cliente. <span>Apasionado por la tecnología</span> y con un fuerte compromiso por servir a los demás.</p>
              <p>Soy una persona responsable, organizada y con capacidad de trabajo constante. <span>Estoy motivado por el aprendizaje y siempre busco nuevas oportunidades para mejorar mis habilidades.</span></p>
            </div>
            
          </div>
          <div className="cont-skills">
            <h3>Tecnologías</h3>
            <div className="skills">
            <Tecnologias
                name='Html'
                icon={<HtmlIcon
                width={50}
                height={50}
                />}
            />
            <Tecnologias
                name='Css'
                icon={<CssIcon
                width={50}
                height={50}
                />}
            />
            <Tecnologias
                name='React'
                icon={<ReactIcon
                width={50}
                height={50}
                />}
            />
            <Tecnologias
                name='Node JS'
                icon={<NodeIcon
                width={50}
                height={50}
                />}
            />
            <Tecnologias
                name='firebase'
                icon={<FirebaseIcon
                width={50}
                height={50}
                />}
            />
            <Tecnologias
                name='MongoDb'
                icon={<MongoDBIcon
                width={50}
                height={50}
                />}
            />
            </div>
          </div>
        </div>
      </section>
      <section className='contact'>
        <div className='contactContainer'>
          <h2>
            <img src={Person} alt="Code" className='icon'/> Contacto
              <div className="cont-linear">
                  <div className="linea"></div>  
              </div>
          </h2>
          <p>No dude en ponerse en contacto conmigo enviando el siguiente formulario y me comunicaré con usted lo antes posible.</p>
          <div className='contact-form'>
            <ContactForm />
          </div>
        </div>
        
      </section>
      <footer className='footerMain'>
        <div className="cont-footer">
          <div className="footer-description">
            <h4>JEISSON CARDENAS</h4>
            <p>Estudiante de ingenieria en sistemas, apasionado por el <span>DESARROLLO WEB.</span> Aprendiendo nuevas tecnologias dia a dia y enfocado en <span>frontend</span></p>
              <div className='footer-button'>
                <a href={CV} target="_blank" rel="noopener noreferrer" className='button' >descargar CV</a>
              </div>
          </div>
          <div className="footer-repository">
            <h4>Repositorio</h4>
            <a href="https://jeissoncar97.github.io/portafolio5/" className='repository' title='Repositorio portafolio'><GithubIcon /></a>
          </div>
          
        </div>
        <footer className='main-footer__lower'>
          <div className='linear-footer'></div>
          <p>©2024 <a href="#home">Jeisson Andres Cardenas Verdugo.</a></p>
        </footer>
      </footer>
    </>
  )
}

export default App
