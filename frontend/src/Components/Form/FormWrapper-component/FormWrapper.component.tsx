import s from "../Form-sass/FormStyle.module.scss";
import { Form } from "react-router-dom";
import { Link } from "react-router-dom";
import ButtonComponent from "../../Button-component/Button-component";
import { type ReactNode } from "react";

type FormContainerProps = {
  title: string;
  firstFeature: string;
  firstFeatureLink: string;
  secondFeature: string;
  secondFeatureLink: string;
  children: ReactNode;
  buttonName: string;
};

export const FormWrapper = ({ title, firstFeature, firstFeatureLink, secondFeature, secondFeatureLink, children, buttonName }: FormContainerProps) => {
  return (
    <Form
      method={"post"}
      className={s.loginContainer__wrapper__loginFormContainer__form}
    >
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

      { children }

      <ButtonComponent small={true}>{ buttonName }</ButtonComponent>

      <div
        className={s.loginContainer__wrapper__loginFormContainer__form__other}
      >
        <Link
          to={ firstFeatureLink }
          className={
            s.loginContainer__wrapper__loginFormContainer__form__other__content
          }
        >
          { firstFeature }
        </Link>
        <Link
          to={secondFeatureLink}
          className={
            s.loginContainer__wrapper__loginFormContainer__form__other__content
          }
        >
          { secondFeature }
        </Link>
      </div>
    </Form>
  );
};
