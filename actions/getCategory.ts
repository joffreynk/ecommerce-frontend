import { Category } from '@/types';

const URL = `${process.env.NEXT_STORE_PUBLIC_API}/categories`;

const getCatgory = async(id: string): Promise<Category> =>{
const res = await fetch(`${URL}/${id}`);
const data = await res.json();

return data
}

export default getCatgory;