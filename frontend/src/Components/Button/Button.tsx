import { type ReactNode } from 'react';
import s from './Button.module.scss';

type ButtonProps = {
    children: ReactNode,
}

const Button = ({ children }: ButtonProps) => {
    return (
        <div className={s.button}>
            <button className={s.button__btn}>
                { children }
            </button>
        </div>
    );
};

export default Button;