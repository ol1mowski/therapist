import s from './Button.module.scss';

const Button = () => {
    return (
        <div className={s.button}>
            <button className={s.button__btn}>
                Read More
            </button>
        </div>
    );
};

export default Button;