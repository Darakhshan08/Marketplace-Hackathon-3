"use client";
import React from 'react'
import Image from 'next/image';

function page() {
  return (
    <>

      {/* Header */}
      <header className="bg-[#F6F5FF] py-4 sm:py-6 lg:py-8 w-full">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-2xl sm:text-2xl lg:text-3xl font-bold mb-2 text-[#101750]">
          About Us
          </h1>
          <nav className="text-base sm:text-sm font-medium">
            <span className="text-base font-medium ">Home</span> • <span className="text-base font-medium ">Pages</span> •{" "}
            <span className="text-[#FB2E86] text-base font-medium ">About Us</span>
          </nav>
        </div>
      </header>


      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 max-w-6xl mx-auto pl-6 md:pl-12">
          <div className="w-full md:w-1/2">
            <Image
              src="/Images/about.png"
              alt="Business professionals in a meeting"
              width={1470} // Original width of the image
              height={400} // Approximate height based on class
              className="w-full h-[300px] md:h-[400px] object-cover rounded-lg"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h2 className="text-[#151875] text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
              Know About Our Ecommerce Business, History
            </h2>

            <p className="text-[#8A8FB9] text-base md:text-lg mb-6 md:mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
              tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
              vitae lobortis quis bibendum quam.
            </p>

            <button className="bg-[#EC4899] text-white px-6 py-2 rounded-lg text-base md:text-lg w-fit hover:bg-[#EC4899]/90 transition-colors">
              Contact us
            </button>
          </div>
        </div>
      </div>


      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-center text-3xl md:text-4xl font-bold mb-12">
          Our Features
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



      <section className="flex flex-col items-center justify-center py-16 px-4 max-w-6xl mx-auto min-h-screen">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Client Say!</h2>

        <div className="flex justify-center items-center gap-4 mb-8">
          <div className="w-16 h-16 md:w-20 md:h-20 overflow-hidden transition-transform hover:scale-105 transform -rotate-12">
            <Image
              src="/Images/men.png"
              alt="Client testimonial"
              width={80}
              height={80}
              className="object-cover"
            />
          </div>
          <div className="w-16 h-16 md:w-20 md:h-20 overflow-hidden transition-transform hover:scale-105 transform">

            <Image
              src="/Images/women.png"
              alt="Client testimonial"
              width={80}
              height={80}
              className="object-cover"
            />
          </div>
          <div className="w-16 h-16 md:w-20 md:h-20 overflow-hidden transition-transform hover:scale-105 transform rotate-12">
            <Image
              src="/Images/mens.png"
              alt="Client testimonial"
              width={80}
              height={80}
              className="object-cover"
            />
          </div>
        </div>

        <h3 className="text-xl md:text-2xl font-medium mb-2">Selina Gomez</h3>
        <p className="text-sm md:text-base text-gray-600 mb-8">
          Co-fo Webkey Digital
        </p>

        <p className="text-[#8A8FB9] text-center max-w-2xl leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis
          ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim
          nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus
          volutpat praesent.
        </p>

        <div className="flex justify-center gap-3 mt-8">
          <div className="w-8 h-2 bg-blue-500 rounded-full"></div>
          <div className="w-8 h-2 bg-purple-500 rounded-full"></div>
          <div className="w-8 h-2 bg-pink-500 rounded-full"></div>
        </div>
      </section>
    </>

  )
}

export default page