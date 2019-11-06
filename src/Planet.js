import React from 'react'
import PropTypes from 'prop-types'

const Planet = ({ resource }) => {
  const planet = resource.planet.read()
  const index = Math.floor(Math.random() * 10)
  return <div>{planet[index].name}</div>
}

Planet.propTypes = {
  resource: PropTypes.shape({
    planet: PropTypes.shape({
      read: PropTypes.func.isRequired
    })
  }).isRequired
}

export default Planet
