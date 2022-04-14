import React, { useState } from 'react'

import { getSuperhero } from '../api'

function App() {

  const [superhero, setSuperhero] = useState(null)

  const superheroData = () => {
    getSuperhero()
      .then(obj => {
        setSuperhero(obj)
      })
  }

  return (
    <div>
      <h1>Superhero Smackdown Royale!</h1>
      <h3>Choose your hero</h3>
      <button onClick={superheroData}>click</button>
    </div>
  )
}

export default App
