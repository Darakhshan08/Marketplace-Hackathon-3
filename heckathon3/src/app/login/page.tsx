"use client";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

// Define types for form data and errors
interface FormData {
  email: string;
  password: string;
}

interface Errors {
  email?: string;
  password?: string;
}

export default function LoginForm() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [showPassword, setShowPassword] = useState(false);

  const validateForm = () => {
    const newErrors: Errors = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof Errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  return (
    <>
      <header className="bg-[#F6F5FF] py-4 sm:py-6 lg:py-8 w-full">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-2xl sm:text-2xl lg:text-3xl font-bold mb-2 text-[#101750]">
            My Account
          </h1>
          <nav className="text-base sm:text-sm font-medium">
            <span className="text-base font-medium">Home</span> •{" "}
            <span className="text-base font-medium">Pages</span> •{" "}
            <span className="text-[#FB2E86] text-base font-medium">
              My Account
            </span>
          </nav>
        </div>
      </header>

      <main className="min-h-screen w-full flex items-center justify-center bg-white p-4">
        <div className="w-full max-w-md bg-[#FFFFFF] rounded-lg shadow-md p-8 transition-all duration-300">
          <h1 className="text-[32px] font-bold text-center mb-2">Login</h1>
          <p className="text-[#9096B2] text-[17px] font-normal text-center mb-8">
            Please login using account detail below.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-500">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  }`}
                  aria-describedby={
                    errors.password ? "password-error" : undefined
                  }
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors duration-300"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && (
                <p id="password-error" className="mt-1 text-sm text-red-500">
                  {errors.password}
                </p>
              )}
            </div>

            <div className="text-left">
              <a
                href="#"
                className="text-[#9096B2] text-[17px] hover:text-[#9096B2] transition-colors duration-300"
              >
                Forgot your password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-[#FB2E86] text-white py-2 px-4 rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition-all duration-300"
            >
              Sign In
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-[#9096B2]">
            Don&#39;t have an Account?{" "}
            <a
              href="#"
              className="text-[#9096B2] hover:text-pink-700 transition-colors duration-300"
            >
              Create account
            </a>
          </p>
        </div>
      </main>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
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
  );
}
