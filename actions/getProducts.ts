import qs from 'query-string'

import { Product } from "@/types";
import queryString from 'query-string';

const URL = `${process.env.NEXT_STORE_PUBLIC_API}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {

  const url = qs.stringifyUrl({
    url: URL,
    query:{
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,

    }
  })
  const res = await fetch(url);
  const data = await res.json();

  return data;
};

export default getProducts;