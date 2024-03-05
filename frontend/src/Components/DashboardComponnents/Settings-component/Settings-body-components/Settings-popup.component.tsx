import { RefObject } from "react";
import s from "../Settings.component.module.scss";

type SettingsPopupProps = {
    popup: RefObject<HTMLDivElement>;
    delateAccountHandler: () => void;
    dontDelateAccountHandler: () => void;
}

const SettingsPopup = ({ popup, delateAccountHandler, dontDelateAccountHandler }:SettingsPopupProps) => {
  return (
    <section
    ref={popup}
    className={s.settingsContainer__settingsWrapper__popupContainer}
  >
    <span
      className={
        s.settingsContainer__settingsWrapper__popupContainer__text
      }
    >
      Are you sure ?
    </span>
    <section
      className={
        s.settingsContainer__settingsWrapper__popupContainer__buttonWrapper
      }
    >
      <button
        onClick={delateAccountHandler}
        className={`${s.settingsContainer__settingsWrapper__popupContainer__buttonWrapper__btn} ${s.settingsContainer__settingsWrapper__popupContainer__buttonWrapper__btnYes}`}
      >
        Yes
      </button>
      <button
        onClick={dontDelateAccountHandler}
        className={`${s.settingsContainer__settingsWrapper__popupContainer__buttonWrapper__btn} ${s.settingsContainer__settingsWrapper__popupContainer__buttonWrapper__btnNo}`}
      >
        No
      </button>
    </section>
  </section>
  )
}

export default SettingsPopup
