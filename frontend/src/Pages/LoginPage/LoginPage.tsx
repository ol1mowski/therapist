import { useEffect, useState } from "react";

import s from './LoginPage.module.scss';

import img from "../../assets/alice.webp";
import { FormComponent } from '../../Components/Form/Form-component.component';


const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    console.log(email, password);
    
  }, [email, password]);

  return (
    <section className={s.loginContainer}>
      <div className={s.loginContainer__wrapper}>
        <div className={s.loginContainer__wrapper__loginFormContainer}>
         <FormComponent email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
        </div>
      </div>

      <div className={s.loginContainer__wrapper_img}>
        <img
          className={s.loginContainer__wrapper__img}
          src={img}
          alt="Therapiest with client photo"
        />
      </div>
    </section>
  );
};

export default LoginPage;
