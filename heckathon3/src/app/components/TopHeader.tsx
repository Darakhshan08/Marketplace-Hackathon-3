import React from 'react'
import {
  Mail,
  Phone,
  Heart,
  ShoppingCart,
  User,
  ChevronDown,
} from "lucide-react";
import Link from 'next/link';
function TopHeader() {
  return (
    <>
      <div className="bg-[#7E33E0] text-white py-2 px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center max-w-7xl mx-auto gap-4 md:gap-0">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
            <Mail size={16} className="hidden sm:block" />
            <span className="hidden sm:block font-semibold">mhhasanul@gmail.com</span>
            <Phone size={16} className="hidden sm:block" />
            <span className="hidden sm:block font-semibold">(123)456-7890</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center">

              <span className="font-semibold">English</span>
              <ChevronDown className="w-4 h-4 ml-1" />
            </div>
            <div className="flex items-center">
              <span className="font-semibold">USD</span>
              <ChevronDown className="w-4 h-4 ml-1" />
            </div>

            <div className="flex items-center space-x-2">
              <div className="flex items-center gap-1">
                <Link href="/login" className="font-semibold">
                  Login
                </Link>
                <User className="w-5 h-5" />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Wishlist</span>
                <Heart className="w-5 h-5" />
              </div>
            </div>
            <Link href="/cart">
              <ShoppingCart className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

    </>
  )
}

export default TopHeader