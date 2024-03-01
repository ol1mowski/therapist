import s from "../Dashboard-style/Dashboard.component.module.scss";

import { type FormEvent, useRef, useState, type MouseEvent } from "react";
import { type ValidateObject } from "../../Form/Forms/Singup/Singup.component";

import { Form } from "react-router-dom";

import { passwordValidate } from "../../Form/Form-validation/FormValidate.component";

import AccountButton from "./Account-body-components/Account-Button.component";
import AccountPassword from "./Account-body-components/Account-Password.component";
import AccountNotification from "./Account-body-components/Account-Notification.component";
import AccountUserData from "./Account-body-components/Account-UserData.component";
import AccountHeader from "./Account-body-components/Account-Header.component";

const Account = () => {
  const success = useRef<HTMLDivElement>(null);

  const imageSrc = [
    "https://img.icons8.com/material-outlined/24/A68DDD/hide.png",
    "https://img.icons8.com/material-outlined/24/A68DDD/visible--v1.png",
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const passwordElement = useRef<HTMLInputElement>(null);
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<ValidateObject>({
    isError: false,
    errorMessage: null,
  });

  const [iconSrc, setIconSrc] = useState<string>(
    "https://img.icons8.com/material-outlined/24/A68DDD/hide.png"
  );

  const changeIconHandler = () => {
    if (currentIndex === 0) {
      setCurrentIndex(1);
      setIconSrc(imageSrc[1]);
    } else {
      setCurrentIndex(0);
      setIconSrc(imageSrc[0]);
    }
  };

  const livePassowrdValidationHandler = (e: FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setPassword(target.value);
    passwordValidate(password, passwordElement, setPasswordError);
  };

  const changePasswordHandler = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const validationResult = await passwordValidate(
        password,
        passwordElement,
        setPasswordError
      );
      if (
        !validationResult?.isError &&
        validationResult?.isError !== undefined
      ) {
        if (success.current) {
          success.current.style.display = "block";
          setPassword("");
          setTimeout(() => {
            if (success.current) {
              success.current.style.display = "none";
            }
          }, 3000);
        }
      }
    } catch (error) {
      console.error("Error after password validation:", error);
    }
  };

  const closeNotificationHandler = () => {
    if (success.current) {
      success.current.style.display = "none";
    }
  };

  return (
    <main className={s.accountContainer}>
      <AccountNotification
        success={success}
        closeNotificationHandler={closeNotificationHandler}
      />
      <AccountHeader />
      <section className={s.accountContainer__dataWrapper}>
        <AccountUserData />
        <Form method="post" className={s.accountContainer__formWrapper}>
          <AccountPassword
            iconSrc={iconSrc}
            currentIndex={currentIndex}
            changeIconHandler={changeIconHandler}
            livePassowrdValidationHandler={livePassowrdValidationHandler}
            password={password}
            passwordElement={passwordElement}
            passwordError={passwordError}
          />
          <AccountButton changePasswordHandler={changePasswordHandler} />
        </Form>
      </section>
    </main>
  );
};

export default Account;
