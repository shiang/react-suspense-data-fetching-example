const fetchSwapi = type => {
  return fetch(`https://swapi.co/api/${type}`)
    .then(x => x.json())
    .then(y => y.results)
}

const wrapPromise = promise => {
  let status = 'pending'
  let result = ''
  let suspender = promise.then(
    r => {
      status = 'success'
      result = r
    },
    e => {
      status = 'error'
      result = e
    }
  )
  return {
    read() {
      if (status === 'pending') {
        throw suspender
      } else if (status === 'error') {
        throw result
      }

      return result
    }
  }
}

export const createResource = () => {
  return {
    person: wrapPromise(fetchSwapi('people')),
    planet: wrapPromise(fetchSwapi('planets'))
  }
}
