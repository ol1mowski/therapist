import style from './Home.module.scss';
import img from '../../assets/alice.webp';

import { Link } from "react-scroll";
import { motion } from "framer-motion";

// ... (import statements remain unchanged)

const Home = () => {

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
            <section id='home' className={style.homeContainer}>
                <section className={style.homeContainer__titleSection}>
                    <div className={style.homeContainer__titleSection__text}>
                        <h1 className={style.homeContainer__titleSection__text__h1}>
                            Alice
                        </h1>
                        <h2 className={style.homeContainer__titleSection__text__h2}>
                            Your Virtual Therapist
                        </h2>
                    </div>
                    <div className={style.homeContainer__titleSection__button}>
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1200}
                        >
                            <motion.button
                                className={style.homeContainer__titleSection__button__btn}
                                variants={buttonVariants}
                                whileHover="hover"
                            >
                                Read more
                            </motion.button>
                        </Link>
                    </div>
                </section>
                <section className={style.homeContainer__imageSection}>
                    <div className={style.homeContainer__imageSection__imgWrapper}>
                        <img loading='lazy' src={img} alt='Therapist giving advice to a client' className={style.homeContainer__imageSection__imgWrapper__img} />
                    </div>
                </section>
            </section>
        </>
    );
};

export default Home;
