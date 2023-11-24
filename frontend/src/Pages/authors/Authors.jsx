import s from './Authors.module.scss';

import gitHub from '../../assets/icons/authors/github.svg';
import linkedin from '../../assets/icons/authors/linkedin.svg';


import developer from '../../assets/authors_2.webp';

const Authors = () => {
    return (
        <section id='authors' className={s.authorsContainer}>
            <div className={s.authorsContainer__authorsSection}>
                <div className={s.authorsContainer__authorsSection__header}>
                    <h2 className={s.authorsContainer__authorsSection__header__h2}>
                        Authors
                    </h2>
                </div>
                <div className={s.authorsContainer__authorsSection__author}>
                    <h3>
                        Frontend
                    </h3>
                    <div className={s.authorsContainer__authorsSection__author__name}>
                        <p className={s.authorsContainer__authorsSection__author__name__p}>
                            Oliwer Markiewicz
                        </p>
                        <a href='https://www.linkedin.com/in/oliwier-markiewicz-47857228a/' className={s.authorsContainer__authorsSection__author__name__a} target='_blank'>
                            <img src={linkedin} alt='linkedIn' className={s.authorsContainer__authorsSection__author__name__icon} />
                        </a>
                        <a href='https://github.com/ol1mowski' className={s.authorsContainer__authorsSection__author__name__a} target='_blank'>
                            <img src={gitHub} alt='gitHub' className={s.authorsContainer__authorsSection__author__name__icon} />
                        </a>
                    </div>
                </div>
                <div className={s.authorsContainer__authorsSection__author}>
                    <h3>
                        Backend
                    </h3>
                    <div className={s.authorsContainer__authorsSection__author__name}>
                        <p className={s.authorsContainer__authorsSection__author__name__p}>
                            Kacper Pędziwiatr
                        </p>
                        <a href='https://www.linkedin.com/' className={s.authorsContainer__authorsSection__author__name__a} target='_blank'>
                            <img src={linkedin} alt='linkedIn' className={s.authorsContainer__authorsSection__author__name__icon} />
                        </a>
                        <a href='https://github.com/deszaaa' className={s.authorsContainer__authorsSection__author__name__a} target='_blank'>
                            <img src={gitHub} alt='gitHub' className={s.authorsContainer__authorsSection__author__name__icon} />
                        </a>
                    </div>
                </div>
            </div>
            <div className={s.authorsContainer__image}>
                <img src={developer} alt='developer with laptop ' className={s.authorsContainer__image__img} />
            </div>
        </section>
    );
};

export default Authors;

