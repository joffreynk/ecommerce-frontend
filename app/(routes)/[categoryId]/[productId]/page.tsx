import getProducts from '@/actions/getProducts';
import getproduct from '@/actions/getproduct';
import ProductList from '@/components/ProductList'
import Container from '@/components/ui/Container'
import React from 'react'

const SingleProduct = async({params}: {params: {productId: string}}) => {

  const product = await getproduct(params.productId);

  
  const products = await getProducts({
    categoryId: product.category.id,
  });


  return (
       <Container>
    <div className="space-y-10 pb-10 lg:pb-16">
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title={`${product?.category?.name}'s related products`} items={products} />
      </div>
    </div>
  </Container>
  )
}

export default SingleProduct
