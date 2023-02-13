import HomePageIcon from "components/HomePageIcon";
import { ComponentType, FC } from "react";
import {
  IconWrapper,
  Title,
  StyledLink,
  TitleBar,
} from "./HomePageTitle.styled";
import { SlArrowRight } from "react-icons/sl";

interface IHomePageTitleProps {
  title: string;
  icon?: ComponentType<{ className: string }>;
  needViewAllLink?: boolean;
}

const HomePageTitle: FC<IHomePageTitleProps> = ({
  title,
  icon,
  needViewAllLink = false,
}) => {
  return (
    <TitleBar>
      <Title>
        <IconWrapper>
          <HomePageIcon icon={icon as ComponentType<{ className: string }>} />
        </IconWrapper>
        {title}
      </Title>

      {needViewAllLink && (
        <StyledLink href={"/"}>
          View all <SlArrowRight size={14} />
        </StyledLink>
      )}
    </TitleBar>
  );
};

export default HomePageTitle;
