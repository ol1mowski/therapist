import s from "../Settings.component.module.scss";

const SettingsButton = () => {
  return (
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
  );
};

export default SettingsButton;
