import HomePageIcon from "components/HomePageIcon";
import { FC, ReactNode } from "react";
import { IconWrapper, Title } from "./HomePageTitle.styled";

interface IHomePageTitleProps {
  title: string;
  icon?: ReactNode;
}

const HomePageTitle: FC<IHomePageTitleProps> = ({ title, icon }) => {
  return (
    <Title>
      <IconWrapper>
        <HomePageIcon icon={icon} />
      </IconWrapper>
      {title}
    </Title>
  );
};

export default HomePageTitle;
