import getProducts from '@/actions/getProducts';
import ProductList from '@/components/ProductList';
import Container from '@/components/ui/Container';
import React from 'react'

const ProductCategory = async({params}: {params: {categoryId: string}}) => {
  const products = await getProducts({
    categoryId: params.categoryId
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
