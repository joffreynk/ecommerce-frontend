"use client";

import Container from "@/components/ui/Container";
import useCart from "@/hooks/useCart";
import { useEffect, useState } from "react";

const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false)
  const cart = useCart();
  useEffect(() => {
    setIsMounted(true);
  }, [])
  
  return (<div className="bg-white">
    <Container >
      <div className="px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
        <div className="mt-12 lg:grig lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            {cart.items.length === 0 && <p className="text-neutral-500">No Items added in the cart</p>}
          </div>
        </div>
      </div>
    </Container>
  </div>);
};

export default CartPage;
