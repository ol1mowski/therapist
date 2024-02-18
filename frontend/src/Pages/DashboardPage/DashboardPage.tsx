import s from "./Dashboard-style/Dashboard.module.scss";

import img from "../../assets/AI_help.webp";

const DashboardPage = () => {
  return (
    <>
      <section className={s.dashboardContainer}>
        <nav className={s.dashboardContainer__nav}>
          <section className={s.dashboardContainer__nav__top}>
            <div className={s.dashboardContainer__nav__item}>
              <img
                width="40"
                height="40"
                src="https://img.icons8.com/small/40/a78edd/home.png"
                alt="home"
              />
            </div>
            <div className={s.dashboardContainer__nav__item}>
              <img
                width="40"
                height="40"
                src="https://img.icons8.com/fluency-systems-regular/40/ffffff/guest-male.png"
                alt="guest-male"
              />
            </div>
            <div className={s.dashboardContainer__nav__item}>
              <img
                width="40"
                height="40"
                src="https://img.icons8.com/windows/40/ffffff/talk-female.png"
                alt="talk-female"
              />
            </div>
          </section>
          <section className={s.dashboardContainer__nav__bottom}>
            <div className={s.dashboardContainer__nav__item}>
              <img
                width="40"
                height="40"
                src="https://img.icons8.com/ios/40/ffffff/settings--v1.png"
                alt="settings--v1"
              />
            </div>
            <div className={s.dashboardContainer__nav__item}>
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
              className={s.dashboardContainer__contentWrapper__content__header}
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
    </>
  );
};

export default DashboardPage;
