"use client";

import React, { useEffect, useState } from "react";
import { Heart, ShoppingCart, ZoomIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";

// Define the Product interface
interface Product {
  _id: string;
  name: string;
  imageUrl: string;
  price: number;
  description?: string; // Optional field
  discountPercentage?: number; // Optional field
  stockLevel?: number; // Optional field
  category?: string; // Optional field
}

const FeaturedProducts = () => {
  const [query, setQuery] = useState<Product[]>([]); // Use the Product type for state

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await client.fetch<Product[]>(
        `*[_type == "product"][0..7] {
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
      setQuery(products);
    };

    fetchProducts();
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-[#1D1F5B] mb-8 text-center">
        Featured Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {query.length > 0 ? (
          query.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-lg shadow-sm overflow-hidden relative group"
            >
              {/* Product Image */}
              <div className="aspect-square bg-gray-200 flex justify-center items-center relative">
                <div className="flex justify-center items-center h-full">
                  {product.imageUrl && (
                    <Image
                      src={urlFor(product.imageUrl).url()}
                      alt={product.name || "Product Image"}
                      width={228}
                      height={178}
                      className="object-cover"
                    />
                  )}
                </div>
                <div className="absolute left-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2 z-10">
                  <Link href={`/details/${product._id}`} className="p-2 rounded-full bg-[#EEEFFB] hover:bg-[#EEEFFB] transition-colors cursor-pointer">
                    <ShoppingCart className="w-6 h-6 text-[#2F1AC4]" />
                  </Link>
                  <button className="p-2 rounded-full hover:bg-[#EEEFFB] transition-colors">
                    <Heart className="w-6 h-6 text-[#1389FF]" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-[#EEEFFB] transition-colors">
                    <ZoomIn className="w-6 h-6 text-[#1389FF]" />
                  </button>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-4 text-center transition-colors duration-300 group-hover:bg-[#2f1ac4]">
                {product.name && (
                  <h3 className="text-[#FB2E86] font-bold mb-2 transition-colors duration-300 group-hover:text-white">
                    {product.name}
                  </h3>
                )}
                <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <Link
                    href={`/details/${product._id}`}
                    className="mb-36 px-6 py-2 bg-[#08D15F] text-white font-bold rounded shadow-lg transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                  >
                    View Details
                  </Link>
                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-6 h-2 bg-[#05E6B7] rounded"></div>
                  <div className="w-6 h-2 bg-[#F701A8] rounded"></div>
                  <div className="w-6 h-2 bg-[#FFEAC1] rounded"></div>
                </div>
                {product.category && (
                  <p className="text-[#151875] transition-colors duration-300 group-hover:text-white">
                    {product.category}
                  </p>
                )}
                {product.price && (
                  <p className="text-[#151875] transition-colors duration-300 group-hover:text-white">
                    ${product.price}
                  </p>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-4 text-gray-500">
            No featured products available.
          </p>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;