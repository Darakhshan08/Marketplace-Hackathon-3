// components/AddToCartButton.tsx
"use client";

import { useCart } from "../hooks/useCart";
import { CartItem } from "../hooks/useCart";
import { useRouter } from "next/navigation";

interface AddToCartButtonProps {
  product: CartItem;
}

export const AddToCartButton = ({ product }: AddToCartButtonProps) => {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = () => {
    addToCart(product);
    router.push("/cart"); // Redirect to cart page
  };

  return (
    <button
      onClick={handleAddToCart}
      className="text-base sm:text-base text-[#151875] hover:text-blue-800 transition-colors hover:underline px-4 sm:px-6 py-2 flex items-center gap-2"
    >
      Add To Cart
    </button>
  );
};



// // components/AddToCartButton.tsx
// "use client";

// import { useCart } from "../hooks/useCart";
// import { CartItem } from "../hooks/useCart";

// interface AddToCartButtonProps {
//   product: CartItem;
// }

// export const AddToCartButton = ({ product }: AddToCartButtonProps) => {
//   const { addToCart } = useCart();

//   return (
//     <button
//       onClick={() => addToCart(product)}
//       className="text-base sm:text-base text-[#151875] hover:text-blue-800 transition-colors hover:underline px-4 sm:px-6 py-2 flex items-center gap-2"
//     >
//       Add To Cart
//     </button>
//   );
// };