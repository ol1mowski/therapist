import { useEffect, useRef, useState, type RefObject } from "react";
import LoginForm from "./LoginForm/LoginForm";

import s from "./LoginPage.module.scss";

const LoginPage = () => {
  const emailInput: RefObject<HTMLInputElement> =
    useRef<HTMLInputElement>(null);

    const passwordInput: RefObject<HTMLInputElement> =
    useRef<HTMLInputElement>(null);

  // const [isValidatePassword, setIsValidatePassword] = useState<boolean>(false);
  // const [errorInfoPassword, setErrorInfoPassword] = useState<string>('');

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>("");
  const [isValidateEmail, setIsValidateEmail] = useState<boolean>(false);
  const [errorInfoEmail, setErrorInfoEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const validateEmail = (email: string) => {
    return email.length >= 8 && email.includes("@");
  };

  const loginFormValidate = () => {

    if (validateEmail(email)) {
      setIsValidateEmail(true);
      setErrorInfoEmail("");
      if (emailInput.current) {
        emailInput.current.classList.remove(s.unvalid);
      }
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

  useEffect(() => {
    if (email.trim() !== "") {
      const debounceTimer = setTimeout(() => {
        loginFormValidate();
      }, 300);

      return () => clearTimeout(debounceTimer);
    }
  }, [email]);

  return (
    <LoginForm
      name={name}
      setName={setName}
      loginFormValidation={loginFormValidate}
      email={email}
      isValidateEmail={isValidateEmail}
      errorInfoEmail={errorInfoEmail}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      emailElement={emailInput}
      passwordElement={passwordInput}
    />
  );
};

export default LoginPage;
