import { useRef, useState } from "react";
import { FormWrapper } from "../../FormWrapper-component/FormWrapper.component";

import s from "../../Form-sass/FormStyle.module.scss";
import { InputComponent } from "../../Input-component/Input-component";
import validator from 'validator';
import { type MouseEvent } from "react";

export const Login = () => {
  const emailElement = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);

  const passwordElement = useRef<HTMLInputElement>(null);
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const errorValidate = (values: string) => {
    console.log(emailElement);
    
    if (!values) {
      setEmailError(true);
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values)) {
      setEmailError(true);
    }
    else {
      setEmailError(false);
    }
  };

  const passwordValidate = (value: string) => {
    console.log(passwordElement);
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };

  const buttonSubmitHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    errorValidate(email);
    emailError ? console.log(emailError) : null;
    passwordValidate(password);
    passwordError ? console.log(passwordError) : null;
    
  };

  return (
    <FormWrapper
      title="Create new"
      firstFeature="Do you forgot your password ?"
      firstFeatureLink="/form/reset"
      secondFeature="Create new account"
      secondFeatureLink="/form/signup"
      buttonName="Login"
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
        <div
          className={
            s.loginContainer__wrapper__loginFormContainer__form__inputsWrapper__inputWrapper
          }
        >
          <label
            className={
              s.loginContainer__wrapper__loginFormContainer__form__inputsWrapper__label
            }
            htmlFor="password"
          >
            Enter your password:
          </label>
          <InputComponent
            inputType={"password"}
            name={"password"}
            id={"password"}
            element={password}
            setElement={setPassword}
            hrefToElement={passwordElement}
          />
        </div>
      </div>
      <div className={s.button}>
        <button
          onClick={(e) => buttonSubmitHandler(e)}
          className={s.button__btn_small}
        >
          Login
        </button>
      </div>
    </FormWrapper>
  );
};
