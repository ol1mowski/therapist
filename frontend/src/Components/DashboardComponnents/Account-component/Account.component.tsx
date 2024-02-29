import { Form } from "react-router-dom";

import s from "../Dashboard-style/Dashboard.component.module.scss";

const Account = () => {
  return (
    <main className={s.accountContainer}>
      <header className={s.accountContainer__header}>
        <h2 className={s.accountContainer__header__title}>Change Your Data</h2>
      </header>
      <section className={s.accountContainer__dataWrapper}>
        <section className={s.accountContainer__dataWrapper__topSide}>
          <div className={s.accountContainer__dataWrapper__topSide__item}>
            <p
              className={
                s.accountContainer__dataWrapper__topSide__item__content
              }
            >
              Your name: Alice
            </p>
          </div>
          <div className={s.accountContainer__dataWrapper__topSide__item}>
            <p
              className={
                s.accountContainer__dataWrapper__topSide__item__content
              }
            >
              Your email: alice@alice.pl
            </p>
          </div>
        </section>
        <Form className={s.accountContainer__inputWrapper}>
          <label
            className={s.accountContainer__inputWrapper__label}
            htmlFor={"password"}
          >
            Change your password
          </label>
          <div
            className={
              s.loginContainer__wrapper__loginFormContainer__form__inputsWrapper__inputWrapper__wrapper
            }
          >
            <input
              className={s.accountContainer__inputWrapper__input}
              type="password"
              name="password"
            />
          </div>
          <div  className={s.accountContainer__button}>

          <button className={s.accountContainer__button__btn}>Change</button>
          </div>
        </Form>
      </section>
    </main>
  );
};

export default Account;
