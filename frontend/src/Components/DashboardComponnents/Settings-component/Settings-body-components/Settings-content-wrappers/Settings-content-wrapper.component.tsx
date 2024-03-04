import { ReactNode } from "react";
import s from "../../Settings.component.module.scss";

type SettingsContentWrapperProps = {
  children: ReactNode;
};

const SettingsContentWrapper = ({ children }: SettingsContentWrapperProps) => {
  return (
    <section className={s.settingsContainer__settingsWrapper}>
      {children}
    </section>
  );
};

export default SettingsContentWrapper;
