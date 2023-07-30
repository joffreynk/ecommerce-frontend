import { Size } from '@/types';

const URL = `${process.env.NEXT_STORE_PUBLIC_API}/sizes`;

const getSizes = async(): Promise<Size[]> =>{
const res = await fetch(URL);
const data = await res.json();

return data
}

export default getSizes;