import React, { useState } from 'react'

import Header from './Header.jsx'

import Footer from './Footer'

import Player from './Player.jsx'

import Winner from './Winner.jsx'


function App() {


  return (
    <>
    <div>
      <Header />
      <Player />
      <Player />
      <Winner />
    </div>
    
    <div>
      <Footer />
    </div>
    </>
  )
}

export default App