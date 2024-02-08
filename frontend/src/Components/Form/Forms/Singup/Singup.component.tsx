import { MouseEvent, useEffect, useRef, useState } from "react";
import { FormWrapper } from "../../FormWrapper-component/FormWrapper.component";
import { InputComponent } from "../../Input-component/Input-component";
import s from "../../Form-sass/FormStyle.module.scss";
import SingupSuccess from "./Singup-Success-component/SingupSuccess.component";
import {
  emailValidate,
  nameValidate,
  passwordValidate,
} from "../../Form-validation/FormValidate.component";

export type ValidateObject = {
  isError: boolean;
  errorMessage: string | null;
};

const Signup = () => {
  const [isDataValidate, setIsDataValidate] = useState<boolean>(false);
  const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false);

  const [emailError, setEmailError] = useState<ValidateObject>({
    isError: false,
    errorMessage: null,
  });

  const [passwordError, setPasswordError] = useState<ValidateObject>({
    isError: false,
    errorMessage: null,
  });

  const [nameError, setNameError] = useState<ValidateObject>({
    isError: false,
    errorMessage: null,
  });

  const [email, setEmail] = useState<string>("");
  const emailElement = useRef<HTMLInputElement>(null);

  const [password, setPassword] = useState<string>("");
  const passwordElement = useRef<HTMLInputElement>(null);

  const [name, setName] = useState<string>("");
  const nameElement = useRef<HTMLInputElement>(null);

  const buttonSubmitHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    emailValidate(email, emailElement, setEmailError);
    passwordValidate(password, passwordElement, setPasswordError);
    nameValidate(name, nameElement, setNameError);
    setIsButtonClicked(true);
  };

  useEffect(() => {
    if (isButtonClicked) {
      if (!passwordError.isError && !emailError.isError && !nameError.isError) {
        setIsDataValidate(true);
      } else {
        setIsDataValidate(false);
      }
    }
  }, [passwordError, emailError, isButtonClicked]);

  return (
    <>
      {isDataValidate ? (
        <SingupSuccess />
      ) : (
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
      )}
    </>
  );
};


export default Signup;