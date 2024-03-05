import s from "./Settings.component.module.scss";

import { useContext, useEffect, useRef } from "react";

import DashboardHeaderComponent from "../Dashboard-Header-Component/Dashboard-Header-Component.component";
import ThemeContext from "../../../Context/ThemeContext";
import SettingsItem from "./Settings-body-components/Settings-item.component";
import SettingsTheme from "./Settings-body-components/Settings-theme.component";
import SettingMainWrapper from "./Settings-body-components/Settings-content-wrappers/Setting-main-wrapper.component";
import SettingsButton from "./Settings-body-components/Settings-button.component";
import SettingsContentWrapper from "./Settings-body-components/Settings-content-wrappers/Settings-content-wrapper.component";
import SettingTopWrapper from "./Settings-body-components/Settings-content-wrappers/Setting-top-wrapper.component";
import SettingBottomWrapper from "./Settings-body-components/Settings-content-wrappers/Setting-bottom-wrapper.component";

import { ITEMS_TEXTS } from "../../../utill/Settings-component/ITEMS";
import { useNavigate } from "react-router-dom";

const Settings = () => {

  const ball = useRef<HTMLDivElement>(null);
  const popup = useRef<HTMLDivElement>(null);

  const { theme, setTheme } = useContext(ThemeContext);

  const navigate = useNavigate();

  const ballDarkClass =
    s.settingsContainer__settingsWrapper__topSide__item__contentTheme__themeBox__ballDark;
  const ballLightClass =
    s.settingsContainer__settingsWrapper__topSide__item__contentTheme__themeBox__ballLight;

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");

    if (ball.current) {
      ball.current.classList.add(
        currentTheme === "dark" ? ballDarkClass : ballLightClass
      );
    }
  }, []);

  const changeThemeHandler = () => {
    if (!ball.current) return;

    const ballClasses = ball.current.classList;
    if (theme === "light") {
      ballClasses.remove(ballLightClass);
      ballClasses.add(ballDarkClass);
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      ballClasses.remove(ballDarkClass);
      ballClasses.add(ballLightClass);
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  const deleteAccountPopupHandler = () => {
    if (popup.current) {
      popup.current.style.display = "flex";
    }
  };

  const dontDelateAccountHandler = () => {
    if (popup.current) {
      popup.current.style.display = "none";
    }
  };
  

  const delateAccountHandler = () => {
    navigate('/form/login');
  };

  return (
    <SettingMainWrapper>
      <DashboardHeaderComponent title="Settings" />

      <SettingsContentWrapper>
        <SettingTopWrapper>
          {ITEMS_TEXTS.map((item) => (
            <SettingsItem key={item.id} text={item.text} />
          ))}

          <SettingsTheme ball={ball} changeThemeHandler={changeThemeHandler} />
        </SettingTopWrapper>

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

        <SettingBottomWrapper>
          <SettingsButton delateButtonHandler={deleteAccountPopupHandler} />
        </SettingBottomWrapper>
      </SettingsContentWrapper>
    </SettingMainWrapper>
  );
};

export default Settings;
