import { lazy } from 'react';

const About = lazy(() => import("../Pages/PortfolioPage/about/About"));
const Authors = lazy(() => import("../Pages/PortfolioPage/authors/Authors"));
const Footer = lazy(() => import("../Pages/PortfolioPage/footer/Footer"));
const Header = lazy(() => import("../Pages/PortfolioPage/header/Header"));
const Home = lazy(() => import("../Pages/PortfolioPage/Home/Home"));
const Technology = lazy(() => import("../Pages/PortfolioPage/technology/Technology"));
const Use = lazy(() => import("../Pages/PortfolioPage/use/Use"));

function PageLayout() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Use />
      <Technology />
      <Authors />
      <Footer />
    </>
  );
}

export default PageLayout;
