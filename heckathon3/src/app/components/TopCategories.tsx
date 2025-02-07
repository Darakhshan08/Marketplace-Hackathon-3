import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
// import React, { useState } from 'react'


function TopCategories() {
    // const [activeSlide, setActiveSlide] = useState(0);
    // const products = [
    //   {
    //     id: 1,
    //     name: "Mini LCW Chair",
    //     price: 56.0,
    //     image: "https://s3-alpha-sig.figma.com/img/b385/2c7e/ad352f97e7cdd9b4848c0ae24630f6ae?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E4FchMWoY1F2RuUDywhgquc9Fe0jwy6fD2NfIFRocA6EbptS02uNEnk10KdbWtu87WFYDQy85MLV0fjOvG2i9UlC5IVytK6rst60DtIHn8O54rRKDNGpSzK0e22YXmsieEMoaAa3bE3dKt~jhn5BDW6tuhyaMR-yxxWJnS1-YoUafZJvioJ2KV0PGOrg-dmrGYG1tWA2V7BSU7ciuK9tRyzUUMP-LILhBqUVfCxSJBIDl8x9WCDObNY9sbKl1VpbjZJlOvo6ptlzYwSj-CJWyuL-YIyKUkBwLHXLSK3mpi5YFVqu1bT7XeRIQtxNw9fWMBQAXCCJSLSrcwDZPeRKQw__",
    //     hotDeal: true,
    //   },
    //   {
    //     id: 2,
    //     name: "Mini LCW Chair",
    //     price: 56.0,
    //     image: "/Images/image6.png",
    //   },
    //   {
    //     id: 3,
    //     name: "Mini LCW Chair",
    //     price: 56.0,
    //     image: "https://s3-alpha-sig.figma.com/img/6eac/9ed6/f0567dbeace7c9dbaa02b7b75570f3bc?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KHZ91AicM~udtZaokm85PZJYPJKSq1csMG7BQewasuxHQvAsfBRyuqM5egF6pEBAgECMs0kb3E-KmGwg3g95WydXp5KwIgLIkcI8ry8EQo2XnxlDIlH7c2qc2BugLDpnr0woXsSojxbH9OCwqTBgGFRSobZ~-AcgxQ2~9Ui9jb6Fj4To7ZQwIp-wq5Xsp5gU69SUOFXcPyWtnr8PwqZNaMZMtaklph0CxCf9CAsSvCwmu~uPY9LJo2iqpt-ECejmkn0lRBrRMei6vISUbcd~DyMyjNdJSBajfoWnQF6woQ9dAzupzAwowsnU5R1yv1C45yLItwDsR2-C2ZC7K6UMrA__",
    //   },
    //   {
    //     id: 4,
    //     name: "Mini LCW Chair",
    //     price: 56.0,
    //     image: "https://s3-alpha-sig.figma.com/img/b385/2c7e/ad352f97e7cdd9b4848c0ae24630f6ae?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E4FchMWoY1F2RuUDywhgquc9Fe0jwy6fD2NfIFRocA6EbptS02uNEnk10KdbWtu87WFYDQy85MLV0fjOvG2i9UlC5IVytK6rst60DtIHn8O54rRKDNGpSzK0e22YXmsieEMoaAa3bE3dKt~jhn5BDW6tuhyaMR-yxxWJnS1-YoUafZJvioJ2KV0PGOrg-dmrGYG1tWA2V7BSU7ciuK9tRyzUUMP-LILhBqUVfCxSJBIDl8x9WCDObNY9sbKl1VpbjZJlOvo6ptlzYwSj-CJWyuL-YIyKUkBwLHXLSK3mpi5YFVqu1bT7XeRIQtxNw9fWMBQAXCCJSLSrcwDZPeRKQw__",
    //   },
    // ];

  return (
    <main className="w-full">
    {/* Top Categories Section */}
    {/* <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
  <h2 className="text-4xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-[#1E1E70]">
    Top Categories
  </h2>

  <div className="relative">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
      {products.map((product) => (
        <div key={product.id} className="flex flex-col items-center group">
          <div className="relative rounded-full bg-[#F6F7FB] shadow-lg p-4 sm:p-6 lg:p-8 mb-4 w-full aspect-square group-hover:shadow-[0px_15px_25px_-10px_rgba(142,_68,_173,_0.5)]"> Apply shadow here */}
          {/* <Image
            src={product.image}
            alt={product.name}
            width={500} // Set a fixed width, adjust as needed
            height={500} // Set a fixed height, adjust as needed
            className="w-full h-full object-cover"
          /> */}
            
            {/* View Details Button */}
            {/* <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <button className="mb-10 px-6 py-2 bg-[#08D15F] text-white font-bold rounded shadow-lg transform translate-y-full group-hover:translate-y-0 transition duration-300 ease-in-out">
                View Shop
              </button>
            </div>
          </div>
          
          <h3 className="font-bold text-[#1E1E70] mb-1 text-center">
            {product.name}
          </h3>
          <p className="text-[#1E1E70] font-semibold">
            ${product.price.toFixed(2)}
          </p>
        </div>
      ))}
    </div> */}

    {/* Carousel or Pagination Dots */}
    {/* <div className="flex justify-center gap-2">
      {products.map((_, index) => (
        <button
          key={index}
          className={`w-2 h-2 rounded-full ${index === activeSlide ? "bg-[#FF4E9F]" : "bg-gray-300"}`}
          onClick={() => setActiveSlide(index)}
        />
      ))}
    </div>
  </div>
</section> */}

    {/* Newsletter Section */}
    <section
      className="relative h-[300px] sm:h-[350px] lg:h-[400px] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/Images/Rectangle 102.png')",
      }}
    >
      <div className="absolute inset-0 " />
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4 sm:px-6 lg:px-8">
     
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center text-[#1E1E70]">
          Get Latest Update By Subscribe
          <br/>
          Our Newslater
        </h2>
        <Link href={"/product"}>
        <button className="bg-[#FF4E9F] text-white px-6 sm:px-8 py-2 sm:py-3 rounded hover:bg-opacity-90 transition">
          Shop Now
        </button>
        </Link>
      </div>
    </section>

    {/* Logo Showcase */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
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
  </main>
  )
}

export default TopCategories