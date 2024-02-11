import s from "../../Form-sass/FormStyle.module.scss";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { Navigate } from "react-router-dom";
import {
  emailValidate,
  loginPasswordValidate,
} from "../../Form-validation/FormValidate.component";
import LoginBody from "./LoginBody.component";
import { fetchElements } from "../../../../utill/http";

const Login = () => {
  type FetchUserObject = {
    id?: string;
    email?: string;
    password?: string;
  };

  type ValidateObject = {
    isError: boolean;
    errorMessage: string | null;
  };

  const [fetchUsers, setFetchUsers] = useState<Array<FetchUserObject>>([]);

  const [isDataValidate, setIsDataValidate] = useState<boolean>(false);
  const [isButtonClicked, setIsButtonClicked] = useState<number>(0);

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
    fetchElements().then((user) => setFetchUsers(user));
    const emailUsersInDb = fetchUsers.map((user) => user.email);
    const passwordUsersInDb = fetchUsers.map((user) => user.password);

    const emailIndex = emailUsersInDb.indexOf(email);

    if (emailIndex !== -1) {
      if (passwordUsersInDb[emailIndex] === password) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  const buttonSubmitHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsButtonClicked(prev => prev + 1);
    
  };


  useEffect(() => {
    
    if (isButtonClicked !== 0) {
      if (!passwordError.isError && !emailError.isError) {
        checkUser(email, password).then((res) => {
          if (res) {
            setIsDataValidate(true);
            emailElement.current?.classList.remove(s.unvalid);
            passwordElement.current?.classList.remove(s.unvalid);
          } else {
            setIsDataValidate(false);
            passwordElement.current?.classList.add(s.unvalid);
            emailElement.current?.classList.add(s.unvalid);
          }
        });
      }
      // emailValidate(email, emailElement, setEmailError);
      // loginPasswordValidate(password, passwordElement, setPasswordError);
    }
  }, [passwordError, emailError, isButtonClicked, checkUser, isDataValidate]);

  const emailOnchangeHandler = (e: any) => {
    const newValue = e.target.value;
    setEmail(newValue); 

    emailValidate(newValue, emailElement, setEmailError);
  };
  

  return (
    <>
        <LoginBody
          isDataValidate={isDataValidate}
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
        />
      { isDataValidate ? <Navigate to="/dashboard" replace={true} /> : null }
    </>
  );
};

export default Login;
