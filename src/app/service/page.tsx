import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import Serve3 from '@/components/serve3'
import Service from '@/components/service'
import Service2 from '@/components/service2'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
        <Service2/>
        <Service/>
        <Serve3/>
        <Footer/>
    </div>
  )
}

export default page