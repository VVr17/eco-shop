import LoginForm from "components/LoginForm";
import RegisterForm from "components/RegisterForm";
import { FC, useState } from "react";

interface IUserFormProps {
  isLogin?: boolean;
}

const UserForm: FC<IUserFormProps> = ({ isLogin = false }) => {
  const [isLoginForm, setIsLoginForm] = useState<boolean>(isLogin);

  return (
    <>
      {isLoginForm ? (
        <LoginForm
          toRegisterForm={() => {
            setIsLoginForm(false);
          }}
        />
      ) : (
        <RegisterForm
          toLoginForm={() => {
            setIsLoginForm(true);
          }}
        />
      )}
    </>
  );
};

export default UserForm;
