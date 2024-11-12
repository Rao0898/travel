import React from 'react';
import Image from 'next/image';
import boat from "../../public/boat.jpg";

const Contact = () => {
  return (
    <div className="relative w-full h-80 md:h-96 select-none" id='contact'>
      <div className="absolute inset-0 w-full h-full">
        <Image
          alt="gallery"
          src={boat}
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover"
          placeholder="blur" // Optional: Add blur placeholder for improved UX on slow networks
        />
      </div>
      <section className="text-white relative z-10 bg-black bg-opacity-40">
        <div className="container mx-auto flex px-4 py-12 md:py-24 lg:px-10 flex-wrap items-start">
          <div className="w-full lg:w-2/3">
            <div className="flex flex-col w-full py-8 px-4 md:py-16 md:px-6 lg:py-24 lg:px-8 bg-opacity-60 rounded-md">
              <div className="text-left w-full">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium title-font mb-4">
                  <span className="font-bold italic" style={{ fontFamily: "'Playfair Display', serif" }}>Contact</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
