import { useEffect, useRef, useState, type MouseEvent } from "react";
import { Navigate } from "react-router-dom";
import {
  emailValidate,
  passwordValidate,
} from "../../Form-validation/FormValidate.component";
import LoginBody from "./LoginBody.component";

const Login = () => {
  type ValidateObject = {
    isError: boolean;
    errorMessage: string | null;
  };

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

  const buttonSubmitHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    emailValidate(email, emailElement, setEmailError);
    passwordValidate(password, passwordElement, setPasswordError);

    setIsButtonCliked(true);
  };

  useEffect(() => {
    if (isButtonCliked) {
      if (!passwordError.isError && !emailError.isError) {
        setIsDataValidate(true);
      } else {
        setIsDataValidate(false);
      }
    }
  }, [passwordError, emailError, isButtonCliked]);

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
