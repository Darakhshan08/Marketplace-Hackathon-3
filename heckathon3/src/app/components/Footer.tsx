import React from 'react'
import { Facebook, Twitter, Instagram } from "lucide-react";
import Link from 'next/link';
function Footer() {
  return (
    <footer className="bg-[#F6F5FF] text-[#151875] py-10">
      <div className="max-w-7xl mx-auto px-2 py-16">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
          <Link href="/">
  <h2 className="text-3xl font-semibold mb-6">Hekto</h2>
</Link>
            <form className="mb-6">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="flex-1 px-4 py-2 bg-white rounded-l h-12"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="bg-[#FB2E86] text-white px-4 rounded-r md:w-32 hover:bg-opacity-90 whitespace-nowrap"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <p className="font-medium mb-2">Contact Info</p>
            <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-6">Categories</h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a className="hover:text-gray-900">Laptops & Computers</a>
              </li>
              <li>
                <a className="hover:text-gray-900">Cameras & Photography</a>
              </li>
              <li>
                <a className="hover:text-gray-900">Smart Phones & Tablets</a>
              </li>
              <li>
                <a className="hover:text-gray-900">Video Games & Consoles</a>
              </li>
              <li>
                <a className="hover:text-gray-900">Waterproof Headphones</a>
              </li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className=" text-lg font-semibold mb-6">Customer Care</h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a className="hover:text-gray-900">My Account</a>
              </li>
              <li>
                <a className="hover:text-gray-900">Discount</a>
              </li>
              <li>
                <a className="hover:text-gray-900">Returns</a>
              </li>
              <li>
                <a className="hover:text-gray-900">Orders History</a>
              </li>
              <li>
                <a className="hover:text-gray-900">Order Tracking</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className=" text-lg font-semibold mb-6">Pages</h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a className="hover:text-gray-900">Blog</a>
              </li>
              <li>
                <a className="hover:text-gray-900">Browse the Shop</a>
              </li>
              <li>
                <a className="hover:text-gray-900">Category</a>
              </li>
              <li>
                <a className="hover:text-gray-900">Pre-Built Pages</a>
              </li>
              <li>
                <a className="hover:text-gray-900">Visual Composer Elements</a>
              </li>
              <li>
                <a className="hover:text-gray-900">WooCommerce Pages</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 mb-4 md:mb-0">
              ©Webecy - All Rights Reserved
            </p>
            <div className="flex space-x-6">
              <a
                className="text-gray-600 hover:text-gray-900"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                className="text-gray-600 hover:text-gray-900"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                className="text-gray-600 hover:text-gray-900"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer