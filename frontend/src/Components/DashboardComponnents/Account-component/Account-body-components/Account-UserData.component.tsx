import s from "../../Dashboard-style/Dashboard.component.module.scss";

const AccountUserData = () => {
  return (
    <section className={s.accountContainer__dataWrapper__topSide}>
      <div className={s.accountContainer__dataWrapper__topSide__item}>
        <p className={s.accountContainer__dataWrapper__topSide__item__content}>
          Your name: Alice
        </p>
      </div>
      <div className={s.accountContainer__dataWrapper__topSide__item}>
        <p className={s.accountContainer__dataWrapper__topSide__item__content}>
          Your email: alice@alice.pl
        </p>
      </div>
    </section>
  );
};

export default AccountUserData;
