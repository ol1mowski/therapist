import { type LegacyRef } from "react";
import s from "../Form-sass/FormStyle.module.scss";
import { ValidateObject } from "../Forms/Singup/Singup.component";

type InputComponentProps = {
  labelTitle: string;
  elementValue: string;
  inputType: string;
  name: string;
  hrefToElement: LegacyRef<HTMLInputElement>;
  elementError: ValidateObject;
  onchangeHandler: (e: any) => void;
  icon?: boolean;
  iconSrc?: string;
  changeIconHandler?: () => void;
};

export const InputComponent = ({
  elementValue,
  inputType,
  name,
  labelTitle,
  elementError,
  onchangeHandler,
  hrefToElement,
  icon,
  changeIconHandler,
  iconSrc,
}: InputComponentProps) => {
  
  return (
    <div
      className={
        s.loginContainer__wrapper__loginFormContainer__form__inputsWrapper__inputWrapper
      }
    >
      <label
        className={
          s.loginContainer__wrapper__loginFormContainer__form__inputsWrapper__inputWrapper__label
        }
        htmlFor={name}
      >
        {labelTitle}
      </label>
      <div
        className={
          s.loginContainer__wrapper__loginFormContainer__form__inputsWrapper__inputWrapper__wrapper
        }
      >
        <input
          ref={hrefToElement}
          value={elementValue}
          onChange={(e) => onchangeHandler(e)}
          className={
            s.loginContainer__wrapper__loginFormContainer__form__inputsWrapper__inputWrapper__input
          }
          type={inputType}
          name={name}
        />
        {icon ? (
          <img
            onClick={changeIconHandler}
            src={iconSrc}
            alt="passoword icon"
            className={
              s.loginContainer__wrapper__loginFormContainer__form__inputsWrapper__inputWrapper__img
            }
          />
        ) : null}
      </div>
       
      {elementError.isError ? (
        <p className={s.unvalid__message}>{elementError.errorMessage}</p>
      ) : null}
    </div>
  );
};
