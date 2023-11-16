import s from './Technology.module.scss';

const Technology = () => {
    return (
        <section className={s.technoContainer}>
            <div className={s.technoContainer__content}>
                <h2 className={s.technoContainer__content__header}>
                    Technologies
                </h2>
                <p className={s.technoContainer__content__p}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                </p>
                <div className={s.technoContainer__content__button}>
                    <button className={s.technoContainer__content__button__btn}>
                        Who create <span className={s.technoContainer__span}>Alice</span> ? 
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Technology;