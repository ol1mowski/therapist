import { Link } from "react-router-dom";
import s from "../../../Form-sass/FormStyle.module.scss";

import FormWrapperSuccess from "../../../FormWrapper-component/FormWrapperSuccess.component";

const SignupSuccess = () => {
  return (
    <FormWrapperSuccess title="Success to create ">
      <h2 className={s.sucess}>Success !</h2>
      <h3 className={s.content}>
        Your account has successfully created ! Let's login now
      </h3>
      <Link to="/form/login">Login</Link>
    </FormWrapperSuccess>
  );
};

export default SignupSuccess;