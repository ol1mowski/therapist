import s from "../../../Form-sass/FormStyle.module.scss";


import { FormWrapper } from "../../../FormWrapper-component/FormWrapper.component";

export const ResetSecondStep = () => {
  return (
    <FormWrapper
      title="Recovering "
      firstFeature="Login to your accounr"
      firstFeatureLink="/form/login"
      secondFeature="Create new account"
      secondFeatureLink="/form/signup"
    >
        <h2 className={s.sucess}>Success !</h2>
      <h3 className={s.content}>
        Further instructions have been sent to the e-mail address you provided
      </h3>
    </FormWrapper>
  );
};
