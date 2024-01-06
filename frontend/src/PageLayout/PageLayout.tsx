import { lazy } from 'react';

const About = lazy(() => import("../Pages/about/About"));
const Authors = lazy(() => import("../Pages/authors/Authors"));
const Footer = lazy(() => import("../Pages/footer/Footer"));
const Header = lazy(() => import("../Pages/header/header"));
const Home = lazy(() => import("../Pages/Home/Home"));
const Technology = lazy(() => import("../Pages/technology/Technology"));
const Use = lazy(() => import("../Pages/use/Use"));

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
