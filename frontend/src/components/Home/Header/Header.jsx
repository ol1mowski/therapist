import style from './Header.module.scss'

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.header__login}>
                Login
            </div>
            <div className={style.header__try}>
                Try Alice
            </div>
        </header>
    )
}

export default Header;
