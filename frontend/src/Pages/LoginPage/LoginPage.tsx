import { useRef, useState, type RefObject } from "react";
import LoginForm from "./LoginForm/LoginForm";

import s from "./LoginPage.module.scss";

const LoginPage = () => {
  const emailInput: RefObject<HTMLInputElement> =
    useRef<HTMLInputElement>(null);

  const [email, setEmail] = useState<string>("");

  const [isValidateEmail, setIsValidateEmail] = useState<boolean>(false);
  const [errorInfoEmail, setErrorInfoEmail] = useState<string>("");

  const [password, setPassword] = useState<string>("");

  const loginFormValidate = (e: Event) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setIsValidateEmail(true);
      setErrorInfoEmail("");
    } else {
      setIsValidateEmail(false);
      if (email.indexOf("@") === -1) {
        setErrorInfoEmail("Your email address must include a @");
      } else if (email.length < 8) {
        setErrorInfoEmail("Email must be at least 8 characters long");
      }

      if (emailInput.current) {
        emailInput.current.classList.add(s.unvalid);
      }
    }
  };

  const validateEmail = (email: string) => {
    return email.length >= 8 && email.includes("@");
  };

  return (
    <LoginForm
      loginFormValidation={(e: Event) => loginFormValidate(e)}
      email={email}
      isValidateEmail={isValidateEmail}
      errorInfoEmail={errorInfoEmail}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      emailElement={emailInput}
    />
  );
};

export default LoginPage;