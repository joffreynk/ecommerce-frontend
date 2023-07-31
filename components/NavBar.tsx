import Link from "next/link";

import Container from "@/components/ui/Container";
import MainaNav from "@/components/MainaNav";
import NavBarActions from "@/components/navBarActions";
import getCategories from "@/actions/getCategories";

export const revalidate = 0;

export default async function NavBar() {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex  justify-between h-16 items-center">
          <div>
          <Link href="/" className="ml-4 lg:ml-0 flex gap-x-2">
            <p className="font-bold text-lg">Quicky</p>
          </Link>
          </div>
          <div>
          <MainaNav data={categories} />
          </div>
          <div>
          <NavBarActions />
          </div>
        </div>
      </Container>
    </div>
  );
}
