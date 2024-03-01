import { useEffect, useState } from "react";
import s from "./Dashboard-style/Dashboard.module.scss";

import { useParams } from "react-router-dom";
import Home from "../../Components/DashboardComponnents/Home-component/Home.component";
import Account from "../../Components/DashboardComponnents/Account-component/Account.component";
import Alice from "../../Components/DashboardComponnents/Alice-component/Alice.component";
import Settings from "../../Components/DashboardComponnents/Settings-component/Settings.component";
import Nav from "../../Components/DashboardComponnents/Nav-component/Nav.component";

const DashboardPage = () => {
  const url = useParams();

  const [homePath, setHomePath] = useState<boolean>(false);
  const [accountPath, setAccountPath] = useState<boolean>(false);
  const [alicePath, setAlicePath] = useState<boolean>(false);
  const [settingsPath, setSettingsPath] = useState<boolean>(false);

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
        <Nav
          homePath={homePath}
          accountPath={accountPath}
          alicePath={alicePath}
          settingsPath={settingsPath}
        />
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
