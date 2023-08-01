import { Product } from "@/types";
import { toast } from "react-hot-toast";
import { create } from "zustand";
import {  persist, createJSONStorage } from "zustand/middleware";

interface CartStore {
  items: Product[];
  addItem: (data: Product)=>void;
  removeItem: (id: string)=>void;
  removeAll: ()=>void;
}

const useCart = create(
  persist<CartStore>((set, get)=>({
    items: [],
    addItem: (data: Product)=>{
      const currentItems = get().items;
      const existingItem = currentItems.find((item: Product)=>item.id === data.id);
      if (existingItem) {
        return toast.error('Product already exists in the cart')
      }

      set({items: [...get().items, data]},)
      toast.success('Product added in the cart');
    },
    removeItem: (id: string) => {
      set({items: [...get().items.filter((item)=>item.id !== id)]});
      toast.success('Product removed from the cart');
    },
    removeAll: () => set({items: []})
  }), {
    name: 'cartStorage',
    storage: createJSONStorage(()=>localStorage)
  })
)


export default useCart 