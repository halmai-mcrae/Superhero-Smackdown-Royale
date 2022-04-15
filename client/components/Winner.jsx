import React, { useState } from 'react'

function Winner (props) {

    const heroes = props.heroes

    const displayPowerStats = () => {
        const statArray = heroes.map(element => element.powerstats )
        let hero1 = Object.values(statArray[0])
        let hero2 = Object.values(statArray[1])

        hero1 = hero1.reduce((a, b) => b - a)
        hero2 = hero2.reduce((a, b) => b - a)
        
        if (hero1 > hero2) {
            console.log(heroes[0].name + ' wins!')
            setWinner(heroes[0].name)
        } else {
            console.log(heroes[1].name + ' wins!')
            setWinner(heroes[1].name)
        }
    }


    const [winner, setWinner] = useState(false)



    return (
        <div className= 'winner'>
            <button onClick = {displayPowerStats}>Display Winner</button>
           <p>{winner} Wins!</p>
        </div>
    )

}

export default Winner