import { MouseEvent, useRef, useState } from "react";
import { FormWrapper } from "../../FormWrapper-component/FormWrapper.component";
import s from "../../Form-sass/FormStyle.module.scss";
import { InputComponent } from "../../Input-component/Input-component";

export const Reset = () => {
  type ValidateObject = {
    isError: boolean;
    errorMessage: string | null;
  };

  const emailElement = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<ValidateObject>({
    isError: false,
    errorMessage: null,
  });

  const emailValidate = (values: string) => {
    if (!values) {
      setEmailError({ isError: true, errorMessage: "required" });
      emailElement.current?.classList.add(s.unvalid);
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values)) {
      setEmailError({ isError: true, errorMessage: "invalid email" });
      emailElement.current?.classList.add(s.unvalid);
    } else {
      setEmailError({ isError: false, errorMessage: null });

      if (emailElement.current?.classList) {
        emailElement.current?.classList.remove(s.unvalid);
      }
    }
  };

  const buttonSubmitHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    emailValidate(email);
    emailError.isError ? console.log(emailError.errorMessage) : null;
  };

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
