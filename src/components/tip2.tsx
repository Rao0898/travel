// components/BlogLayout.js
import Image from "next/image";
import Link from "next/link";
import tip1 from "../../public/tip1.png";
import tip2 from "../../public/tip2.png";

const Tip2 = () => {
  return (
    <div className="w-full bg-white select-none">
      <div className="container mx-auto p-6 flex flex-col md:flex-row gap-6">
        {/* Main Content */}
        <div className="md:w-2/3">
          {/* Blog Post */}
          <div className="bg-white p-6 mb-6 shadow-md rounded-md">
            <Image
              src={tip2}
              alt="Blog Image"
              width={600}
              height={300}
              className="w-full rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">
              The most common mistakes when managing personal finances
            </h2>
            <p className="text-gray-700 mb-4">
              The ability to manage money competently is especially valuable in times of <br />
              financial crisis, when the purchasing power of the population is shrinking, inflation is rising, and <br />
              currency exchange rates are unpredictable. Below are common mistakes in money management and <br />
              financial planning advice to help you manage your finances effectively.
            </p>
            <button className="bg-cyan-500 text-white px-4 py-2 rounded" aria-label=" description">
              READ MORE
            </button>
          </div>

          {/* Example of another Blog Post */}
          <div className="bg-white p-6 mb-6 shadow-md rounded-md">
            <Image
              src={tip1}
              alt="Blog Image"
              width={600}
              height={300}
              className="w-full rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">Methods of the recruitment</h2>
            <p className="text-gray-700 mb-4">
              Finding the right staff is not an easy task. According to heads of personnel management, to find <br />
              personnel who meet the customer needs and requirements, a thorough search and evaluation process is necessary.
            </p>
            <button className="bg-cyan-500 text-white px-4 py-2 rounded" aria-label=" description">
              READ MORE
            </button>
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-6">
            <nav aria-label="Page navigation">
              <ul className="inline-flex items-center -space-x-px">
                <li>
                  <Link href="#" className="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                    Previous
                  </Link>
                </li>
                <li><Link href="#" className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">1</Link></li>
                <li><Link href="#" className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">2</Link></li>
                <li><Link href="#" className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">3</Link></li>
                <li>
                  <Link href="#" className="py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                    Next
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Sidebar */}
        <div className="md:w-1/3">
          {/* Search Box */}
          <div className="bg-white p-4 shadow-md rounded-md mb-6">
            <h3 className="text-lg font-semibold mb-3">Search</h3>
            <div className="flex">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-cyan-500 text-white px-4 py-2 rounded-r-md hover:bg-cyan-600" aria-label="Search ">
                Search
              </button>
            </div>
          </div>

          {/* Categories */}
          <div className="bg-white p-4 shadow-md rounded-md mb-6">
            <h3 className="text-lg font-semibold mb-3">Category</h3>
            <ul className="space-y-2 text-black">
              <li><Link href="#" className="hover:underline hover:text-cyan-500">Business Consulting</Link></li>
              <hr className="w-full border-t border-black my-2" />
              <li><Link href="#" className="hover:underline hover:text-cyan-500">Finance Management</Link></li>
              <hr className="w-full border-t border-black my-2" />
              <li><Link href="#" className="hover:underline hover:text-cyan-500">Recruitment</Link></li>
              <hr className="w-full border-t border-black my-2" />
              <li><Link href="#" className="hover:underline hover:text-cyan-500">Marketing</Link></li>
              <hr className="w-full border-t border-black my-2" />
              <li><Link href="#" className="hover:underline hover:text-cyan-500">Small Business</Link></li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="bg-white p-4 shadow-md rounded-md">
            <h3 className="text-lg font-semibold mb-3">Recent Posts</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Image src={tip2} alt="Post" width={80} height={80} className="w-16 h-16 rounded-md mr-4" />
                <Link href="#" className="text-blue-500 hover:underline">The most common mistakes when managing personal finances</Link>
              </li>
              <li className="flex items-center">
                <Image src={tip1} alt="Post" width={80} height={80} className="w-16 h-16 rounded-md mr-4" />
                <Link href="#" className="text-blue-500 hover:underline">Methods of the recruitment</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tip2;
