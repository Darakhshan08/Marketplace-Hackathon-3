import React from 'react'
import { CalendarDays, PenTool } from "lucide-react";
import Image from 'next/image';

function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gray-50">
    <h2 className="text-center text-3xl font-bold text-blue-900 mb-12">
      Latest Blog
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Blog Card 1 */}
  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
    <Image
      src="/Images/post 1.png"
      alt="Modern living room with minimalist furniture"
      width={800} // Set width of the image
      height={320} // Set height of the image
      className="w-full object-cover"
    />
    <div className="p-6">
    <div className="flex items-center text-sm text-gray-600 mb-4">
    <span className="flex items-center">
    <PenTool className="w-4 h-4 mr-2 text-[#FB2E86]" />
    SaberAli
  </span>
  <span className="mx-5"></span>
  <span className="flex items-center">
    <CalendarDays className="w-4 h-4 mr-2 text-[#FFA454]" />
    21 August 2020
  </span>
</div>

      <h3 className="text-xl font-semibold text-blue-900 mb-3 hover:text-[#FB2E86] transition-colors duration-300 cursor-pointer">
        Top essential Trends in 2021
      </h3>
      <p className="text-gray-600 mb-4">
        More off this less hello samlande lied much over tightly circa horse taped mightily
      </p>
      <a className="text-blue-600 hover:text-[#FB2E86] font-medium transition-colors duration-300">
        Read More
      </a>
    </div>
  </div>

  {/* Blog Card 2 */}
  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
    <Image
     src="/Images/post 3.png"
      alt="Contemporary bedroom design"
      width={800}
      height={320}
      className="w-full object-cover"
    />
    <div className="p-6">
    <div className="flex items-center text-sm text-gray-600 mb-4">
    <span className="flex items-center">
    <PenTool className="w-4 h-4 mr-2 text-[#FB2E86]" />
    SaberAli
  </span>
  <span className="mx-5"></span>
  <span className="flex items-center">
    <CalendarDays className="w-4 h-4 mr-2 text-[#FFA454]" />
    21 August 2020
  </span>
</div>
      <h3 className="text-xl font-semibold text-blue-900 mb-3 hover:text-[#FB2E86] transition-colors duration-300 cursor-pointer">
        Top essential Trends in 2021
      </h3>
      <p className="text-gray-600 mb-4">
        More off this less hello samlande lied much over tightly circa horse taped mightily
      </p>
      <a className="text-blue-600 hover:text-[#FB2E86] font-medium transition-colors duration-300">
        Read More
      </a>
    </div>
  </div>

  {/* Blog Card 3 */}
  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
    <Image
      src="/Images/post 2.png"
      alt="Stylish home office setup"
      width={800}
      height={320}
      className="w-full object-cover"
    />
    <div className="p-6">
    <div className="flex items-center text-sm text-gray-600 mb-4">
  <span className="flex items-center">
    <PenTool className="w-4 h-4 mr-2 text-[#FB2E86]" />
    SaberAli
  </span>
  <span className="mx-5"></span>
  <span className="flex items-center">
    <CalendarDays className="w-4 h-4 mr-2 text-[#FFA454]" />
    21 August 2020
  </span>
</div>
      <h3 className="text-xl font-semibold text-blue-900 mb-3 hover:text-[#FB2E86] transition-colors duration-300 cursor-pointer">
        Top essential Trends in 2021
      </h3>
      <p className="text-gray-600 mb-4">
        More off this less hello samlande lied much over tightly circa horse taped mightily
      </p>
      <a className="text-blue-600 hover:text-[#FB2E86] font-medium transition-colors duration-300">
        Read More
      </a>
    </div>
  </div>
</div>
</div>
  )
}

export default Blog