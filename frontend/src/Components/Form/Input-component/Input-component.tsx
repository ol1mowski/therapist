import s from "../Form-sass/FormStyle.module.scss";

type InputComponentProps = {
  element: string;
  setElement: (value: string) => void;
  inputType: string;
  name: string;
  id: string;
};

export const InputComponent = ({
  element,
  setElement,
  inputType,
  name,
  id,
}: InputComponentProps) => {
  return (
    <input
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
