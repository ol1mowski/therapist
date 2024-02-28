import { Form } from "react-router-dom";

import s from "../../../../Components/Form/Form-sass/FormStyle.module.scss";

const Account = () => {
  return (
    <main>
      <Form>
        <section>
          <label
            className={
              s.loginContainer__wrapper__loginFormContainer__form__inputsWrapper__inputWrapper__label
            }
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
              className={
                s.loginContainer__wrapper__loginFormContainer__form__inputsWrapper__inputWrapper__input
              }
              type="password"
              name="password"
            />
          </div>
          <button className={s.button__btn_small}>Change</button>
        </section>
      </Form>
    </main>
  );
};

export default Account;
