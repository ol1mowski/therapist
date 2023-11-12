import style from './header.module.scss';
import hamburger from '../../assets/icons/hamburger.svg';


const Header = () => {

    return (
        <>
            <header className={style.headerContainer}>
                <nav className={style.headerContainer__hamburgerNav}>
                    <div className={style.headerContainer__hamburgerNav__title}>
                        <h2>
                            Alice
                        </h2>
                    </div>
                    <div className={style.headerContainer__hamburgerNav__iconSection}>
                        <img src={hamburger} alt='hamburger icon' className={style.headerContainer__hamburgerNav__iconSection__icon} />
                    </div>
                </nav>
                <nav className={style.headerContainer__navSection}>
                    <div className={style.headerContainer__navSection__item}>
                        <a href='#'>Home</a>
                    </div>
                    <div className={style.headerContainer__navSection__item}>
                        <a href='#'>About</a>
                    </div>
                    <div className={style.headerContainer__navSection__item}>
                        <a href='#'>Docs</a>
                    </div>
                    <div className={style.headerContainer__navSection__item}>
                        <a href='#'>Technologies</a>
                    </div>
                </nav>
                <section className={style.headerContainer__logSection}>
                    <div className={style.headerContainer__logSection__item}>
                        <a href='#'>Login</a>
                    </div>
                    <div className={style.headerContainer__logSection__item}>
                        <a href='#'>Try</a>
                    </div>
                </section>
            </header>
        </>
    )
}

export default Header;
