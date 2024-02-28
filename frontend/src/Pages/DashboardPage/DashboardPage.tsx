import { useEffect, useState } from "react";
import s from "./Dashboard-style/Dashboard.module.scss";

import { Link, useParams } from "react-router-dom";
import Home from "./DashboardComponnents/Home-component/Home.component";
import Account from "./DashboardComponnents/Account-component/Account.component";
import Alice from "./DashboardComponnents/Alice-component/Alice.component";
import Settings from "./DashboardComponnents/Settings-component/Settings.component";

const DashboardPage = () => {
  const url = useParams();

  const [homePath, setHomePath] = useState<boolean>(false);
  const [accountPath, setAccountPath] = useState<boolean>(false);
  const [alicePath, setAlicePath] = useState<boolean>(false);
  const [settingsPath, setSettingsPath] = useState<boolean>(false);

  // const ICONS = [
  //   {
  //     id: 1,
  //     active: true,
  //     activeUrl: "https://img.icons8.com/small/40/a78edd/home.png",
  //     unActiveUrl: "https://img.icons8.com/small/40/000000/home.png",
  //   },
  // ];

  // const [authUser, setAuthUser] = useState<null | Object>(null);

  // useEffect(() => {
  //   const listen = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setAuthUser(user);
  //     } else {
  //       setAuthUser(null);
  //     }
  //   });

  //   return () => {
  //     listen();
  //   };
  // }, []);

  // const userSignOut = () => {
  //   signOut(auth)
  //     .then(() => {
  //       console.log("sign out successful");
  //     })
  //     .catch((error) => console.log(error));
  // };

  useEffect(() => {
    url.id === "home" ? setHomePath(true) : setHomePath(false);
    url.id === "account" ? setAccountPath(true) : setAccountPath(false);
    url.id === "alice" ? setAlicePath(true) : setAlicePath(false);
    url.id === "settings" ? setSettingsPath(true) : setSettingsPath(false);
  }, [url]);

  return (
    <>
      <section className={s.dashboardContainer}>
        <nav className={s.dashboardContainer__nav}>
          <section className={s.dashboardContainer__nav__top}>
            <Link
              to="/dashboard/home"
              className={s.dashboardContainer__nav__item}
            >
              {homePath ? (
                <img
                  width="40"
                  height="40"
                  src="https://img.icons8.com/small/40/a78edd/home.png"
                  alt="home"
                />
              ) : (
                <img
                  width="40"
                  height="40"
                  src="https://img.icons8.com/small/40/ffffff/home.png"
                  alt="home"
                />
              )}
            </Link>
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
        <main className={s.dashboardContainer__contentWrapper}>
          {homePath ? <Home /> : null}
          {accountPath ? <Account /> : null}
          {alicePath ? <Alice /> : null}
          {settingsPath ? <Settings /> : null}
        </main>
      </section>
    </>
  );
};

export default DashboardPage;
