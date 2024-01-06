import { Link } from "react-scroll";
import { motion } from "framer-motion";

import style from '../Hamburger/HamburgerNav.module.scss';


const buttonVariants = {
    hover: {
        scale: 1.05,
        transition: {
            duration: 0.3,
            yoyo: Infinity,
        },
    },
};

type LinkComponentProps = {
    name: string,
    closeMenuHandler: () => void,
}

const LinkComponent = ({ name, closeMenuHandler }: LinkComponentProps) => {
    return (
        <div
            className={style.navSection__items__nav__item}
        >
            <Link
                activeClass="active"
                to={name}
                spy={true}
                smooth={true}
                offset={-70}
                duration={1200}
            >
                <motion.a
                    onClick={closeMenuHandler}
                    variants={buttonVariants}
                    whileHover="hover"
                >
                    {name}
                </motion.a>
            </Link>
        </div>
    )
}

export default LinkComponent
