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
            </section>
        </>
    );
};

export default About;