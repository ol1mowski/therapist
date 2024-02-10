import { useEffect, useRef, useState, type MouseEvent } from "react";
import { Navigate } from "react-router-dom";
import {
  emailValidate,
  passwordValidate,
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
  const [isButtonCliked, setIsButtonCliked] = useState<boolean>(false);

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
    emailValidate(email, emailElement, setEmailError);
    passwordValidate(password, passwordElement, setPasswordError);
    setIsButtonCliked(true);
  };

  useEffect(() => {
    if (isButtonCliked) {
      if (!passwordError.isError && !emailError.isError) {
        checkUser(email, password).then((res) => {
          if (res) {
            setIsDataValidate(true);
          } else {
            setIsDataValidate(false);
          }
        });
      } else {
        setIsDataValidate(false);
      }
    }
  }, [passwordError, emailError, isButtonCliked, checkUser]);

  return (
    <>
      {isDataValidate ? (
        <Navigate to="/dashboard" replace={true} />
      ) : (
        <LoginBody
          email={email}
          emailElement={emailElement}
          emailError={emailError}
          setEmail={setEmail}
          password={password}
          passwordElement={passwordElement}
          passwordError={passwordError}
          setPassword={setPassword}
          buttonSubmitHandler={buttonSubmitHandler}
        />
      )}
    </>
  );
};

export default Login;
