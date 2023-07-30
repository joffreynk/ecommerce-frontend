import getCatgory from '@/actions/getCategory';
import getProducts from '@/actions/getProducts';
import BillboardPage from '@/components/Billboard';
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

  const category = await getCatgory(params.categoryId)

  return (
    <Container>
    <div className="space-y-10 pb-10 lg:pb-16">
    <BillboardPage data={(category).billboard} />
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Products" items={products} />
      </div>
    </div>
  </Container>
);
}

export default ProductCategory
