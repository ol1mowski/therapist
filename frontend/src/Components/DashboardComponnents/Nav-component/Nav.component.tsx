import s from "../../../Pages/DashboardPage/Dashboard-style/Dashboard.module.scss";
import NavItem from "./Nav-Item-component/NavItem.component";

type NavProps = {
  homePath: boolean;
  accountPath: boolean;
  alicePath: boolean;
  settingsPath: boolean;
};

const Nav = ({ homePath, alicePath, accountPath, settingsPath }: NavProps) => {
  const ITEMS = [
    {
      id: 1,
      path: homePath,
      href: "/dashboard/home",
      activeIcon: "https://img.icons8.com/small/40/a78edd/home.png",
      noActiveIcon: "https://img.icons8.com/small/40/ffffff/home.png",
      alt: "home",
    },
    {
      id: 2,
      path: accountPath,
      href: "/dashboard/account",
      activeIcon:
        "https://img.icons8.com/fluency-systems-regular/40/a78edd/guest-male.png",
      noActiveIcon:
        "https://img.icons8.com/fluency-systems-regular/40/ffffff/guest-male.png",
      alt: "account",
    },
    {
      id: 3,
      path: alicePath,
      href: "/dashboard/alice",
      activeIcon: "https://img.icons8.com/windows/40/a78edd/talk-female.png",
      noActiveIcon: "https://img.icons8.com/windows/40/ffffff/talk-female.png",
      alt: "alice",
    },
  ];
  return (
    <div>
      <nav className={s.dashboardContainer__nav}>
        <section className={s.dashboardContainer__nav__top}>
          {ITEMS.map((item) => (
            <NavItem
              key={item.id}
              path={item.path}
              href={item.href}
              activeIcon={item.activeIcon}
              noActiveIcon={item.noActiveIcon}
              alt={item.alt}
            />
          ))}
        </section>
        <section className={s.dashboardContainer__nav__bottom}>
          <NavItem
            path={settingsPath}
            href="/dashboard/settings"
            activeIcon="https://img.icons8.com/ios/40/a78edd/settings--v1.png"
            noActiveIcon="https://img.icons8.com/ios/40/ffffff/settings--v1.png"
            alt="settings"
          />
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
