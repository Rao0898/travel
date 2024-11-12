import About from '@/components/about'
import Footer from '@/components/footer'
import Luxury from '@/components/luxury'
import Navbar from '@/components/navbar'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Navbar/>
        <About/>
        <Luxury/>
        <Footer/>
    </div>
  )
}

export default Home