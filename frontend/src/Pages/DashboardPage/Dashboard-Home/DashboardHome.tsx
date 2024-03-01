import s from '../Dashboard-style/Dashboard.module.scss';

import img from "../../../assets/AI_help.webp";

const DashboardHome = () => {
  return (
    <section className={s.dashboardContainer__contentWrapper__content}>
      <div className={s.dashboardContainer__contentWrapper__content__header}>
        <h2>What's new ?</h2>
      </div>
      <div className={s.dashboardContainer__contentWrapper__content__image}>
        <img
          src={img}
          className={s.dashboardContainer__contentWrapper__content__image__img}
          alt="image of AI helping people"
        />
      </div>
      <div className={s.dashboardContainer__contentWrapper__content__subTitle}>
        <h3>When AI will help people ?</h3>
      </div>
      <div
        className={s.dashboardContainer__contentWrapper__content__description}
      >
        <p>
          As AI technology continues to advance, it will likely play an even
          greater role in helping people across various aspects of their lives,
          from everyday tasks to solving complex societal challenges. However,
          it's important to consider ethical implications and ensure that AI is
          developed and deployed responsibly for the benefit of all.
        </p>
      </div>
    </section>
  );
};

export default DashboardHome;
