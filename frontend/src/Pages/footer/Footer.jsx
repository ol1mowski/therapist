import s from './Footer.module.scss';

import gitHub from '../../assets/icons/gitHub_white.svg';

const Footer = () => {
    return (
        <section className={s.footerContainer}>
            <section className={s.footerContainer__upper}>
                <div className={s.footerContainer__upper__name}>
                    <h2 className={s.footerContainer__upper__name__title}>
                        ALICE Virtual Therapist
                    </h2>
                </div>
                <div className={s.footerContainer__upper__tools}>
                    <a href='qq' target='_blank'>
                        <div className={s.footerContainer__upper__tools__tool}>
                            <p className={s.footerContainer__upper__tools__tool__text}>
                                See project on Github
                            </p>
                            <img src={gitHub} alt="gitHub icons" className={s.footerContainer__upper__tools__tool__icon} />
                        </div>
                    </a>
                    <div className={s.footerContainer__upper__tools__tool}>
                        <p className={s.footerContainer__upper__tools__tool__text}>
                            See live project
                        </p>
                        <svg id={s.svg} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-external-link"><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path><path d="M11 13l9 -9"></path><path d="M15 4h5v5"></path></svg>
                    </div>
                </div>
            </section>
            <menu className={s.footerContainer__down}>
                <div className={s.footerContainer__down__navigation}>
                    <h3 className={s.footerContainer__down__navigation__header}>
                        Navigation
                    </h3>
                    <ul className={s.footerContainer__down__navigation__list}>
                        <li>
                            <a className={s.footerContainer__down__navigation__list__a} href="#home">
                                Home Page
                            </a>
                        </li>
                        <li>
                            <a className={s.footerContainer__down__navigation__list__a} href="#about">
                                About Project
                            </a>
                        </li> <li>
                            <a className={s.footerContainer__down__navigation__list__a} href="#use">
                                How to use ?
                            </a>
                        </li> <li>
                            <a className={s.footerContainer__down__navigation__list__a} href="#technologies">
                                Technologies used
                            </a>
                        </li>

                    </ul>
                </div>
                <div className={s.footerContainer__down__copyright}>
                    <p className={s.footerContainer__down__copyright__content}>
                        Copyright © 2023. All rights are reserved
                    </p>
                </div>
            </menu>
        </section>
    )
}

export default Footer