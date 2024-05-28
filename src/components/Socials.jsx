import '../Estilos/social.css'
import PropTypes from 'prop-types'


function Social(props) {
  return (
    <span className='img-social'>
      <a target='_blank' href={props.link}>
        <img src={props.img} alt={props.alt} title ={props.title} className={props.className}/>
      </a>
    </span>
  );
}

Social.propTypes = {
  link: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
};


export default Social;
