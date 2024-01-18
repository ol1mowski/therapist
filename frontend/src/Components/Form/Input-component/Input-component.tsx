import { LegacyRef } from "react";
import s from "../Form-sass/FormStyle.module.scss";

type InputComponentProps = {
  element: string;
  setElement: (value: string) => void;
  inputType: string;
  name: string;
  id: string;
  hrefToElement: LegacyRef<HTMLInputElement>;
};

export const InputComponent = ({
  element,
  setElement,
  inputType,
  name,
  id,
  hrefToElement,
}: InputComponentProps) => {
  return (
    <input
      ref={hrefToElement}
      value={element}
      onChange={(e) => setElement(e.target.value)}
      className={
        s.loginContainer__wrapper__loginFormContainer__form__inputsWrapper__input
      }
      type={inputType}
      name={name}
      id={id}
    />
  );
};
