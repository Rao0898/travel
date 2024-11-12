import React from 'react';
import Image from 'next/image';
import hd from "../../public/hd.jpg"
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative w-full select-none">
      <div className="absolute inset-0 w-full h-full">
        <Image
          alt="gallery"
          src={hd}
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover"
        />
      </div>
      <section className="text-white relative z-10">
        <div className="container mx-auto flex px-4 py-24 lg:px-10 flex-wrap items-start">
          <div className="w-full lg:w-2/3">
            <div className="flex flex-col w-full py-16 px-6 lg:py-32 lg:px-8  bg-opacity-50 rounded-md">
              <div className="text-left w-full">
                <h2 className="text-5xl lg:text-5xl text-white font-medium title-font mb-4">
                <span className="font-bold italic" style={{ fontFamily: "'Playfair Display', serif" }}>Your dream vacation is here</span> 
                </h2>
                <p className="leading-relaxed text-base lg:text-lg mb-4">
                Personal Approach. Delicious <br/>Breakfast. Comfortable Apartments.
                </p>
              
<Link href="#packages">
  <button className="mt-3 bg-cyan-500 text-white px-4 py-2 rounded inline-flex items-center">
    CHOOSE PACKAGES
  </button>
</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
