import PropTypes from 'prop-types'

const Tecnologias = (props) => {
  return (
    <span>
      {props.icon}
      <h4>{props.name}</h4>
    </span>
  )
}

Tecnologias.propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
}

export default Tecnologias
