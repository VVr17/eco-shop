import Box from "components/Box";
import React from "react";
import { Text, Title } from "./Description.styled";

const Description: React.FC<{ description: string }> = ({ description }) => {
  return (
    <Box mb={3}>
      <Title>Description</Title>
      <Text>{description}</Text>
    </Box>
  );
};

export default Description;
