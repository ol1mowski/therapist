import { MouseEvent, type ReactNode } from 'react';
import s from './Button.module.scss';

type ButtonProps = {
    children: ReactNode,
    small?: boolean,
}

const buttonSubmitHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
}

const ButtonComponent = ({ children, small }: ButtonProps) => {
    return (
        <div className={s.button}>
            <button onClick={(e) => buttonSubmitHandler(e)} className={ small ? s.button__btn_small : s.button__btn }>
                { children }
            </button>
        </div>
    );
};

export default ButtonComponent;