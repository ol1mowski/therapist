
import s from "./LoginPage.module.scss";

import img from "../../assets/alice.webp";
import { Login } from "../../Components/Form/Forms/Login/Login.component";
// import { useParams } from "react-router-dom";

const LoginPage = () => {
  // const { id } = useParams();


  return (
    <section className={s.loginContainer}>
      <div className={s.loginContainer__wrapper}>
        <div className={s.loginContainer__wrapper__loginFormContainer}>
          <Login />
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
