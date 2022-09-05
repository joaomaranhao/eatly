import { MainNavbar } from '../MainNavbar'

export const Layout = ({ children }) => {
  return (
    <div>
      <MainNavbar />
      {children}
    </div>
  )
}
