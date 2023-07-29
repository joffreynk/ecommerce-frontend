import Link from 'next/link'

import Container from '@/components/ui/Container'
import MainaNav from './MainaNav'
import getCategories from '@/actions/getCategories'

export default async function NavBar() {
const categories = await getCategories()

  return (
    <div className='border-b'>
      <Container >
        <div className='relative px-4 sm:px-6 lg:px-8 flex h-16 items-center'>
          <Link href='/' className='ml-4 flex lg:ml-0 gap-x-2'>
            <p className='font-bold text-lg'>Quicky</p>
          </Link>
          <MainaNav data={categories} />
        </div>
      </Container>
    </div>
  )
}
