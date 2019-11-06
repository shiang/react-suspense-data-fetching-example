import React, { Suspense } from 'react'
import { createResource } from './FetchSWAPI'
import Person from './Person'
import Planet from './Planet'

const resource = createResource()

function App() {
  return (
    <main>
      <h1>Hello Suspense!!!</h1>
      <Suspense
        fallback={
          <div>
            loading person{' '}
            <span role='img' aria-label='man'>
              👨
            </span>{' '}
            or{' '}
            <span role='img' aria-label='woman'>
              🧑
            </span>
            ...
          </div>
        }
      >
        <Person resource={resource} />
      </Suspense>
      <Suspense
        fallback={
          <div>
            loading{' '}
            <span role='img' aria-label='planet'>
              🌕
            </span>
            ...
          </div>
        }
      >
        <Planet resource={resource} />
      </Suspense>
    </main>
  )
}

export default App
