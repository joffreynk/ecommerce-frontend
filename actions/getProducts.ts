import qs from 'query-string'

import { Product } from "@/types";

const URL = `${process.env.NEXT_STORE_PUBLIC_API}/categories`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getCatgories = async (): Promise<Product[]> => {

  const url = qs.stringifyUrl({
    url: URL,
    query:{
      
    }
  })
  const res = await fetch(URL);
  const data = await res.json();

  return data;
};

export default getCatgories;
