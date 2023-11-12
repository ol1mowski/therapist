import style from "./header.module.scss";
import hamburger from "../../assets/icons/hamburger.svg";
import hamburger_x from "../../assets/icons/hamburger_x.svg";
import { useEffect, useRef } from "react";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  const hamburgerBtn = useRef(null);
  const navSection = useRef(null);
  const closeMenu = useRef(null);

  useEffect(() => {
    const showMenuHandler = () => {
      navSection.current.style.display = "block";
    };

    hamburgerBtn.current.addEventListener("click", showMenuHandler);

    return () => {
      hamburgerBtn.current.removeEventListener("click", showMenuHandler);
    };
  }, [hamburgerBtn]);

  useEffect(() => {

    const closeMenuHandler = () => {
      navSection.current.style.display = "none";
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

        <nav className={style.headerContainer__hamburgerNav}>
          <div className={style.headerContainer__hamburgerNav__title}>
            <h2 className={style.headerContainer__hamburgerNav__title__h2}>
              Alice
            </h2>
          </div>
          <div
            ref={hamburgerBtn}
            className={style.headerContainer__hamburgerNav__iconSection}
          >
            <img src={hamburger} alt="hamburger icon" />
          </div>
        </nav>

        <nav ref={navSection} className={style.headerContainer__navSection}>
          <section className={style.headerContainer__navSection__closeMenu}>
            <img ref={closeMenu} src={hamburger_x} alt="Close menu icon" />
          </section>

          <section className={style.headerContainer__navSection__items}>
            <div className={style.headerContainer__navSection__items__nav}>
              <div
                className={style.headerContainer__navSection__items__nav__item}
              >
                <a href="#">Home</a>
              </div>
              <div
                className={style.headerContainer__navSection__items__nav__item}
              >
                <a href="#">About</a>
              </div>
              <div
                className={style.headerContainer__navSection__items__nav__item}
              >
                <a href="#">Docs</a>
              </div>
              <div
                className={style.headerContainer__navSection__items__nav__item}
              >
                <a href="#">Technologies</a>
              </div>
            </div>

            <div className={style.headerContainer__navSection__items__log}>
              <div
                className={style.headerContainer__navSection__items__log__item}
              >
                <a
                  className={
                    style.headerContainer__navSection__items__log__item__a
                  }
                  href="#"
                >
                  Login
                </a>
              </div>
              <div
                className={style.headerContainer__navSection__items__log__item}
              >
                <a
                  className={
                    style.headerContainer__navSection__items__log__item__a
                  }
                  href="#"
                >
                  Try
                </a>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-external-link"><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path><path d="M11 13l9 -9"></path><path d="M15 4h5v5"></path></svg>
              </div>
            </div>
          </section>
        </nav>
      </header>
    </>
  );
};

export default Header;
