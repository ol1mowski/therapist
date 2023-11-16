import style from './Home.module.scss';
import img from '../../assets/background_image.png';

const Home = () => {
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
                        <a href='#about'>
                            <button className={style.homeContainer__titleSection__button__btn}>
                                Learn More
                            </button>
                        </a>
                    </div>
                </section>
                {/* <section className={style.homeContainer__imageSection}>
                    <div className={style.homeContainer__imageSection__imgWrapper}>
                        <img src={img} alt='Therapist give some advices your client' className={style.homeContainer__imageSection__imgWrapper__img} />
                    </div>
                </section> */}
            </section>
        </>
    );
};

export default Home;