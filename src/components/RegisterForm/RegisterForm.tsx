import { Button } from "components/UIkit";
import {
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
import Link from "next/link";

const RegisterForm = () => {
  return (
    <Form>
      <Main>
        <FormContainer>
          <Title>Create account</Title>
          <Fields>
            <Label>
              First name
              <Input />
            </Label>

            <Label>
              Last name
              <Input />
            </Label>

            <Label>
              Phone
              <Input />
            </Label>

            <Label>
              Email
              <Input />
            </Label>

            <Label>
              Birth date
              <Input />
            </Label>

            <Label>
              Password
              <Input />
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
