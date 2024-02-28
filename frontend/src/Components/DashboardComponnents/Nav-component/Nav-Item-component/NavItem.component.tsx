import s from "../../../../Pages/DashboardPage/Dashboard-style/Dashboard.module.scss";

import { Link } from "react-router-dom";

type NavItemProps = {
    path: boolean;
    href: string;
    activeIcon: string;
    noActiveIcon: string;
    alt: string;
}

const NavItem = ({ path, href, activeIcon, noActiveIcon, alt }: NavItemProps) => {
  return (
    <Link to={href} className={s.dashboardContainer__nav__item}>
      {path ? (
        <img
          width="40"
          height="40"
          src={activeIcon}
          alt={alt}
        />
      ) : (
        <img
          width="40"
          height="40"
          src={noActiveIcon}
          alt={alt}
        />
      )}
    </Link>
  );
};

export default NavItem;
