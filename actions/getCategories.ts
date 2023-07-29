import { Category } from '@/types';

const URL = `${process.env.NEXT_STORE_PUBLIC_API}/categories`;

const getCatgories = async(): Promise<Category[]> =>{
const res = await fetch(URL);
const data = await res.json();

return data
}

export default getCatgories;