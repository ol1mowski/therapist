import { RefObject } from "react";
import validator from "validator";
import { ValidateObject } from "../Forms/Singup/Singup.component";
import s from "../Form-sass/FormStyle.module.scss";

export const emailValidate = (
  values: string,
  emailElement: RefObject<HTMLInputElement>,
  setEmailError: (error: ValidateObject) => void
) => {
  if (!values) {
    setEmailError({ isError: true, errorMessage: "required" });
    emailElement.current?.classList.add(s.unvalid);
  } else if (!validator.isEmail(values)) {
    setEmailError({ isError: true, errorMessage: "invalid email" });
    emailElement.current?.classList.add(s.unvalid);
  } else {
    setEmailError({ isError: false, errorMessage: null });
    emailElement.current?.classList.remove(s.unvalid);
  }
};

export const passwordValidate = (
  value: string,
  passwordElement: RefObject<HTMLInputElement>,
  setPasswordError: (error: ValidateObject) => void
) => {
  if (!value) {
    setPasswordError({ isError: true, errorMessage: "required" });
    passwordElement.current?.classList.add(s.unvalid);
  } else if (
    validator.isStrongPassword(value, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
  ) {
    setPasswordError({ isError: false, errorMessage: null });
    passwordElement.current?.classList.remove(s.unvalid);
  } else {
    setPasswordError({ isError: true, errorMessage: "too weak password" });
    passwordElement.current?.classList.add(s.unvalid);
  }
};

export const loginPasswordValidate = (
  value: string,
  passwordElement: RefObject<HTMLInputElement>,
  setPasswordError: (error: ValidateObject) => void
) => {
  if (!value) {
    setPasswordError({ isError: true, errorMessage: "required" });
    passwordElement.current?.classList.add(s.unvalid);
  } else {
    setPasswordError({ isError: false, errorMessage: null });
    passwordElement.current?.classList.remove(s.unvalid);
  }
};

export const nameValidate = (
  value: string,
  nameElement: RefObject<HTMLInputElement>,
  setNameError: (error: ValidateObject) => void
) => {
  if (value.length === 0) {
    setNameError({ isError: true, errorMessage: "require" });
    nameElement.current?.classList.add(s.unvalid);
  } else if (value.length < 3) {
    setNameError({ isError: true, errorMessage: "name is too short" });
    nameElement.current?.classList.add(s.unvalid);
  } else if (value.length > 12) {
    setNameError({ isError: true, errorMessage: "name is too long" });
    nameElement.current?.classList.add(s.unvalid);
  } else {
    setNameError({ isError: false, errorMessage: null });
    nameElement.current?.classList.remove(s.unvalid);
  }
};
