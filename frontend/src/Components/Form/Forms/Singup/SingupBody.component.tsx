import s from "../../Form-sass/FormStyle.module.scss";
import { FormWrapper } from "../../FormWrapper-component/FormWrapper.component";
import { InputComponent } from "../../Input-component/Input-component";
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
  buttonSubmitHandler: (e: MouseEvent<HTMLButtonElement>) => void;
};

const SignupBody = ({
  emailError,
  email,
  setEmail,
  emailElement,
  password,
  passwordElement,
  passwordError,
  setPassword,
  nameError,
  name,
  nameElement,
  setName,
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

export default SignupBody;
