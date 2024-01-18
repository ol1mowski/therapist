import { MouseEvent, useRef, useState } from "react";
import { FormWrapper } from "../../FormWrapper-component/FormWrapper.component";

import s from "../../Form-sass/FormStyle.module.scss";
import { InputComponent } from "../../Input-component/Input-component";
import validator from "validator";

export const Signup = () => {
  const emailElement = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);

  const passwordElement = useRef<HTMLInputElement>(null);
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const nameElement = useRef<HTMLInputElement>(null);
  const [name, setName] = useState<string>("");
  const [nameError, setNameError] = useState<boolean>(false);

  const errorValidate = (values: string) => {
    console.log(emailElement);

    if (!values) {
      setEmailError(true);
      emailElement.current?.classList.add(s.unvalid);
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
      if (passwordElement.current?.classList) {
        passwordElement.current?.classList.remove(s.unvalide);
      }
    } else {
      setPasswordError(true);
      passwordElement.current?.classList.add(s.unvalid);
    }
  };

  const nameValidate = (value: string) => {
    if (value.length < 3) {
      setNameError(true);
      nameElement.current?.classList.add(s.unvalid);
    } else {
      setNameError(false);
      if (nameElement.current?.classList) {
        nameElement.current?.classList.remove(s.unvalide);
      }
    }
  };

  const buttonSubmitHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    errorValidate(email);
    emailError ? console.log(emailError) : null;
    passwordValidate(password);
    passwordError ? console.log(passwordError) : null;
    nameValidate(name);
    nameError ? console.log(nameError) : null;
  };

  return (
    <FormWrapper
      title="Register new"
      firstFeature="Do you forgot your password ?"
      firstFeatureLink="/form/reset"
      secondFeature="Login to your account"
      secondFeatureLink="/form/login"
      buttonName="Signup"
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
            Enter your name:
          </label>
          <InputComponent
            inputType={"text"}
            name={"name"}
            id={"name"}
            element={name}
            setElement={setName}
            hrefToElement={nameElement}
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
          Sign up
        </button>
      </div>
    </FormWrapper>
  );
};
