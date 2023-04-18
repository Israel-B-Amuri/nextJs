import React from 'react'
import style from '../styles/Home.module.css'
import { headers } from 'next/dist/client/components/headers'
import Link from 'next/link'
const Header = ({display}:any) => {
  return (
    <header>
      <nav>
        <ul className={style.navList}>
          <li>
            <Link href='/'>
              Home
            </Link>
          </li>
          <li>
            <Link href='/about'>
              About
            </Link>
          </li>
          <li>
            <Link href='/contact'>
              Contact
            </Link>
          </li>
        </ul>

      </nav>
    </header>
  )
}

export default Header 