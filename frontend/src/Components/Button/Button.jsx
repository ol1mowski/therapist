import s from './Button.module.scss';

const Button = ({ content }) => {
    return (
        <div className={s.button}>
            <button className={s.button__btn}>
                { content }
            </button>
        </div>
    );
};

export default Button;