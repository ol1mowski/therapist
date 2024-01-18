import s from "./Technology.module.scss";

import redux from "../../../assets/icons/techno/redux.svg";
import react from "../../../assets/icons/techno/react.svg";
import js from "../../../assets/icons/techno/js.svg";

import mongo from "../../../assets/icons/techno/mongoDb.svg";

import sass from "../../../assets/icons/techno/sass.svg";
import ai from "../../../assets/icons/techno/ai.svg";
import node from "../../../assets/icons/techno/node.svg";

import { Link } from "react-scroll";
import Button from "../../../Components/Button-component/Button-component";
import SectionWrapper from "../../../Components/SectionWrapper/SectionWrapper";
import HeaderOfArticle from "../../../Components/HeaderOfArticle/HeaderOfArticle";

const Technology = () => {
  return (
    <SectionWrapper id={'technologies'} classes={s.technoContainer}>
      <div className={s.technoContainer__content}>
        <HeaderOfArticle>Technologies</HeaderOfArticle>
        <p className={s.technoContainer__content__p}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make
        </p>
        <div className={s.technoContainer__content__button}>
          <Link
            activeClass="active"
            to="authors"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1200}
          >
            <Button>
              Who created <span className={s.technoContainer__span}>Alice</span>{" "}
              ?
            </Button>
          </Link>
        </div>
      </div>
      <div className={s.technoContainer__image}>
        <div className={s.technoContainer__image__imgWrapper}>
          <img
            loading="lazy"
            src={redux}
            alt="redux icon"
            className={s.technoContainer__image__imgWrapper__img}
          />
          <img
            loading="lazy"
            src={react}
            alt="redux icon"
            id={s.react}
            className={s.technoContainer__image__imgWrapper__img}
          />
          <img
            loading="lazy"
            src={js}
            alt="redux icon"
            className={s.technoContainer__image__imgWrapper__img}
          />
        </div>
        <div className={s.technoContainer__image__imgWrapper}>
          <img
            loading="lazy"
            src={mongo}
            alt="mongoDb icon"
            className={s.technoContainer__image__imgWrapper__imgM}
          />
        </div>
        <div className={s.technoContainer__image__imgWrapper}>
          <img
            loading="lazy"
            src={sass}
            alt="sass icon"
            className={s.technoContainer__image__imgWrapper__img}
          />
          <img
            loading="lazy"
            src={ai}
            alt="ai icon"
            className={s.technoContainer__image__imgWrapper__img}
          />
          <img
            loading="lazy"
            src={node}
            alt="node icon"
            className={s.technoContainer__image__imgWrapper__imgN}
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Technology;
