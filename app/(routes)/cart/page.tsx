"use client";

import CartItem from "@/components/CartItem";
import Summary from "@/components/Summary";
import Container from "@/components/ui/Container";
import useCart from "@/hooks/useCart";
import { Product } from "@/types";
import { useEffect, useState } from "react";

const CartPage = () => {
  const cart = useCart();

  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true);
  }, [])

  if(!isMounted) return null;
  
  return (<div className="bg-white">
    <Container >
      <div className="px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
        <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            {cart.items.length === 0 && <p className="text-neutral-500">No Items added in the cart</p>}
            <ul>
              {cart.items.map((item: Product) =>(<CartItem key={item.id} data={item} />))}
            </ul>
          </div>
          <Summary />
        </div>
      </div>
    </Container>
  </div>);
};

export default CartPage;
