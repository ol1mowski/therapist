import { type RefObject } from "react";
import s from "../Form-component.module.scss";

type InputComponentProps = {
  email: string;
  setEmail: (value: string) => void;
  emailElement: RefObject<HTMLInputElement>;
  inputType: string;
  name: string;
  id: string;
};

export const InputComponent = ({
  email,
  setEmail,
  emailElement,
  inputType,
  name,
  id,
}: InputComponentProps) => {
  return (
    <input
      ref={emailElement}
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className={
        s.loginContainer__wrapper__loginFormContainer__form__inputsWrapper__input
      }
      type={inputType}
      name={name}
      id={id}
    />
  );
};
