import React from 'react';
import Image from 'next/image';
import egypt from "../../public/egypt.jpg"
import download from "../../public/download.jpg"
import malaysia from "../../public/malaysia.jpg"
import spain from "../../public/spain.jpg"
import turkey from "../../public/turkey.jpg"
import germany from "../../public/germany.jpg"
import croatia from "../../public/croatia.jpg"
import cuba from "../../public/cuba.jpg"

const Line = () => {
  return (
    <div className="container mx-auto p-4 bg-white select-none">
      
      {/* Centered and Small Horizontal Line */}
      <hr className="w-1/2 border-t border-black mx-auto my-6" />

      {/* Centered Heading */}
      <h1 className="text-6xl font-serif text-center  mb-4">Traveler Favorites</h1>

      {/* Centered Paragraph */}
      <p className="text-center text-black text-lg">
        Need help deciding where to go next? Take a look at some of our travelers'<br/>recommended vacations.
      </p>

      <section className="text-gray-400 bg-white body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image
            alt="travel"
            className="object-cover object-center w-full h-full block"
            src={egypt}
          />
        </a>
        <div className="mt-4">
          <h2 className="text-black text-1xl tracking-widest title-font mb-1">8 Day Classic Egypt Package</h2>
          <h3 className="text-black title-font font-medium">Starting at $1,765 per person.</h3>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image
            alt="travel"
            className="object-cover object-center w-full h-full block"
            src={download}
          />
        </a>
        <div className="mt-4">
          <h2 className="text-black title-font text-lg font-medium">6 Days Italy </h2>
          <h3 className="text-black title-font font-medium">Starting at $2175.00 per person.</h3>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image
            alt="travel"
            className="object-cover object-center w-full h-full block"
            src={malaysia}
          />
        </a>
        <div className="mt-4">
          <h2 className="text-black title-font text-lg font-medium">9 days Malaysia Package</h2>
          <h3 className="text-black title-font font-medium">Starting at $2,050 per person.</h3>
         
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image
            alt="travel"
            className="object-cover object-center w-full h-full block"
            src={spain}
          />
        </a>
        <div className="mt-4">
          <h2 className="text-black title-font text-lg font-medium">Wonders of Spain</h2>
          <h3 className="text-black title-font font-medium">Starting at $3,500.00 per person</h3>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image
            alt="travel"
            className="object-cover object-center w-full h-full block"
            src={turkey}
          />
        </a>
        <div className="mt-4">
          <h2 className="text-black title-font text-lg font-medium">10 days Turkey</h2>
          <h3 className="text-black title-font font-medium">Starting at $3,850 per person.</h3>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image
            alt="travel"
            className="object-cover object-center w-full h-full block"
            src={germany}
          />
        </a>
        <div className="mt-4">
          <h2 className="text-black title-font text-lg font-medium">4 Days Germany</h2>
          <h3 className="text-black title-font font-medium">Starting at $675.00 per person.</h3>
          
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image
            alt="travel"
            className="object-cover object-center w-full h-full block"
            src={croatia}
          />
        </a>
        <div className="mt-4">
          <h2 className="text-black title-font text-lg font-medium">8 Days Stunning Croatia</h2>
          <h3 className="text-black title-font font-medium">Starting at $1,680.00 per person.</h3>
          
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image
            alt="travel"
            className="object-cover object-center w-full h-full block"
            src={cuba}
          />
        </a>
        <div className="mt-4">
          <h2 className="text-black title-font text-lg font-medium">4 Days Essential Cuba</h2>
          <h3 className="text-black title-font font-medium">Starting at $1,760.00 per person.</h3>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default Line;
