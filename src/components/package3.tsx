import React from 'react'
import Image from 'next/image'
import beach from "../../public/beach.png"
import image from "../../public/image.png"
import corporate from "../../public/corporate.png"
import boys from "../../public/boys.png"
const Package3 = () => {
  return (
    <div>
        <section className="bg-white body-font select-none">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">

      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
  <div className="relative h-60 rounded overflow-hidden"> {/* Increased height */}
    <Image
      alt="trip"
      className="object-cover object-center w-full h-full block"
      src={beach}
    />
    <h2 className="absolute bottom-0 left-0 w-full text-center text-white text-lg font-medium bg-opacity-60 p-2">
    Honeymoon tours
    </h2>
  </div>
</div>

      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className=" relative h-60 rounded overflow-hidden">
          <Image
            alt="trip"
            className="object-cover object-center w-full h-full block"
            src={image}
          />
        </a>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">

      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">

      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image
            alt="trip"
            className="object-cover object-center w-full h-full block"
            src={corporate}
          />
        </a>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
  <a className="block relative h-48 rounded overflow-hidden">
    <Image
      alt="trip"
      className="object-cover object-center w-full h-full block"
      src={boys}
    />
    <h2 className="absolute bottom-0 left-0 w-full text-center text-white text-lg font-medium  bg-opacity-60 p-2">
    Group Travel
    </h2>
  </a>
</div>

    </div>
  </div>
</section>

    </div>
  )
}

export default Package3