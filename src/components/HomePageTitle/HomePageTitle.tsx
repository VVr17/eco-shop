import HomePageIcon from "components/HomePageIcon";
import { ComponentType, FC } from "react";
import { IconWrapper, Title } from "./HomePageTitle.styled";

interface IHomePageTitleProps {
  title: string;
  icon?: ComponentType<{ className: string }>;
}

const HomePageTitle: FC<IHomePageTitleProps> = ({ title, icon }) => {
  return (
    <Title>
      <IconWrapper>
        <HomePageIcon icon={icon as ComponentType<{ className: string }>} />
      </IconWrapper>
      {title}
    </Title>
  );
};

export default HomePageTitle;
