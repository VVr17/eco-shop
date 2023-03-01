import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "components/UIkit";
import {
  DatePickerInput,
  ErrorMessage,
  Fields,
  Footer,
  Form,
  FormContainer,
  IconWrapper,
  Input,
  Label,
  Main,
  Socials,
  SubmitWrapper,
  Title,
  ToLogin,
  ToLoginLink,
  ToLoginText,
  ToolBar,
} from "./RegisterForm.styled";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
import { BsEyeSlash } from "react-icons/bs";
import { useState } from "react";
import { Controller, FieldValues, useForm } from "react-hook-form";
import loginValidationSchema from "./loginValidationSchema";
import { yupResolver } from "@hookform/resolvers/yup";

const RegisterForm = () => {
  // const [startDate, setStartDate] = useState<Date | null>(null);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidationSchema),
  });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Main>
        <FormContainer>
          <Title>Create account</Title>
          <Fields>
            <Label>
              First name
              <Input type="text" {...register("firstname")} />
              <ErrorMessage>{errors.firstname?.message as string}</ErrorMessage>
            </Label>

            <Label>
              Last name
              <Input type="text" {...register("lastname")} />
              <ErrorMessage>{errors.lastname?.message as string}</ErrorMessage>
            </Label>

            <Label>
              Phone
              <Input type="tel" {...register("tel")} />
              <ErrorMessage>{errors.tel?.message as string}</ErrorMessage>
            </Label>

            <Label>
              Email
              <Input type="email" {...register("email")} />
              <ErrorMessage>{errors.email?.message as string}</ErrorMessage>
            </Label>

            <Label>
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
            </Label>

            <Label>
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
            </Label>
          </Fields>
        </FormContainer>
      </Main>
      <Footer>
        <FormContainer>
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
            <ToLoginLink href="/">Log in</ToLoginLink>
          </ToLogin>
        </FormContainer>
      </Footer>
    </Form>
  );
};

export default RegisterForm;

/*



- responsive form


- login form 
- link route to login form 
- responsive login form

*/
