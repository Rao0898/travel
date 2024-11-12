import React from 'react';
import Image from 'next/image';
import matching from "../../public/matching.png";
import service2 from "../../public/service2.png";
import expertise from "../../public/expertise.png";
import protection from "../../public/protection.png";

const Package2 = () => {
  return (
    <div>
      {/* Heading and paragraph */}
      <div className="text-center py-8 bg-white select-none">
        <h1 className="text-5xl font-bold bg-white">
          Explore my packages & tours
        </h1>
        <p className=" text-black mt-4">
          My relationship with local destination management companies enables me to customize itineraries with firsthand <br /> knowledge of my destinations. Find your immersive and authentic experience among my recommended programs, or <br /> put me to the test to create something according to your desires. 
        </p>
      </div>
      
      {/* Main content */}
      <section className="bg-white body-font select-none">
        <div className="container px-5 py-24 mx-auto">
          {/* Flex container to separate title and icons */}
          <div className="flex flex-col lg:flex-row lg:justify-between items-start">
            {/* Left-aligned heading */}
            <div className="mb-10 lg:mb-0 lg:w-1/3">
              <h2 className="text-gray-900 text-4xl font-bold italic">
                Why plan your next vacation with Luxury Viator?
              </h2>
            </div>

            {/* Icons and descriptions on the right */}
            <div className="flex flex-wrap lg:w-2/3 -m-2">
              <div className="p-2 lg:w-1/2 md:w-1/2 w-full">
                <div className="h-full flex items-center">
                  <Image
                    alt="Personalized matching"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 mr-4"
                    src={matching}
                  />
                  <div className="flex-grow">
                    <p className="text-black text-2xl">Personalized <br /> matching</p>
                  </div>
                </div>
              </div>

              <div className="p-2 lg:w-1/2 md:w-1/2 w-full">
                <div className="h-full flex items-center">
                  <Image
                    alt="24/7 access"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 mr-4"
                    src={service2}
                  />
                  <div className="flex-grow">
                    <p className="text-black text-2xl">24/7 access while <br /> traveling</p>
                  </div>
                </div>
              </div>

              <div className="p-2 lg:w-1/2 md:w-1/2 w-full">
                <div className="h-full flex items-center">
                  <Image
                    alt="Destination expertise"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 mr-4"
                    src={expertise}
                  />
                  <div className="flex-grow">
                    <p className="text-black text-2xl">Unmatched destination <br /> expertise</p>
                  </div>
                </div>
              </div>

              <div className="p-2 lg:w-1/2 md:w-1/2 w-full">
                <div className="h-full flex items-center">
                  <Image
                    alt="Fraud protection"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 mr-4"
                    src={protection}
                  />
                  <div className="flex-grow">
                    <p className="text-black text-2xl">Default and fraud <br /> protection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Package2;
