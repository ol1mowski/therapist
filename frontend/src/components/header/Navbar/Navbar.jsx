import style from './Navbar.module.scss';

const Navbar = () => {
  return (
    <>
      <nav className={style.navbar}>
        <section className={style.navbar__navigation}>
          <div
            className={style.navbar__navigation__item}
          >
            <a className={style.navbar__navigation__item__a} href="#">Home</a>
          </div>
          <div
            className={style.navbar__navigation__item}
          >
            <a className={style.navbar__navigation__item__a} href="#">About</a>
          </div>
          <div
            className={style.navbar__navigation__item}
          >
            <a className={style.navbar__navigation__item__a} href="#">Docs</a>
          </div>
          <div
            className={style.navbar__navigation__item}
          >
            <a className={style.navbar__navigation__item__a} href="#">Technologies</a>
          </div>
        </section>

        <section className={style.navbar__action}>
          <div
            className={style.navbar__action__item}
          >
            <a
              className={style.navbar__action__item__a}
              href="#"
            >
              Login
            </a>
          </div>
          <div
            className={style.navbar__action__item}
          >
            <a
              className={style.navbar__action__item__a}
              href="#"
            >
              Try
            </a>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-external-link"><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path><path d="M11 13l9 -9"></path><path d="M15 4h5v5"></path></svg>
          </div>
        </section>
      </nav>
    </>
  );
};

export default Navbar;