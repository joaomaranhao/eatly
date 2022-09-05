import { BurgerMenu } from '../BurgerMenu'

export const Layout = ({ children }) => {
  return (
    <div>
      <BurgerMenu />
      {children}
    </div>
  )
}
