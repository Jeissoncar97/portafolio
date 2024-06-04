import propTypes from 'prop-types'
import GithubTag from '../assets/githubTag.svg'
import Link from '../assets/link.svg'



const Project = (props) => {


  return (
    <article className="article-project">
      <div className="cont-img-project">
        <img src={props.imgProject} alt={props.alt} title={props.alt} className='img-project'/>
      </div>
      <div className='project-content-general'>
        <h3>{props.nameProject}</h3>
        <div className='project-content'>
            <ul className='skills'>
                <li className='skill'>{props.skill1}</li>
                <li className='skill'>{props.skill2}</li>
                <li className='skill'>{props.skill3}</li>
                <li className='skill'>{props.skill4}</li>
            </ul>
            <div className='project-description'>
                <p>{props.projectDescription}</p>
            </div>
            <footer className='project-footer'>
                <a href={props.linkGithub} className='button' target='_blank'>
                    <img src={GithubTag} alt="" className='icon'/>
                    <span>Github</span>
                </a>
                  <a href={props.linkPage} className='button' target='_blank'>
                      <img src={Link} alt="" className='icon'/>
                      <span>Página</span>
                  </a>
            </footer>
        </div>
      </div>
    </article>
  )
}

Project.propTypes = {
    nameProject: propTypes.string.isRequired,
    imgProject: propTypes.string.isRequired,
    alt: propTypes.string.isRequired,
    skill1: propTypes.string.isRequired,
    skill3: propTypes.string.isRequired,
    skill2: propTypes.string,
    skill4: propTypes.string,
    projectDescription: propTypes.string.isRequired,
    linkGithub: propTypes.string.isRequired,
    linkPage: propTypes.string.isRequired,
}

export default Project
