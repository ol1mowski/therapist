import s from "./Form-component.module.scss";
import { Form } from "react-router-dom";
import ButtonComponent from "../Button-component/Button-component";
import { InputComponent } from "./Input-component/Input-component";
import { useState, type RefObject } from "react";

type FormContainerProps = {
  email: string;
  password: string;
  isValidateEmail: boolean;
  errorInfoEmail: string;
  emailElement: RefObject<HTMLInputElement>;
  passwordElement: RefObject<HTMLInputElement>;
  setPassword: (value: string) => void;
  setEmail: (value: string) => void;
  loginFormValidation: (value: Event) => void;
  name: string;
  setName: (value: string) => void;
};

export const FormComponent = ({
  email,
  setEmail,
  password,
  setPassword,
  loginFormValidation,
  isValidateEmail,
  errorInfoEmail,
  emailElement,
  passwordElement,
  name,
  setName,
}: FormContainerProps) => {
  const [singup, setSingup] = useState<boolean>(false);


  const changeFormHandler = () => {
    return setSingup(prev => !prev);
  };

  return (
    <Form
      method={"post"}
      onSubmit={loginFormValidation}
      className={s.loginContainer__wrapper__loginFormContainer__form}
    >
      {singup ? (
        <h3 className={s.loginContainer__wrapper__loginFormContainer__header}>
          Create new{" "}
          <span
            className={
              s.loginContainer__wrapper__loginFormContainer__header__alice
            }
          >
            Alice
          </span>{" "}
          account
        </h3>
      ) : (
        <h3 className={s.loginContainer__wrapper__loginFormContainer__header}>
          Log in to{" "}
          <span
            className={
              s.loginContainer__wrapper__loginFormContainer__header__alice
            }
          >
            Alice
          </span>{" "}
          account
        </h3>
      )}

      <div
        className={
          s.loginContainer__wrapper__loginFormContainer__form__inputsWrapper
        }
      >
        { singup ?  <> <div className={s.loginContainer__wrapper__loginFormContainer__form__inputsWrapper__inputWrapper}><label
          className={
            s.loginContainer__wrapper__loginFormContainer__form__inputsWrapper__label
          }
          htmlFor="name"
        >
          Enter your name:
        </label>
        <InputComponent
          inputType={"text"}
          name={"name"}
          id={"name"}
          element={name}
          setElement={setName}
          hrefToElement={emailElement}
        />{" "} </div> </>: null}
        
        <div className={s.loginContainer__wrapper__loginFormContainer__form__inputsWrapper__inputWrapper}>
        <label
          className={
            s.loginContainer__wrapper__loginFormContainer__form__inputsWrapper__label
          }
          htmlFor="email"
        >
          Enter your email:
        </label>
        <InputComponent
          inputType={"text"}
          name={"email"}
          id={"email"}
          element={email}
          setElement={setEmail}
          hrefToElement={emailElement}
        /></div>{" "}
        {!isValidateEmail ? (
          <p className={s.errorInfo}>{errorInfoEmail}</p>
        ) : null}
        <div className={s.loginContainer__wrapper__loginFormContainer__form__inputsWrapper__inputWrapper}>
        <label
          className={
            s.loginContainer__wrapper__loginFormContainer__form__inputsWrapper__label
          }
          htmlFor="password"
        >
          Enter your password:
        </label>
        <InputComponent
          inputType={"password"}
          name={"password"}
          id={"password"}
          element={password}
          setElement={setPassword}
          hrefToElement={passwordElement}
        />
        </div>
      </div>

      <ButtonComponent small={true}>Login</ButtonComponent>

      <div
        className={s.loginContainer__wrapper__loginFormContainer__form__other}
      >
        <p
          className={
            s.loginContainer__wrapper__loginFormContainer__form__other__content
          }
        >
          Do you forgot your password ?
        </p>
        { !singup ?   <p
          onClick={changeFormHandler}
          className={
            s.loginContainer__wrapper__loginFormContainer__form__other__content
          }
        >
          Create new account
        </p> :  <p
          onClick={changeFormHandler}
          className={
            s.loginContainer__wrapper__loginFormContainer__form__other__content
          }
        >
          Login to Alice account
        </p>}
       
      </div>
    </Form>
  );
};
