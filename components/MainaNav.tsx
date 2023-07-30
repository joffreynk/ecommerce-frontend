'use client'

import { Category } from '@/types';
import Link from 'next/link';
import  {usePathname} from 'next/navigation'

const MainaNav = ({data}: {data: Category[]}) => {

  const path = usePathname()

  const routes = data.map((route: any) =>({
    href: `/${route.id}`,
    label: route.name,
    active: path === `/${route.id}`,
  }))

  return (
    <nav className='mx-6 ml-40 flex items-center space-x-4 lg:space-x-6'>
      {
        routes.map((route: any)=>(
          <Link 
          key={route.href}
          href={route.href}
          className={`text-sm font-medium transition-colors hover:black ${route.active? " text-black underline text-lg ": " text-neutral-500"}`}
          >
            {route.label}
          </Link>
        ))
      }
    </nav>
  )
}

export default MainaNav
