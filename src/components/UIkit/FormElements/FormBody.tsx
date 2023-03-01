import { FC, ReactNode } from "react";
import { Body, FormContainer, Title } from "./FormElements.styled";

interface IFormBodyProps {
  title: string;
  children: ReactNode;
}

const FormBody: FC<IFormBodyProps> = ({ title, children }) => {
  return (
    <Body>
      <FormContainer>
        <Title>{title}</Title>

        {children}
      </FormContainer>
    </Body>
  );
};

export default FormBody;
