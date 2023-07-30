import getProducts from '@/actions/getProducts';
import ProductList from '@/components/ProductList';
import Container from '@/components/ui/Container';

interface CatgoryProps {
  params: {categoryId: string},
  searchParams: {
    colorId: string,
    sizeId: string,
  }
}

const ProductCategory = async({params, searchParams}: CatgoryProps) => {
  
  const products = await getProducts({
    categoryId: params.categoryId,
    sizeId: searchParams.sizeId,
    colorId: searchParams.colorId,
  });

  return (
    <Container>
    <div className="space-y-10 pb-10 lg:pb-16">
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Products" items={products} />
      </div>
    </div>
  </Container>
);
}

export default ProductCategory
