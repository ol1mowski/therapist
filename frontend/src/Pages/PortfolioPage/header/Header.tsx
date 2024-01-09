import { useRef } from "react";
import Navbar from "./Navbar/Navbar";
import HamburgerNav from "./Hamburger/HamburgerNav";

import style from "./header.module.scss";

const Header = () => {
  const navSection = useRef<HTMLDivElement>(null);
  const hamburgerItems = useRef<HTMLDivElement>(null);

  const showMenuHandler = () => {
    if (navSection.current && hamburgerItems.current) {
      navSection.current.style.display = "block";
      hamburgerItems.current.style.display = "flex";
    }
  };

  const closeMenuHandler = () => {
    if (navSection.current && hamburgerItems.current) {
      navSection.current.style.display = "none";
      hamburgerItems.current.style.display = "none";
    }
  };

  return (
    <>
      <header className={style.headerContainer}>
        <Navbar />

        {/* hamburger menu  */}
        <HamburgerNav
          hamburgerItems={hamburgerItems}
          navSection={navSection}
          showMenuHandler={showMenuHandler}
          closeMenuHandler={closeMenuHandler}
        />
      </header>
    </>
  );
};

export default Header;
