import React from 'react'
import { List, Heart, ShoppingCart, ZoomIn, Grid2x2 } from "lucide-react";
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';




  const page = async () => {
    const product = await client.fetch(
      `*[_type == "product"] {
      _id,
      name,
      "imageUrl": image.asset->url,
      price,
      description,
      discountPercentage,
      stockLevel,
      category
      
    }`
    
      
    );

// function page() {
  return (
    <>
      <header className="bg-[#F6F5FF] py-4 sm:py-6 lg:py-8 w-full">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-2xl sm:text-2xl lg:text-3xl font-bold mb-2 text-[#101750]">
            Shop Grid Default
          </h1>
          <nav className="text-base sm:text-sm font-medium">
            <span className="text-base font-medium ">Home</span> • <span className="text-base font-medium ">Pages</span> •{" "}
            <span className="text-[#FB2E86] text-base font-medium ">Shop Grid Default</span>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12 ">
        {/* Product Section */}
        <header className="my-24 ">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-4 gap-4 md:gap-0">
            <div>
              <h1 className="text-[#151875] text-2xl font-semibold mb-1">
                Ecommerce Acceories & Fashion item
              </h1>
              <p className="text-[#8A8FB9] text-sm font-normal">
                About 9,620 results (0.62 seconds)
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full sm:w-auto">
              <div className="flex items-center gap-2">
                <span className="text-base text-[#3F509E] font-normal">Per Page:</span>
                <input
                  type="number"
                   className="border border-[#E7E6EF] w-full sm:w-16 px-2 py-2.5 text-sm"

                />
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <span className="text-base text-[#3F509E] font-normal">Sort By:</span>
              <select className="border border-[#E7E6EF] w-full sm:w-[112px] px-2 py-2.5 text-sm">
                  <option>Best Match</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>

              <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 w-full sm:w-auto">
                <span className="text-base text-[#3F509E] font-normal">View:</span>
                <div className="flex rounded">
                  <button className="p-1.5 hover:bg-gray-100">
                    <Grid2x2 size={18} className='text-[#3F509E]' />
                  </button>
                  <button className="p-1.5 hover:bg-gray-100">
                    <List size={18} className='text-[#3F509E]' />
                  </button>
                  <div className="flex items-center gap-4">
                    <input
                      type="text"
                      className="border border-[#E7E6EF]  min-w-[120px] px-6 py-2.5 text-sm  "

                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {product.length > 0 ? (
            product.map((product: any) => (
              <div key={product._id} className="group">
                <div className="relative mb-3 aspect-square bg-[#F6F7FB] rounded-lg overflow-hidden group-hover:bg-[#EBF4F3]">
                  <div className="flex justify-center items-center h-full">
                    <Image
                      src={urlFor(product.imageUrl).url()}
                      alt={product.name || 'Product'}
                      width={201}
                      height={201}
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-2">
                    <Link  href={'/details/'+product  ._id} className="p-2 rounded-full hover:bg-[#FFFFFF]">
                      <ShoppingCart className="w-4 h-4 text-[#2F1AC4]" />
                    </Link>
                    <button className="p-2 rounded-full hover:bg-[#FFFFFF]">
                      <ZoomIn className="w-4 h-4 text-[#2F1AC4]" />
                    </button>
                    <button className="p-2 rounded-full hover:bg-[#FFFFFF]">
                      <Heart className="w-4 h-4 text-[#2F1AC4]" />
                    </button>
                  </div>
                </div>
                <div className="text-center space-y-1">
                  <h3 className="font-bold text-[#151875] text-lg">
                    {product.name || 'Product Name'}
                  </h3>
                  <div className="flex gap-1 justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#DE9034]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#EC42A2]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#8568FF]"></div>
                  </div>
                  <div className="flex gap-2 items-center justify-center text-sm">
                    <span className="text-[#151875] text-base font-medium">
                      ${product.price || '26.00'}
                    </span>
                    {product.originalPrice && (
                      <span className="text-pink-500 text-base line-through font-medium">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-4 text-gray-500">
              No featured products available.
            </p>
          )}
        </div>

    
          {/* /// */}

      </main>
      <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="overflow-x-auto">
          <div className="flex justify-center items-center bg-white py-4">
            <div className="flex justify-between items-center w-full max-w-6xl px-4">
              <Image
                src="https://s3-alpha-sig.figma.com/img/8b8f/73ef/0917d8479a5c41ee633cb4a6233f64b7?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QtaRKpQa58WhEx4WrkNOgoy~DA7m~EQ8fu8mUxFJJfoEaDtCLkbgc85Ygc2VZoQs70W8Ug8Ug8Jw6a96P6VprhRBwfKdV-1AQXcHED382XyT06z7PZifBj1KO6xZ1C2ycZX73UBgXQabRkkKcr0UxuOg2wYx-BeQThti-Hk~gTepLRdGmeosHD4Q9c9nTCVua1PoE4h2BC0rmplIMUVB7f~48i4h5XU2MBkNg7Ur~6KsuqrUikMGwDv2aEOwU2MnLeEdLugQq0oZQBTdjszsEr7aCuS~GyJhrqqMIp7u21~YXEcpls9GBKu0wBI6IXy3eFDZ1VsenJsV6xY0o05UBQ__"
                alt="Fashion LIVE logo"
                layout="responsive"
                width={100}
                height={50}
              />

            </div>
          </div>

        </div>

      </section>
    </>
  )
}

export default page