import Box from "../../Box";
import Button from "./Button";
import { FiRefreshCw } from "react-icons/fi";
import { AiOutlinePlus, AiOutlineGoogle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const ButtonExamples = () => {
  return (
    <Box p="30px" backgroundColor="white">
      <br />
      <br />
      <Box
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        backgroundColor="#F5F3F1"
        p={3}
        gridGap={4}
      >
        <Button
          text="Add"
          iconRight={AiOutlinePlus}
          iconMargin="16px"
          borderColor="input"
          hoverColor="accent"
        />
        <Button
          text="Load more"
          iconLeft={FiRefreshCw}
          borderColor="input"
          backgroundColor="transparent"
          pl="85px"
          pr="85px"
          pt="14px"
          pb="14px"
        />
        <Button
          text="Show all"
          iconLeft={FiRefreshCw}
          borderColor="input"
          pl="35px"
          pr="49px"
          pt="14px"
          pb="14px"
        />
        <Button
          text="Add  to cart"
          iconRight={AiOutlinePlus}
          iconMargin="16px"
          backgroundColor="accent"
          color="lightText"
          pl="23px"
          pr="23px"
          pt="19px"
          pb="19px"
          fontSize="16px"
        />
        <Button
          text="To checkout"
          backgroundColor="accent"
          color="lightText"
          pl="93px"
          pr="93px"
          pt="14px"
          pb="14px"
          fontSize="16px"
        />
        <Button
          text="Sign up"
          backgroundColor="mainText"
          color="#F5F3F1"
          width="340px"
          pt="14px"
          pb="14px"
          fontSize="16px"
        />

        <Button
          text="Google"
          iconLeft={AiOutlineGoogle}
          iconSize="20px"
          iconMargin="16px"
          backgroundColor="transparent"
          color="secondaryAccent"
          borderColor="secondaryAccent"
          pl="37px"
          pr="37px"
          pt="14px"
          pb="14px"
          fontSize="16px"
        />

        <Button
          text="Facebook"
          iconLeft={FaFacebookF}
          iconSize="20px"
          iconMargin="16px"
          backgroundColor="transparent"
          color="#3B5998"
          borderColor="#3B5998"
          pl="26px"
          pr="32px"
          pt="14px"
          pb="14px"
          fontSize="16px"
        />

        <Button
          text="Go to homepage"
          backgroundColor="secondaryAccent"
          color="lightText"
          width="150px"
        />

        <Button
          text="Report a bug"
          backgroundColor="transparent"
          color="secondaryAccent"
          borderColor="secondaryAccent"
          width="150px"
        />
      </Box>
      <br /> <br /> <br />
      <Button text="Border none" borderColor="accent" borderStyle="none" />
      <Button text="Add" borderColor="accent" hoverColor="rgba(0,0,0,0.5)" />
      <Button text="margin left (theme) = {4}" borderColor="accent" ml={4} />
      <Button text="margin left = 70px" borderColor="accent" ml="70px" />
      <Button
        text="color='default' backgroundColor='default'"
        borderColor="input"
      />
      <Button
        text="backgroundColor and color from theme"
        backgroundColor="accent"
        color="lightText"
      />
      <Button
        text="backgroundColor by user #4486ff, border none"
        backgroundColor="#4486ff"
      />
      <Button text="borderColor from theme: 'accent'" borderColor="accent" />
      <Button text="borderRadius default" borderColor="accent" />
      <Button text="borderRadius 5px" borderColor="accent" borderRadius="5px" />
      <Button
        text="padding right & left = 60px"
        borderColor="accent"
        pl="60px"
        pr="60px"
      />
      <Button text="width = 100%" borderColor="accent" width="100%" />
      <Button
        text="Icon left and right"
        borderColor="accent"
        iconLeft={FiRefreshCw}
        iconRight={FiRefreshCw}
      />
      <br />
      <br />
    </Box>
  );
};

export default ButtonExamples;
