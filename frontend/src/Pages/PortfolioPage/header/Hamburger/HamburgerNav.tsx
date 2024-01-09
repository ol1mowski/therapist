import style from './HamburgerNav.module.scss';
import hamburger from "../../../../assets/icons/hamburger.svg";
import hamburger_x from "../../../../assets/icons/hamburger_x.svg";
import LinkComponent from '../LinkComponents/LinkComponent';

type HamburgerMenuProps = {
    closeMenuHandler: () => void;
    showMenuHandler: () => void;
    navSection: React.RefObject<HTMLDivElement>;
    hamburgerItems: React.RefObject<HTMLDivElement>;
};

type LinksType = {
    id: number;
    name: string;
}[];

//add to db in feature
const LINKS: LinksType = [
    {
        id: 1,
        name: 'Home',
    },
    {
        id: 2,
        name: 'About',
    },
    {
        id: 3,
        name: 'Use',
    },
    {
        id: 4,
        name: 'Technologies',
    },
];

const HamburgerNav = ({ closeMenuHandler, showMenuHandler, navSection, hamburgerItems }: HamburgerMenuProps) => {
    return (
        <>
            <nav className={style.hamburgerNav}>
                <div className={style.hamburgerNav__title}>
                    <h2 className={style.hamburgerNav__title__h2}>
                        Alice
                    </h2>
                </div>
                <div
                    onClick={showMenuHandler}
                    className={style.hamburgerNav__iconSection}
                >
                    <img src={hamburger} alt="hamburger icon" />
                </div>
            </nav>

            <nav ref={navSection} className={style.navSection}>
                <section className={style.navSection__closeMenu}>
                    <img onClick={closeMenuHandler} src={hamburger_x} alt="Close menu icon" />
                </section>
                <section ref={hamburgerItems} className={style.navSection__items}>
                    <div className={style.navSection__items__nav}>
                        {LINKS.map((item) => (
                            <LinkComponent
                                key={item.id}
                                name={item.name}
                                closeMenuHandler={closeMenuHandler}
                            />
                        ))}
                    </div>

                    <div className={style.navSection__items__log}>
                        <div
                            className={style.navSection__items__log__item}
                        >
                            <a
                                className={style.navSection__items__log__item__a}
                                href="#"
                            >
                                Login
                            </a>
                        </div>
                        <div
                            className={style.navSection__items__log__item}
                        >
                            <a
                                className={style.navSection__items__log__item__a}
                                href="#"
                            >
                                Try
                            </a>
                            <svg
                                id={style.svg}
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="tabler-icon tabler-icon-external-link"
                            >
                                <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                                <path d="M11 13l9 -9"></path>
                                <path d="M15 4h5v5"></path>
                            </svg>
                        </div>
                    </div>
                </section>
            </nav>
        </>
    );
};

export default HamburgerNav;
