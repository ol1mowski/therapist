import s from "../../Form-sass/FormStyle.module.scss";
import { FormWrapper } from "../../FormWrapper-component/FormWrapper.component";
import { type MouseEvent, type RefObject } from "react";
import { InputComponent } from "../../Input-component/Input-component";

type ResetBodyProps = {
  emailError: { isError: boolean; errorMessage: string | null };
  email: string;
  setEmail: (value: string) => void;
  emailElement: RefObject<HTMLInputElement>;
  emailOnchangeHandler: (e: any) => void;
  buttonSubmitHandler: (e: MouseEvent<HTMLButtonElement>) => void;
};

const ResetBody = ({
  emailError,
  email,
  emailOnchangeHandler,
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
          labelTitle="Enter your email"
          inputType="text"
          name="email"
          elementValue={email}
          elementError={emailError}
          hrefToElement={emailElement}
          onchangeHandler={emailOnchangeHandler}
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
