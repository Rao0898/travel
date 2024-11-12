import Footer from '@/components/footer'
import Gallery from '@/components/gallery'
import Gallery2 from '@/components/gallery2'
import Navbar from '@/components/navbar'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Navbar/>
        <Gallery/>
        <Gallery2/>
        <Footer/>
    </div>
  )
}

export default Home