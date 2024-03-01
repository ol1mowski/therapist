import { type RefObject, type FormEvent } from "react";
import s from "../../Dashboard-style/Dashboard.component.module.scss";

type AccountPasswordProps = {
  password: string;
  passwordElement: RefObject<HTMLInputElement>;
  passwordError: {
    isError: boolean;
    errorMessage: string | null;
  };
  iconSrc: string;
  currentIndex: number;
  changeIconHandler: () => void;
  livePassowrdValidationHandler: (e: FormEvent<HTMLInputElement>) => void;
};

const AccountPassword = ({
  iconSrc,
  currentIndex,
  changeIconHandler,
  livePassowrdValidationHandler,
  password,
  passwordElement,
  passwordError,
}: AccountPasswordProps) => {
  return (
    <>
      <label
        className={s.accountContainer__formWrapper__label}
        htmlFor={"password"}
      >
        Change your password
      </label>
      <div className={s.accountContainer__formWrapper__inputWrapper}>
        {currentIndex === 1 ? (
          <input
            ref={passwordElement}
            value={password}
            onChange={(e: FormEvent<HTMLInputElement>) =>
              livePassowrdValidationHandler(e)
            }
            className={s.accountContainer__formWrapper__inputWrapper__input}
            type="text"
            id="password"
            name="password"
          />
        ) : (
          <input
            ref={passwordElement}
            value={password}
            onChange={(e: FormEvent<HTMLInputElement>) =>
              livePassowrdValidationHandler(e)
            }
            className={s.accountContainer__formWrapper__inputWrapper__input}
            type="password"
            id="password"
            name="password"
          />
        )}

        <img
          onClick={changeIconHandler}
          src={iconSrc}
          alt="passoword icon"
          className={s.accountContainer__formWrapper__inputWrapper__inputIcon}
        />
      </div>
      {passwordError.isError ? (
        <p className={s.accountContainer__passwordValidationError}>
          [-] {passwordError.errorMessage}
        </p>
      ) : null}
    </>
  );
};

export default AccountPassword;
