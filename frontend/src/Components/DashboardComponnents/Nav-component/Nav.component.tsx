import { Link } from "react-router-dom";
import s from "../../../Pages/DashboardPage/Dashboard-style/Dashboard.module.scss";
import NavItem from "./Nav-Item-component/NavItem.component";

type NavProps = {
  homePath: boolean;
  accountPath: boolean;
  alicePath: boolean;
  settingsPath: boolean;
};

const Nav = ({ homePath, alicePath, accountPath, settingsPath }: NavProps) => {
  return (
    <div>
      <nav className={s.dashboardContainer__nav}>
        <section className={s.dashboardContainer__nav__top}>
          <NavItem
            path={homePath}
            href="/dashboard/home"
            activeIcon="https://img.icons8.com/small/40/a78edd/home.png"
            noActiveIcon="https://img.icons8.com/small/40/ffffff/home.png"
            alt="home"
          />
          <Link
            to="/dashboard/account"
            className={s.dashboardContainer__nav__item}
          >
            {accountPath ? (
              <img
                width="40"
                height="40"
                src="https://img.icons8.com/fluency-systems-regular/40/a78edd/guest-male.png"
                alt="guest-male"
              />
            ) : (
              <img
                width="40"
                height="40"
                src="https://img.icons8.com/fluency-systems-regular/40/ffffff/guest-male.png"
                alt="guest-male"
              />
            )}
          </Link>
          <Link
            to="/dashboard/alice"
            className={s.dashboardContainer__nav__item}
          >
            {alicePath ? (
              <img
                width="40"
                height="40"
                src="https://img.icons8.com/windows/40/a78edd/talk-female.png"
                alt="talk-female"
              />
            ) : (
              <img
                width="40"
                height="40"
                src="https://img.icons8.com/windows/40/ffffff/talk-female.png"
                alt="talk-female"
              />
            )}
          </Link>
        </section>
        <section className={s.dashboardContainer__nav__bottom}>
          <Link
            to="/dashboard/settings"
            className={s.dashboardContainer__nav__item}
          >
            {settingsPath ? (
              <img
                width="40"
                height="40"
                src="https://img.icons8.com/ios/40/a78edd/settings--v1.png"
                alt="settings--v1"
              />
            ) : (
              <img
                width="40"
                height="40"
                src="https://img.icons8.com/ios/40/ffffff/settings--v1.png"
                alt="settings--v1"
              />
            )}
          </Link>
          <div
            className={s.dashboardContainer__nav__item}
            // onClick={userSignOut}
          >
            <img
              width="35"
              height="35"
              src="https://img.icons8.com/ios/35/ffffff/exit--v1.png"
              alt="exit--v1"
            />
          </div>
        </section>
      </nav>
    </div>
  );
};

export default Nav;
