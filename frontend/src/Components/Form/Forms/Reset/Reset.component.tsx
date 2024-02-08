import { MouseEvent, useEffect, useRef, useState } from "react";
import { FormWrapper } from "../../FormWrapper-component/FormWrapper.component";
import s from "../../Form-sass/FormStyle.module.scss";
import { InputComponent } from "../../Input-component/Input-component";
import { ResetSecondStep } from "./ResetSecondStep/ResetSecondStep.component";
import { emailValidate } from "../../Form-validation/FormValidate.component";

const Reset = () => {
  type ValidateObject = {
    isError: boolean;
    errorMessage: string | null;
  };

  const emailElement = useRef<HTMLInputElement>(null);
  const [check, setCheck] = useState<boolean>(false);
  const [next, setNext] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<ValidateObject>({
    isError: false,
    errorMessage: null,
  });

  const buttonSubmitHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    emailValidate(email, emailElement, setEmailError);
    setCheck(true);
  };

  useEffect(() => {
    if (check) {
      if (!emailError.isError) {
        setNext(true);
        //http
      }
    }
  }, [email, emailError]);

  return (
    <>
      {!next ? (
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
      ) : (
        <ResetSecondStep />
      )}
    </>
  );
};


export default Reset;