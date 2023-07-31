import getCatgory from '@/actions/getCategory';
import getColors from '@/actions/getColors';
import getProducts from '@/actions/getProducts';
import getSizes from '@/actions/getSizes';
import BillboardPage from '@/components/Billboard';
import ProductList from '@/components/ProductList';
import Container from '@/components/ui/Container';
import Filter from '@/components/ui/Filter';

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
  const colors = await getColors();
  const sizes = await getSizes();

  return (
    <Container>
    <div className="space-y-10 pb-10 lg:pb-16">
    <BillboardPage data={(category).billboard} />
    <div>

    </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <Filter valueKey='colorId' name='colors' data={colors} />

        <Filter valueKey='sizeId' name='Sizes' data={sizes} />
        <ProductList title={`${category.name} Products`} items={products} />
      </div>
    </div>
  </Container>
);
}

export default ProductCategory
