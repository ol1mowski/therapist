import s from './Button.module.scss';

type ButtonProps = {
    content: string,
}

const Button = ({ content }: ButtonProps) => {
    return (
        <div className={s.button}>
            <button className={s.button__btn}>
                { content }
            </button>
        </div>
    );
};

export default Button;