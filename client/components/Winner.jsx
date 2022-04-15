import React from 'react'

function Winner (props) {
    
    const heroes = props.heroes
    const { winner, setWinner, stats, setStats } = props

    const displayPowerStats = () => {
        const statArray = heroes.map(element => element.powerstats )
        let hero1 = Object.values(statArray[0])
        let hero2 = Object.values(statArray[1])

        hero1 = (hero1.reduce((a, b) => b + a)) / 5
        hero2 = (hero2.reduce((a, b) => b + a)) / 5

        let winner = null
        if (hero1 > hero2) {
            winner = heroes[0].name
            setWinner(winner + ' wins!')
        } else {
            winner = heroes[1].name
            setWinner(winner + ' wins!')
        }
        setStats(`${hero1}/100 vs. ${hero2}/100`)
    } 

    return (
        <>
        <div className= 'winner'>
            <button onClick = {displayPowerStats}>Display Winner</button>
            <div>
                <p>{winner}</p>
                <p>{stats}</p>
           </div>

        <div>
            <button className= 'winner' onClick = {displayPowerStats}>Display Winner</button>
            <p>{winner} Wins!</p>
        </div>
        </div>
        </>
    )
}

export default Winner