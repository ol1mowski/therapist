import { type RefObject } from "react";
import s from "../Form-component.module.scss";

type InputComponentProps = {
  element: string;
  setElement: (value: string) => void;
  hrefToElement: RefObject<HTMLInputElement>;
  inputType: string;
  name: string;
  id: string;
};

export const InputComponent = ({
  element,
  setElement,
  hrefToElement,
  inputType,
  name,
  id,
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
