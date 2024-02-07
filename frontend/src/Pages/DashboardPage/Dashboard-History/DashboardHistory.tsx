import s from "../Dashboard-style/Dashboard.module.scss";

const DashboardHistory = () => {
  return (
    <aside className={s.historyContainer}>
      <div className={s.historyContainer__header}>History</div>
      <div className={s.historyContainer__historyElementsContainer}>
        <div
          className={
            s.historyContainer__historyElementsContainer__historyElement
          }
        >
          simple question to ALice !
        </div>
        <div
          className={
            s.historyContainer__historyElementsContainer__historyElement
          }
        >
          simple question to ALice !
        </div>
        <div
          className={
            s.historyContainer__historyElementsContainer__historyElement
          }
        >
          simple question to ALice !
        </div>
      </div>
    </aside>
  );
};

export default DashboardHistory;
