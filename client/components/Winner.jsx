import React, { useState } from 'react'

function Winner () {

    const [winner, setWinner] = useState(false)

    return (
        <div className= 'winner'>
            <button>Display Winner</button>
           {/* declare the winner when the stats are compared*/}
        </div>
    )

}

export default Winner