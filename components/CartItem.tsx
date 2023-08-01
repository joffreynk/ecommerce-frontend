"use client";

import { Product } from "@/types";
import Image from "next/image";
import React from "react";
import { X } from "lucide-react";
import Currency from "./ui/Currency";
import useCart from "@/hooks/useCart";

function CartItem({ data }: { data: Product }) {
  const cart = useCart()
  return (
    <li className="flex py-6 border-b ">
      <div className="relative h-48 w-48 rounded-md overflow-hidden">
        <Image fill src={data.images[0].url} alt="cart image" className="object-contain object-center" />
      </div>
      <div className="relative ml-4 flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0 rounded-full p-2 border">
        <X size={20} className=" text-gray-800 cursor-pointer" onClick={()=>cart.removeItem(data.id)} />
        </div>
        <div className="relative pr-9 flex sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p>{data.name}</p>
          </div>
          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{data.color.name}</p>
            <p className="text-gray-500 ml-4 border-l border-gray-400 pl-4">{data.size.name}</p>
          </div>
        </div>
          <Currency price={data.price} />
      </div>
    </li>
  );
}

export default CartItem;
