import { useState, useEffect } from 'react';
import Header from './Header/Header';
import style from './Home.module.scss';

const Home = () => {
    const [string, setString] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    const textToType = "Hi, I'm Alice";

    const typeString = () => {
        if (currentIndex < textToType.length) {
            setString((prevString) => prevString + textToType[currentIndex]);
            setCurrentIndex(currentIndex + 1);
        }
    };

    useEffect(() => {
        const interval = setInterval(typeString, 200); 
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <>
            <main className={style.container}>
                <Header />
                <section className={style.container__contentContainer}>
                    <h1 className={style.container__contentContainer__h1}>
                        {string}
                    </h1>
                    <button id={style.button} className='btn btn-warning' onClick={typeString}>Learn me</button>
                </section>
            </main>
        </>
    );
}

export default Home;
