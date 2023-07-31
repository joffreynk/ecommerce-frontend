'use client'

import { useRouter, useSearchParams } from "next/navigation";
import qs from 'query-string'

import { Color, Size } from "@/types"
import IconButton from "./IconButton";
import Button from "./Button";

interface FilterProps {
    data: (Size | Color)[];
    name: string;
    valueKey: string;
}
const Filter = ({data, name, valueKey}: FilterProps) => {
    const searchparams = useSearchParams();
    const router = useRouter();
    const onClick = (id: string)=>{
        const current = qs.parse(searchparams.toString());

        const query = {
            ...current,
            [valueKey]: id,
        }
        if(current[valueKey] === id){
            query[valueKey] = null;
        }
        
        const url = qs.stringifyUrl({
            url: window.location.href,
            query
        }, {skipNull: true});
        router.push(url);
    }
    const selectedValue = searchparams.get(valueKey);
    
  return (
    <div className="mb-8">
        <h3 className="text-lg font-semibold">{name}</h3>
        <hr />
        <div className="flex flex-wrap gap-2">
            {
                data.map(item=>(
                    <div key={item.id} className="flex items-center">
                        <Button
                        className={`rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300 ${selectedValue === item.id ? "bg-black text-white" : ""}`}
                        onClick={()=>onClick(item.id)}
                     >
                        {item.name}
                    </Button>
                    </div>
                ))
            }
        </div>
        
    </div>
  )
}

export default Filter