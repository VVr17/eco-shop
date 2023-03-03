import FormBody from "components/UIkit/FormElements/FormBody";
import {
  ErrorMessage,
  Form,
  IconWrapper,
  Input,
  LoginLabel,
} from "components/UIkit/FormElements/FormElements.styled";
import FormFooter from "components/UIkit/FormElements/FormFooter";
import { BsEyeSlash } from "react-icons/bs";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useState } from "react";
import * as yup from "yup";
import {
  Fields,
  Socials,
  SubmitWrapper,
  ToolBar,
  ToRegister,
  ToRegisterLink,
  ToRegisterText,
} from "./LoginForm.styled";
import { Button } from "components/UIkit";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { useUserGoogleData } from "hooks/useUserGoogleData";
import Box from "components/Box";

/* ------------Validation schema------------ */
const loginValidationSchema = yup.object({
  email: yup.string().email("Invalid email").required("Required field"),
  password: yup
    .string()
    .min(8, "Required min 8 symbols")
    .matches(/[0-9a-zA-Z]/, "Only numbers and letters"),
});
/* ------------Validation schema------------ */

interface ILoginFormProps {
  toRegisterForm: () => void;
}

// Component----------------------------------
const LoginForm: FC<ILoginFormProps> = ({ toRegisterForm }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<string | null>(null);

  function onGoogleUserLogin(error: Error | null, data: {} | null) {
    if (error) {
      console.log(error);
      setLoginError(error.message);
      return;
    }
    console.log(data);
    setLoginError(null);
    // router.push("/");
  }
  const { googleLogin } = useUserGoogleData(onGoogleUserLogin);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidationSchema),
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    // router.push("/");
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} width={["300px", "500px", "500px"]}>
      <FormBody title="Login">
        <Fields>
          <LoginLabel>
            Email
            <Input type="email" {...register("email")} />
            <ErrorMessage>{errors.email?.message as string}</ErrorMessage>
          </LoginLabel>

          <LoginLabel>
            Password
            <Input
              type={isPasswordVisible ? "text" : "password"}
              {...register("password")}
            />
            <ErrorMessage>{errors.password?.message as string}</ErrorMessage>
            <IconWrapper>
              <BsEyeSlash
                size="18px"
                color="#383634"
                onMouseDown={() => {
                  setIsPasswordVisible(true);
                }}
                onMouseUp={() => {
                  setIsPasswordVisible(false);
                }}
              />
            </IconWrapper>
          </LoginLabel>
        </Fields>
      </FormBody>

      <FormFooter>
        <ToolBar>
          <SubmitWrapper>
            <Button
              type="submit"
              text="Log in"
              backgroundColor="mainText"
              color="#F5F3F1"
              pt="14px"
              pb="14px"
              fontSize="16px"
              width="100%"
            />
          </SubmitWrapper>

          <Socials>
            <Button
              text="Google"
              iconLeft={AiOutlineGoogle}
              iconSize="20px"
              iconMargin="16px"
              backgroundColor="transparent"
              color="secondaryAccent"
              borderColor="secondaryAccent"
              fontSize="16px"
              width="100%"
              onClick={() => {
                googleLogin();
              }}
            />

            <Button
              text="Facebook"
              iconLeft={FaFacebookF}
              iconSize="20px"
              iconMargin="16px"
              backgroundColor="transparent"
              color="#3B5998"
              borderColor="#3B5998"
              fontSize="16px"
              width="100%"
            />
          </Socials>
        </ToolBar>
        <ToRegister>
          <ToRegisterText>Haven't account? </ToRegisterText>
          <ToRegisterLink role="link" onClick={toRegisterForm}>
            Registration
          </ToRegisterLink>
        </ToRegister>
        {loginError && (
          <Box as="p" color="red" mt="20px" textAlign="center">
            Login Error: {loginError}
          </Box>
        )}
      </FormFooter>
    </Form>
  );
};

export default LoginForm;
