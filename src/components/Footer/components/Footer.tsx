import React, { FC } from "react";
import Container from "components/Container";
import About from "./About";
import Links from "./Links";
import SignIn from "./SignIn";
import { FooterWrapper } from "./Footer.styled";
import Box from "components/Box";

const Footer: FC = () => {
  return (
    <Box
      pt={["64px", "64px", "64px", "80px"]}
      pb={["64px", "64px", "64px", "80px"]}
      backgroundColor="input"
    >
      <Container>
        <FooterWrapper>
          <About />
          <Links />
          <SignIn />
        </FooterWrapper>
      </Container>
    </Box>
  );
};

export default Footer;
