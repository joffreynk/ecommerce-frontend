import Button from "./ui/Button"
import Currency from "./ui/Currency"

const Summary = () => {
  return (
    <div className="lg:ml-6 mt-5 lg:mt-0 rounded-xl p-4 lg:col-span-5 bg-slate-100 gap-4 flex flex-col w-full">
      <h3 className="text-xl font-semibold">Order Summary</h3>
      <div className="border-t my-1"  />
      <div className="flex items-center justify-between">
      <p className="font-semibold text-sm">Total Price</p>
      <p className="font-semibold text-sm">
        <Currency price={25}/>
      </p>
      </div>
      <div>
        
        <Button className="w-full bg-black text-white text-xl py-3 rounded-3xl" >Checkout</Button>
      </div>
    </div>
  )
}

export default Summary
