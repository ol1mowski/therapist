import { useEffect, useRef, useState, type RefObject } from "react";
import LoginForm from "./LoginForm/LoginForm";

import s from "./LoginPage.module.scss";

const LoginPage = () => {
  const emailInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isValidateEmail, setIsValidateEmail] = useState<boolean>(false);
  const [errorInfoEmail, setErrorInfoEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isValidatePassword, setIsValidatePassword] = useState<boolean>(false);
  const [errorInfoPassword, setErrorInfoPassword] = useState<string>("");
  const [isValidateName, setIsValidateName] = useState<boolean>(false);
  const [errorInfoName, setErrorInfoName] = useState<string>('');

  const validateEmail = (email: string): boolean => {
    return email.length >= 8 && email.includes("@");
  };

  const validatePassword = (password: string): boolean => {
    return password.length >= 6; // Add your password validation logic here
  };

  const validateName = (name: string): boolean => {
    return name.length >= 3;
  };

  const loginFormValidate = () => {
    // Name validation
    if (validateName(name)) {
      setIsValidateName(true);
      setErrorInfoName("");
    } else {
      setIsValidateName(false);
      setErrorInfoName("Name must be at least 3 characters long");
    }

    // Email validation
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

    // Password validation
    if (validatePassword(password)) {
      setIsValidatePassword(true);
      setErrorInfoPassword("");
      if (passwordInput.current) {
        passwordInput.current.classList.remove(s.unvalid);
      }
    } else {
      setIsValidatePassword(false);
      setErrorInfoPassword("Password must be at least 6 characters long"); // Modify this message as needed

      if (passwordInput.current) {
        passwordInput.current.classList.add(s.unvalid);
      }
    }
  };

  useEffect(() => {
    
    const debounceTimer = setTimeout(() => {
      loginFormValidate();
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [email, password, name]);

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
