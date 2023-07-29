import getBillboard from "@/actions/getBillboard";
import BillboardPage from "@/components/Billboard";
import Container from "@/components/ui/Container";

export default async function Home() {
  const billboard = await getBillboard('69f00970-f66d-44df-acba-9c6f7f145925')

  return (
    <Container >
      <div className="space-y-10 pb-10">
        <BillboardPage data={billboard} />
      </div>
    </Container>
  )
}
