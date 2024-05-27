import PropTypes from 'prop-types';

function Social(props) {
  return (
    <div>
      {props.img}
      <span>{props.alt}</span>
    </div>
  );
}

Social.propTypes = {
  img: PropTypes.element.isRequired, // Validación para la propiedad img
  alt: PropTypes.string.isRequired,
};

export default Social;
