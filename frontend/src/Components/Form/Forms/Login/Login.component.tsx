import { useState } from 'react';
import { FormWrapper } from '../../FormWrapper-component/FormWrapper.component';

import s from '../../Form-sass/FormStyle.module.scss';
import { InputComponent } from '../../Input-component/Input-component';

export const Login = () => {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <FormWrapper
            title="Create new"
            firstFeature="Do you forgot your password ?"
            firstFeatureLink="/form/reset"
            secondFeature="Create new account"
            secondFeatureLink="/link/singup"
          >
            <div
              className={
                s.loginContainer__wrapper__loginFormContainer__form__inputsWrapper
              }
            >
              <div
                className={
                  s.loginContainer__wrapper__loginFormContainer__form__inputsWrapper__inputWrapper
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
                <InputComponent
                  inputType={"text"}
                  name={"email"}
                  id={"email"}
                  element={email}
                  setElement={setEmail}
                />
              </div>{" "}
              <div
                className={
                  s.loginContainer__wrapper__loginFormContainer__form__inputsWrapper__inputWrapper
                }
              >
                <label
                  className={
                    s.loginContainer__wrapper__loginFormContainer__form__inputsWrapper__label
                  }
                  htmlFor="password"
                >
                  Enter your password:
                </label>
                <InputComponent
                  inputType={"password"}
                  name={"password"}
                  id={"password"}
                  element={password}
                  setElement={setPassword}
                />
              </div>
            </div>
          </FormWrapper>
  )
}
