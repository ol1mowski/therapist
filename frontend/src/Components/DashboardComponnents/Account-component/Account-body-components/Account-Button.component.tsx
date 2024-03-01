import { type MouseEvent } from "react";
import s from "../../Dashboard-style/Dashboard.component.module.scss";

type AccountButtonProps = {
  changePasswordHandler: (e: MouseEvent<HTMLButtonElement>) => void;
};

const AccountButton = ({ changePasswordHandler }: AccountButtonProps) => {
  return (
    <div className={s.accountContainer__button}>
      <button
        onClick={(e: MouseEvent<HTMLButtonElement>) => changePasswordHandler(e)}
        className={s.accountContainer__button__btn}
      >
        Change
      </button>
    </div>
  );
};

export default AccountButton;
