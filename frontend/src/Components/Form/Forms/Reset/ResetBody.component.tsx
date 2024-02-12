import s from "../../Form-sass/FormStyle.module.scss";
import { FormWrapper } from "../../FormWrapper-component/FormWrapper.component";
import { type MouseEvent, type RefObject } from "react";

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
