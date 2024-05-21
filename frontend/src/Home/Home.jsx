import React from 'react'
import Cards from '../Components/Cards'
import Navbar from '../Components/Navbar'
import LiveBg from '../Components/LiveBg'

function Home() {
  return (
    <>
      <LiveBg/>
      <div className='relative z-10'>
        <Navbar/>
        <Cards/>
      </div>
      
    </>
  )
}

export default Home
