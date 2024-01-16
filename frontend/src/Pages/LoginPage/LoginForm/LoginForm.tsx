import s from "../LoginPage.module.scss";

import img from "../../../assets/alice.webp";
import { FormComponent } from "../../../Components/Form/Form-component";

export type LoginFormProps = {
  email: string;
  password: string;
  setPassword: (value: string) => void;
  setEmail: (value: string) => void;
};

const LoginForm = ({
  email,
  setEmail,
  password,
  setPassword,
}: LoginFormProps) => {


  return (
    <section className={s.loginContainer}>
      <div className={s.loginContainer__wrapper}>
        <div className={s.loginContainer__wrapper__loginFormContainer}>
         <FormComponent email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
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
