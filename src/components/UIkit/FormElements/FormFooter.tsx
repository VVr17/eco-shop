import { FC, ReactNode } from "react";
import { Footer, FormContainer } from "./FormElements.styled";

interface IFormBodyProps {
  children: ReactNode;
}

const FormFooter: FC<IFormBodyProps> = ({ children }) => {
  return (
    <Footer>
      <FormContainer>{children}</FormContainer>
    </Footer>
  );
};

export default FormFooter;
