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
                                <svg className={style.useContainer__svg} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><style>{` .svg { fill: #2C2F32; } `}</style><path d="M205 34.8c11.5 5.1 19 16.6 19 29.2v64H336c97.2 0 176 78.8 176 176c0 113.3-81.5 163.9-100.2 174.1c-2.5 1.4-5.3 1.9-8.1 1.9c-10.9 0-19.7-8.9-19.7-19.7c0-7.5 4.3-14.4 9.8-19.5c9.4-8.8 22.2-26.4 22.2-56.7c0-53-43-96-96-96H224v64c0 12.6-7.4 24.1-19 29.2s-25 3-34.4-5.4l-160-144C3.9 225.7 0 217.1 0 208s3.9-17.7 10.6-23.8l160-144c9.4-8.5 22.9-10.6 34.4-5.4z" /></svg>
                                Yes, <span className={style.useContainer__aliceSpan}>Alice</span> understand a human speech!
                            </p>
                        </div>
                        <div className={style.useContainer__questionsPart__wrapper__question}>
                            <span className={style.useContainer__boldSpan}>How it’s possible ?</span>
                            <p className={style.useContainer__questionsPart__wrapper__question__p}>
                                <svg className={style.useContainer__svg} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><style>{` .svg { fill: #2C2F32; } `}</style><path d="M205 34.8c11.5 5.1 19 16.6 19 29.2v64H336c97.2 0 176 78.8 176 176c0 113.3-81.5 163.9-100.2 174.1c-2.5 1.4-5.3 1.9-8.1 1.9c-10.9 0-19.7-8.9-19.7-19.7c0-7.5 4.3-14.4 9.8-19.5c9.4-8.8 22.2-26.4 22.2-56.7c0-53-43-96-96-96H224v64c0 12.6-7.4 24.1-19 29.2s-25 3-34.4-5.4l-160-144C3.9 225.7 0 217.1 0 208s3.9-17.7 10.6-23.8l160-144c9.4-8.5 22.9-10.6 34.4-5.4z" /></svg>
                                <span className={style.useContainer__aliceSpan}>Alice</span> has AI and she can talking with you!
                            </p>
                        </div>
                        <div className={style.useContainer__questionsPart__wrapper__button}>
                            <button className={style.useContainer__questionsPart__wrapper__button__btn}>
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
};

export default Use;