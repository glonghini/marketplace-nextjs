'use client'

import { useState } from 'react'
import styles from './styles.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = {
  children: React.ReactNode
}

const navLinks = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Products', href: '/products' },
]

export default function AuthenticatedLayout({ children }: Props) {
  const [state, setState] = useState(true)
  const pathname = usePathname()

  return <main className={styles.main}>
    <div className={styles.sideMenu} style={{ width: state ? '220px' : '100px' }}>
      Side Menu
      <button onClick={() => setState(prevState => !prevState)}>click me</button>
      {
        navLinks.map((_, index) => {
          const isActive = pathname.startsWith(_.href)

          return <Link href={_.href} key={index} style={{ backgroundColor: isActive ? 'red' : 'transparent' }}>
            {_.name}
          </Link>
        })
      }
    </div>
    <div className={styles.mainView}>
      {children}
    </div>
  </main>
}