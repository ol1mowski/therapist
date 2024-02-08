import s from "../LoginPage.module.scss";

import Login from "../../../Components/Form/Forms/Login/Login.component";
import Signup from "../../../Components/Form/Forms/Singup/Singup.component";
import Reset from '../../../Components/Form/Forms/Reset/Reset.component';

import img from "../../../assets/alice.webp";


type LoginComponentProps = {
    form: string | undefined;
}

const LoginPageComponent = ({ form }: LoginComponentProps) => {
  return (
    <section className={s.loginContainer}>
      <div className={s.loginContainer__wrapper}>
        <div className={s.loginContainer__wrapper__loginFormContainer}>
          {form === "login" && <Login />}
          {form === "signup" && <Signup />}
          {form === "reset" && <Reset />}
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

export default LoginPageComponent;
