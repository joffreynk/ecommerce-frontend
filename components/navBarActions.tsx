'use client'

import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";

import Button from "./ui/Button";
import useCart from "@/hooks/useCart";

export default function NavBarActions() {
  const cart = useCart();
  const [isMountend, setIsMountend] = useState(false)
  useEffect(()=>{
    setIsMountend(true)
  }, [])

  if (!isMountend) return null;

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button className="flex gap-1 items-center p-2 rounded-full bg-slate-900">
        <ShoppingBag
          size={25}
          color="white"
         />
         <span className="text-md font-medium  text-gray-50">{cart.items.length}</span>
      </Button>
    </div>
  );
}
