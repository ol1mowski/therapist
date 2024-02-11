import s from "../../Form-sass/FormStyle.module.scss";
import { FormWrapper } from "../../FormWrapper-component/FormWrapper.component";
import { type MouseEvent, type RefObject } from "react";

type LoginBody = {
  emailError: { isError: boolean; errorMessage: string | null };
  email: string;
  emailElement: RefObject<HTMLInputElement>;
  passwordError: { isError: boolean; errorMessage: string | null };
  password: string;
  setPassword: (value: string) => void;
  passwordElement: RefObject<HTMLInputElement>;
  isButtonClicked: number;
  isDataValidate: boolean;
  buttonSubmitHandler: (e: MouseEvent<HTMLButtonElement>) => void;
  emailOnchangeHandler: (e: any) => void;
  passwordOnchangeHandler: (e: any) => void;
};

const LoginBody = ({
  emailError,
  email,
  emailOnchangeHandler,
  passwordOnchangeHandler,
  emailElement,
  password,
  passwordElement,
  passwordError,
  isButtonClicked,
  isDataValidate,
  buttonSubmitHandler,
}: LoginBody) => {


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
            Enter your email
          </label>
          <input
            ref={emailElement}
            value={email}
            onChange={(e) => emailOnchangeHandler(e)}
            className={
              s.loginContainer__wrapper__loginFormContainer__form__inputsWrapper__input
            }
            type="text"
            name="email"
            id="email"
          />
          {emailError.isError ? (
            <p className={s.unvalid__message}>{emailError.errorMessage}</p>
          ) : null}
        </div>
        <div
          className={
            s.loginContainer__wrapper__loginFormContainer__form__inputsWrapper__inputWrapper
          }
        >
          <label
            className={
              s.loginContainer__wrapper__loginFormContainer__form__inputsWrapper__label
            }
            htmlFor="passowrd"
          >
            Enter your password
          </label>
          <input
            ref={passwordElement}
            value={password}
            onChange={(e) => passwordOnchangeHandler(e)}
            className={
              s.loginContainer__wrapper__loginFormContainer__form__inputsWrapper__input
            }
            type="password"
            name="password"
            id="password"
          />
          {passwordError.isError ? (
            <p className={s.unvalid__message}>{passwordError.errorMessage}</p>
          ) : null}
        </div>
      </div>
      {!isDataValidate &&
      isButtonClicked % 2 !== 0 &&
      emailError.errorMessage === null &&
      passwordError.errorMessage === null ? (
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
