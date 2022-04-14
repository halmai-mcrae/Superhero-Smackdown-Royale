import React, { useState } from 'react'

import { getSuperhero } from '../api'

import Header from './Header.jsx'

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
      <Header />
      <button onClick={superheroData}>click</button>
    </div>
  )
}

export default App
