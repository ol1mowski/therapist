import s from "../../Form-sass/FormStyle.module.scss";
import { FormWrapper } from "../../FormWrapper-component/FormWrapper.component";
import { type ChangeEvent, type MouseEvent, type RefObject } from "react";
import { InputComponent } from "../../Input-component/Input-component";

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
  emailOnchangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  passwordOnchangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  nameOnchangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
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
         <InputComponent
          labelTitle="Enter your name"
          inputType="text"
          name="name"
          elementValue={name}
          elementError={nameError}
          hrefToElement={nameElement}
          onchangeHandler={nameOnchangeHandler}
        />


        <InputComponent
          labelTitle="Enter your email"
          inputType="text"
          name="email"
          elementValue={email}
          elementError={emailError}
          hrefToElement={emailElement}
          onchangeHandler={emailOnchangeHandler}
        />

        <InputComponent
          labelTitle="Enter your password"
          inputType="password"
          name="password"
          elementValue={password}
          elementError={passwordError}
          hrefToElement={passwordElement}
          onchangeHandler={passwordOnchangeHandler}
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

export default SignupBody;
