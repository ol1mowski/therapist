import style from "./Navbar.module.scss";

import { Link } from "react-scroll";
import { motion } from "framer-motion";

import { Link as NavigateLink } from "react-router-dom";

const Navbar = () => {
  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  };

  return (
    <>
      <nav className={style.navbar}>
        <section className={style.navbar__navigation}>
          <div className={style.navbar__navigation__item}>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1200}
            >
              <motion.a
                className={style.navbar__navigation__item__a}
                variants={buttonVariants}
                whileHover="hover"
              >
                Home
              </motion.a>
            </Link>
          </div>
          <div className={style.navbar__navigation__item}>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1200}
            >
              <motion.a
                className={style.navbar__navigation__item__a}
                variants={buttonVariants}
                whileHover="hover"
              >
                About
              </motion.a>
            </Link>
          </div>
          <div className={style.navbar__navigation__item}>
            <Link
              activeClass="active"
              to="use"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1200}
            >
              <motion.a
                className={style.navbar__navigation__item__a}
                variants={buttonVariants}
                whileHover="hover"
              >
                Use
              </motion.a>
            </Link>
          </div>
          <div className={style.navbar__navigation__item}>
            <Link
              activeClass="active"
              to="technologies"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1200}
            >
              <motion.a
                className={style.navbar__navigation__item__a}
                variants={buttonVariants}
                whileHover="hover"
              >
                Technologies
              </motion.a>
            </Link>
          </div>
        </section>

        <section className={style.navbar__action}>
          <div className={style.navbar__action__item}>
            <NavigateLink
              className={style.navbar__action__item__a}
              to={"/form/login"}
            >
              Login
            </NavigateLink>
          </div>
          <div className={style.navbar__action__item}>
            <a className={style.navbar__action__item__a} href="#">
              Try
            </a>
            <svg
              id={style.svg}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-external-link"
            >
              <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
              <path d="M11 13l9 -9"></path>
              <path d="M15 4h5v5"></path>
            </svg>
          </div>
        </section>
      </nav>
    </>
  );
};

export default Navbar;
