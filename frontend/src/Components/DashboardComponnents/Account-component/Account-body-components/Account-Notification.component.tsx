import { RefObject } from "react";
import s from "../../Dashboard-style/Dashboard.component.module.scss";

type AccountNotificationProps = {
  closeNotificationHandler: () => void;
  success: RefObject<HTMLDivElement>,
};

const AccountNotification = ({
  closeNotificationHandler,
  success,
}: AccountNotificationProps) => {
  return (
    <div
      onClick={closeNotificationHandler}
      ref={success}
      className={s.accountContainer__succesPasswordChange}
    >
      Success !
    </div>
  );
};

export default AccountNotification;
