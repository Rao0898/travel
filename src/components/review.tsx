import React from 'react';
import Image from 'next/image';
import boat from "../../public/boat.jpg";

const Review = () => {
  return (
    <div className="relative w-full h-96 select-none" id='review'>
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
              <div className="text-left w-full -mt-4">
                <h2 className="text-5xl lg:text-5xl text-white font-medium title-font mb-4">
                <span className="font-bold italic" > What my customer say <br/> about their vacation</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Review;
