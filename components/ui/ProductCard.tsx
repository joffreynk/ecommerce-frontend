"use client";

import { Product } from "@/types";
import Image from "next/image";
import React, { MouseEventHandler, useState } from "react";
import IconButton from "./IconButton";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./Currency";
import { useRouter } from "next/navigation";
import PopOver from "./PopOver";
import useCart from "@/hooks/useCart";

function ProductCard({ data }: { data: Product }) {
  const [viewMore, setViewMore] = useState(false);
  const router = useRouter();
  const cart = useCart();

  const viewPeoduct = () => {
    router.push(`/${data?.category?.id}/${data?.id}`);
  };

  const toggleModel = () => {
    setViewMore(!viewMore);
  };

  const addToCart:  MouseEventHandler<HTMLButtonElement> = (e)=>{
    e.stopPropagation();
    cart.addItem(data)

  }

  return (
    <>
      <PopOver viewMore={viewMore} toggleModel={toggleModel} product={data} />
      <div
        onClick={viewPeoduct}
        className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4 hover:scale-[1.11]"
      >
        {/* product  images and actions */}
        <div className="aspect-square rounded-xl bg-gray-100 relative">
          <Image
            src={data.images[0].url}
            alt="product picture"
            fill
            className="aspect-square object-cover rounded-md"
          />

          <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-4">
            <div className="flex gap-x-6 justify-center">
              <IconButton
                onClick={(e) => {
                  if (e && e.stopPropagation) e.stopPropagation();
                  toggleModel();
                }}
                icon={<Expand size={20} className="text-gray-600" />}
              />
              <IconButton
                onClick={addToCart}
                icon={<ShoppingCart size={20} className="text-gray-600" />}
              />
            </div>
          </div>
        </div>
        {/* product description and price */}
        <div className="flex gap-2 justify-between">
          <div>
            <p className="font-semibold text-lg">{data.name}</p>
            <p className="text-sm text-gray-500">{data.category.name}</p>
          </div>
          <Currency price={data.price} />
        </div>
      </div>
    </>
  );
}

export default ProductCard;
