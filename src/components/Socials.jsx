import '../Estilos/social.css'
import PropTypes from 'prop-types'



function Social(props) {
  return (
    <span className='img-social'>
      <a target='_blank' href={props.link}>
        {props.img}
      </a>
    </span>
  );
}

Social.propTypes = {
  link: PropTypes.string.isRequired,
  img: PropTypes.element.isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
};


export default Social;
