import { type ChangeEvent, type MouseEvent, useEffect, useRef, useState } from "react";
import SignupSuccess from "./Singup-Success-component/SignupSuccess.component";
import {
  emailValidate,
  nameValidate,
  passwordValidate,
} from "../../Form-validation/FormValidate.component";
import SignupBody from "./SingupBody.component";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../../../utill/firebase";

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
        try {
          createUserWithEmailAndPassword(auth, email, password).then((user) =>
            console.log(user)
          );
          setIsDataValidate(true);
        } catch (error) {
          console.error(error);
        }
      } else {
        setIsDataValidate(false);
      }
    }
  }, [passwordError, emailError, isButtonClicked]);

  const emailOnchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setEmail(newValue);

    emailValidate(newValue, emailElement, setEmailError);
  };

  const passwordOnchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setPassword(newValue);

    passwordValidate(newValue, passwordElement, setPasswordError);
  };

  const nameOnchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setName(newValue);

    nameValidate(newValue, nameElement, setNameError);
  };
  return (
    <>
      {isDataValidate ? (
        <SignupSuccess />
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
          emailOnchangeHandler={emailOnchangeHandler}
          passwordOnchangeHandler={passwordOnchangeHandler}
          nameOnchangeHandler={nameOnchangeHandler}
          buttonSubmitHandler={buttonSubmitHandler}
        />
      )}
    </>
  );
};

export default Signup;
