import s from "./Dashboard-style/Dashboard.module.scss";

import DashboardHeader from "./Dashboard-Header/DashboardHeader";
import DashboardHistory from "./Dashboard-History/DashboardHistory";
import DashboardNews from "./Dashboard-News/DashboadNews";

export const DashboardPage = () => {
  return (
    <>
      <section className={s.header}>
        <DashboardHeader />
      </section>
      <section className={s.body}>
        <DashboardHistory />
        <DashboardNews />
      </section>
    </>
  );
};
