import s from '../Form-component.module.scss';

type FormHeaderProps = {
    title: string;
}

const FormHeader = ({ title }: FormHeaderProps) => {
  return (
    <h3 className={s.loginContainer__wrapper__loginFormContainer__header}>
        { title } {''}
        <span
          className={
            s.loginContainer__wrapper__loginFormContainer__header__alice
          }
        >
          Alice
        </span>{" "}
        account
      </h3>
  )
}

export default FormHeader;
