import React from 'react'
import Image from 'next/image'
import review2 from '../../public/review2.png'

const Review3 = () => {
  return (
    <div>
        <section className="bg-white body-font select-none">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded"
        alt="hero"
        src={review2}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
     
      <p className="mb-8 leading-relaxed text-2xl">
      Luxury Viator helped me to plan my dream trip to Asia! I  <br/> have never been, so I was requesting help for even the<br/> basics. Mike were super flexible with my requests and  <br/>very prompt in creating an itinerary for my trip. I would <br/> definitely recommend you use his services for your next <br/> trip. I know I will in the future again. Thank you so much!!”


      </p>
      <div className="flex justify-center">
      <h1 className="title-font sm:text-6xl text-6xl mb-4 font-medium text-black">
      <span className="font-bold italic" style={{ fontFamily: "'Playfair Display', serif" }}>Klodine Jacobs</span> 
      </h1>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Review3