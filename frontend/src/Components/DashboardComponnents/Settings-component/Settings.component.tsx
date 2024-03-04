import { useContext, useRef } from "react";
import DashboardHeaderComponent from "../Dashboard-Header-Component/Dashboard-Header-Component.component";
import s from "./Settings.component.module.scss";
import ThemeContext from "../../../Context/ThemeContext";

const Settings = () => {
  const ball = useRef<HTMLDivElement>(null);

  localStorage.setItem("theme", "light");

  const { theme, setTheme } = useContext(ThemeContext);

  

  const changeThemeHandler = () => {
    if (ball.current) {
      if (theme === "light") {
        ball.current.className =
          s.settingsContainer__settingsWrapper__topSide__item__contentTheme__themeBox__ballDark;
        setTheme("dark");
      } else {
        ball.current.className =
          s.settingsContainer__settingsWrapper__topSide__item__contentTheme__themeBox__ballLight;
        setTheme("light");
      }
    }
  };

  return (
    <main className={s.settingsContainer}>
      <DashboardHeaderComponent title="Settings" />
      <section className={s.settingsContainer__settingsWrapper}>
        <section className={s.settingsContainer__settingsWrapper__topSide}>
          <div className={s.settingsContainer__settingsWrapper__topSide__item}>
            <p
              className={
                s.settingsContainer__settingsWrapper__topSide__item__content
              }
            >
              Status: Active
            </p>
          </div>
          <div className={s.settingsContainer__settingsWrapper__topSide__item}>
            <p
              className={
                s.settingsContainer__settingsWrapper__topSide__item__content
              }
            >
              Version: 1.0
            </p>
          </div>
          <div className={s.settingsContainer__settingsWrapper__topSide__item}>
            <p
              className={
                s.settingsContainer__settingsWrapper__topSide__item__content
              }
            >
              Language: EN
            </p>
          </div>
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
                <div
                  ref={ball}
                  onClick={changeThemeHandler}
                  className={
                    s.settingsContainer__settingsWrapper__topSide__item__contentTheme__themeBox__ballLight
                  }
                ></div>
              </div>
            </div>
          </div>
        </section>
        <section className={s.settingsContainer__settingsWrapper__bottomSide}>
          <div
            className={
              s.settingsContainer__settingsWrapper__bottomSide__buttonWrapper
            }
          >
            <div
              className={
                s.settingsContainer__settingsWrapper__bottomSide__buttonWrapper__btn
              }
            >
              Delete Account
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Settings;
