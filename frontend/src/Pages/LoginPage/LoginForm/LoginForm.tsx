import { Form } from "react-router-dom";
import s from "../LoginPage.module.scss";
import Button from "../../../Components/Button/Button";

type LoginFormProps = {
  email: string;
  password: string;
  setPassword: (value: string) => void;
  setEmail: (value: string) => void;
  loginFormValidation: (value: Event) => void;
};

const LoginForm = ({
  email,
  setEmail,
  password,
  setPassword,
  loginFormValidation
}: LoginFormProps) => {
  return (
    <section className={s.loginContainer}>
      <div className={s.loginContainer__wrapper}>
        <div className={s.loginContainer__wrapper__loginFormContainer}>
          <Form onSubmit={loginFormValidation} className={s.loginContainer__wrapper__loginFormContainer__form}>
            <h3
              className={s.loginContainer__wrapper__loginFormContainer__header}
            >
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
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={
                  s.loginContainer__wrapper__loginFormContainer__form__inputsWrapper__input
                }
                type="text"
                name="email"
                id="email"
              />{" "}
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

            <Button small={true}>Login</Button>

            <div
              className={
                s.loginContainer__wrapper__loginFormContainer__form__other
              }
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
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
