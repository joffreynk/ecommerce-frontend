import getProducts from '@/actions/getProducts';
import getproduct from '@/actions/getproduct';
import ProductList from '@/components/ProductList'
import Container from '@/components/ui/Container'
import ProductComponent from '@/components/ui/ProductComponent';

const SingleProduct = async({params}: {params: {productId: string}}) => {

  const product = await getproduct(params.productId);

  
  const products = await getProducts({
    categoryId: product?.category?.id,
  });


  return (
       <Container>
    <div className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        {
          product && (<ProductComponent product={product} />)
        }
        <hr className='my-10 w-full' />
        <ProductList title={`${product?.category?.name}'s related products`} items={products} />
      </div>
    </div>
  </Container>
  )
}

export default SingleProduct
