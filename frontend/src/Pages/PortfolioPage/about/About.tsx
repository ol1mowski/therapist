import Button from "../../../Components/Button-component/Button-component";
import HeaderOfArticle from "../../../Components/HeaderOfArticle/HeaderOfArticle";
import SectionWrapper from "../../../Components/SectionWrapper/SectionWrapper";
import style from "./About.module.scss";

import { Link } from "react-scroll";

const About = () => {
  return (
    <>
      <SectionWrapper id={"about"} classes={style.aboutContainer}>
        <section className={style.aboutContainer__header}>
          <div className={style.aboutContainer__header__title}>
            <HeaderOfArticle>
              Why <span className={style.aboutContainer__span}>Alice</span> was
              created ?
            </HeaderOfArticle>
          </div>
          <div className={style.aboutContainer__header__title__button}>
            <Link
              activeClass="active"
              to="use"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1200}
            >
              <Button>
                How to use{" "}
                <span className={style.aboutContainer__span}>Alice</span> ?
              </Button>
            </Link>
          </div>
        </section>
        <section className={style.aboutContainer__header__content}>
          <article className={style.aboutContainer__header__content__text}>
            <p className={style.aboutContainer__header__content__text__p}>
              <svg
                id={style.svg}
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <style>{` .svg-fill { fill: #eaeaea; } `}</style>
                <path
                  className="svg-fill"
                  d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"
                />
              </svg>
              In response to the challenges, a team of teachers, psychologists
              and engineers decided to create an innovative solution. They
              decided to create a virtual therapist who could help students
              understand and deal with their emotional problems. This is how the
              idea of "<span className={style.aboutContainer__span}>Alice</span>
              " was born.
            </p>
          </article>
          <article className={style.aboutContainer__header__content__text}>
            <p className={style.aboutContainer__header__content__text__p}>
              The story of{" "}
              <span className={style.aboutContainer__span}>Alice</span>'s
              creation is a perfect example of how advanced technology and a
              commitment to student well-being can come together to create
              innovative solutions in the fields of education and psychology.
            </p>
          </article>
        </section>
      </SectionWrapper>
    </>
  );
};

export default About;
