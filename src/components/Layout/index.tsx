import { MainNavbar } from '../MainNavbar'

export const Layout = ({ children }) => {
  return (
    <>
      <MainNavbar />
      {children}
    </>
  )
}
