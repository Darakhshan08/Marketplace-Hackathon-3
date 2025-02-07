import React from 'react';
import Image from 'next/image';

function Shopex() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
    <h1 className="text-center text-3xl font-bold text-blue-900 mb-12">
      What Shopex Offer!
    </h1>

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
      <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex justify-center items-center h-24 w-full">
    <Image
      src="/Images/free.png"
      alt="Free Service"
      width={70} 
      height={70} 
      className="object-contain"
    />
  </div>
  <h3 className="text-xl font-semibold text-blue-900 mb-2">
    24/7 Support
  </h3>
  <p className="text-gray-600 text-center">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
  </p>
</div>


      <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <div className="flex justify-center items-center h-24 w-full">
    <Image
      src="/Images/cashback.png"
      alt="Free Service"
      width={70} 
      height={70} 
      className="object-contain"
    />
  </div>
  <h3 className="text-xl font-semibold text-blue-900 mb-2">
    24/7 Support
  </h3>
  <p className="text-gray-600 text-center">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
  </p>
</div>


<div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <div className="flex justify-center items-center h-24 w-full">
    <Image
      src="/Images/premium.png"
      alt="Free Service"
      width={70} 
      height={70} 
      className="object-contain"
    />
  </div>
  <h3 className="text-xl font-semibold text-blue-900 mb-2">
    24/7 Support
  </h3>
  <p className="text-gray-600 text-center">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
  </p>
</div>

<div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <div className="flex justify-center items-center h-24 w-full">
    <Image
      src="/Images/24hours.png"
      alt="Free Service"
      width={70} 
      height={70} 
      className="object-contain"
    />
  </div>
  <h3 className="text-xl font-semibold text-blue-900 mb-2">
    24/7 Support
  </h3>
  <p className="text-gray-600 text-center">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
  </p>
</div>
    </div>
   </div>

  )
}

export default Shopex