import { useRef, useState, type MouseEvent  } from "react";

import { FormWrapper } from "../../FormWrapper-component/FormWrapper.component";
import { InputComponent } from "../../Input-component/Input-component";

import s from "../../Form-sass/FormStyle.module.scss";

import validator from "validator";

export const Login = () => {
  type ValidateObject = {
    isError: boolean;
    errorMessage: string | null;
  };

  const emailElement = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<ValidateObject>({
    isError: false,
    errorMessage: null,
  });

  const passwordElement = useRef<HTMLInputElement>(null);
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<ValidateObject>({
    isError: false,
    errorMessage: null,
  });

  const emailValidate = (values: string) => {
    if (!values) {
      setEmailError({ isError: true, errorMessage: "required" });
      emailElement.current?.classList.add(s.unvalid);
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values)) {
      setEmailError({ isError: true, errorMessage: "invalid email" });
      emailElement.current?.classList.add(s.unvalid);
    } else {
      setEmailError({ isError: false, errorMessage: null });

      if (emailElement.current?.classList) {
        emailElement.current?.classList.remove(s.unvalid);
      }
    }
  };

  const passwordValidate = (value: string) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setPasswordError({ isError: false, errorMessage: null });
      if (passwordElement.current?.classList) {
        passwordElement.current?.classList.remove(s.unvalid);
      }
    } else {
      setPasswordError({ isError: true, errorMessage: "too weak password" });

      passwordElement.current?.classList.add(s.unvalid);
    }
  };

  const buttonSubmitHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    emailValidate(email);
    emailError.isError ? console.log(emailError.errorMessage) : null;
    passwordValidate(password);
    passwordError.isError ? console.log(passwordError.errorMessage) : null;
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
        <InputComponent
          elementError={emailError}
          labelTitle="Enter your email:"
          inputType={"text"}
          name={"email"}
          id={"email"}
          element={email}
          setElement={setEmail}
          hrefToElement={emailElement}
        />
        <InputComponent
          elementError={passwordError}
          labelTitle={"Enter your password:"}
          inputType={"password"}
          name={"password"}
          id={"password"}
          element={password}
          setElement={setPassword}
          hrefToElement={passwordElement}
        />
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
