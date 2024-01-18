
import s from "./LoginPage.module.scss";

import img from "../../assets/alice.webp";
import { Login } from "../../Components/Form/Forms/Login/Login.component";
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';
import { Signup } from "../../Components/Form/Forms/Singup/Singup";
import { Reset } from "../../Components/Form/Forms/Reset/Reset.component";

const LoginPage = () => {
  const { id } = useParams();

  const [form, setForm] = useState<string | undefined>(undefined);

  useEffect(() => {

    setForm(id)
  
  }, [id]);

  return (
    <section className={s.loginContainer}>
      <div className={s.loginContainer__wrapper}>
        <div className={s.loginContainer__wrapper__loginFormContainer}>
           { form === 'login' && <Login /> }
           { form === 'signup' && <Signup /> }
           { form === 'reset' && <Reset /> }
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
