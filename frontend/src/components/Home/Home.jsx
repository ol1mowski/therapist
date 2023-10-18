import Header from './Header/Header';
import style from './Home.module.scss';

const Home = () => {
    return (
        <>
            <main className={style.container}>
                <Header />
                <section className={style.container__contentContainer}>

                    <h1 className={style.container__contentContainer__h1}>
                        Hi, I'm Alice
                    </h1>

                    <button id={style.button} className='btn btn-warning'>Learn me</button>
                </section>
            </main>
        </>
    );
}

export default Home;
