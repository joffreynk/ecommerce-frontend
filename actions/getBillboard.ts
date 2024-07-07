import { Billboard } from '@/types';

const URL = `${process.env.NEXT_STORE_PUBLIC_API_BILLBOARD}`;

const getBillboard = async(): Promise<Billboard> =>{
const res = await fetch(URL);
const data = await res.json();

return data
}

export default getBillboard;