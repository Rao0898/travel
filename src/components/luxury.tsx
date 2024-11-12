import React from 'react';
import Image from 'next/image';
import rao from "../../public/rao.jpg";
import boat from "../../public/boat.jpg"; // Ensure you import the garden image

const Luxury = () => {
  return (
    <div>
      <section className="bg-white body-font select-none">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src={rao}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-6xl text-6xl mb-4 font-medium text-gray-900">
              Why <span className="font-bold italic" style={{ fontFamily: "'Playfair Display', serif" }}> Luxury</span> 
              <br className="hidden lg:inline-block" />
              <span className="font-bold italic" style={{ fontFamily: "'Playfair Display', serif" }}> Viator?</span>  
            </h1>
            <p className="mb-8 leading-relaxed text-black">
              At Luxury Viator, your desire is what drives me. Whether you want to hunt for rare truffles in Tuscany, track the Great Migration on a mobile camping safari, or learn aboriginal art from a Maori chief in New Zealand - I know just the people to arrange it. I can design a plan for the most complex itineraries, down to the tiniest detail.
            </p>
            <h2 className="text-3xl font-bold mb-4 text-black">Why plan your next vacation with<br/>Luxury Viator?</h2>
            <ul className="list-disc list-inside text-left text-black">
              <li className="mb-2">Personalized matching</li>
              <li className="mb-2">Rigorous assessments</li>
              <li className="mb-2">Unmatched destination expertise</li>
              <li className="mb-2">24/7 support from my partners</li>
              <li className="mb-2">Default and fraud protection</li>
            </ul>
          </div>
        </div>
      </section>
      
      <div className="relative w-full mt-10"> {/* Added margin-top for spacing */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            alt="gallery"
            src={boat}
            layout="fill"
            objectFit="cover"
            className="w-full h-full object-cover"
          />
        </div>
        <section className="text-white relative z-10">
          <div className="container mx-auto flex px-4 py-24 lg:px-10 flex-wrap items-start">
            <div className="w-full lg:w-2/3">
              <div className="flex flex-col w-full py-16 px-6 lg:py-32 lg:px-8 bg-opacity-50 rounded-md">
                <div className="text-left w-full">
                  <h2 className="text-3xl lg:text-3xl text-white font-medium title-font mb-4">
                  <span className="font-bold italic" style={{ fontFamily: "'Playfair Display', serif" }}> Dream for your next memorable vacation? </span> 
                  </h2>
                  <p className="leading-relaxed text-base lg:text-lg mb-4">
                  Let me help you to find the best location for your dream vacation 
                  </p>
                  <button className="mt-3 bg-cyan-500 text-white px-4 py-2 rounded inline-flex items-center">
                    START A TRIP
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Luxury;
