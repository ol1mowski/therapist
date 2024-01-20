import { MouseEvent, useRef, useState } from "react";
import { FormWrapper } from "../../FormWrapper-component/FormWrapper.component";

import s from "../../Form-sass/FormStyle.module.scss";
import { InputComponent } from "../../Input-component/Input-component";
import validator from "validator";

export type ValidateObject = {
  isError: boolean;
  errorMessage: string | null;
};

export const Signup = () => {
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

  const nameElement = useRef<HTMLInputElement>(null);
  const [name, setName] = useState<string>("");
  const [nameError, setNameError] = useState<ValidateObject>({
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

  const nameValidate = (value: string) => {
    if (value.length < 3) {
      setNameError({ isError: true, errorMessage: "name is too short" });
      nameElement.current?.classList.add(s.unvalid);
    } else {
      setNameError({ isError: false, errorMessage: null });
      if (nameElement.current?.classList) {
        nameElement.current?.classList.remove(s.unvalid);
      }
    }
  };

  const buttonSubmitHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    emailValidate(email);
    emailError.isError ? console.log(emailError.errorMessage) : null;
    passwordValidate(password);
    passwordError.isError ? console.log(passwordError.errorMessage) : null;
    nameValidate(name);
    nameError.isError ? console.log(nameError.errorMessage) : null;
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
        <InputComponent
          elementError={nameError}
          inputType={"text"}
          name={"name"}
          id={"name"}
          element={name}
          setElement={setName}
          hrefToElement={nameElement}
          labelTitle="Enter your name:"
        />

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
          Sign up
        </button>
      </div>
    </FormWrapper>
  );
};
