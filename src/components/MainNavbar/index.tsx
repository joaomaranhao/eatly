import Link from 'next/link'
import { BurgerMenu } from '../BurgerMenu'
import { BiFoodMenu } from 'react-icons/bi'

import styles from './MainNavbar.module.css'

export const MainNavbar = () => {
  return (
    <>
    <div className={styles.burger}>
      <BurgerMenu />
    </div>
    <nav className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Link href="/">
            <a>
              <BiFoodMenu color='white' />
              <span>Eatly</span>
            </a>
          </Link>
        </div>
        <div className={styles.menu}>
          <ul>
            <li>
              <Link href="/">
                <a>Programs</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Services</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>News</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About us</a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
            <Link href="/">
              <a>
                <button className={styles.button}>
                  {"Let's talk"}
                </button>
              </a>
            </Link>
        </div>
      </div>
    </nav>
    </>
  )
}
