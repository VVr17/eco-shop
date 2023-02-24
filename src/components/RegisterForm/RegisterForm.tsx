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
  Title,
  ToLogin,
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
            <Button
              type="submit"
              text="Sign up"
              backgroundColor="mainText"
              color="#F5F3F1"
              pt="14px"
              pb="14px"
              fontSize="16px"
            />
            <p>or</p>
            <Socials>
              <Button
                text="Google"
                iconLeft={AiOutlineGoogle}
                iconSize="20px"
                iconMargin="16px"
                backgroundColor="transparent"
                color="secondaryAccent"
                borderColor="secondaryAccent"
                pl="37px"
                pr="37px"
                pt="14px"
                pb="14px"
                fontSize="16px"
              />
              <Button
                text="Facebook"
                iconLeft={FaFacebookF}
                iconSize="20px"
                iconMargin="16px"
                backgroundColor="transparent"
                color="#3B5998"
                borderColor="#3B5998"
                pl="26px"
                pr="32px"
                pt="14px"
                pb="14px"
                fontSize="16px"
              />
            </Socials>
          </ToolBar>
          <ToLogin>
            <p>Have an account yet?</p>
            <Link href="/">Log in</Link>
          </ToLogin>
        </FormContainer>
      </Footer>
    </Form>
  );
};

export default RegisterForm;
