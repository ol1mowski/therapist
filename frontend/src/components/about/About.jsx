import style from './About.module.scss';

const About = () => {
    return (
        <>
            <section className={style.aboutContainer}>
                <section className={style.aboutContainer__header}>
                    <div className={style.aboutContainer__header__title}>
                        <h2 className={style.aboutContainer__header__title__h2}>
                            Why <span className={style.aboutContainer__span}>Alice</span> was created ?
                        </h2>
                    </div>
                    <div className={style.aboutContainer__header__title__button}>
                        <a href='#docs'>
                            <button className={style.aboutContainer__header__title__button__btn}>
                                How to use <span className={style.aboutContainer__span}>Alice</span> ?
                            </button>
                        </a>
                    </div>
                </section>
                <section className={style.aboutContainer__header__content}>
                    <article className={style.aboutContainer__header__content__text}>
                        <p className={style.aboutContainer__header__content__text__p}>
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