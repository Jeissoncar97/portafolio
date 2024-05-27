import './App.css'
import Header from './components/Header'
import Social from './components/Socials'
import LinkedInIcon from './assets/linkedin.svg'

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
      </aside>
    </>
  )
}

export default App
