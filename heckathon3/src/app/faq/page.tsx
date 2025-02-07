"use client";

import Image from "next/image";
import React, { ChangeEvent, FormEvent, useState } from "react";

interface FormData {
  name: string;
  subject: string;
  message: string;
}

const Faq: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Perform form submission logic here
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <main className="min-h-screen bg-white">
      <header className="bg-[#F6F5FF] py-4 sm:py-6 lg:py-8 w-full">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-2xl sm:text-2xl lg:text-3xl font-bold mb-2 text-[#101750]">
            FAQ
          </h1>
          <nav className="text-base sm:text-sm font-medium">
            <span className="text-base font-medium ">Home</span> • <span className="text-base font-medium ">Pages</span> •{" "}
            <span className="text-[#FB2E86] text-base font-medium ">Faq</span>
          </nav>
        </div>
      </header>
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          {/* FAQ Section */}
          <section className="space-y-12">
            <h1 className="text-4xl font-bold text-[#1D3178] mb-8">
              General Information
            </h1>
            <div>
              <h2 className="text-lg font-bold text-[#1D3178] mb-2">
                Eu dictumst cum at sed euismod condimentum?
              </h2>
              <p className="text-[#A1ABCC] text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
                sed
                <br />
                tristique mollis vitae, consequat gravida sagittis.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#1D3178] mb-4">
                Magna bibendum est fermentum eros.
              </h2>
              <p className="text-[#A1ABCC] text-base mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
                sed
                <br />
                tristique mollis vitae, consequat gravida sagittis.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#1D3178] mb-2">
                Odio muskana hak eris conseekin sceleton?
              </h2>
              <p className="text-[#A1ABCC] text-base mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
                sed
                <br />
                tristique mollis vitae, consequat gravida sagittis.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#1D3178] mb-2">
                Elit id blandit sabara boi velit gua mara?
              </h2>
              <p className="text-[#A1ABCC] text-base mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
                sed
                <br />
                tristique mollis vitae, consequat gravida sagittis.
              </p>
            </div>
          </section>

          {/* Contact Form Section */}
          <section className="bg-[#F8F8FD] p-6 border h-[638px]">
            <h2 className="text-2xl font-bold text-[#1D3178] py-8">
              Ask a Question
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name*"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 mt-12 border border-[#CDCEDC] rounded focus:outline-none focus:ring-2 focus:ring-[#CDCEDC] "
                  aria-label="Your Name"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject*"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 mt-6  border border-[#CDCEDC] rounded focus:outline-none focus:ring-2 focus:ring-[#CDCEDC] "

                  aria-label="Subject"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Type Your Message*"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full p-3 mt-6  border border-[#CDCEDC] rounded focus:outline-none focus:ring-2 focus:ring-[#CDCEDC]"
                  aria-label="Message"
                />
              </div>


              <button
                type="submit"
                className="bg-[#FB2E86] text-white px-10 py-3  rounded gap-2 hover:bg-pink-600 transition-colors"
              >
                Send Mail
              </button>

            </form>
          </section>
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
    </main>
  );
};
export default Faq;