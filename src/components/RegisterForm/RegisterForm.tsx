import { Button } from "components/UIkit";
import {
  DatePickerInput,
  Fields,
  Footer,
  Form,
  FormContainer,
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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const RegisterForm = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  return (
    <Form>
      <Main>
        <FormContainer>
          <Title>Create account</Title>
          <Fields>
            <Label>
              First name
              <Input type="text" />
            </Label>

            <Label>
              Last name
              <Input type="text" />
            </Label>

            <Label>
              Phone
              <Input type="tel" />
            </Label>

            <Label>
              Email
              <Input type="email" />
            </Label>

            <Label>
              Birth date
              {/* <Input type="date" /> */}
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                customInput={<DatePickerInput />}
              />
            </Label>

            <Label>
              Password
              <Input type="password" />
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

- date and password icons
- date picker
- password visible
- responsive form

- react hook form  + validation

- login form 
- link route to login form 
- responsive login form

*/
