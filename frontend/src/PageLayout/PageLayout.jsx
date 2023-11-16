import Home from "../Pages/Home/Home"
import About from "../Pages/about/About"
import Header from "../Pages/header/header"
import Technology from "../Pages/technology/Technology";
import Use from "../Pages/use/Use";

function PageLayout() {

  return (
    <>
     <Header />
     <Home />
     <About />
     <Use />
     <Technology />
    </>
  );
};

export default PageLayout;
