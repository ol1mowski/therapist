import s from "../../Dashboard-style/Dashboard.module.scss";

const UserAccount = () => {
  return (
    <section className={s.headerContainer__userAccount}>
      <div className={s.headerContainer__userAccount__icon}>
        <img
          width="50"
          height="50"
          src="https://img.icons8.com/ios/50/ffffff/user-male-circle--v1.png"
          alt="user-male-circle--v1"
        />
      </div>

      <div className={s.headerContainer__userAccount__account}>
        <h3>Your Account</h3>
      </div>
    </section>
  );
};

export default UserAccount;
