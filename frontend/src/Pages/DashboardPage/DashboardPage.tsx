import s from "./Dashboard-style/Dashboard.module.scss";

import img from "../../assets/AI_help.webp";
import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../utill/firebase";
import { Link, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth/cordova";

const DashboardPage = () => {
  // const url = useParams();

  // const ICONS = [
  //   {
  //     id: 1,
  //     active: true,
  //     activeUrl: "https://img.icons8.com/small/40/a78edd/home.png",
  //     unActiveUrl: "https://img.icons8.com/small/40/000000/home.png",
  //   },
  // ];

  const [authUser, setAuthUser] = useState<null | Object>(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      {authUser ? (
        <section className={s.dashboardContainer}>
          <nav className={s.dashboardContainer__nav}>
            <section className={s.dashboardContainer__nav__top}>
              <Link
                to="/dashboard/home"
                className={s.dashboardContainer__nav__item}
              >
                <img
                  width="40"
                  height="40"
                  src="https://img.icons8.com/small/40/a78edd/home.png"
                  alt="home"
                />
              </Link>
              <Link
                to="/dashboard/account"
                className={s.dashboardContainer__nav__item}
              >
                <img
                  width="40"
                  height="40"
                  src="https://img.icons8.com/fluency-systems-regular/40/ffffff/guest-male.png"
                  alt="guest-male"
                />
              </Link>
              <Link
                to="/dashboard/alice"
                className={s.dashboardContainer__nav__item}
              >
                <img
                  width="40"
                  height="40"
                  src="https://img.icons8.com/windows/40/ffffff/talk-female.png"
                  alt="talk-female"
                />
              </Link>
            </section>
            <section className={s.dashboardContainer__nav__bottom}>
              <Link
                to="/dashboard/settings"
                className={s.dashboardContainer__nav__item}
              >
                <img
                  width="40"
                  height="40"
                  src="https://img.icons8.com/ios/40/ffffff/settings--v1.png"
                  alt="settings--v1"
                />
              </Link>
              <div
                className={s.dashboardContainer__nav__item}
                onClick={userSignOut}
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
            <section className={s.dashboardContainer__contentWrapper__content}>
              <div
                className={
                  s.dashboardContainer__contentWrapper__content__header
                }
              >
                <h2>What's new ?</h2>
              </div>
              <div
                className={s.dashboardContainer__contentWrapper__content__image}
              >
                <img
                  src={img}
                  className={
                    s.dashboardContainer__contentWrapper__content__image__img
                  }
                  alt="image of AI helping people"
                />
              </div>
              <div
                className={
                  s.dashboardContainer__contentWrapper__content__subTitle
                }
              >
                <h3>When AI will help people ?</h3>
              </div>
              <div
                className={
                  s.dashboardContainer__contentWrapper__content__description
                }
              >
                <p>
                  As AI technology continues to advance, it will likely play an
                  even greater role in helping people across various aspects of
                  their lives, from everyday tasks to solving complex societal
                  challenges. However, it's important to consider ethical
                  implications and ensure that AI is developed and deployed
                  responsibly for the benefit of all.
                </p>
              </div>
            </section>
          </main>
        </section>
      ) : (
        <Navigate to="/form/login" replace={true} />
      )}
    </>
  );
};

export default DashboardPage;
