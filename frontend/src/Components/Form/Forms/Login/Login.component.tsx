import { useEffect, useRef, useState, MouseEvent } from "react";
import { Navigate } from "react-router-dom";
import { FormWrapper } from "../../FormWrapper-component/FormWrapper.component";
import s from "../../Form-sass/FormStyle.module.scss";
import { InputComponent } from "../../Input-component/Input-component";
import { emailValidate, passwordValidate } from "../../Form-validation/FormValidate.component";

const Login = () => {
  type ValidateObject = {
    isError: boolean;
    errorMessage: string | null;
  };

  const [isDataValidate, setIsDataValidate] = useState<boolean>(false);
  const [isButtonCliked, setIsButtonCliked] = useState<boolean>(false);

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

  const buttonSubmitHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    emailValidate(email, emailElement, setEmailError);
    passwordValidate(password, passwordElement, setPasswordError);

    setIsButtonCliked(true);
  };

  useEffect(() => {
    if (isButtonCliked) {
      if (!passwordError.isError && !emailError.isError) {
        setIsDataValidate(true);
      } else {
        setIsDataValidate(false);
      }
    }
  }, [passwordError, emailError, isButtonCliked]);

  return (
    <>
      {isDataValidate ? (
        <Navigate to="/dashboard" replace={true} />
      ) : (
        <FormWrapper
          title="Login to "
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
      )}
    </>
  );
};

export default Login;
