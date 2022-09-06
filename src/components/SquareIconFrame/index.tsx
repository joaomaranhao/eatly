import styles from './SquareIconFrame.module.css'

export const SquareIconFrame = ({ children }) => {
  return (
    <div className={styles.frame}>
      <div className={styles.icon}>
        {children}
      </div>
    </div>
  )
}
