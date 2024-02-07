import s from '../Dashboard-style/Dashboard.module.scss';

export const DashboardHeader = () => {
  return (
    <header className={s.headerContainer}>
        <section className={s.headerContainer__userName}>
          Hi, Oliwier !
        </section>
    </header>
  )
}
