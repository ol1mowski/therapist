import { Outlet } from "react-router-dom"
import Footer from "../PortfolioPage/footer/Footer"


const RootPage = () => {
  return (
    <>
    <Outlet />
    <Footer />
    </>
  )
}

export default RootPage
