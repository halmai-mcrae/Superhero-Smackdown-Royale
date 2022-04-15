import React from 'react'

function Player(props) {
  
  const hero = props.hero
  return (
    <div>
      {hero && (
        <div className="superhero">
          <h2 className="hero-name">{hero.name}</h2>
          <img className="hero-image" src={hero.images.sm} />
          <div>
            <h3 className="stats-title">Stats</h3>
            <ul className="stats">
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
