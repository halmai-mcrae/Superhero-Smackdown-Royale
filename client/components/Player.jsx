import React, { useState } from 'react'

function Player() {

  const [superhero, setSuperhero] = useState(null)

  const superheroData = () => {
    getSuperhero()
      .then(obj => {
        setSuperhero(obj)
      })
  }

  
    return (
      <div>
            
      </div>
    )
    
}

export default Player