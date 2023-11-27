import style from './HamburgerNav.module.scss';

import hamburger from "../../../assets/icons/hamburger.svg";
import hamburger_x from "../../../assets/icons/hamburger_x.svg";

import { Link } from "react-scroll";
import { motion } from "framer-motion";

const HamburgerNav = ({ hamburgerItems, hamburgerMenu, hamburgerBtn, closeMenu, closeElement1, closeElement2, closeElement3, closeElement4, navSection, buttonVariants }) => {
    return (
        <>
            <nav ref={hamburgerMenu} className={style.hamburgerNav}>
                <div className={style.hamburgerNav__title}>
                    <h2 className={style.hamburgerNav__title__h2}>
                        Alice
                    </h2>
                </div>
                <div
                    ref={hamburgerBtn}
                    className={style.hamburgerNav__iconSection}
                >
                    <img src={hamburger} alt="hamburger icon" />
                </div>
            </nav>

            <nav ref={navSection} className={style.navSection}>
                <section className={style.navSection__closeMenu}>
                    <img ref={closeMenu} src={hamburger_x} alt="Close menu icon" />
                </section>
                <section ref={hamburgerItems} className={style.navSection__items}>
                    <div className={style.navSection__items__nav}>
                        <div
                            className={style.navSection__items__nav__item}
                        >
                            <Link
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1200}
                            >
                                <motion.a
                                    ref={closeElement1}
                                    variants={buttonVariants}
                                    whileHover="hover"
                                >
                                    Home
                                </motion.a>
                            </Link>
                        </div>
                        <div
                            className={style.navSection__items__nav__item}
                        >
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1200}
                            >
                                <motion.a
                                    ref={closeElement2}
                                    variants={buttonVariants}
                                    whileHover="hover"
                                >
                                    About
                                </motion.a>
                            </Link>
                        </div>
                        <div
                            className={style.navSection__items__nav__item}
                        >
                            <Link
                                activeClass="active"
                                to="use"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1200}
                            >
                                <motion.a
                                    ref={closeElement3}
                                    variants={buttonVariants}
                                    whileHover="hover"
                                >
                                    Use
                                </motion.a>
                            </Link>
                        </div>
                        <div
                            className={style.navSection__items__nav__item}
                        >
                            <Link
                                activeClass="active"
                                to="technologies"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1200}
                            >
                                <motion.a
                                    ref={closeElement4}
                                    variants={buttonVariants}
                                    whileHover="hover"
                                >
                                    Technologies
                                </motion.a>
                            </Link>
                        </div>
                    </div>

                    <div className={style.navSection__items__log}>
                        <div
                            className={style.navSection__items__log__item}
                        >
                            <a
                                className={
                                    style.navSection__items__log__item__a
                                }
                                href="#"
                            >
                                Login
                            </a>
                        </div>
                        <div
                            className={style.navSection__items__log__item}
                        >
                            <a
                                className={
                                    style.navSection__items__log__item__a
                                }
                                href="#"
                            >
                                Try
                            </a>
                            <svg id={style.svg} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-external-link"><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path><path d="M11 13l9 -9"></path><path d="M15 4h5v5"></path></svg>
                        </div>
                    </div>
                </section>
            </nav>


        </>

    )
}

export default HamburgerNav
