import InvalidLoginData from "../../../../Errors/InvalidLoginData/InvalidLoginData";
import s from "../../Form-sass/FormStyle.module.scss";
import { FormWrapper } from "../../FormWrapper-component/FormWrapper.component";
import { type ChangeEvent, type MouseEvent, type RefObject } from "react";
import { InputComponent } from "../../Input-component/Input-component";

type LoginBody = {
  emailError: { isError: boolean; errorMessage: string | null };
  email: string;
  emailElement: RefObject<HTMLInputElement>;
  passwordError: { isError: boolean; errorMessage: string | null };
  password: string;
  setPassword: (value: string) => void;
  passwordElement: RefObject<HTMLInputElement>;
  isButtonClicked: boolean;
  formErrors: boolean;
  buttonSubmitHandler: (e: MouseEvent<HTMLButtonElement>) => void;
  emailOnchangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  passwordOnchangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
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
  formErrors,
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
      {!formErrors &&
      isButtonClicked &&
      emailError.errorMessage === null &&
      passwordError.errorMessage === null ? (
        <InvalidLoginData style={s} />
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
