import React from 'react';
import Image from 'next/image';
import ahmed from "../../public/Ahmed.jpg";

const About = () => {
  return (
    <div id='about'>
      <section className="bg-white body-font select-none">
        <div className="container mx-auto flex px-5 py-24 flex-col md:flex-row items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-10 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-5xl text-4xl mb-4 font-medium text-gray-900">
              Welcome to
              <br className="hidden lg:inline-block" />
              <span className="font-bold italic" style={{ fontFamily: "'Playfair Display', serif" }}>Luxury Viator!</span>
            </h1>
            <p className="mb-8 leading-relaxed text-black text-base md:text-lg">
              I am Ahmed, a passionate travel professional who understands that planning is half the battle. I want to make your next experience the best one yet by understanding your vision and providing superior customer service. I specialize in all-inclusive stays, romantic, and family getaways, as well as group land and cruise travel. Leave all the logistics to me and get ready to enjoy a next-level vacation. I'm excited to meet you and get started—let the journey begin!
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full">
            <Image
              className="object-cover object-center rounded-lg"
              alt="Ahmed's portrait"
              src={ahmed}
              placeholder="blur" // Optional: add blur placeholder for better UX on slow networks
              layout="responsive"
              width={500} // Adjust width and height for responsiveness
              height={500}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
