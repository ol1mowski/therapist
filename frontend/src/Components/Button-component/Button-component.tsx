import { type ReactNode } from 'react';
import s from './Button.module.scss';

type ButtonProps = {
    children: ReactNode,
    small?: boolean,
}

const ButtonComponent = ({ children, small }: ButtonProps) => {
    return (
        <div className={s.button}>
            <button className={ small ? s.button__btn_small : s.button__btn }>
                { children }
            </button>
        </div>
    );
};

export default ButtonComponent;