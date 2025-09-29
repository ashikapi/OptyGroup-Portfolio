import React from 'react'
import Routing from './router/Routing'

import Demo from './components/Demo'
import Navbar from './components/Navbar'
import HomeHeros from './pages/pageComponents/homeComponents/HomeHeros'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Routing />
      {/* <Demo/> */}
      {/* <Navbar />
      <HomeHeros />
      <Footer /> */}
    </div>
  )
}

export default App