import DashboardHeaderComponent from "../Dashboard-Header-Component/Dashboard-Header-Component.component";
import s from "./Settings.component.module.scss";

const Settings = () => {
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
            <p
              className={
                s.settingsContainer__settingsWrapper__topSide__item__content
              }
            >
              <span className={s.settingsContainer__settingsWrapper__topSide__item__content__text}>Theme: </span>
              <div
                className={
                  s.settingsContainer__settingsWrapper__topSide__item__content__themeBox
                }
              >
                <div
                  className={
                    s.settingsContainer__settingsWrapper__topSide__item__content__themeBox__ball
                  }
                ></div>
              </div>
            </p>
          </div>
        </section>
        <section className={s.settingsContainer__settingsWrapper__bottomSide}>
          <div
            className={
              s.settingsContainer__settingsWrapper__bottomSide__buttonWrapper
            }
          >
            <button
              className={
                s.settingsContainer__settingsWrapper__bottomSide__buttonWrapper__btn
              }
            >
              Delete Account
            </button>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Settings;
