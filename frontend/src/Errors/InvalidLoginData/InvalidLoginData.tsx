type InvalidLoginDataProps = {
  style: {
    loginContainer__wrapper__loginFormContainer__form__loginError?: string;
    loginContainer__wrapper__loginFormContainer__form__loginError__error?: string;
  };
};

export default function InvalidLoginData({ style }: InvalidLoginDataProps) {
  return (
    <div
      className={
        style.loginContainer__wrapper__loginFormContainer__form__loginError
      }
    >
      <p
        className={
          style.loginContainer__wrapper__loginFormContainer__form__loginError__error
        }
      >
        [-] Your email or password is invalid
      </p>
    </div>
  );
}
