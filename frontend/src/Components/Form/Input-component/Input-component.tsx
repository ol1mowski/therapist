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
};

export const InputComponent = ({
  elementValue,
  inputType,
  name,
  labelTitle,
  elementError,
  onchangeHandler,
  hrefToElement,
}: InputComponentProps) => {
  return (
    <div
      className={
        s.loginContainer__wrapper__loginFormContainer__form__inputsWrapper__inputWrapper
      }
    >
      <label
        className={
          s.loginContainer__wrapper__loginFormContainer__form__inputsWrapper__label
        }
        htmlFor={name}
      >
        {labelTitle}
      </label>
      <input
        ref={hrefToElement}
        value={elementValue}
        onChange={(e) => onchangeHandler(e)}
        className={
          s.loginContainer__wrapper__loginFormContainer__form__inputsWrapper__input
        }
        type={inputType}
        name={name}
      />
      {elementError.isError ? (
        <p className={s.unvalid__message}>{elementError.errorMessage}</p>
      ) : null}
    </div>
  );
};
