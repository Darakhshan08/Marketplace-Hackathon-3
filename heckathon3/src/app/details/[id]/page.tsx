
import React from 'react'
import {
  Heart,
  Star,
  Facebook,
  Twitter,
  Instagram,
  ArrowRight
} from "lucide-react";

import Image from 'next/image';
import { client } from '@/sanity/lib/client';
// import { useCart } from '../../context/CartContext';
import { AddToCartButton } from "../../components/AddToCartButton";


const ProductDetails = async ({ params }: { params: { id: string } }) => {


  const product = await client.fetch(
    `*[_type == "product" && _id == $id][0] {
      _id,
      name,
      "imageUrl": image.asset->url,
      price,
      description,
    discountPercentage,
    stockLevel,
      category
      
    }`,
    { id: params.id }
  );

  if (!product) {
    return <div>Product not found</div>;
  }








  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#F6F5FF] py-4 sm:py-6 lg:py-8 w-full">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-2xl sm:text-2xl lg:text-3xl font-bold mb-2 text-[#101750]">
            Product Details
          </h1>
          <nav className="text-base sm:text-sm font-medium">
            <span className="text-base font-medium ">Home</span> • <span className="text-base font-medium ">Pages</span> •{" "}
            <span className="text-[#FB2E86] text-base font-medium ">Product Details</span>
          </nav>
        </div>
      </header>


      {/* Product Section */}
      <section className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 mt-4 sm:mt-6 ">
        {/* Thumbnail Gallery */}
        <div className="md:col-span-2 flex flex-row md:flex-col gap-2 sm:gap-3 h-auto md:h-[450px] overflow-hidden">
          <div className="w-32 relative">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={151}
              height={158}
              className="object-cover rounded"
            />
          </div>
          <div className="w-32  relative">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={151}
              height={158}
              className="object-cover rounded"
            />
          </div>
          <div className="w-32 relative">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={151}
              height={158}
              className="object-cover rounded"
            />
          </div>
        </div>


        {/* Main Image */}
        <div className="md:col-span-4 h-[487px] sm:h-[400px] md:h-[450px] w-full">
          <div className="relative w-full h-full">
            <Image
              src={product.imageUrl}
              alt={product.name}
              layout="fill" // This ensures the image covers the container
              className="object-cover rounded"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="md:col-span-4 space-y-3 sm:space-y-4 pt-4 sm:pt-0">
          <h2 className="text-4xl sm:text-3xl font-bold">{product.name}</h2>

          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3 sm:w-4 h-3 sm:h-4 fill-[#FFC416] text-[#FFC416]"
                />
              ))}

            </div>
            <span className="text-sm sm:text-base text-[#151875]">({product.discountPercentage})</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-base sm:text-base text-[#151875] ">
              ${product.price}
            </span>
            <span className="text-sm sm:text-base text-pink-500 font-bosld line-through">
              ${product.price}
            </span>
          </div>

          <div>
            <h3 className="text-base sm:text-base font-medium mb-2">Color</h3>
            <p className="text-base sm:text-base text-[#A9ACC6]">
              {product.description}
            </p>
          </div>

          <div className="flex justify-start sm:justify-center gap-4 pt-2">
            {/* <button  onClick={handleAddToCart} className="text-base sm:text-base text-[#151875] hover:text-blue-800 transition-colors hover:underline px-4 sm:px-6 py-2 flex items-center gap-2">
              Add To Cart
            </button> */}
            {/* <button  className="text-base sm:text-base text-[#151875] hover:text-blue-800 transition-colors hover:underline px-4 sm:px-6 py-2 flex items-center gap-2">
              Add To Cart
            </button> */}

            <AddToCartButton product={{  // Inside your ProductDetails component  // Replace the existing Add to Cart button with:
              id: product._id,
              name: product.name,
              imageUrl: product.imageUrl,
              price: product.price,
              quantity: 1
            }} />
            <button className=" p-2 rounded">
              <Heart className="w-5 sm:w-6 h-5 sm:h-6 text-[#535399]" />
            </button>
          </div>

          <div>
            <p className="text-base sm:text-base font-bold text-[#151875]">Categories:{product.category}</p>

          </div>

          <div>
            <p className="text-base sm:text-base font-bold text-[#151875]">stock:{product.stockLevel}</p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-base sm:text-base font-bold text-[#151875]">Share:</span>
            <div className="flex gap-3">
              <Facebook className="w-4 sm:w-5 h-4 sm:h-5 text-gray-600 hover:text-gray-800" />
              <Instagram className="w-4 sm:w-5 h-4 sm:h-5 text-pink-500 hover:text-gray-800" />
              <Twitter className="w-4 sm:w-5 h-4 sm:h-5 text-gray-600 hover:text-gray-800" />

            </div>
          </div>
        </div>
      </section>



      {/* Varius tempor section */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <nav className="flex flex-col sm:flex-row mb-8">
          <button
            className="text-[#151875]  px-4 py-2 text-2xl font-medium hover:underline"
            aria-current="page"
          >
            Description
          </button>
          <button className="text-[#151875] px-4 py-2 text-2xl font-medium hover:underline">
            Additional Info
          </button>
          <button className="text-[#151875] px-4 py-2 text-2xl font-medium hover:underline">
            Reviews
          </button>
          <button className="text-[#151875] px-4 py-2 text-2xl font-medium hover:underline">
            Video
          </button>
        </nav>

        {/* Content Section */}
        <div className="prose max-w-none">
          <h1 className="text-2xl font-bold text-[#151875] mb-4 hover:underline hover:text-[#1E1E5B]">
            Varius tempor.
          </h1>

          <p className="text-[#A9ACC6] mb-8 hover:underline hover:text-[#1E1E5B] text-base">
            Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
            ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris
            varius ac est bibendum. Scelerisque a, risus ac ante. Velit
            consectetur neque, elit, aliquet. Non varius proin sed urna, egestas
            consequat laoreet diam tincidunt. Magna eget faucibus cras justo,
            tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla
            lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui,
            massa viverr.
          </p>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#151875] mb-4 hover:underline hover:text-[#1E1E5B]">
              More details
            </h2>

            <ul className="space-y-4">
              {[...Array(4)].map((_, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-gray-600 group"
                >
                  <div className="p-1 rounded hover:bg-[#1E1E5B] transition-colors flex-shrink-0">
                    <ArrowRight className="h-5 w-5 hover:text-white" />
                  </div>
                  <span className="text-[#A9ACC6] hover:underline hover:text-[#1E1E5B] text-base">
                    Aliquam dis vulputate vulputate integer sagittis. Faucibus dis
                    diam arcu, nulla labortis justo netus dis. Eu in fringilla
                    vulputate nunc nec. Dui, massa viverr.
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Related Products section */}

      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="mb-8 text-4xl font-semibold text-[#101750]">
          Related Products
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* First Product */}
          <div className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="https://s3-alpha-sig.figma.com/img/a90b/9c75/baca406cc54e0dcbe487208a9b0cf9c0?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fmibqg80CN3I9A7u3clG-FyPvn1VQhL~oowCx8CgNrjKozm2VWxsEosM1wPudBY5iDnkgWM3qYkbyzf7hG-i2o38RfeyEptBYsH~7auSdckUux5lifDlC6oHXp3Rtj68G8pITBswAxZZdnnBdjkrTB4ZW7mkjbDey8dnmPHJMPhtk-a9vUBkGrarQjDCv0wtNVZ5zToq6S~OwSmrvHpdtvTzycbKPdsMvJkfxBXvy8rm0tya7vn4HSK0hdmdWs0z40hsSOehbsK1HMkqpnJkjI5SzymqWjb7oYcUGCq06ZVlLFJss9I6w8QM2kvSJ7vxs-DKhKSbu4DnJ8Dz4OInoQ__"
                alt="Men's fashion wear product"
                layout="responsive"
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col p-4">
              <div className="flex flex-row items-center justify-between">
                <h3 className="text-lg font-medium text-[#151875]">Mens Fashion Wear</h3>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-[#FFC416] text-[#FFC416]"
                    />
                  ))}
                </div>
              </div>
              <span className="text-lg font-semibold text-[#151875]">$43.00</span>
            </div>
          </div>

          {/* Second Product */}
          <div className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="https://s3-alpha-sig.figma.com/img/af11/8034/b9abadac8084fb983ebb2042e90efea6?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BbEYGIjxS~oc23Uz6Ry69iNV27CaYmHYABVyeIooHzCu2zn4cvkT6mSEtiTmos6UdPTb4fXGxdNOXX-KddocvAPO-dRq-UUGBymjsag0BgB5uzlEPi4h4ocI2msXKL6dTP9RrpFr7lc9y1J0AMxqkradx7LH7B88-Un1x2ubgC3~ylYWxJoP9lYsfSsc8qpaEe2Nm6azqBGsr5ONmJuXpY5Iz7TM0ZZRuGMr2SN~xA0-Nh60Vb2tnIk4OOugzG8qZpsS~H8epbkTCnxcrGPiN0HMou4kzGFtJEhwoLQRx7DlkQbmOndM6iqeqO9ETmyze6Y6JEA6acaIBbePria1Rw__"
                alt="Women's fashion product"
                layout="responsive"
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col p-4">
              <div className="flex flex-row items-center justify-between">
                <h3 className="text-lg font-medium text-[#151875]">Women&apos;s Fashion</h3>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-[#FFC416] text-[#FFC416]"
                    />
                  ))}
                </div>
              </div>
              <span className="text-lg font-semibold text-[#151875]">$67.00</span>
            </div>
          </div>

          {/* Third Product */}
          <div className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="https://s3-alpha-sig.figma.com/img/bc2b/04a8/4c892f40975cec3177c5bb87c239bce4?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JKMn8zI3OUGxAkEO40wE4~XFFww6n~kY3K6PiumPKFvqj-moRCKsH21~747mel4iRfPcqlco4onRZ4mdDWCDHxf129UBz2mL2IKQmLnxUq3Z6pf~9EUGmL6-taDIqZpjJQjL662THgOx~L4JjM3EgYlFRHolVuvpbWBMLXP1jA07mTlpCjwlacKZz-V3gMFHCWnl-mGpj~GzoZ5z~izr5pVwXcmXCDXGmPX7DH7XTJWp0b~3DPYu9d8aayY5JNh1qpf9jm1rtyyiIUP3jJB~zgl5UfWhwGh0dpDIrV42Y21ltyurpXGgilqA~rE8rnAygUTHRJ81uMsTNl3Fvhzd-w__"
                alt="Wolx Dummy fashion product"
                layout="responsive"
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col p-4">
              <div className="flex flex-row items-center justify-between">
                <h3 className="text-lg font-medium text-[#151875]">Wolx Dummy Fashion</h3>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-[#FFC416] text-[#FFC416]"
                    />
                  ))}
                </div>
              </div>
              <span className="text-lg font-semibold text-[#151875]">$67.00</span>
            </div>
          </div>

          {/* Fourth Product */}
          <div className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="https://s3-alpha-sig.figma.com/img/928c/ca64/e1cacdb9866ae8672ef2f5cb4d1f23a2?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nTF42~tqXg5s7eC7d2zdUwVc4aMSJcn78Z4pT9e-nbz0KGBYEBvttJV~4KMBxwZweShLdtpSlareJvaxUekybv9pW15Sime3f0CvXAu3wj5l-47HDGU5EaOqibHVLv50TruKCcWvM1Jy0bgKlx9aZiR224ZZJ97i9Q7k016MHmcUeasZ2slmdYcf9ezg~P4KicQbLuUZa17yV9F25-przEl45kfbBBIUiu4CrqNQgic3KUwbML7YR7Km8gbq0o3No~mrZ67aqw86ISScf1VdauJIhXY-RqRGk5flg1h-V4x6DDpkHBfhN17RWM2i1KdKignlrqxeTYjgID3n--yJ4w__"
                alt="Top Wall Digital Clock product"
                layout="responsive"
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col p-4">
              <div className="flex flex-row items-center justify-between">
                <h3 className="text-lg font-medium text-[#151875]">Top Wall Digital Clock</h3>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-[#FFC416] text-[#FFC416]"
                    />
                  ))}
                </div>
              </div>
              <span className="text-lg font-semibold text-[#151875]">$51.00</span>
            </div>
          </div>
        </div>
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
      </section>
    </main>

  )
}

export default ProductDetails