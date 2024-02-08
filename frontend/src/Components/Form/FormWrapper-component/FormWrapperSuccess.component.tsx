import s from "../Form-sass/FormStyle.module.scss";
import { type ReactNode } from "react";

type FormContainerProps = {
  title: string;
  children: ReactNode;
};

const FormWrapperSuccess = ({ title, children }: FormContainerProps) => {
  return (
    <section className={s.loginContainer__wrapper__loginFormContainer__form}>
      <h3 className={s.loginContainer__wrapper__loginFormContainer__header}>
        {title} {""}
        <span
          className={
            s.loginContainer__wrapper__loginFormContainer__header__alice
          }
        >
          Alice
        </span>{" "}
        account
      </h3>

      {children}
    </section>
  );
};

export default FormWrapperSuccess;