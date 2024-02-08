import s from "../../Dashboard-style/Dashboard.module.scss";

type UserNameProps = {
    name: string;
}

const UserName = ({ name }: UserNameProps) => {
  return (
    <section className={s.headerContainer__userName}>Hi, { name } !</section>
  )
}

export default UserName