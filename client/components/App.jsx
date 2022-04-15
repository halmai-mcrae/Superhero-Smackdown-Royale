import React from 'react'

import Header from './Header.jsx'
import Footer from './Footer'
import PlayerWin from './PlayerWin.jsx'

function App() {
  
  return (
    <>
    <div>
      <Header />
    </div>
      
    <div className='container'>
      
      <PlayerWin />
    </div>
    
    <div>
      <Footer />
    </div>
    </>
  )
}

export default App