import { type ReactNode } from "react";
import s from "../../Settings.component.module.scss";

type SettingMainWrapperProps = {
  children: ReactNode;
};

const SettingBottomWrapper = ({ children }: SettingMainWrapperProps) => {
  return (
    <section className={s.settingsContainer__settingsWrapper__bottomSide}>
      { children }
    </section>
  )
};

export default SettingBottomWrapper;
