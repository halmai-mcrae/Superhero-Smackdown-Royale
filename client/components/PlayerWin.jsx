import React, { useState } from 'react'
import Player from './Player.jsx'


import { getSuperhero } from '../api'
import Winner from './Winner.jsx'

function PlayerWin () {
  const [superheroes, setSuperheroes] = useState(null)
  const [error, setError] = useState(null)
  const [winner, setWinner] = useState(null)
  const [stats, setStats] = useState(null)
  const [ display, setDisplay ] = useState('Display Winner')

  const loadSuperheroData = () => {
    Promise.all([
      getSuperhero(),
      getSuperhero()
    ]).then(both => {
      setDisplay('Display Winner')
      setWinner(null)
      setStats(null)
      setError(null)
      setSuperheroes(both)
    }).catch(e => {
      setError(e)
    })
  }

  if (superheroes == null) {
    return (
      <>
        <button
          className="letsGo"
          onClick={loadSuperheroData}
        >{`Let's Go`}</button>
      </>
    )
  }

  if (error != null) {
    return <p>Something went wrong: {error.message}</p>
  }

  return (
    <>

    <div>
<button className="letsGo" onClick={loadSuperheroData}>{`Let's Go`}</button>
  </div><br></br>

      <br></br>
      <div className="grid">
        <div className="player">
          <Player hero={superheroes[0]} />
        </div>
        <div className="display-winner">
          <Winner heroes={superheroes} winner={winner} setWinner={setWinner} stats={stats} setStats={setStats} display={display} setDisplay={setDisplay}/>
        </div>
        <div className="player">
          <Player hero={superheroes[1]} />
        </div>
      </div>
    </>
  )
}

export default PlayerWin
