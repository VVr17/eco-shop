import { Logo } from "components/UIkit";
import { useWindowSize } from "hooks/useWindowSize";
import Conditions from "../Conditions";
import {
  AboutWrapper,
  Company,
  CompanyName,
  Copyright,
  Info,
} from "./About.styled";

const About = () => {
  const { isDesktop } = useWindowSize();
  return (
    <AboutWrapper>
      <Company>
        <Logo />
        <CompanyName>Eco Food Market SPROUT Goods Ltd.</CompanyName>
      </Company>

      <Info>
        {!isDesktop && <Conditions />}
        <Copyright>2021 &copy; All rights reserved</Copyright>
      </Info>
    </AboutWrapper>
  );
};

export default About;
