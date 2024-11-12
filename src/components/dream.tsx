import React from 'react';
import Image from 'next/image';
import man from "../../public/man.jpg";
import family from "../../public/family.jpg"
import tour from "../../public/tour.jpg"

const Dream = () => {
  return (
    <section className="py-16 px-4 text-center bg-white select-none">
      <h2 className="text-4xl font-bold mb-8">How to plan your dream vacation?</h2>
      <div className="flex flex-col md:flex-row justify-center items-start gap-8 mb-12">
        {/* Step 1 */}
        <div className="flex flex-col items-center max-w-xs">
          <div className="w-20 h-20 flex items-center justify-center rounded-full border-2 border-cyan-400 text-2xl font-semibold mb-4">
            01<br />Step
          </div>
          <h3 className="text-lg font-semibold">Describe your dream trip</h3>
          <p className="text-gray-600 mt-2">
            Tell me about your perfect vacation. Destinations, preferences, and what you would like to see and do.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center max-w-xs">
          <div className="w-20 h-20 flex items-center justify-center rounded-full border-2 border-cyan-400 text-2xl font-semibold mb-4">
            02<br />Step
          </div>
          <h3 className="text-lg font-semibold">Get matched</h3>
          <p className="text-gray-600 mt-2">
            Based on your preference, I will create a few vacation plans, which will include your ideal travel experience.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center max-w-xs">
          <div className="w-20 h-20 flex items-center justify-center rounded-full border-2 border-cyan-400 text-2xl font-semibold mb-4">
            03<br />Step
          </div>
          <h3 className="text-lg font-semibold">Book your vacation</h3>
          <p className="text-gray-600 mt-2">
            Book your vacation only when it fits your needs and desires, and you're happy with the itinerary.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <Image src={man} alt="Mountain Destination" className="w-full md:w-1/4 rounded-lg shadow-md" />
        <Image src={family} alt="Cultural Site" className="w-full md:w-1/4 rounded-lg shadow-md" />
        <Image src={tour} alt="City Tour" className="w-full md:w-1/4 rounded-lg shadow-md" />
      </div>
    </section>
  );
};

export default Dream;
