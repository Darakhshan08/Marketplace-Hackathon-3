"use client";
import React, { useState } from "react";
import { Menu, Search, X, ChevronDown } from "lucide-react";
import Link from "next/link";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  return (
    <>
      <nav className="py-4 px-4 md:px-8 border-b relative">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center max-w-7xl mx-auto gap-6">
          <div className="flex justify-between items-center">
            <Link href="/">
              <h1 className="text-3xl font-bold text-[#0D0E43]">Hekto</h1>
            </Link>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <div className="flex items-center">
                <Link
                  href="/"
                  className="text-[#FB2E86]"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  Home
                </Link>
                <button
                  className="ml-1 text-[#FB2E86]"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  aria-label="Toggle dropdown"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 z-20 bg-white border rounded shadow-lg py-1">
                  <li>
                    <Link
                      href="/about"
                      className="block px-4 py-1 text-gray-600 hover:text-[#FB2E86]"
                    >
                      About
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      href="/details"
                      className="block px-4 py-1 text-gray-600 hover:text-[#FB2E86]"
                    >
                      Details
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link
                      href="/faq"
                      className="block px-4 py-1 text-gray-600 hover:text-[#FB2E86]"
                    >
                      Faq
                    </Link>
                  </li> */}
                  <li>
                    <Link
                      href="/404"
                      className="block px-4 py-1 text-gray-600 hover:text-[#FB2E86]"
                    >
                      404
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          
            {/* <Link href="/checkout" className="text-gray-600 hover:text-[#FB2E86] font-normal text-base">
              Pages
            </Link> */}
            {/* <Link href="/details" className="text-gray-600 hover:text-[#FB2E86] font-normal text-base">
              Products
            </Link> */}
              <Link href="/product" className="text-gray-600 hover:text-[#FB2E86] font-normal text-base">
              Shop
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-[#FB2E86] font-normal text-base">
              Blog
            </Link>
          
            <Link href="/faq" className="text-gray-600 hover:text-[#FB2E86] font-normal text-base">
              Faq
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-[#FB2E86] font-normal text-base">
              Contact
            </Link>
          </div>

          {/* Mobile Navigation Overlay */}
          <div
            className={`fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            onClick={() => setIsMenuOpen(false)}
          >
            <div
              className={`fixed right-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4">
                <button
                  className="absolute top-4 right-4"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="relative">
                    <button
                      className="flex items-center text-[#FB2E86]"
                      onClick={() =>
                        setIsMobileDropdownOpen(!isMobileDropdownOpen)
                      }
                    >
                      Home <ChevronDown className="w-4 h-4 ml-1" />
                    </button>
                    {isMobileDropdownOpen && (
                      <ul className="mt-2 bg-white border rounded shadow-lg py-2">
                        <li>
                          <Link
                            href="/about"
                            className="block px-4 py-2 text-gray-600 hover:text-[#FB2E86]"
                          >
                            About
                          </Link>
                        </li>
                        {/* <li>
                          <Link
                            href="/details"
                            className="block px-4 py-2 text-gray-600 hover:text-[#FB2E86]"
                          >
                            Details
                          </Link>
                        </li> */}
                        {/* <li>
                          <Link
                            href="/faq"
                            className="block px-4 py-2 text-gray-600 hover:text-[#FB2E86]"
                          >
                            Faq
                          </Link>
                        </li> */}
                        <li>
                          <Link
                            href="/404"
                            className="block px-4 py-2 text-gray-600 hover:text-[#FB2E86]"
                          >
                            404
                          </Link>
                        </li>
                      </ul>
                    )}
                  </div>
                  <Link href='/checkout' className="block px-4 py-2 text-gray-600">Pages</Link>
                  {/* <Link href="/details" className="block px-4 py-2 text-gray-600">
                    Products
                  </Link> */}
                  <Link href="/product" className="block px-4 py-2 text-gray-600">
                    Shop
                  </Link>
                  <Link href="/blog" className="block px-4 py-2 text-gray-600">Blog</Link>
                  <Link href="/faq" className="block px-4 py-2 text-gray-600">
                    Faq
                  </Link>
                  <Link href="/contact" className="block px-4 py-2 text-gray-600">
                    Contact
                  </Link>
                  
                </div>
              </div>
            </div>
          </div>

          <form className="lg:w-72 sm:w-full max-w-md">
          <div className="flex w-full">
              <input
                type="text"
                placeholder="Search For Anything"
                className="flex-1 w-full px-4 py-2 bg-white rounded-l border focus:outline-none"
                aria-label="Search"
              />
              <button
                type="submit"
                className="bg-[#FB2E86] text-white px-4 rounded-r hover:bg-opacity-90 whitespace-nowrap"
              >
                <Search className="w-6 h-6" />
              </button>
            </div>
          </form>
        </div>
      </nav>
    </>
  );
}

export default Header;
