import { FC, ReactNode } from "react";
import { HomeContainer } from "./HomePageContainer.styled";

interface IHomePageContainerProps {
  children: ReactNode;
}

const HomePageContainer: FC<IHomePageContainerProps> = ({ children }) => {
  return <HomeContainer>{children}</HomeContainer>;
};

export default HomePageContainer;
