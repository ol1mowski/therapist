import s from "../LoginPage.module.scss";
import { type RefObject } from "react";

import img from "../../../assets/alice.webp";
import { FormComponent } from "../../../Components/Form/Form-component";

type LoginFormProps = {
  email: string;
  password: string;
  isValidateEmail: boolean;
  errorInfoEmail: string;
  emailElement: RefObject<HTMLInputElement>;
  setPassword: (value: string) => void;
  setEmail: (value: string) => void;
  loginFormValidation: (value: Event) => void;
};

const LoginForm = ({
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
    <section className={s.loginContainer}>
      <div className={s.loginContainer__wrapper}>
        <div className={s.loginContainer__wrapper__loginFormContainer}>
         <FormComponent email={email} setEmail={setEmail} password={password} setPassword={setPassword} loginFormValidation={loginFormValidation} isValidateEmail={isValidateEmail} errorInfoEmail={errorInfoEmail} emailElement={emailElement}/>
        </div>
      </div>

      <div className={s.loginContainer__wrapper}>
        <img
          className={s.loginContainer__wrapper__img}
          src={img}
          alt="Therapiest with client photo"
        />
      </div>
    </section>
  );
};

export default LoginForm;
