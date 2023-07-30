import {  Product } from '@/types';

const URL = `${process.env.NEXT_STORE_PUBLIC_API}/products/`;

const getproduct = async(id: string): Promise<Product> =>{
const res = await fetch(`${URL}/${id}`);
const data = await res.json();

return data
}

export default getproduct;