import { MouseEvent, useEffect, useRef, useState } from "react";
import SingupSuccess from "./Singup-Success-component/SingupSuccess.component";
import {
  emailValidate,
  nameValidate,
  passwordValidate,
} from "../../Form-validation/FormValidate.component";
import SignupBody from "./SingupBody.component";

export type ValidateObject = {
  isError: boolean;
  errorMessage: string | null;
};

const Signup = () => {
  const [isDataValidate, setIsDataValidate] = useState<boolean>(false);
  const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false);

  const [emailError, setEmailError] = useState<ValidateObject>({
    isError: false,
    errorMessage: null,
  });

  const [passwordError, setPasswordError] = useState<ValidateObject>({
    isError: false,
    errorMessage: null,
  });

  const [nameError, setNameError] = useState<ValidateObject>({
    isError: false,
    errorMessage: null,
  });

  const [email, setEmail] = useState<string>("");
  const emailElement = useRef<HTMLInputElement>(null);

  const [password, setPassword] = useState<string>("");
  const passwordElement = useRef<HTMLInputElement>(null);

  const [name, setName] = useState<string>("");
  const nameElement = useRef<HTMLInputElement>(null);

  const buttonSubmitHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    emailValidate(email, emailElement, setEmailError);
    passwordValidate(password, passwordElement, setPasswordError);
    nameValidate(name, nameElement, setNameError);
    setIsButtonClicked(true);
  };

  useEffect(() => {
    if (isButtonClicked) {
      if (!passwordError.isError && !emailError.isError && !nameError.isError) {
        setIsDataValidate(true);
      } else {
        setIsDataValidate(false);
      }
    }
  }, [passwordError, emailError, isButtonClicked]);

  return (
    <>
      {isDataValidate ? (
        <SingupSuccess />
      ) : (
        <SignupBody
          email={email}
          emailElement={emailElement}
          emailError={emailError}
          setEmail={setEmail}
          password={password}
          passwordElement={passwordElement}
          passwordError={passwordError}
          setPassword={setPassword}
          name={name}
          nameElement={nameElement}
          nameError={nameError}
          setName={setName}
          buttonSubmitHandler={buttonSubmitHandler}
        />
      )}
    </>
  );
};

export default Signup;
