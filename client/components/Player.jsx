import React from 'react'

function Player(props) {
  
  const hero = props.hero
  return (
    <div>
      {hero && (
        <div className="superhero">
          <h2>{hero.name}</h2>
          <img src={hero.images.sm} />
          <div className="stats">
            <h3>Stats</h3>
            <ul>
              <li>Intelligence: {hero.powerstats.intelligence}</li>
              <li>Strength: {hero.powerstats.strength}</li>
              <li>Speed: {hero.powerstats.speed}</li>
              <li>Durability: {hero.powerstats.durability}</li>
              <li>Power: {hero.powerstats.power}</li>
              <li>Combat: {hero.powerstats.combat}</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default Player
