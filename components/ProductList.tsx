import { Product } from "@/types";
import ProductCard from "./ui/ProductCard";

function ProductList({ title, items }: { title: string; items: Product[] }) {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {items.length < 1 ? "No Results Found" :(
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
        {
          items.map(item =>(<ProductCard key={item.id} data={item} />))
        }
        </div>)}
    </div>
  );
}

export default ProductList;
