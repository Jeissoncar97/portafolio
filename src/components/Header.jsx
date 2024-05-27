import Profile from '../assets/Fotojeisson.png'
import '../Estilos/header.css'

function Header() {

  return (
    <>
      <div className='header'>
        <div className="header_content">
          <div className="header__logo-container">
            <div className="header__logo-img-cont">
              <img src={Profile} alt="" />
            </div>
            <span className='header__logo-sub'>
              JEISSON CARDENAS
            </span>
          </div>
          <nav className="header_main">
            <ul className='header-links'>
              <li className='header-link'>
                <a href="#home" className='link'>Inicio</a>
              </li>
              <li className='header-link'>
                <a href="#projects" className='link'>Proyectos</a>
              </li>
              <li className='header-link'>
                <a href="#about">Acerca</a>
              </li>
              <li className='header-link'>
                <a href="#contact">Contacto</a>
              </li>
              <li className='header-link modo'>
                <span className='dia'></span>
                <span className='noche'></span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Header
