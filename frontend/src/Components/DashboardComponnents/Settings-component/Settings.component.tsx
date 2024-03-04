import { useContext, useEffect, useRef } from "react";
import DashboardHeaderComponent from "../Dashboard-Header-Component/Dashboard-Header-Component.component";
import s from "./Settings.component.module.scss";
import ThemeContext from "../../../Context/ThemeContext";

const Settings = () => {
  const ball = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (ball.current) {
      if (currentTheme === "dark") {
        ball.current.classList.add(
          s.settingsContainer__settingsWrapper__topSide__item__contentTheme__themeBox__ballDark
        );
      } else {
        ball.current.classList.add(
          s.settingsContainer__settingsWrapper__topSide__item__contentTheme__themeBox__ballLight
        );
      }
    }
  }, []);

  const changeThemeHandler = () => {
    if (ball.current) {
      if (theme === "light") {
        ball.current.classList.remove(
          s.settingsContainer__settingsWrapper__topSide__item__contentTheme__themeBox__ballLight
        );
        ball.current.classList.add(
          s.settingsContainer__settingsWrapper__topSide__item__contentTheme__themeBox__ballDark
        );
        setTheme("dark");
        localStorage.setItem("theme", "dark");
      } else {
        ball.current.classList.remove(
          s.settingsContainer__settingsWrapper__topSide__item__contentTheme__themeBox__ballDark
        );
        ball.current.classList.add(
          s.settingsContainer__settingsWrapper__topSide__item__contentTheme__themeBox__ballLight
        );
        setTheme("light");
        localStorage.setItem("theme", "light");
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
                <div ref={ball} onClick={changeThemeHandler}></div>
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
