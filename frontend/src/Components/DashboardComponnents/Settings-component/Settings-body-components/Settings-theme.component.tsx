import { RefObject } from "react";
import s from "../Settings.component.module.scss";

type SettingsThemeProps = {
  ball: RefObject<HTMLDivElement>;
  changeThemeHandler: () => void;
};

const SettingsTheme = ({ ball, changeThemeHandler }: SettingsThemeProps) => {
  return (
    <div className={s.settingsContainer__settingsWrapper__topSide__item}>
      <div
        className={
          s.settingsContainer__settingsWrapper__topSide__item__contentTheme
        }
      >
        <span
          className={
            s.settingsContainer__settingsWrapper__topSide__item__contentTheme__text
          }
        >
          Theme:{" "}
        </span>
        <div
          className={
            s.settingsContainer__settingsWrapper__topSide__item__contentTheme__themeBox
          }
        >
          <div ref={ball} onClick={changeThemeHandler}></div>
        </div>
      </div>
    </div>
  );
};

export default SettingsTheme;
