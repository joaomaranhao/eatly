import { SquareIconFrame } from '../SquareIconFrame'
import styles from './SectionTitle.module.css'

export const SectionTitle = ({ title, children }) => {
  return (
    <div className={styles.title}>
      <SquareIconFrame>
        {children}
      </SquareIconFrame>
      <h2>{title}</h2>
    </div>
  )
}
