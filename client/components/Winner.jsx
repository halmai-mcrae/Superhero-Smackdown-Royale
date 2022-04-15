import React, { useState } from 'react'

function Winner (props) {

    const heroes = props.heroes

    const displayPowerStats = () => {
        const statArray = heroes.map(element => element.powerstats )
        let hero1 = Object.values(statArray[0])
        let hero2 = Object.values(statArray[1])

        hero1 = hero1.reduce((a, b) => b - a)
        hero2 = hero2.reduce((a, b) => b - a)

        let winner = null
        if (hero1 > hero2) {
            winner = heroes[0].name
        } else {
            winner = heroes[0].name
        }

        //Display winner and win stats

    } 


    const [winner, setWinner] = useState(false)



    return (
        <div className= 'winner'>
            <button onClick = {displayPowerStats}>Display Winner</button>
           <p>{winner} </p>
        </div>
    )

}

export default Winner