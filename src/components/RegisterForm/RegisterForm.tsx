import FormBody from "components/UIkit/FormElements/FormBody";
import FormFooter from "components/UIkit/FormElements/FormFooter";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import loginValidationSchema from "./registerValidationSchema";
import { Button } from "components/UIkit";
import {
  DatePickerInput,
  Fields,
  Socials,
  SubmitWrapper,
  ToLogin,
  ToLoginLink,
  ToLoginText,
  ToolBar,
} from "./RegisterForm.styled";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
import { BsEyeSlash } from "react-icons/bs";
import { FC, useState } from "react";
import { Controller, FieldValues, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import {
  ErrorMessage,
  Form,
  IconWrapper,
  Input,
  Label,
  RegisterLabel,
} from "components/UIkit/FormElements/FormElements.styled";
import { useUserGoogleData } from "hooks/useUserGoogleData";
import Box from "components/Box";

interface IRegisterFormProps {
  toLoginForm: () => void;
}

const RegisterForm: FC<IRegisterFormProps> = ({ toLoginForm }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<string | null>(null);

  function onGoogleUserLogin(error: Error | null, data: {} | null) {
    if (error) {
      console.log(error);
      setLoginError(error.message);
      return;
    }

    //Here can be your code for using User data
    console.log(data);
    //Here can be your code for using User data

    setLoginError(null);
    // router.push("/");
  }
  const { googleLogin } = useUserGoogleData(onGoogleUserLogin);

  const router = useRouter();
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
    router.push("/");
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} width={["300px", "500px", "824px"]}>
      <FormBody title="Create account">
        <Fields>
          <RegisterLabel>
            First name
            <Input type="text" {...register("firstname")} />
            <ErrorMessage>{errors.firstname?.message as string}</ErrorMessage>
          </RegisterLabel>

          <RegisterLabel>
            Last name
            <Input type="text" {...register("lastname")} />
            <ErrorMessage>{errors.lastname?.message as string}</ErrorMessage>
          </RegisterLabel>

          <RegisterLabel>
            Phone
            <Input type="tel" {...register("tel")} />
            <ErrorMessage>{errors.tel?.message as string}</ErrorMessage>
          </RegisterLabel>

          <RegisterLabel>
            Email
            <Input type="email" {...register("email")} />
            <ErrorMessage>{errors.email?.message as string}</ErrorMessage>
          </RegisterLabel>

          <RegisterLabel>
            Birth date
            {/* <Input type="date" /> */}
            <Controller
              control={control}
              name="birthdate"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <>
                  <DatePicker
                    onChange={onChange}
                    onBlur={onBlur}
                    selected={value}
                    // selected={startDate}
                    // onChange={(date) => setStartDate(date)}
                    customInput={<DatePickerInput type="text" />}
                    dateFormat="dd.MM.yyyy"
                    name="birthdate"
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    minDate={new Date("1921-03-03")}
                    maxDate={new Date()}
                  />
                  <ErrorMessage>
                    {errors.birthdate?.message as string}
                  </ErrorMessage>
                </>
              )}
            />
            <IconWrapper>
              <FiCalendar size="18px" color="#383634" />
            </IconWrapper>
          </RegisterLabel>

          <RegisterLabel>
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
          </RegisterLabel>
        </Fields>
      </FormBody>
      <FormFooter>
        <ToolBar>
          <SubmitWrapper>
            <Button
              type="submit"
              text="Sign up"
              backgroundColor="mainText"
              color="#F5F3F1"
              pt="14px"
              pb="14px"
              fontSize="16px"
              width="100%"
            />
          </SubmitWrapper>

          {/* <p>or</p> */}

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
        <ToLogin>
          <ToLoginText>Have an account yet?</ToLoginText>
          <ToLoginLink role="link" onClick={toLoginForm}>
            Log in
          </ToLoginLink>
        </ToLogin>
        {loginError && (
          <Box as="p" color="red" mt="20px" textAlign="center">
            Login Error: {loginError}
          </Box>
        )}
      </FormFooter>
    </Form>
  );
};

export default RegisterForm;

/*
- login form 
- link route to login form 
- responsive login form

*/
