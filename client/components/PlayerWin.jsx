import React, { useState } from 'react'
import Player from './Player.jsx'
import Winner from './Winner.jsx'

import { getSuperhero } from '../api'


function PlayerWin () {
const [superheroes, setSuperheroes] = useState(null)
  const [error, setError] = useState(null)

  const loadSuperheroData = () => {
    Promise.all([
      getSuperhero(),
      getSuperhero()
    ]).then(both => {
      setError(null)
      setSuperheroes(both)
    }).catch(e => {
      setError(e)
    })
  }

  if (superheroes == null) {
    
    return <>
          <button onClick={loadSuperheroData}>{`Let's Go`}</button>
          <p>Loading...</p>
    </>
  }

  if (error != null) {
    return <p>Something went wrong: {error.message}</p>
  }
  return (
    <>
    <div>
      <button onClick={loadSuperheroData}>{`Let's Go`}</button>
      <Player hero={superheroes[0]}/>
      <Player hero={superheroes[1]}/>
      <Winner heroes={superheroes}/>

      </div>

    </>
  )

}

export default PlayerWin