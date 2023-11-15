import style from './Use.module.scss';
import ai from '../../assets/icons/ai_icon.png';

const Use = () => {
    return (
        <>
            <section className={style.useContainer}>
                <div className={style.useContainer__header}>
                    <h2 className={style.useContainer__header__h2}>
                        How to use?
                    </h2>
                    <p className={style.useContainer__header__p}>
                        It's simple, all you have to do is <span className={style.useContainer__boldSpan}>tell</span> <span className={style.useContainer__aliceSpan}>Alice</span> about your problem or write it in chat, <span className={style.useContainer__aliceSpan}>Alice</span> <span className={style.useContainer__boldSpan}>will help you!</span>!
                    </p>
                    <img src={ai} alt='ai icon' className={style.useContainer__header__img} />
                </div>
                <div className={style.useContainer__questionsPart}>
                    <div className={style.useContainer__questionsPart__wrapper}>
                        <div className={style.useContainer__questionsPart__wrapper__question}>
                            <span className={style.useContainer__boldSpan}>Tell ?</span>
                            <p className={style.useContainer__questionsPart__wrapper__question__p}>
                                Yes, <span className={style.useContainer__aliceSpan}>Alice</span> understand a human speech!
                            </p>
                        </div>
                        <div className={style.useContainer__questionsPart__wrapper__question}>
                            <span className={style.useContainer__boldSpan}>How it’s possible ?</span>
                            <p className={style.useContainer__questionsPart__wrapper__question__p}>
                                <span className={style.useContainer__aliceSpan}>Alice</span> has AI and she can talking with you!
                            </p>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
};

export default Use;