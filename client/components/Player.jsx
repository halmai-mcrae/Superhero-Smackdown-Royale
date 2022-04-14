/* eslint-disable promise/catch-or-return */
import React, { useState } from 'react'

import { getSuperhero } from '../api'

function Player() {
  const [superhero, setSuperhero] = useState(null)

  const superheroData = () => {
    getSuperhero().then((obj) => {
      setSuperhero(obj)
    })
  }

  return (
    <div>
      <button onClick={superheroData}>{`Let's Go`}</button>
      {superhero && (
        <div className="superhero">
          <h2>{superhero.name}</h2>
          <img src={superhero.images.sm} />
          <div className="stats">
            <h3>Stats</h3>
            <ul>
              <li>Intelligence: {superhero.powerstats.intelligence}</li>
              <li>Strength: {superhero.powerstats.strength}</li>
              <li>Speed: {superhero.powerstats.speed}</li>
              <li>Durability: {superhero.powerstats.durability}</li>
              <li>Power: {superhero.powerstats.power}</li>
              <li>Combat: {superhero.powerstats.combat}</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default Player
