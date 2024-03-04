import { type ReactNode } from "react";
import s from "../../Settings.component.module.scss";

type SettingMainWrapperProps = {
  children: ReactNode;
};

const SettingMainWrapper = ({ children }: SettingMainWrapperProps) => {
  return <main className={s.settingsContainer}>{children}</main>;
};

export default SettingMainWrapper;
