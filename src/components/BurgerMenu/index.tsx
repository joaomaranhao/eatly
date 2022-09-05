import Link from 'next/link'
import { slide as Menu } from 'react-burger-menu'
import styles from './BurgerMenu.module.css'

export const BurgerMenu = () => {
  return (
    <div>
      <Menu
      burgerButtonClassName={styles.bmBurgerButton}
      burgerBarClassName={styles.bmBurgerBars}
      crossButtonClassName={styles.bmCrossButton}
      crossClassName={styles.bmCross}
      menuClassName={styles.bmMenu}
      morphShapeClassName={styles.bmMorphShape}
      itemListClassName={styles.bmItemList}
      itemClassName={styles.bmItem}
      overlayClassName={styles.bmOverlay}
      right
      >
        <Link href="/">
          <a className={styles.bmItem}>Programs</a>
        </Link>
        <Link href="/">
          <a className={styles.bmItem}>Services</a>
        </Link>
        <Link href="/">
          <a className={styles.bmItem}>News</a>
        </Link>
        <Link href="/about">
          <a className={styles.bmItem}>About us</a>
        </Link>
      </Menu>
    </div>
  )
}
