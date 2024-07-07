import { Category } from '@/types';

const URL = `${process.env.NEXT_STORE_PUBLIC_API}/categories`;

http: const getCatgory = async (id: string): Promise<Category> => {
  const res = await fetch(`${URL}/${id}`);
  const data = await res.json();
  console.log("====================================");
  console.log(data);
  console.log("====================================");

  return data;
};

export default getCatgory;