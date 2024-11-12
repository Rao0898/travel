import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import Package2 from '@/components/package2'
import Package3 from '@/components/package3'
import Package from '@/components/packages'
import React from 'react'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Package/>
        <Package2/>
        <Package3/>
        <Footer/>
    </div>
  )
}

export default Home