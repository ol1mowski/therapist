import s from "../Settings.component.module.scss";

type SettingButtonProps = {
  delateButtonHandler: () => void;
};

const SettingsButton = ({ delateButtonHandler }: SettingButtonProps) => {
  return (
    <div
      className={
        s.settingsContainer__settingsWrapper__bottomSide__buttonWrapper
      }
    >
      <div
        onClick={delateButtonHandler}
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
