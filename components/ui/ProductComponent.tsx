import { Product } from "@/types";
import Gallery from "@/components/Gallery";
import ProductInfo from "@/components/ProductInfo";

const ProductComponent = ({ product }: { product: Product }) => {
  return (
    <div className="grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
      {/* Gallery */}
      <Gallery images={product.images} />
      <div>
        {/* Info */}
        <ProductInfo data={product} />
      </div>
    </div>
  );
};

export default ProductComponent;
