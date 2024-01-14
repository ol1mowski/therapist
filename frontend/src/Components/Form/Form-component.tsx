import s from "./Form-component.module.scss";
import { Form } from "react-router-dom";
import ButtonComponent from "../Button-component/Button-component";
import { InputComponent } from "./Input-component/Input-component";
import { LoginFormProps } from "../../Pages/LoginPage/LoginForm/LoginForm";

export const FormComponent = ({
  email,
  setEmail,
  password,
  setPassword,
  loginFormValidation,
  isValidateEmail,
  errorInfoEmail,
  emailElement,
}: LoginFormProps) => {
  return (
    <Form
      method={"post"}
      onSubmit={loginFormValidation}
      className={s.loginContainer__wrapper__loginFormContainer__form}
    >
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

      <div
        className={
          s.loginContainer__wrapper__loginFormContainer__form__inputsWrapper
        }
      >
        <label
          className={
            s.loginContainer__wrapper__loginFormContainer__form__inputsWrapper__label
          }
          htmlFor="email"
        >
          Enter your email:
        </label>
        <InputComponent
          inputType={'text'}
          name={'email'}
          id={'id'}
          email={email}
          setEmail={setEmail}
          emailElement={emailElement}
        />{" "}
        {!isValidateEmail ? (
          <p className={s.errorInfo}>{errorInfoEmail}</p>
        ) : null}
        <br />
        <label
          className={
            s.loginContainer__wrapper__loginFormContainer__form__inputsWrapper__label
          }
          htmlFor="password"
        >
          Enter your password:
        </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={
            s.loginContainer__wrapper__loginFormContainer__form__inputsWrapper__input
          }
          type="password"
          name="password"
          id="password"
        />
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
        <p
          className={
            s.loginContainer__wrapper__loginFormContainer__form__other__content
          }
        >
          Create new account
        </p>
      </div>
    </Form>
  );
};
