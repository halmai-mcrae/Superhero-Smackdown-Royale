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
<div className="buttonContainer">
<button onClick={loadSuperheroData}>{`Let's Go`}</button>
  </div><br></br>

    <div className="grid">

      <div className="player">
      <Player hero={superheroes[0]}/>
      </div>
      <div className="winner">
      <Winner heroes={superheroes}/>
      </div>
      <div className="player">
      <Player hero={superheroes[1]}/>
      </div>

      </div>

    </>
  )

}

export default PlayerWin