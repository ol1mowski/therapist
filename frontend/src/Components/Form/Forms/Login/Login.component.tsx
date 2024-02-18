import s from "../../Form-sass/FormStyle.module.scss";

import { type ChangeEvent, useRef, useState, type MouseEvent } from "react";
import { Navigate } from "react-router-dom";
import {
  emailValidate,
  loginPasswordValidate,
} from "../../Form-validation/FormValidate.component";
import LoginBody from "./LoginBody.component";
import { fetchElements } from "../../../../utill/http";

const Login = () => {
  type ValidateObject = {
    isError: boolean;
    errorMessage: string | null;
  };

  const [isDataFetched, setIsDataFetched] = useState<boolean>(true);

  const [formErrors, setFormErrors] = useState<boolean>(true);
  const [isDataValidate, setIsDataValidate] = useState<boolean>(false);
  const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false);

  const emailElement = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<ValidateObject>({
    isError: false,
    errorMessage: null,
  });

  const passwordElement = useRef<HTMLInputElement>(null);
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<ValidateObject>({
    isError: false,
    errorMessage: null,
  });

  async function checkUser(email: string, password: string) {
    setIsDataFetched(false);
    return fetchElements().then((user: Array<Object>) => {
      const emailUsersInDb = user.map((user) => user.email);
      const passwordUsersInDb = user.map((user) => user.password);

      const emailIndex = emailUsersInDb.indexOf(email);

      setIsDataFetched(true);

      if (emailIndex !== -1) {
        if (passwordUsersInDb[emailIndex] === password) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    });
  }

  const buttonSubmitHandler = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsButtonClicked(true);

    emailValidate(email, emailElement, setEmailError);
    loginPasswordValidate(password, passwordElement, setPasswordError);

    if (!passwordError.isError && !emailError.isError) {
      try {
        const res = await checkUser(email, password);
        if (res) {
          setIsDataValidate(true);
          emailElement.current?.classList.remove(s.unvalid);
          passwordElement.current?.classList.remove(s.unvalid);
        } else {
          setIsDataValidate(false);
          setFormErrors(false);

          passwordElement.current?.classList.add(s.unvalid);
          emailElement.current?.classList.add(s.unvalid);
        }
      } catch (error) {
        console.error("Wystąpił błąd podczas weryfikacji użytkownika:", error);
      }
    }
  };

  const emailOnchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setEmail(newValue);

    emailValidate(newValue, emailElement, setEmailError);
  };

  const passwordOnchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setPassword(newValue);
    setFormErrors(true);

    loginPasswordValidate(newValue, passwordElement, setPasswordError);
  };

  return (
    <>
      <LoginBody
        isDataFetched={isDataFetched}
        formErrors={formErrors}
        isButtonClicked={isButtonClicked}
        email={email}
        emailElement={emailElement}
        emailError={emailError}
        password={password}
        passwordElement={passwordElement}
        passwordError={passwordError}
        setPassword={setPassword}
        buttonSubmitHandler={buttonSubmitHandler}
        emailOnchangeHandler={emailOnchangeHandler}
        passwordOnchangeHandler={passwordOnchangeHandler}
      />
      {isDataValidate ? <Navigate to="/dashboard" replace={true} /> : null}
    </>
  );
};

export default Login;
