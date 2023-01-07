import Box from "components/Box";
import Container from "components/Container";
import { containerWidth } from "constants/constants";
import MobileHeader from "./Mobile";

const Header: React.FC = () => (
  <Box as="header" py={[2, 2, 3, 3]}>
    <Box px={[2, 2, 4, 4]} maxWidth={containerWidth} mx="auto">
      <MobileHeader />
    </Box>
  </Box>
);

export default Header;
