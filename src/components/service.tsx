import React from 'react';
import Image from 'next/image';
import service1 from '../../public/service1.png';
import service2 from '../../public/service2.png';
import service3 from '../../public/service3.png';
import service4 from '../../public/service4.png';

const Service = () => {
  return (
    <div id="service" className="bg-white py-24 select-none">
      <section className="container mx-auto px-5">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-playfair font-bold italic text-gray-900">
          Why plan your next vacation with Luxury Viator?

          </h2>
        </div>

        {/* Service Items */}
        <div className="flex flex-wrap -m-4">
          {/* Service Item 1 */}
          <div className="p-4 lg:w-1/2 md:w-1/2 w-full flex items-center">
            <Image
              alt="Consulting on all aspects"
              className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 mr-4"
              src={service1}
            />
            <div className="flex-grow">
              <p className="text-gray-900">
                Consulting on all aspects <br /> of a trip before, during, and after travel
              </p>
            </div>
          </div>

          {/* Service Item 2 */}
          <div className="p-4 lg:w-1/2 md:w-1/2 w-full flex items-center">
            <Image
              alt="24/7 access while traveling"
              className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 mr-4"
              src={service2}
            />
            <div className="flex-grow">
              <p className="text-gray-900">24/7 access while <br /> traveling</p>
            </div>
          </div>

          {/* Service Item 3 */}
          <div className="p-4 lg:w-1/2 md:w-1/2 w-full flex items-center">
            <Image
              alt="Flight research, booking and discounts"
              className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 mr-4"
              src={service3}
            />
            <div className="flex-grow">
              <p className="text-gray-900">
                Flight research, booking <br /> and discounted rates in <br /> First and Business
              </p>
            </div>
          </div>

          {/* Service Item 4 */}
          <div className="p-4 lg:w-1/2 md:w-1/2 w-full flex items-center">
            <Image
              alt="Special rates, amenities, and benefits"
              className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 mr-4"
              src={service4}
            />
            <div className="flex-grow">
              <p className="text-gray-900">
                Special rates, amenities <br /> and benefits with our valued partners
              </p>
            </div>
          </div>
          <div className="p-4 lg:w-1/2 md:w-1/2 w-full flex items-center">
            <Image
              alt="Special rates, amenities, and benefits"
              className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 mr-4"
              src={service4}
            />
            <div className="flex-grow">
              <p className="text-gray-900">
                Special rates, amenities <br /> and benefits with our valued partners
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
