"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import Image from "next/image";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Page() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.subject) newErrors.subject = "Subject is required";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      // Form is valid - handle submission
      console.log("Form submitted:", formData);
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <header className="bg-[#F6F5FF] py-4 sm:py-6 lg:py-8 w-full">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-2xl sm:text-2xl lg:text-3xl font-bold mb-2 text-[#101750]">
            Product Details
          </h1>
          <nav className="text-base sm:text-sm font-medium">
            <span className="text-base font-medium">Home</span> •{" "}
            <span className="text-base font-medium">Pages</span> •{" "}
            <span className="text-[#FB2E86] text-base font-medium">
              Product Details
            </span>
          </nav>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-28">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <section>
            <h2 className="text-4xl md:text-3xl font-bold text-[#151875] mb-4">
              Information About us
            </h2>
            <p className="text-[#8A8FB9] mb-6 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
              tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
              vitae lobortis quis bibendum quam.
            </p>
            <div className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-[#5625DF] transition-transform hover:scale-110"></div>
              <div className="w-6 h-6 rounded-full bg-[#FF27B7] transition-transform hover:scale-110"></div>
              <div className="w-6 h-6 rounded-full bg-[#37DAF3] transition-transform hover:scale-110"></div>
            </div>
          </section>

          <section>
            <h2 className="text-4xl md:text-3xl font-bold text-[#151875] mb-6">
              Contact Way
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#5726DF] rounded-full w-11 h-11 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-[#8A8FB9] text-base mb-1">
                    Tel: 877-67-88-99
                  </p>
                  <p className="text-[#8A8FB9] font-semibold text-base">
                    E-Mail: shop@store.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#FB2E86] rounded-full w-11 h-11 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-[#8A8FB9] text-base mb-1">
                    Support Forum
                  </p>
                  <p className="text-[#8A8FB9] font-semibold text-base">
                    For over 24hr
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#FFB265] rounded-full w-11 h-11 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-[#8A8FB9] text-base mb-1">
                    20 Margaret st, London
                  </p>
                  <p className="text-[#8A8FB9] font-semibold text-base">
                    Great britain, 3NM98-LK
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#1BE982] rounded-full w-11 h-11 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-[#8A8FB9] text-base mb-1">
                    Free standard shipping
                  </p>
                  <p className="text-[#8A8FB9] font-semibold text-base">
                    on all orders.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-3xl font-bold text-[#151875] mb-6">
              Get In Touch
            </h2>
            <p className="text-[#8A8FB9] text-base font-semibold mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices tristique amet erat vitae eget dolor los vitae
              lobortis quis bibendum quam.
            </p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name*"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full p-4 border rounded-[3px] focus:outline-none  
                        ${errors.name ? "border-red-500" : "border-gray-200"}`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email*"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-4 border rounded-[3px] focus:outline-none 
                        ${errors.email ? "border-red-500" : "border-gray-200"}`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject*"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full p-4 border rounded-[3px] focus:outline-none 
                      ${errors.subject ? "border-red-500" : "border-gray-200"}`}
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                )}
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Type Your Message*"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full p-4 border border:[#A4B6C8] rounded-[3px] focus:outline-none 
                      ${errors.message ? "border-red-500" : "border-gray-200"}`}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-[#FB2E86] hover:bg-opacity-80 w-full md:w-auto px-6 py-4 text-white rounded-[3px] font-medium transition"
                >
                  Send Mail
                </button>
              </div>
            </form>
          </div>

          <div className="relative">
            <Image
              src="/Images/Group124.png"
              alt="About Us"
              width={540}
              height={680}
              className="w-full h-auto rounded-lg z-10"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
