import { useEffect } from "react";
import { useSearchParams } from "next/navigation"



import Button from "./ui/Button"
import Currency from "./ui/Currency"
import useCart from "@/hooks/useCart";
import { toast } from "react-hot-toast";

const Summary = () => {
    const searchParams = useSearchParams();
    const items = useCart((state)=>state.items);
    const removeAll = useCart((state)=>state.removeAll);

    useEffect(() => {
        if(searchParams.get('success')){
            toast.success("payment successed");
            removeAll();
        }

        if(searchParams.get('canceled')){
            toast.success("Something went wrong");
        }
    }, [searchParams, removeAll])

    const totalPrice = items.reduce((total, item)=>total+Number( item.price), 0);

    const checkout = async()=>{
        const options = {
            method: "POST",
            body: JSON.stringify({
                productIds: items.map((item)=>item.id)
            })
        }

        const response = await fetch(`${process.env.NEXT_STORE_PUBLIC_API}/checkout`, options);
        const result = await response.json()
        window.location = result.url;
    }
    
  return (
    <div className="lg:ml-6 mt-5 lg:mt-0 rounded-xl p-4 lg:col-span-5 bg-slate-100 gap-4 flex flex-col w-full">
      <h3 className="text-xl font-semibold">Order Summary</h3>
      <div className="border-t my-1"  />
      <div className="flex items-center justify-between">
      <p className="font-semibold text-sm">Total Price</p>
      <p className="font-semibold text-sm">
        <Currency price={totalPrice}/>
      </p>
      </div>
      <div>
        
        <Button onClick={checkout} className="w-full bg-black text-white text-xl py-3 rounded-3xl" >Checkout</Button>
      </div>
    </div>
  )
}

export default Summary
