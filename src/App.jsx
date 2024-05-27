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
          img={<img src={LinkedInIcon} alt="LinkedIn" />}
          alt="Jeisson Cardenas Linkedin"
        />
      </aside>
    </>
  )
}

export default App
