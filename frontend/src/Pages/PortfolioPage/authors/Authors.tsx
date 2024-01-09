import s from "./Authors.module.scss";

import gitHub from "../../../assets/icons/authors/github.svg";
import linkedin from "../../../assets/icons/authors/linkedin.svg";

import developer from "../../../assets/authors_2.webp";
import SectionWrapper from "../../../Components/SectionWrapper/SectionWrapper";
import HeaderOfArticle from "../../../Components/HeaderOfArticle/HeaderOfArticle";

const Authors = () => {
  return (
    <SectionWrapper id={"authors"} classes={s.authorsContainer}>
      <div className={s.authorsContainer__authorsSection}>
        <div className={s.authorsContainer__authorsSection__header}>
          <HeaderOfArticle>
            Authors
          </HeaderOfArticle>
        </div>
        <div className={s.authorsContainer__authorsSection__author}>
          <h3>Frontend</h3>
          <div className={s.authorsContainer__authorsSection__author__name}>
            <p className={s.authorsContainer__authorsSection__author__name__p}>
              Oliwer Markiewicz
            </p>
            <a
              href="https://www.linkedin.com/in/oliwier-markiewicz-47857228a/"
              className={s.authorsContainer__authorsSection__author__name__a}
              target="_blank"
            >
              <img
                loading="lazy"
                src={linkedin}
                alt="linkedIn"
                className={
                  s.authorsContainer__authorsSection__author__name__icon
                }
              />
            </a>
            <a
              href="https://github.com/ol1mowski"
              className={s.authorsContainer__authorsSection__author__name__a}
              target="_blank"
            >
              <img
                loading="lazy"
                src={gitHub}
                alt="gitHub"
                className={
                  s.authorsContainer__authorsSection__author__name__icon
                }
              />
            </a>
          </div>
        </div>
        <div className={s.authorsContainer__authorsSection__author}>
          <h3>Backend</h3>
          <div className={s.authorsContainer__authorsSection__author__name}>
            <p className={s.authorsContainer__authorsSection__author__name__p}>
              Kacper Pędziwiatr
            </p>
            <a
              href="https://www.linkedin.com/"
              className={s.authorsContainer__authorsSection__author__name__a}
              target="_blank"
            >
              <img
                loading="lazy"
                src={linkedin}
                alt="linkedIn"
                className={
                  s.authorsContainer__authorsSection__author__name__icon
                }
              />
            </a>
            <a
              href="https://github.com/deszaaa"
              className={s.authorsContainer__authorsSection__author__name__a}
              target="_blank"
            >
              <img
                loading="lazy"
                src={gitHub}
                alt="gitHub"
                className={
                  s.authorsContainer__authorsSection__author__name__icon
                }
              />
            </a>
          </div>
        </div>
      </div>
      <div className={s.authorsContainer__image}>
        <img
          src={developer}
          alt="developer with laptop "
          className={s.authorsContainer__image__img}
        />
      </div>
    </SectionWrapper>
  );
};

export default Authors;
