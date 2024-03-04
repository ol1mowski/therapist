import { type ReactNode } from "react";
import s from "../../Settings.component.module.scss";

type SettingMainWrapperProps = {
  children: ReactNode;
};

const SettingTopWrapper = ({ children }: SettingMainWrapperProps) => {
  return (
    <section className={s.settingsContainer__settingsWrapper__topSide}>
      { children }
    </section>
  )
};

export default SettingTopWrapper;
