import s from "../Dashboard-style/Dashboard.component.module.scss";

type DashboardHeaderComponentProps = {
  title: string;
};

const DashboardHeaderComponent = ({ title }: DashboardHeaderComponentProps) => {
  return (
    <header className={s.accountContainer__header}>
      <h2 className={s.accountContainer__header__title}>{title}</h2>
    </header>
  );
};

export default DashboardHeaderComponent;
