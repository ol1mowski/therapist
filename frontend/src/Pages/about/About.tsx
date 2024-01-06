import style from './About.module.scss';

import { Link } from "react-scroll";
import { motion } from "framer-motion";

const About = () => {

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
            <section id='about' className={style.aboutContainer}>
                <section className={style.aboutContainer__header}>
                    <div className={style.aboutContainer__header__title}>
                        <h2 className={style.aboutContainer__header__title__h2}>
                            Why <span className={style.aboutContainer__span}>Alice</span> was created ?
                        </h2>
                    </div>
                    <div className={style.aboutContainer__header__title__button}>

                            <Link
                                activeClass="active"
                                to="use"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1200}
                            >
                                <motion.button
                                    className={style.aboutContainer__header__title__button__btn}
                                    variants={buttonVariants}
                                    whileHover="hover"
                                >
                                    How to use <span className={style.aboutContainer__span}>Alice</span> ?
                                </motion.button>
                            </Link>
                    </div>
                </section>
                <section className={style.aboutContainer__header__content}>
                    <article className={style.aboutContainer__header__content__text}>
                        <p className={style.aboutContainer__header__content__text__p}>
                            <svg id={style.svg} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                <style>
                                    {` .svg-fill { fill: #eaeaea; } `}

                                </style>
                                <path className="svg-fill" d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z" />
                            </svg>

                            In response to the challenges, a team of teachers, psychologists and engineers decided to create an innovative solution. They decided to create a virtual therapist who could help students understand and deal with their emotional problems. This is how the idea of "<span className={style.aboutContainer__span}>Alice</span>" was born.
                        </p>
                    </article>
                    <article className={style.aboutContainer__header__content__text}>
                        <p className={style.aboutContainer__header__content__text__p}>
                            The story of <span className={style.aboutContainer__span}>Alice</span>'s creation is a perfect example of how advanced technology and a commitment to student well-being can come together to create innovative solutions in the fields of education and psychology.
                        </p>
                    </article>
                </section>
            </section>
        </>
    );
};

export default About;