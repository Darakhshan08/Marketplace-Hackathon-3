"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useCart } from "../hooks/useCart";
import Swal from "sweetalert2";
import { client } from "@/sanity/lib/client";
import { useRouter } from "next/navigation"; // 1. Router import
import Link from "next/link";



// Define types for form data and errors
interface FormData {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  // apartment?: string;
  city: string;
  country: string;
  postalCode: string;
  newsletter: boolean;
}

interface FormErrors {
  email?: string;
  firstName?: string;
  lastName?: string;
  address?: string;
  city?: string;
  postalCode?: string;
  country?: string;
}

export default function CheckoutPage() {

  const router = useRouter(); // 2. Router  

  const [formData, setFormData] = useState<FormData>({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    // apartment: "",
    city: "",
    country: "",
    postalCode: "",
    newsletter: false,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const { cartItems } = useCart();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    if (!formData.email) errors.email = "Email is required";
    if (!formData.firstName) errors.firstName = "First name is required";
    if (!formData.lastName) errors.lastName = "Last name is required";
    if (!formData.address) errors.address = "Address is required";
    if (!formData.city) errors.city = "City is required";
    if (!formData.country) errors.country = "Country is required";
    if (!formData.postalCode) errors.postalCode = "Postal code is required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const orderData = {
      _type: "order",
      ...formData,
      products: cartItems.map((item) => ({
        _type: "reference",
        _ref: item.id,
       
      })),
      totalAmount: calculateTotal(),
      orderDate: new Date().toISOString(), // Correct format for datetime
    
    };

    try {
      // await client.create(orderData);
      // Swal.fire({
      //   icon: "success",
      //   title: "Order Placed Successfully!",
      //   text: "Your order has been placed successfully.",
          
      // });


      await client.create(orderData);
      const result = await Swal.fire({
        icon: "success",
        title: "Order Placed Successfully!",
        text: "Your order has been placed successfully.",
        confirmButtonText: "OK",
      });
      if (result.isConfirmed) {
        router.push("/"); // 3. OK 
      }

    } catch (error) {
      console.error("Error placing order:", error); // Error log karega console me
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Please try again.",
      });
    }
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const shipping = 106.0;
    return subtotal + shipping;
  };

  return (

    <main className="min-h-screen bg-[#FFFFFF]">
      <header className="bg-[#F6F5FF] py-4 sm:py-6 lg:py-8 w-full">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-2xl sm:text-2xl lg:text-3xl font-bold mb-2 text-[#101750]">
            Hekto Checkout
          </h1>
          <span className="text-base font-medium">Home</span> •{" "}
            <span className="text-base font-medium">Pages</span> •{" "}
            <span className="text-[#FB2E86] text-base font-medium"> Hekto Checkout</span>

        </div>
      </header>
      <header className="bg-white">
        <div className="max-w-7xl mx-auto py-10 px-4 md:px-6">
          <h1 className="text-2xl font-bold text-[#1D3178]">Hekto Checkout</h1>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <nav className="flex space-x-2 text-sm">
          <Link href="/"><span className="text-[#1D3178]">Home</span></Link> 
           <span className="text-[#1D3178]">/</span>
          <Link href="/cart"><span className="text-[#1D3178]">Cart</span></Link> 
          <span className="text-[#1D3178]">/</span>
          <Link href="/product"><span className="text-[#1D3178]">Shop</span></Link> 
        
         
          {/* <span className="text-[#1D3178]">/</span>
          <span className="text-[#1D3178]">Information</span>
          <span className="text-[#1D3178]">/</span>
          <span className="text-[#1D3178]">Shipping</span>
          <span className="text-[#1D3178]">/</span>
          <span className="text-[#1D3178]">Payment</span> */}
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 bg-[#F8F8FD] p-6 shadow-sm">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                {/* Contact Information */}
                <div className="py-8">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg text-[#1D3178] font-medium">Contact Information</h2>
                    <p className="text-sm text-[#C1C8E1]">
                      Already have an account?{" "}
                      <a className="text-[#C1C8E1] hover:text-blue-700">Login</a>
                    </p>
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email or Mobile Phone number"
                      className={`w-full px-0 py-2 bg-[#F8F8FD]  border-b-2 border-[#BFC6E0] focus:outline-none `}
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                    )}
                    <div className="flex items-center mt-6">
                      <input
                        type="checkbox"
                        checked={true}
                        readOnly
                        className="h-4 w-4 accent-green-400 text-white border-gray-300 focus:ring-green-500 rounded"
                      />


                      <span className="text-[#8A91AB] text-sm ml-2">Keep me up to date on news and excluive offers</span>
                    </div>


                  </div>

                </div>

                {/* Shipping Address */}
                <div className="py-12">
                  <h2 className="text-lg text-[#1D3178] font-medium mb-4">Shipping Address</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* First Name */}
                    <div className="mt-8">

                      <input
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        className={`w-full px-0 py-2 bg-[#F8F8FD]  border-b-2 border-[#BFC6E0] focus:outline-none `}
                        value={formData.firstName}
                        onChange={handleInputChange}
                      />
                    </div>
                    {/* Last Name */}
                    <div className="mt-8">

                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last name"
                        className={`w-full px-0 py-2 bg-[#F8F8FD]  border-b-2 border-[#BFC6E0] focus:outline-none `}
                        value={formData.lastName}
                        onChange={handleInputChange}
                      />
                      {formErrors.lastName && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.lastName}</p>
                      )}
                    </div>
                  </div>
                  {/* Address */}
                  <div className="mt-8">

                    <input
                      type="text"
                      name="address"
                      placeholder=" Address"
                      className={`w-full px-0 py-2 bg-[#F8F8FD]  border-b-2 border-[#BFC6E0] focus:outline-none `}
                      value={formData.address}
                      onChange={handleInputChange}
                    />
                    {formErrors.address && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.address}</p>
                    )}
                  </div>
                 
                  <div className="mt-8 flex space-x-6">
                    {/* City */}
                    <div className="flex-1">

                      <input
                        type="text"
                        name="city"
                        placeholder="City"
                        className={`w-full px-0 py-2 bg-[#F8F8FD]  border-b-2 border-[#BFC6E0] focus:outline-none `}
                        value={formData.city}
                        onChange={handleInputChange}
                      />
                      {formErrors.city && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.city}</p>
                      )}
                    </div>
                    <div className="flex-1">

