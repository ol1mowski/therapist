import s from "../../Form-sass/FormStyle.module.scss";
import { FormWrapper } from "../../FormWrapper-component/FormWrapper.component";
import { InputComponent } from "../../Input-component/Input-component";
import { type MouseEvent, type RefObject } from "react";

type LoginBody = {
  emailError: { isError: boolean; errorMessage: string | null };
  email: string;
  setEmail: (value: string) => void;
  emailElement: RefObject<HTMLInputElement>;
  passwordError: { isError: boolean; errorMessage: string | null };
  password: string;
  setPassword: (value: string) => void;
  passwordElement: RefObject<HTMLInputElement>;
  isButtonClicked: boolean;
  isDataValidate: boolean;
  buttonSubmitHandler: (e: MouseEvent<HTMLButtonElement>) => void;
};

const LoginBody = ({
  emailError,
  email,
  setEmail,
  emailElement,
  password,
  passwordElement,
  passwordError,
  setPassword,
  isButtonClicked,
  isDataValidate,
  buttonSubmitHandler,
}: LoginBody) => {
  console.log(emailError);
  
  return (
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
      { !isDataValidate && isButtonClicked && emailError.errorMessage === null && passwordError.errorMessage === null ? (
        <div
          className={
            s.loginContainer__wrapper__loginFormContainer__form__loginError
          }
        >
          <p
            className={
              s.loginContainer__wrapper__loginFormContainer__form__loginError__error
            }
          >
            [-] Your email or password is invalid
          </p>
        </div>
      ) : null}

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

export default LoginBody;
