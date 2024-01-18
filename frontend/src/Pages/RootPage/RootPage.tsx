import { Outlet, ScrollRestoration } from "react-router-dom"
import Footer from "../PortfolioPage/footer/Footer"


const RootPage = () => {
  return (
    <>
    <ScrollRestoration />
    <Outlet />
    <Footer />
    </>
  )
}

export default RootPage
