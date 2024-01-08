import style from "./Home.module.scss";
import img from "../../assets/alice.webp";

import { Link } from "react-scroll";
import Button from "../../Components/Button/Button";
import SectionWrapper from "../../Components/SectionWrapper/SectionWrapper";

const Home = () => {
  return (
    <>
      <SectionWrapper id={"home"} classes={style.homeContainer}>
        <section className={style.homeContainer__titleSection}>
          <div className={style.homeContainer__titleSection__text}>
            <h1 className={style.homeContainer__titleSection__text__h1}>
              Alice
            </h1>
            <h2 className={style.homeContainer__titleSection__text__h2}>
              Your Virtual Therapist
            </h2>
          </div>
          <div className={style.homeContainer__titleSection__button}>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1200}
            >
              <Button>Read more</Button>
            </Link>
          </div>
        </section>
        <section className={style.homeContainer__imageSection}>
          <div className={style.homeContainer__imageSection__imgWrapper}>
            <img
              loading="lazy"
              src={img}
              alt="Therapist giving advice to a client"
              className={style.homeContainer__imageSection__imgWrapper__img}
            />
          </div>
        </section>
      </SectionWrapper>
    </>
  );
};

export default Home;
