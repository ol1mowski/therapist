import s from "../../../Form-sass/FormStyle.module.scss";

import FormWrapperSuccess from "../../../FormWrapper-component/FormWrapperSuccess.component";

export const ResetSecondStep = () => {
  return (
    <FormWrapperSuccess title="Recovering ">
      <h2 className={s.sucess}>Success !</h2>
      <h3 className={s.content}>
        Further instructions have been sent to the e-mail address you provided
      </h3>
    </FormWrapperSuccess>
  );
};
