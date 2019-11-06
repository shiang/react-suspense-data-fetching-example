import React from 'react'
import PropTypes from 'prop-types'

const Person = ({ resource }) => {
  const person = resource.person.read()
  const index = Math.floor(Math.random() * 10)

  return <div>{person[index].name}</div>
}

Person.propTypes = {
  resource: PropTypes.shape({
    person: PropTypes.shape({
      read: PropTypes.func.isRequired
    })
  }).isRequired
}

export default Person
