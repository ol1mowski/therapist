import s from "../Dashboard-style/Dashboard.module.scss";
import Baner from "./Baner-component/Baner.component";
import UserAccount from "./UserAccount-component/UserAccount.component";
import UserName from "./UserName-component/UserName.component";

const DashboardHeader = () => {
  return (
    <header className={s.headerContainer}>
      <UserName name="User Name" />
      <section>
        <Baner />
      </section>
      <UserAccount />
    </header>
  );
};
export default DashboardHeader;
