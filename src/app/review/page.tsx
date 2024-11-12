import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import Review from '@/components/review'
import Review2 from '@/components/review2'
import Review3 from '@/components/review3'
import React from 'react'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Review/>
        <Review2/>
        <Review3/>
        <Footer/>
    </div>
  )
}

export default Home