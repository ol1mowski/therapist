
import { useEffect, useState } from 'react';

import { useParams } from "react-router-dom";

import LoginPageComponent from './LoginPageComponent/LoginPageComponent';

const LoginPage = () => {
  const { id } = useParams();

  const [form, setForm] = useState<string | undefined>(undefined);

  useEffect(() => {

    setForm(id)
  
  }, [id]);

  return (
    <LoginPageComponent form={form}/>
  );
};

export default LoginPage;
