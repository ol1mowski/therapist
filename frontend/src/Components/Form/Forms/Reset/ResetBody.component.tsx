import s from "../../Form-sass/FormStyle.module.scss";
import { FormWrapper } from "../../FormWrapper-component/FormWrapper.component";
import { InputComponent } from "../../Input-component/Input-component";
import { type MouseEvent, type RefObject } from "react";

type ResetBodyProps = {
  emailError: { isError: boolean; errorMessage: string | null };
  email: string;
  setEmail: (value: string) => void;
  emailElement: RefObject<HTMLInputElement>;
  buttonSubmitHandler: (e: MouseEvent<HTMLButtonElement>) => void;
};

const ResetBody = ({
  emailError,
  email,
  setEmail,
  emailElement,
  buttonSubmitHandler,
}: ResetBodyProps) => {
  return (
    <FormWrapper
      title="Reset passowrd to "
      firstFeature="Login to your accounr"
      firstFeatureLink="/form/login"
      secondFeature="Create new account"
      secondFeatureLink="/form/signup"
      buttonName="Next Step"
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
      </div>
      <div className={s.button}>
        <button
          onClick={(e) => buttonSubmitHandler(e)}
          className={s.button__btn_small}
        >
          Next step
        </button>
      </div>
    </FormWrapper>
  );
};

export default ResetBody;
