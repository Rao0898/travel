import React from 'react';
import Image from 'next/image';
import couple from "../../public/couple.jpg";
import group from "../../public/group.jpg";

const Serve3 = () => {
  return (
    <div className="bg-white w-full select-none">
      <div className="container mx-auto py-16 bg-white">
        <hr className="w-1/2 border-t border-black mx-auto my-6" />

        {/* Centered Heading */}
        <h1 className="text-6xl font-serif text-center mb-4">Vacation Services</h1>

        {/* Custom Trips Section */}
        <div className="flex flex-col items-center mb-12">
          <div className="w-full lg:w-2/3 p-4">
            <Image
              src={couple}
              alt="Custom Trips"
              className="rounded-md object-cover mx-auto"
              width={600}
              height={400}
            />
          </div>
          <div className="w-full lg:w-1/2 text-center p-4">
            <h3 className="text-2xl font-semibold mb-4">Custom Trips</h3>
            <ul className="text-gray-700 list-disc ml-5 text-left">
              <li>Families, couples, honeymooners, and small groups.</li>
              <li>Destination weddings and special events.</li>
              <li>Tailored itineraries to meet the needs and interests.</li>
              <li>Destinations, hotels, and excursions chosen to suit each client.</li>
              <li>Access to special guides and experiences not open to the public.</li>
              <li>Cultural exchange with locals.</li>
              <li>Restaurant and spa recommendations and reservations.</li>
            </ul>
          </div>
        </div>

        {/* Group Travel Section */}
        <div className="flex flex-col items-center">
          <div className="w-full lg:w-2/3 p-4">
            <Image
              src={group}
              alt="Group Travel"
              className="rounded-md object-cover mx-auto"
              width={600}
              height={400}
            />
          </div>
          <div className="w-full lg:w-1/2 text-center p-4">
            <h3 className="text-2xl font-semibold mb-4">Group Travel</h3>
            <ul className="text-gray-700 list-disc ml-5 text-left">
              <li>Small and extra-large travel groups.</li>
              <li>Sports, musical, and cultural event services.</li>
              <li>Planning a trip for business or leisure, study, or school events.</li>
              <li>Tailored itineraries to meet the needs of everyone.</li>
              <li>Destinations, hotels, and excursions chosen to suit each client.</li>
              <li>Transportation, transfers, and airport arrangements.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Serve3;
