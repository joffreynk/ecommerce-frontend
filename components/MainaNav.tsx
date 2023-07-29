'use client'

import Link from 'next/link';
import  {usePathname} from 'next/navigation'
interface MainNavProps {
  data: any;
}

// {
//   label: string;
//   href: string;
//   active: boolean;

// }

const MainaNav = ({data}: {data: MainNavProps}) => {

  const path = usePathname()

  const routes = data.map((route: any) =>({
    href: `/category/${route.id}`,
    label: route.name,
    active: path === `/category/${route.id}`,
  }))

  return (
    <nav className='mx-6 flex items-center space-x-4 lg:space-x-6'>
      {
        routes.map((route: any)=>(
          <Link 
          key={route.href}
          href={route.href}
          >
            {route.label}
          </Link>
        ))
      }
    </nav>
  )
}

export default MainaNav
