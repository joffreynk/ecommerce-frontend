import getBillboard from "@/actions/getBillboard";
import getProducts from "@/actions/getProducts";
import BillboardPage from "@/components/Billboard";
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/Container";

export default async function Home() {
  const billboard = await getBillboard();
  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className="space-y-10 pb-10 lg:pb-16">
        <BillboardPage data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
}
