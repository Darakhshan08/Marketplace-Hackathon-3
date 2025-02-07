import { Tag, Heart, Share2, ShoppingCart } from "lucide-react";
import Image from "next/image";

import React from 'react'

function LatestProducts() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
    <header className="mb-8">
      <h2 className="text-4xl font-bold text-navy-800 text-center mb-4 text-[#151875]">
        Latest Products
      </h2>

      <nav className="flex justify-center space-x-8">
      <button className="text-pink-500 font-normal text-lg pb-2 border-b-2 border-pink-500">
        New Arrival
      </button>
      <button className="text-[#151875] font-normal text-lg hover:text-gray-700  pb-2">
        Best Seller
      </button>
      <button className="text-[#151875] font-normal text-lg hover:text-gray-700 pb-2">
        Featured
      </button>
      <button className="text-[#151875] font-normal text-lg hover:text-gray-700 pb-2">
        Special Offer
      </button>
      </nav>
    </header>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-[#F7F7F7] rounded-lg shadow p-4 group relative">
        <div className="relative">
        <div className="flex justify-center items-center h-full">
  <Image
    src="/Images/image7.png"
    alt="Brown chair"
    width={223}
    height={229}
    className="object-cover"
  />
</div>
          <div className="absolute left-2 bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-2">
            <button className="p-2 rounded-full hover:bg-[#EEEFFB]">
              <Heart className="w-5 h-5 text-[#2F1AC4]" />
            </button>
            <button className="p-2 rounded-full hover:bg-[#EEEFFB] ">
              <Share2 className="w-5 h-5 text-[#2F1AC4]" />
            </button>
            <button className="p-2 rounded-full hover:bg-[#EEEFFB]">
              <ShoppingCart className="w-5 h-5 text-[#2F1AC4]" />
            </button>
          </div>
          
        </div>
        <div className="mt-4 flex justify-between items-center">
          <h3 className="text-lg font-normal text-[#151875]">Comfort Handy Craft</h3>
          <div className="flex items-center">
            <span className="text-lg font-bold text-[#151875]">$45.00</span>
            <span className="ml-2 text-[#FB2448] line-through">$65.00</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-4 group relative">
        <div className="relative">

         <div className="flex justify-center items-center h-full">
  <Image
    src="/Images/image5.png"
    alt="Brown chair"
    width={223}
    height={229}
    className="object-cover"
  />
</div>
          <div className="absolute left-2 bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-2">
          <button className="p-2 rounded-full hover:bg-[#EEEFFB]">
              <Heart className="w-5 h-5 text-[#2F1AC4]" />
            </button>
            <button className="p-2 rounded-full hover:bg-[#EEEFFB] ">
              <Share2 className="w-5 h-5 text-[#2F1AC4]" />
            </button>
            <button className="p-2 rounded-full hover:bg-[#EEEFFB]">
              <ShoppingCart className="w-5 h-5 text-[#2F1AC4]" />
            </button>
          </div>
          <span className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-sm">
            <Tag className="w-4 h-4 inline mr-1" />
            Sale
          </span>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <h3 className="text-lg font-normal text-[#151875]">Comfort Handy Craft</h3>
          <div className="flex items-center">
            <span className="text-lg font-bold text-[#151875]">$45.00</span>
            <span className="ml-2 text-[#FB2448] line-through">$65.00</span>
          </div>
        </div>
      </div>

      <div className="bg-[#F7F7F7] rounded-lg shadow p-4 group relative">
        <div className="relative">
        <div className="flex justify-center items-center h-full">
  <Image
    src="/Images/image6.png"
    alt="Brown chair"
    width={223}
    height={229}
    className="object-cover"
  />
</div>
          <div className="absolute left-2 bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-2">
          <button className="p-2 rounded-full hover:bg-[#EEEFFB]">
              <Heart className="w-5 h-5 text-[#2F1AC4]" />
            </button>
            <button className="p-2 rounded-full hover:bg-[#EEEFFB] ">
              <Share2 className="w-5 h-5 text-[#2F1AC4]" />
            </button>
            <button className="p-2 rounded-full hover:bg-[#EEEFFB]">
              <ShoppingCart className="w-5 h-5 text-[#2F1AC4]" />
            </button>
          </div>
         
        </div>
        <div className="mt-4 flex justify-between items-center">
          <h3 className="text-lg font-normal text-[#151875]">Comfort Handy Craft</h3>
          <div className="flex items-center">
            <span className="text-lg font-bold text-[#151875]">$45.00</span>
            <span className="ml-2 text-[#FB2448] line-through">$65.00</span>
          </div>
        </div>
      </div>

      <div className="bg-[#F7F7F7] rounded-lg shadow p-4 group relative">
        <div className="relative">
        <div className="flex justify-center items-center h-full">
  <Image
    src="/Images/image2.png"
    alt="Brown chair"
    width={267}
    height={277}
    className="object-cover"
  />
</div>
          <div className="absolute left-2 bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-2">
          <button className="p-2 rounded-full hover:bg-[#EEEFFB]">
              <Heart className="w-5 h-5 text-[#2F1AC4]" />
            </button>
            <button className="p-2 rounded-full hover:bg-[#EEEFFB] ">
              <Share2 className="w-5 h-5 text-[#2F1AC4]" />
            </button>
            <button className="p-2 rounded-full hover:bg-[#EEEFFB]">
              <ShoppingCart className="w-5 h-5 text-[#2F1AC4]" />
            </button>
          </div>
         
        </div>
        <div className="mt-4 flex justify-between items-center">
          <h3 className="text-lg font-normal text-[#151875]">Comfort Handy Craft</h3>
          <div className="flex items-center">
            <span className="text-lg font-bold text-[#151875]">$45.00</span>
            <span className="ml-2 text-[#FB2448] line-through">$65.00</span>
          </div>
        </div>
      </div>

      <div className="bg-[#F7F7F7] rounded-lg shadow p-4 group relative">
        <div className="relative">
        <div className="flex justify-center items-center h-full">
  <Image
    src="/Images/image8.png"
    alt="Brown chair"
    width={303}
    height={264}
    className="object-cover"
  />
</div>
          <div className="absolute left-2 bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-2">
          <button className="p-2 rounded-full hover:bg-[#EEEFFB]">
              <Heart className="w-5 h-5 text-[#2F1AC4]" />
            </button>
            <button className="p-2 rounded-full hover:bg-[#EEEFFB] ">
              <Share2 className="w-5 h-5 text-[#2F1AC4]" />
            </button>
            <button className="p-2 rounded-full hover:bg-[#EEEFFB]">
              <ShoppingCart className="w-5 h-5 text-[#2F1AC4]" />
            </button>
          </div>
         
        </div>
        <div className="mt-4 flex justify-between items-center">
          <h3 className="text-lg font-normal text-[#151875]">Comfort Handy Craft</h3>
          <div className="flex items-center">
            <span className="text-lg font-bold text-[#151875]">$45.00</span>
            <span className="ml-2 text-[#FB2448] line-through">$65.00</span>
          </div>
        </div>
      </div>

      <div className="bg-[#F7F7F7] rounded-lg shadow p-4 group relative">
        <div className="relative">
        <div className="flex justify-center items-center h-full">
  <Image
    src="/Images/image3.png"
    alt="Brown chair"
    width={360}
    height={261}
    className="object-cover"
  />
</div>
          <div className="absolute left-2 bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-2">
          <button className="p-2 rounded-full hover:bg-[#EEEFFB]">
              <Heart className="w-5 h-5 text-[#2F1AC4]" />
            </button>
            <button className="p-2 rounded-full hover:bg-[#EEEFFB] ">
              <Share2 className="w-5 h-5 text-[#2F1AC4]" />
            </button>
            <button className="p-2 rounded-full hover:bg-[#EEEFFB]">
              <ShoppingCart className="w-5 h-5 text-[#2F1AC4]" />
            </button>
          </div>
         
        </div>
        <div className="mt-4 flex justify-between items-center">
          <h3 className="text-lg font-normal text-[#151875]">Comfort Handy Craft</h3>
          <div className="flex items-center">
            <span className="text-lg font-bold text-[#151875]">$45.00</span>
            <span className="ml-2 text-[#FB2448] line-through">$65.00</span>
          </div>
        </div>
      </div>
    </div>
   </div>

  )
}

export default LatestProducts