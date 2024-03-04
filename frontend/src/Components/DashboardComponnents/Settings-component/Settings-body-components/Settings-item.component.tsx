import s from '../Settings.component.module.scss';


type SettingsItemProps = {
    text: string;
}

const SettingsItem = ({ text }: SettingsItemProps) => {
  return (
    <div className={s.settingsContainer__settingsWrapper__topSide__item}>
    <p
      className={
        s.settingsContainer__settingsWrapper__topSide__item__content
      }
    >
      { text }
    </p>
  </div>
  )
}

export default SettingsItem
