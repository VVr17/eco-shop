import { ContainerStyled } from "./Container.styled";

interface IProps {
  children?: React.ReactNode;
}
const Container: React.FC<IProps> = ({ children }) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};
export default Container;
