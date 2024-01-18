import { useState } from "react";
import { FormWrapper } from "../../FormWrapper-component/FormWrapper.component";

import s from "../../Form-sass/FormStyle.module.scss";
import { InputComponent } from "../../Input-component/Input-component";

import { type MouseEvent } from "react";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [password, setPassword] = useState<string>("");


  const errorValidate = (values: string) => {
    if (!values) {
      setError("Require");
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values)) {
      setError("Invalid email address");
    }

  };

  const buttonSubmitHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    errorValidate(email);
    error ? console.log(error) : null;
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
