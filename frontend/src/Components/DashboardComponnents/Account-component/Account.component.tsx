import { Form } from "react-router-dom";

import s from "../Dashboard-style/Dashboard.component.module.scss";
import { useState } from "react";

const Account = () => {
  const imageSrc = [
    "https://img.icons8.com/material-outlined/24/A68DDD/hide.png",
    "https://img.icons8.com/material-outlined/24/A68DDD/visible--v1.png",
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const [iconSrc, setIconSrc] = useState<string>(
    "https://img.icons8.com/material-outlined/24/A68DDD/hide.png"
  );

  const changeIconHandler = () => {
    if (currentIndex === 0) {
      setCurrentIndex(1);
      setIconSrc(imageSrc[1]);
    } else {
      setCurrentIndex(0);
      setIconSrc(imageSrc[0]);
    }
  };

  return (
    <main className={s.accountContainer}>
      <header className={s.accountContainer__header}>
        <h2 className={s.accountContainer__header__title}>Change Your Data</h2>
      </header>
      <section className={s.accountContainer__dataWrapper}>
        <section className={s.accountContainer__dataWrapper__topSide}>
          <div className={s.accountContainer__dataWrapper__topSide__item}>
            <p
              className={
                s.accountContainer__dataWrapper__topSide__item__content
              }
            >
              Your name: Alice
            </p>
          </div>
          <div className={s.accountContainer__dataWrapper__topSide__item}>
            <p
              className={
                s.accountContainer__dataWrapper__topSide__item__content
              }
            >
              Your email: alice@alice.pl
            </p>
          </div>
        </section>
        <Form method="post" className={s.accountContainer__formWrapper}>
          <label
            className={s.accountContainer__formWrapper__label}
            htmlFor={"password"}
          >
            Change your password
          </label>
          <div className={s.accountContainer__formWrapper__inputWrapper}>
            {currentIndex === 1 ? (
              <input
                className={s.accountContainer__formWrapper__inputWrapper__input}
                type="text"
                name="password"
              />
            ) : (
              <input
                className={s.accountContainer__formWrapper__inputWrapper__input}
                type="password"
                name="password"
              />
            )}

            <img
              onClick={changeIconHandler}
              src={iconSrc}
              alt="passoword icon"
              className={
                s.accountContainer__formWrapper__inputWrapper__inputIcon
              }
            />
          </div>
          <div className={s.accountContainer__button}>
            <button className={s.accountContainer__button__btn}>Change</button>
          </div>
        </Form>
      </section>
    </main>
  );
};

export default Account;
