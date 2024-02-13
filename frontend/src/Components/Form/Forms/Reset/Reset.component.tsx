import { type ChangeEvent, type MouseEvent, useEffect, useRef, useState } from "react";
import { ResetSecondStep } from "./ResetSecondStep/ResetSecondStep.component";
import { emailValidate } from "../../Form-validation/FormValidate.component";
import ResetBody from "./ResetBody.component";

const Reset = () => {
  type ValidateObject = {
    isError: boolean;
    errorMessage: string | null;
  };

  const emailElement = useRef<HTMLInputElement>(null);
  const [check, setCheck] = useState<boolean>(false);
  const [next, setNext] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<ValidateObject>({
    isError: true,
    errorMessage: null,
  });

  const buttonSubmitHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    emailValidate(email, emailElement, setEmailError);    
    
    if (!emailError.isError) {
      setCheck(true);
      //http
    }
  };
  

  useEffect(() => {
    if (check) {
      if (!emailError.isError) {
        setNext(true);
        //http
      }
    }
  }, [email, emailError, check]);

  console.log(check);
  

  const emailOnchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setEmail(newValue);
  
    emailValidate(newValue, emailElement, setEmailError);
  };

  return (
    <>
      {!next ? (
        <ResetBody
          email={email}
          emailElement={emailElement}
          emailError={emailError}
          setEmail={setEmail}
          emailOnchangeHandler={emailOnchangeHandler}
          buttonSubmitHandler={buttonSubmitHandler}
        />
      ) : (
        <ResetSecondStep />
      )}
    </>
  );
};

export default Reset;