<input
  type="text"
  name="country"
  placeholder="Country"
  className={`w-full px-0 py-2 bg-[#F8F8FD]  border-b-2 border-[#BFC6E0] focus:outline-none `}
  value={formData.country}
  onChange={handleInputChange}
/>
{formErrors.country && (
  <p className="text-red-500 text-sm mt-1">{formErrors.country}</p>
)}
</div>
                    {/* Postal Code */}
                    <div className="flex-1">
                      <input
                        type="text"
                        name="postalCode"
                        placeholder="Postal Code"
                        className={`w-full px-0 py-2 bg-[#F8F8FD]  border-b-2 border-[#BFC6E0] focus:outline-none `}
                        value={formData.postalCode}
                        onChange={handleInputChange}
                      />
                      {formErrors.postalCode && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.postalCode}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>


              {/* <button
                type="submit"
                className="mt-8 bg-[#FB2E86] text-white py-3 px-8 hover:bg-[#FB2E86] transition-colors"
              >
                <Link href="/product">
                Continue to shopping
                </Link>
              </button> */}

<button
                type="submit"
                className="mt-8 bg-[#FB2E86] text-white py-3 px-8 hover:bg-[#FB2E86] transition-colors"
              >
                Place Order
              </button>
            </form>
          </div>



         {/* Order Summary */}
         <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="space-y-4">
              {cartItems.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center space-x-4 pb-4 border-b border-gray-200"
                >
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={83}
                    height={87}
                    className="rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-sm">{product.name}</h3>
                    <p className="text-sm text-[#A1A8C1]">
                      Quantity: {product.quantity}
                    </p>
                  </div>
                  <p className="font-medium text-[#15245E] text-base">
                    ${(product.price * product.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#F4F4FC] p-6 rounded-lg shadow-sm">
            <div className="space-y-4">
              <div className="flex justify-between border-b-2 border-[#E8E6F1] pb-4">
                <span className="font-semibold text-lg text-[#1D3178]">
                  Subtotal:
                </span>
                <span className="font-medium text-base text-[#15245E]">
                  ${calculateSubtotal().toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between border-b-2 border-[#E8E6F1] pt-4">
                <span className="font-semibold text-lg text-[#1D3178]">
                  Shipping:
                </span>
                <span className="font-medium text-base text-[#15245E]">
                  $106.00
                </span>
              </div>
              <div className="flex justify-between border-b-2 border-[#E8E6F1] pt-4">
                <span className="font-semibold text-lg text-[#1D3178]">
                  Total
                </span>
                <span className="font-medium text-base text-[#15245E]">
                  ${calculateTotal().toFixed(2)}
                </span>
              </div>

              {/* <button className="w-full mt-4 bg-[#19D16F] text-white py-3 px-4 hover:bg-green-700 transition-colors rounded">
                Place Order
              </button> */}
            </div>
          </div>
        </div>


        </div>
      </div>
    </main>
  );
}