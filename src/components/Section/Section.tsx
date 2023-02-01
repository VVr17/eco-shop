import React from "react";
import Box from "components/Box";
import Container from "components/Container";

interface IProps {
  children?: React.ReactNode;
}

const Section: React.FC<IProps> = ({ children }) => {
  return (
    <Box as="section" pt={[3, 3, 4, 5]} pb={[4, 4, 5, 5]}>
      <Container>{children}</Container>
    </Box>
  );
};

export default Section;
