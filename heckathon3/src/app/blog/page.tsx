"use client";
import { Search, Facebook, Twitter, Instagram, PenTool, CalendarDays } from "lucide-react";
import Image from "next/image";
import React from "react";
export default function BlogHomepage() {
    return (
<>

      {/* Header */}
      <header className="bg-[#F6F5FF] py-4 sm:py-6 lg:py-8 w-full">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-2xl sm:text-2xl lg:text-3xl font-bold mb-2 text-[#101750]">
            Blog Page
          </h1>
          <nav className="text-base sm:text-sm font-medium">
            <span className="text-base font-medium ">Home</span> • <span className="text-base font-medium ">Pages</span> •{" "}
            <span className="text-[#FB2E86] text-base font-medium ">Blog Page</span>
          </nav>
        </div>
      </header>

        <div className="max-w-7xl mx-auto px-4 py-28">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Main Content */}
                <main className="lg:w-2/3">
                    <article className="mb-12">
                        <Image
                            src="/Images/blog1.png"
                            alt="Blog post image"
                            width={870} // Desired width in pixels
                            height={453} // Desired height in pixels
                            className="rounded-md mb-4 w-[870px] h-[453px] object-cover " // For object-fit styling
                        />
                       <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                            <div className="flex items-center gap-1">
                                <PenTool className="w-4 h-4 mr-2 text-[#FB2E86]" />
                                <span className="bg-[#FFE7F9] text-[14px] font-normal text-[#151875]  w-[160px] h-[23px] flex items-center justify-center" >
                                    Surf Auxion
                                </span>

                            </div>
                            <div className="flex items-center gap-1">
                                <CalendarDays className="w-4 h-4 mr-2 text-[#FFA454]" />
                                <span className="bg-[#FFE7F9] text-[14px] font-normal text-[#151875]  w-[127px] h-[23px] flex items-center justify-center" >Aug 09 2020</span>
                            </div>
                        </div>
                        <h2 className="text-3xl font-bold mb-2 text-[#151875] transition-colors">
                            Mauris at orci non vulputate diam tincidunt nec.
                        </h2>
                        <p className="text-[#8A8FB9] text-base mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.
                        </p>
                        <button className="text-[#151875] text-lg">
                            Read More
                        </button>
                    </article>
                    <article className="mb-12">
                        <Image
                            src="/Images/blog2.png"
                            alt="Blog post image"
                            width={870} // Desired width in pixels
                            height={453} // Desired height in pixels
                            className="rounded-md mb-4 w-[870px] h-[453px] object-cover "
                        // For object-fit styling
                        />
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                            <div className="flex items-center gap-1">
                                <PenTool className="w-4 h-4 mr-2 text-[#FB2E86]" />
                                <span className="bg-[#FFE7F9] text-[14px] font-normal text-[#151875]  w-[160px] h-[23px] flex items-center justify-center" >
                                    Surf Auxion
                                </span>

                            </div>
                            <div className="flex items-center gap-1">
                                <CalendarDays className="w-4 h-4 mr-2 text-[#FFA454]" />
                                <span className="bg-[#FFE7F9] text-[14px] font-normal text-[#151875]  w-[127px] h-[23px] flex items-center justify-center" >Aug 09 2020</span>
                            </div>
                        </div>
                        <h2 className="text-3xl font-bold mb-2 text-[#151875] transition-colors">
                            Mauris at orci non vulputate diam tincidunt nec.
                        </h2>
                        <p className="text-[#8A8FB9] text-base mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.
                        </p>
                        <button className="text-[#151875] text-lg">
                            Read More
                        </button>
                    </article>

                    <article className="mb-12">
                        <Image
                            src="/Images/blog3.png"
                            alt="Blog post image"
                            width={870} // Desired width in pixels
                            height={453} // Desired height in pixels
                            className="rounded-md mb-4 w-[870px] h-[453px] object-cover " // For object-fit styling
                        />
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                            <div className="flex items-center gap-1">
                                <PenTool className="w-4 h-4 mr-2 text-[#FB2E86]" />
                                <span className="bg-[#FFE7F9] text-[14px] font-normal text-[#151875]  w-[160px] h-[23px] flex items-center justify-center" >
                                    Surf Auxion
                                </span>

                            </div>
                            <div className="flex items-center gap-1">
                                <CalendarDays className="w-4 h-4 mr-2 text-[#FFA454]" />
                                <span className="bg-[#FFE7F9] text-[14px] font-normal text-[#151875]  w-[127px] h-[23px] flex items-center justify-center" >Aug 09 2020</span>
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold mb-2 hover:text-blue-600 transition-colors">
                            The Ultimate Guide to Beach Destinations
                        </h2>
                        <p className="text-gray-600 mb-4">
                            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                            posuere cubilia curae; Donec velit neque, auctor sit amet aliquam
                            vel.
                        </p>
                        <button className="text-blue-600 hover:underline">
                            Read More
                        </button>
                    </article>
                </main>

                {/* Sidebar */}
                <aside className="lg:w-1/3">

                    {/* Search */}
                    <div className="">
                        <h3 className="text-[22px] font-bold mb-4 text-[#151875] p-6">Search</h3>
                        <div className="relative">
                            <input
                                type="text"
                                className="w-full p-2 border rounded-lg"
                                placeholder="Search..."
                            />
                            <Search
                                className="absolute right-3 top-2.5 text-gray-400"
                                size={20}
                            />
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="bg-gray-50 p-6 rounded-lg mb-6">
                        <h3 className="text-[22px] font-bold mb-4 text-[#151875]">Categories</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <div className="flex justify-between text-[14px] text-[#3F509E] font-normal items-center cursor-pointer hover:w-[122px] hover:h-[30px] hover:rounded hover:bg-[#F939BF] hover:text-white">
                                    <span>Hobbies (12)</span>
                                </div>
                                <div className="flex justify-between text-[14px] text-[#3F509E] font-normal items-center cursor-pointer hover:w-[122px] hover:h-[30px] hover:rounded hover:bg-[#F939BF] hover:text-white">
                                    <span>Women (21)</span>
                                </div>
                                <div className="flex justify-between text-[14px] text-[#3F509E] font-normal items-center cursor-pointer hover:w-[122px] hover:h-[30px] hover:rounded hover:bg-[#F939BF] hover:text-white">
                                    <span>Women (21)</span>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between text-[14px] text-[#3F509E] font-normal items-center cursor-pointer hover:w-[122px] hover:h-[30px] hover:rounded hover:bg-[#F939BF] hover:text-white">
                                    <span>Women (21)</span>
                                </div>
                                <div className="flex justify-between text-[14px] text-[#3F509E] font-normal items-center cursor-pointer hover:w-[122px] hover:h-[30px] hover:rounded hover:bg-[#F939BF] hover:text-white">
                                    <span>Women (21)</span>
                                </div>
                                <div className="flex justify-between text-[14px] text-[#3F509E] font-normal items-center cursor-pointer hover:w-[122px] hover:h-[30px] hover:rounded hover:bg-[#F939BF] hover:text-white">
                                    <span>Women (21)</span>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Recent Posts */}
                    <div className="bg-gray-50 p-6 rounded-lg mb-8">
                        <h3 className="text-[22px] font-bold mb-8 text-[#151875]">Recent Posts</h3>
                        <div className="space-y-4">
                            <div className="flex gap-4 items-start">
                                <Image
                                    src="/Images/Rectangle 126.png"
                                    alt="Recent post thumbnail 1"
                                    width={70} // Width in pixels
                                    height={51} // Height in pixels
                                    className="rounded"
                                    style={{ objectFit: 'cover' }} // For object-fit styling
                                />
                                <div>
                                    <h4 className="font-normal text-[14px] text-[#3F509E] hover:text-blue-600 cursor-pointer">
                                        It is a long established fact
                                    </h4>
                                    <span className="text-[11px] font-semibold text-[#8A8FB9]">Aug 09 2020</span>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <Image
                                    src="/Images/Rectangle 1261.png"
                                    alt="Recent post thumbnail 1"
                                    width={70} // Width in pixels
                                    height={51} // Height in pixels
                                    className="rounded"
                                    style={{ objectFit: 'cover' }} // For object-fit styling
                                />
                                <div>
                                    <h4 className="font-normal text-[14px] text-[#3F509E] hover:text-blue-600 cursor-pointer">
                                        It is a long established fact
                                    </h4>
                                    <span className="text-[11px] font-semibold text-[#8A8FB9]">Aug 09 2020</span>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <Image
                                    src="/Images/Rectangle 1262.png"
                                    alt="Recent post thumbnail 1"
                                    width={70} // Width in pixels
                                    height={51} // Height in pixels
                                    className="rounded"
                                    style={{ objectFit: 'cover' }} // For object-fit styling
                                />
                                <div>
                                    <h4 className="font-normal text-[14px] text-[#3F509E] hover:text-blue-600 cursor-pointer">
                                        It is a long established fact
                                    </h4>
                                    <span className="text-[11px] font-semibold text-[#8A8FB9]">Aug 09 2020</span>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <Image
                                    src="/Images/Rectangle 1263.png"
                                    alt="Recent post thumbnail 1"
                                    width={70} // Width in pixels
                                    height={51} // Height in pixels
                                    className="rounded"
                                    style={{ objectFit: 'cover' }} // For object-fit styling
                                />
                                <div>
                                    <h4 className="font-normal text-[14px] text-[#3F509E] hover:text-blue-600 cursor-pointer">
                                        It is a long established fact
                                    </h4>
                                    <span className="text-[11px] font-semibold text-[#8A8FB9]">Aug 09 2020</span>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* SALE PRODUCT */}

                    <div className="bg-gray-50 p-6 rounded-lg mb-8">
                        <h3 className="text-[22px] font-bold mb-8 text-[#151875]">Sale Product</h3>
                        <div className="space-y-4">
                            <div className="flex gap-4 items-start">
                                <Image
                                    src="/Images/Rectangle 126.png"
                                    alt="Recent post thumbnail 1"
                                    width={70} // Width in pixels
                                    height={57} // Height in pixels
                                    className="rounded"
                                    style={{ objectFit: 'cover' }} // For object-fit styling
                                />
                                <div>
                                    <h4 className="font-normal text-[14px] text-[#3F509E] hover:text-blue-600 cursor-pointer">
                                        Elit ornare in enim mauris.
                                    </h4>
                                    <span className="text-[11px] font-semibold text-[#8A8FB9]">Aug 09 2020</span>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <Image
                                    src="/Images/Rectangle 1261.png"
                                    alt="Recent post thumbnail 1"
                                    width={70} // Width in pixels
                                    height={57} // Height in pixels
                                    className="rounded"
                                    style={{ objectFit: 'cover' }} // For object-fit styling
                                />
                                <div>
                                    <h4 className="font-normal text-[14px] text-[#3F509E] hover:text-blue-600 cursor-pointer">
                                        Viverra pulvinar et enim.
                                    </h4>
                                    <span className="text-[11px] font-semibold text-[#8A8FB9]">Aug 09 2020</span>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <Image
                                    src="/Images/Rectangle 1262.png"
                                    alt="Recent post thumbnail 1"
                                    width={70} // Width in pixels
                                    height={57} // Height in pixels
                                    className="rounded"
                                    style={{ objectFit: 'cover' }} // For object-fit styling
                                />
                                <div>
                                    <h4 className="font-normal text-[14px] text-[#3F509E] hover:text-blue-600 cursor-pointer">
                                        Mattis varius donec fdsfd
                                    </h4>
                                    <span className="text-[11px] font-semibold text-[#8A8FB9]">Aug 09 2020</span>
                                </div>
                            </div>

                        </div>
                    </div>


                    {/* Featured Products */}
                    <div className="bg-gray-50 p-6 rounded-lg mb-8">
                        <h3 className="text-[22px] font-bold mb-8 text-[#151875]">Offer product</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {/* First Product */}
                            <div className="group cursor-pointer">
                                <Image
                                    src="/Images/product4.png"
                                    alt="Recent post thumbnail 1"
                                    width={126} // Width in pixels
                                    height={80} // Height in pixels
                                    className="w-[126px] h-[80px] aspect-square object-cover rounded mb-2" // Center the image
                                />
                               <h4 className="text-[14px] font-semibold group-hover:text-blue-600 justify-items-center">Product 4</h4>
                               <span className="text-[12px] font-semibold text-gray-500">$12.00 - $15.00</span>
                            </div>

                            {/* Second Product */}
                            <div className="group cursor-pointer">
                                <Image
                                    src="/Images/product1.png"
                                    alt="Recent post thumbnail 1"
                                    width={126} // Width in pixels
                                    height={80} // Height in pixels
                                    className="w-[126px] h-[80px] object-cover mb-2 " // Center the image
                                />
                             <h4 className="text-[14px] font-semibold group-hover:text-blue-600 justify-items-center">Product 4</h4>
                             <span className="text-[12px] font-semibold text-gray-500">$12.00 - $15.00</span>
                            </div>

                            {/* Third Product */}
                            <div className="group cursor-pointer">
                                <Image
                                    src="/Images/product2.png"
                                    alt="Recent post thumbnail 1"
                                    width={126} // Width in pixels
                                    height={80} // Height in pixels
                                    className="w-[126px] h-[80px] object-cover mb-2 " // Center the image
                                />
                               <h4 className="text-[14px] font-semibold group-hover:text-blue-600 justify-items-center">Product 4</h4>
                               <span className="text-[12px] font-semibold text-gray-500">$12.00 - $15.00</span>
                            </div>

                            {/* Fourth Product */}
                            <div className="group cursor-pointer">
                                <Image
                                    src="/Images/product3.png"
                                    alt="Recent post thumbnail 1"
                                    width={126} // Width in pixels
                                    height={80} // Height in pixels
                                    className="w-[126px] h-[80px] object-cover mb-2 " // Center the image
                                />
                                <h4 className="text-[14px] font-semibold group-hover:text-blue-600 justify-items-center">Product 4</h4>
                                <span className="text-[12px] font-semibold text-gray-500">$12.00 - $15.00</span>
                            </div>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-[22px] font-bold mb-4 text-[#151875]">Follow</h3>
                        <div className="flex gap-4">
                            <a className="p-2 bg-[#5625DF] rounded-full text-white">
                                <Facebook size={25} />
                            </a>
                            <a className="p-2 bg-[#FF27B7] rounded-full text-white ">

                                <Instagram size={25} />
                            </a>
                            <a className="p-2 bg-[#37DAF3] rounded-full text-white fill-white">
                                <Twitter size={25} />
                            </a>
                        </div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-lg font-bold mb-4">Tags</h3>
                        <div className="flex flex-wrap gap-2">
                            {["General", "Atsanil", "Insas", "Bibsaa", "Nulla"].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 bg-gray-100 text-sm rounded-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </aside>
            </div>
        </div>
        </>
    );
}
