import React, { useState } from 'react'

import { getSuperhero } from '../api'

import Header from './Header.jsx'
import Footer from './Footer'

function App() {

  

  return (
    <>
    <div>
      <Header />
    </div>
    
    <div>
      <Footer />
    </div>
    </>
  )
}

export default App