import s from "../../Form-sass/FormStyle.module.scss";
import { FormWrapper } from "../../FormWrapper-component/FormWrapper.component";
import { type MouseEvent, type RefObject } from "react";

type SignupBodyProps = {
  emailError: { isError: boolean; errorMessage: string | null };
  email: string;
  setEmail: (value: string) => void;
  emailElement: RefObject<HTMLInputElement>;
  passwordError: { isError: boolean; errorMessage: string | null };
  password: string;
  setPassword: (value: string) => void;
  passwordElement: RefObject<HTMLInputElement>;
  nameError: { isError: boolean; errorMessage: string | null };
  name: string;
  setName: (value: string) => void;
  nameElement: RefObject<HTMLInputElement>;
  emailOnchangeHandler: (e: any) => void;
  passwordOnchangeHandler: (e: any) => void;
  nameOnchangeHandler: (e: any) => void;
  buttonSubmitHandler: (e: MouseEvent<HTMLButtonElement>) => void;
};

const SignupBody = ({
  emailError,
  email,
  emailElement,
  password,
  passwordElement,
  passwordError,
  nameError,
  name,
  nameElement,
  emailOnchangeHandler,
  nameOnchangeHandler,
  passwordOnchangeHandler,
  buttonSubmitHandler,
}: SignupBodyProps) => {
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
        htmlFor='name'
      >
       Enter your name
      </label>
      <input
        ref={nameElement}
        value={name}
        onChange={(e) => nameOnchangeHandler(e)}
        className={
          s.loginContainer__wrapper__loginFormContainer__form__inputsWrapper__input
        }
        type='text'
        name='name'
        id='name'
      />
      { nameError.isError ? <p className={s.unvalid__message}>{ nameError.errorMessage }</p> : null}
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
        htmlFor='email'
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
        type='text'
        name='email'
        id='email'
      />
      { emailError.isError ? <p className={s.unvalid__message}>{ emailError.errorMessage }</p> : null}
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
        htmlFor='password'
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
        type='password'
        name='password'
        id='password'
      />
      { passwordError.isError ? <p className={s.unvalid__message}>{ passwordError.errorMessage }</p> : null}
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

export default SignupBody;
