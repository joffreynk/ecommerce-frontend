import { Product } from "@/types";

function ProductList({ title, items }: { title: string; items: Product[] }) {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {items.length < 1 ? "No Results Found" :(
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {
          items.map(item =>(
            <div key={item.id}>
              {item.name}
              
            </div>
          ))
        }
        </div>)}
    </div>
  );
}

export default ProductList;
