import { Color } from '@/types';

const URL = `${process.env.NEXT_STORE_PUBLIC_API}/colors`;

const getColors = async(): Promise<Color[]> =>{
const res = await fetch(URL);
const data = await res.json();

return data
}

export default getColors;