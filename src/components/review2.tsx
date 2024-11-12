import React from 'react'
import Image from 'next/image'
import reveiw from "../../public/reveiw.png"

const Review2 = () => {
  return (
    <div>
        <section className="bg-white body-font select-none">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      
      <p className="mb-8 leading-relaxed text-black text-2xl">
      “We had such a wonderful time! Thank you for your <br/> attention to details and organizing so well for our family <br/> of seven. The timing of the flights, trains, tours, and  <br/> relaxation time was perfect for us. All the tour guides <br/> were kind and accommodating. Thank you for a once in <br/> a lifetime trip for our family!


      </p>
      <div className="flex justify-center">
      <h1 className="title-font sm:text-6xl text-6xl mb-4 font-medium text-gray-900">
      <span className="font-bold italic" >Chloe Zurkini</span>
      </h1>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded"
        alt="hero"
        src={reveiw}
      />
    </div>
  </div>
</section>

    </div>
  )
}

export default Review2