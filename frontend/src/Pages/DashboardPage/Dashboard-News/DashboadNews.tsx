import s from "../Dashboard-style/Dashboard.module.scss";

import img from "../../../assets/AI_help.webp";
// import ButtonComponent from "../../../Components/Button-component/Button-component";

const DashboardNews = () => {
  return (
    <section className={s.newsContainer}>
      <div className={s.newsContainer__header}>
        <h2 className={s.newsContainer__header__title}>What's news ?</h2>
      </div>
      <div className={s.newsContainer__content}>
        <div className={s.newsContainer__content__image}>
          <img
            src={img}
            alt="News image"
            className={s.newsContainer__content__image__img}
          />
        </div>
        <div className={s.newsContainer__content__desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque fugit
          sapiente commodi rem laborum, accusantium architecto dignissimos illum
          ullam animi assumenda adipisci ipsum expedita nisi eos hic a dolorem
          quia!
        </div>
        {/* <ButtonComponent>
          Let's Talk with Alice
        </ButtonComponent> */}
      </div>
    </section>
  );
};

export default DashboardNews;
