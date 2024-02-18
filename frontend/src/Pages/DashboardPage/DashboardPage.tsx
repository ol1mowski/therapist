import s from "./Dashboard-style/Dashboard.module.scss";

export const DashboardPage = () => {
  return (
    <>
      <section className={s.dashboardContainer}>
        <nav className={s.dashboardContainer__nav}>
          <section className={s.dashboardContainer__nav__hamburger}>
            <div
              className={`${s.dashboardContainer__nav__hamburger__line} ${s.left}`}
            ></div>
            <div
              className={`${s.dashboardContainer__nav__hamburger__line} ${s.center}`}
            ></div>
            <div
              className={`${s.dashboardContainer__nav__hamburger__line} ${s.right}`}
            ></div>
          </section>
          <section className={s.dashboardContainer__nav__top}>
            <div className={s.dashboardContainer__nav__item}></div>
            <div className={s.dashboardContainer__nav__item}></div>
          </section>
          <section className={s.dashboardContainer__nav__bottom}>
            <div className={s.dashboardContainer__nav__item}></div>
            <div className={s.dashboardContainer__nav__item}></div>
          </section>
        </nav>
        <main className={s.dashboardContainer__contentWrapper}>
          <section className={s.dashboardContainer__contentWrapper__content}>
            <div
              className={s.dashboardContainer__contentWrapper__content__header}
            >
              <h2></h2>
            </div>
            <div
              className={s.dashboardContainer__contentWrapper__content__image}
            >
              <img src="" alt="" />
            </div>
            <div
              className={
                s.dashboardContainer__contentWrapper__content__subTitle
              }
            ></div>
            <div
              className={
                s.dashboardContainer__contentWrapper__content__description
              }
            ></div>
          </section>
        </main>
      </section>
    </>
  );
};
