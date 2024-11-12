import React from "react";

const Contact2 = () => {
  return (
    <div className="relative bg-gray-500 mt-20 select-none" id="contact">
      {/* Background Image with Overlapping Text */}
      <div className="relative">
        <div className="absolute inset-0 flex items-left justify-start"></div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto py-8 md:py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Sidebar (FAQs and Links) */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white">How Can We Help?</h2>
            <ul className="space-y-2">
              <li><a href="/" className="text-white hover:underline">FAQs</a></li>
              <li><a href="/" className="text-white hover:underline">Ordering</a></li>
              <li><a href="/" className="text-white hover:underline">Shipping</a></li>
              <li><a href="/" className="text-white hover:underline">Returns + Exchanges</a></li>
              <li><a href="/" className="text-white hover:underline">International</a></li>
              <li><a href="/" className="text-white hover:underline">Sustainability</a></li>
              <li><a href="/" className="text-white hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl bg-white p-6 md:p-8"> {/* Add background color and padding */}
            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
            <form className="shadow-md rounded px-4 pt-4 pb-4 md:px-8 md:pt-6 md:pb-8 mb-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">Subject</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="subject"
                  type="text"
                  placeholder="Enter subject"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Your email address"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  placeholder="Enter your message"
                  rows={4}
                />
              </div>
              {/* ReCaptcha */}
              <div className="mb-6">
                <div className="g-recaptcha" data-sitekey="YOUR_RECAPTCHA_SITE_KEY" />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Right Sidebar (Support Hours and Info) */}
          <div className="space-y-4 text-white">
            <h2 className="text-xl font-semibold mb-2">Support Hours:</h2>
            <p>
              Mon-Fri 9:00am - 5:00pm PST
              <br />
              *Excludes Holidays
            </p>
            <p className="mt-4">
              Looking for more info on products, shipping, fabric, and more?
            </p>
            <a href="#" className="mt-2 inline-block hover:underline hover:text-blue-900">
              VIEW FAQ
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact2;
