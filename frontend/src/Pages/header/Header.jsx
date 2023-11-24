import style from "./header.module.scss";
import { useEffect, useRef } from "react";
import Navbar from "./Navbar/Navbar";

import HamburgerNav from "./Hamburger/HamburgerNav";

const Header = () => {


  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  };

  const hamburgerBtn = useRef(null);
  const navSection = useRef(null);
  const closeMenu = useRef(null);
  const hamburgerMenu = useRef(null);
  const hamburgerItems = useRef(null);

  const closeElement1 = useRef(null);
  const closeElement2 = useRef(null);
  const closeElement3 = useRef(null);
  const closeElement4 = useRef(null);

  const elements = [closeElement1, closeElement2, closeElement3, closeElement4];


  useEffect(() => {

    const closeHandler = () => {
      navSection.current.style.display = "none";
    }

    elements.forEach(item => item.current.addEventListener('click', closeHandler))

    return () => {
      elements.forEach(item => item.current.removeEventListener('click', closeHandler))
    };
  }, [elements])




  useEffect(() => {
    const showMenuHandler = () => {
      navSection.current.style.display = "block";
      hamburgerMenu.current.style.display = "none";
      hamburgerItems.current.style.display = "flex";
    };

    hamburgerBtn.current.addEventListener("click", showMenuHandler);

    return () => {
      hamburgerBtn.current.removeEventListener("click", showMenuHandler);
    };
  }, [hamburgerBtn]);

  useEffect(() => {

    const closeMenuHandler = () => {
      navSection.current.style.display = "none";
      hamburgerMenu.current.style.display = "flex";
      hamburgerItems.current.style.display = "none";

    };

    closeMenu.current.addEventListener("click", closeMenuHandler);

    return () => {
      closeMenu.current.removeEventListener("click", closeMenuHandler);
    };

  }, [closeMenu]);

  return (
    <>
      <header className={style.headerContainer}>

        <Navbar />

        {/* hamburger menu  */}

        <HamburgerNav hamburgerItems={hamburgerItems} hamburgerMenu={hamburgerMenu} hamburgerBtn={hamburgerBtn} navSection={navSection} closeElement1={closeElement1} closeElement2={closeElement2} closeElement3={closeElement3} closeElement4={closeElement4} buttonVariants={buttonVariants} closeMenu={closeMenu} />
      </header>
    </>
  );
};

export default Header;
