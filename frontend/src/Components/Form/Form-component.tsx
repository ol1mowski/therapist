import s from "./Form-component.module.scss";
import { Form } from "react-router-dom";
import ButtonComponent from "../Button-component/Button-component";
import { InputComponent } from "./Input-component/Input-component";
import FormHeader from "./Form-header-component/FormHeader.component";

type FormContainerProps = {
  email: string;
  password: string;
  setPassword: (value: string) => void;
  setEmail: (value: string) => void;
};

export const FormComponent = ({
  email,
  setEmail,
  password,
  setPassword,
}: FormContainerProps) => {
  return (
    <Form
      method={"post"}
      className={s.loginContainer__wrapper__loginFormContainer__form}
    >
      <FormHeader title={'Create new'}/>

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
            Enter your email:
          </label>
          <InputComponent
            inputType={"text"}
            name={"email"}
            id={"email"}
            element={email}
            setElement={setEmail}
          />
        </div>{" "}
        <div
          className={
            s.loginContainer__wrapper__loginFormContainer__form__inputsWrapper__inputWrapper
          }
        >
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
        <p
          className={
            s.loginContainer__wrapper__loginFormContainer__form__other__content
          }
        >
          Create new account
        </p>
        <p
          className={
            s.loginContainer__wrapper__loginFormContainer__form__other__content
          }
        >
          Login to Alice account
        </p>
      </div>
    </Form>
  );
};
