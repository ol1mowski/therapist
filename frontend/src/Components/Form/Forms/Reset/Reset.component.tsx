import { MouseEvent, useRef, useState } from "react";
import { FormWrapper } from "../../FormWrapper-component/FormWrapper.component";
import s from "../../Form-sass/FormStyle.module.scss";
import { InputComponent } from "../../Input-component/Input-component";

export const Reset = () => {
  const emailElement = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);

  const errorValidate = (values: string) => {
    if (!values) {
      emailElement.current?.classList.add(s.unvalid);
      setEmailError(true);
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values)) {
      setEmailError(true);
      emailElement.current?.classList.add(s.unvalid);
    } else {
      setEmailError(false);
      if (emailElement.current?.classList) {
        emailElement.current?.classList.remove(s.unvalide);
      }
    }
  };

  const buttonSubmitHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    errorValidate(email);
    emailError ? console.log(emailError) : null;
  };

  return (
    <FormWrapper
      title="Reset passowrd to "
      firstFeature="Login to your accounr"
      firstFeatureLink="/form/login"
      secondFeature="Create new account"
      secondFeatureLink="/form/signup"
      buttonName="Next Step"
    >
      <div
        className={
          s.loginContainer__wrapper__loginFormContainer__form__inputsWrapper
        }
      >
        <div
          className={
            s.loginContainer__wrapper__loginFormContainer__form__inputsWrapper__inputWrapper
          }
        >
          <label
            className={
              s.loginContainer__wrapper__loginFormContainer__form__inputsWrapper__label
            }
            htmlFor="email"
          >
            Enter your email:
          </label>
          <InputComponent
            inputType={"text"}
            name={"email"}
            id={"email"}
            element={email}
            setElement={setEmail}
            hrefToElement={emailElement}
          />
        </div>{" "}
      </div>
      <div className={s.button}>
        <button
          onClick={(e) => buttonSubmitHandler(e)}
          className={s.button__btn_small}
        >
          Next step
        </button>
      </div>
    </FormWrapper>
  );
};
