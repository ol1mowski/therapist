import { useState } from "react";
import LoginForm from "./LoginForm/LoginForm";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");

  const [password, setPassword] = useState<string>("");

  const loginFormValidate = (e: Event) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <LoginForm
      loginFormValidation={(e: Event) => loginFormValidate(e)}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
    />
  );
};

export default LoginPage;
