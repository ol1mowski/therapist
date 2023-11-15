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
                    
                </div>
            </section >
        </>
    );
};

export default Use;