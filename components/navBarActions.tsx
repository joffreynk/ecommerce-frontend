'use client'

import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";

import Button from "./ui/Button";

export default function NavBarActions() {
  const [isMountend, setIsMountend] = useState(false)
  useEffect(()=>{
    setIsMountend(true)
  }, [])

  if (!isMountend) return null;

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button className="flex relative items-center rounded-full bg-slate-900">
        <ShoppingBag
          size={30}
          color="white"
         />
         <span className="text-md font-medium absolute text-gray-50 right-[8px] top-1">10</span>
      </Button>
    </div>
  );
}
