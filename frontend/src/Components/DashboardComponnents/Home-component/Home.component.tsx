import s from "../../../Pages/DashboardPage/Dashboard-style/Dashboard.module.scss";

import img from "../../../assets/AI_help.webp";

const Home = () => {
  return (
    <section className={s.dashboardContainer__contentWrapper__content}>
      <div className={s.dashboardContainer__contentWrapper__content__header}>
        <h2 className={s.dashboardContainer__contentWrapper__content__header__title}>
          What's news ?
        </h2>
      </div>
      <div className={s.dashboardContainer__contentWrapper__content}>
        <div className={s.dashboardContainer__contentWrapper__content__image}>
          <img
            src={img}
            alt="News image"
            className={
              s.dashboardContainer__contentWrapper__content__image__img
            }
          />
        </div>
        <div className={s.dashboardContainer__contentWrapper__content__description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque fugit
          sapiente commodi rem laborum, accusantium architecto dignissimos illum
          ullam animi assumenda adipisci ipsum expedita nisi eos hic a dolorem
          quia! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque fugit
          sapiente commodi rem laborum, accusantium architecto dignissimos illum
          ullam animi assumenda adipisci ipsum expedita nisi eos hic a dolorem
          quia!
        </div>
      </div>
    </section>
  );
};

export default Home;
