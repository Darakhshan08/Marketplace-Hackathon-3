import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function HeroSection() {
  // const [currentSlide, setCurrentSlide] = useState(0);

  // const slides = [
  //   {
  //     lamp: "https://s3-alpha-sig.figma.com/img/b0ab/7b45/906d2aaf430d5bb6b86d462a9e91a8af?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ru5FvQWpcV868wGcCK~xH6e7UhX-06Q3XHFW9Bnqb3HO9a7iFJ9GJrrBuvPPHzRTM0-6mnkMblakg2OOPfcmzyHe0iPO0ffZe1xyS4B7nqdGZcnwOlSnVQ8lxqGQstUKlcOKtUoMJpDulFOSTbsrMxn39gV9Cq9soIFoZVTJW2rtgRB2hgD8uBrutAXL0Tdd4mOUUqnGyaYYtv5IsXiyPIKnuSsY~tJFQwYDMy4Gi~ApHpnxXqbDAOHx4xr8nOjnMVAilMm6~ObNX3Menc55vzwXc1PfguQEZvj-4C1GjedbdVqknYw0J0sseLl2A39w6S1SSWprrkBFh5UPUbsOhQ__", // Replace with actual path of the lamp image
  //     sofa: "https://s3-alpha-sig.figma.com/img/c453/494a/61ecc67b127029400b09a70cf2e9e973?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d4hNwCnj7HBFQpBDLosNs7hWLdoO4p1cZF5PtHtw7zLfG3qfvhE~Bd7vQcIlm0UFNTBAvHLEabt7tHk6VW5oKndRqErp7KT4p6bCN5irLPII5c87VeyJANJjZB9edjdURV9IrQWV1yByYV8LecdKv9qGOvM4eFykZU4GZKeCppP9hB4TojNXhK4gFBSAv0g3eiZ35jHYo~hFSw0hyyQzDiMXAYcbA1KiVEGUQP-d196Wge-9pSh~garEnsdibk1Yh9gBnF2r0X1oRMKuIPJgjjBpUGLBKJoqT2ln3P8NEPwii0SYInsSQKzE5kcNk4Uyd917-IjOMPrtdWFSHIqznQ__", // Replace with actual path of the sofa image
  //     heading: "New Furniture Collection Trends in 2020",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
  //     buttonText: "Shop Now",
  //   },
  //   {
  //     lamp: "https://s3-alpha-sig.figma.com/img/b0ab/7b45/906d2aaf430d5bb6b86d462a9e91a8af?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ru5FvQWpcV868wGcCK~xH6e7UhX-06Q3XHFW9Bnqb3HO9a7iFJ9GJrrBuvPPHzRTM0-6mnkMblakg2OOPfcmzyHe0iPO0ffZe1xyS4B7nqdGZcnwOlSnVQ8lxqGQstUKlcOKtUoMJpDulFOSTbsrMxn39gV9Cq9soIFoZVTJW2rtgRB2hgD8uBrutAXL0Tdd4mOUUqnGyaYYtv5IsXiyPIKnuSsY~tJFQwYDMy4Gi~ApHpnxXqbDAOHx4xr8nOjnMVAilMm6~ObNX3Menc55vzwXc1PfguQEZvj-4C1GjedbdVqknYw0J0sseLl2A39w6S1SSWprrkBFh5UPUbsOhQ__", // Replace with actual path of the lamp image
  //     sofa: "https://s3-alpha-sig.figma.com/img/c453/494a/61ecc67b127029400b09a70cf2e9e973?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d4hNwCnj7HBFQpBDLosNs7hWLdoO4p1cZF5PtHtw7zLfG3qfvhE~Bd7vQcIlm0UFNTBAvHLEabt7tHk6VW5oKndRqErp7KT4p6bCN5irLPII5c87VeyJANJjZB9edjdURV9IrQWV1yByYV8LecdKv9qGOvM4eFykZU4GZKeCppP9hB4TojNXhK4gFBSAv0g3eiZ35jHYo~hFSw0hyyQzDiMXAYcbA1KiVEGUQP-d196Wge-9pSh~garEnsdibk1Yh9gBnF2r0X1oRMKuIPJgjjBpUGLBKJoqT2ln3P8NEPwii0SYInsSQKzE5kcNk4Uyd917-IjOMPrtdWFSHIqznQ__", // Replace with actual path of the sofa image
  //     heading: "Explore Modern Furniture Designs",
  //     description:
  //       "Find your perfect furniture piece with our trending collection.",
  //     buttonText: "Discover Now",
  //   },
  //   {
  //     lamp: "https://s3-alpha-sig.figma.com/img/b0ab/7b45/906d2aaf430d5bb6b86d462a9e91a8af?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ru5FvQWpcV868wGcCK~xH6e7UhX-06Q3XHFW9Bnqb3HO9a7iFJ9GJrrBuvPPHzRTM0-6mnkMblakg2OOPfcmzyHe0iPO0ffZe1xyS4B7nqdGZcnwOlSnVQ8lxqGQstUKlcOKtUoMJpDulFOSTbsrMxn39gV9Cq9soIFoZVTJW2rtgRB2hgD8uBrutAXL0Tdd4mOUUqnGyaYYtv5IsXiyPIKnuSsY~tJFQwYDMy4Gi~ApHpnxXqbDAOHx4xr8nOjnMVAilMm6~ObNX3Menc55vzwXc1PfguQEZvj-4C1GjedbdVqknYw0J0sseLl2A39w6S1SSWprrkBFh5UPUbsOhQ__", // Replace with actual path of the lamp image
  //     sofa: "https://s3-alpha-sig.figma.com/img/c453/494a/61ecc67b127029400b09a70cf2e9e973?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d4hNwCnj7HBFQpBDLosNs7hWLdoO4p1cZF5PtHtw7zLfG3qfvhE~Bd7vQcIlm0UFNTBAvHLEabt7tHk6VW5oKndRqErp7KT4p6bCN5irLPII5c87VeyJANJjZB9edjdURV9IrQWV1yByYV8LecdKv9qGOvM4eFykZU4GZKeCppP9hB4TojNXhK4gFBSAv0g3eiZ35jHYo~hFSw0hyyQzDiMXAYcbA1KiVEGUQP-d196Wge-9pSh~garEnsdibk1Yh9gBnF2r0X1oRMKuIPJgjjBpUGLBKJoqT2ln3P8NEPwii0SYInsSQKzE5kcNk4Uyd917-IjOMPrtdWFSHIqznQ__", // Replace with actual path of the sofa image
  //     heading: "Explore Modern Furniture Designs",
  //     description:
  //       "Find your perfect furniture piece with our trending collection.",
  //     buttonText: "Discover Now",
  //   },
  // ];

  // const totalSlides = slides.length;

  // Auto slide functionality
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % totalSlides);
  //   }, 5000);

  //   return () => clearInterval(interval); // Cleanup interval
  // }, [totalSlides]);

  return (
    <div className="bg-[#F2F0FF] min-h-[500px]">
      <div className="max-w-7xl mx-auto px-4 md:px-32 py-12 md:py-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="order-2 md:order-1 relative z-10">
            <div className="space-y-6 md:space-y-8">
              <div className="relative">
                <Image
                  src="/Images/Light.png"
                  alt="Decorative lamp"
                  className="absolute -top-[138px] -left-[228px] w-48 md:w-72 z-0"
                  width={192} // Match the w-48 width (48 * 4 = 192 pixels)
                  height={192} // Maintain aspect ratio (same as width here)
                />
              </div>
              <p className="text-[#FB2E86] text-base md:text-lg font-bold">
                Best Furniture For Your Castle....
              </p>
              <h2 className="text-2xl md:text-2xl lg:text-4xl font-bold text-[#0D0E43] leading-tight">
                New Furniture Collection
                <br />
                Trends in 2020
              </h2>
              <p className="text-[#8A8FB9] text-base md:text-lg leading-relaxed max-w-xl pb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </p>
          
          
<Link href="/product">
  <button className="bg-[#FB2E86] text-white px-8 md:px-12 py-3 md:py-4 rounded-sm hover:bg-[#E91E63] transition-colors duration-300 text-lg font-medium">
    Shop Now
  </button>
</Link>
          


            </div>
          </div>

          <div className="order-1 md:order-2 relative flex justify-center items-center lg:w-[470px] lg:h-[470px]">
  <div className="w-[300px] h-[300px] lg:w-[470px] lg:h-[470px] rounded-full bg-pink-200 absolute top-0 bottom-0 left-0 right-0 m-auto"></div>
  
  <Image
    src="/Images/Armchair.png"
    alt="Modern chair"
    width={500} // Replace with the actual width of the image
    height={500} // Replace with the actual height of the image
    className="w-[300px] h-[300px] lg:w-[470px] lg:h-[470px] z-10 relative"
  />
  
  <div className="absolute top-8 right-8 bg-[#00C1FE] text-white rounded-full w-20 h-20 flex items-center justify-center z-20">
    <div className="text-center">
      <div className="text-2xl font-bold">50%</div>
      <div className="text-sm">off</div>
    </div>
  </div>
</div>
</div>
        {/* Dots Navigation */}
        {/* <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full ${currentSlide === index ? "bg-pink-500" : "bg-gray-300"
                }`}
            ></button>
          ))}
        </div> */}

      </div>
    </div>
  )
}

export default HeroSection