import React from 'react';
import Image from 'next/image';
import cuba from "../../public/cuba.jpg"
import reveiw from '../../public/reveiw.png';
import man from "../../public/man.jpg"
import tip1 from "../../public/tip1.png";
import gallery from "../../public/gallery.png"
import couple from "../../public/couple.jpg";

const Gallery2 = () => {
  return (
    <div className="bg-white select-none">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* Image 1 with larger height */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-96 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={gallery}
                />
              </a>
            </div>

            {/* Image 2 */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-96 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={cuba}
                />
              </a>
            </div>

            {/* Image 3 */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-96 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={man}
                />
              </a>
            </div>

            {/* Image 4 with larger height */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-96 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={couple}
                />
              </a>
            </div>

            {/* Empty div (if needed) */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full"></div>

            {/* Image 5 */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={reveiw}
                />
              </a>
            </div>

            {/* Image 6 */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={tip1}
                />
              </a>
            </div>

            {/* Empty div (if needed) */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery2;
