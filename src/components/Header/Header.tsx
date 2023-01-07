import Box from "components/Box";
import Container from "components/Container";
import { containerWidth } from "constants/constants";
import { useWindowSize } from "hooks/useWindowSize";
import DesktopHeader from "./Desktop/DesktopHeader";
import MobileHeader from "./Mobile";

const Header: React.FC = () => {
  const { isDesktop, isTablet, isMobile } = useWindowSize();

  return (
    <Box as="header" py={[2, 2, 3, 3]}>
      <Box px={[2, 2, 4, 4]} maxWidth={containerWidth} mx="auto">
        {(isMobile || isTablet) && <MobileHeader />}
        {isDesktop && <DesktopHeader />}
      </Box>
    </Box>
  );
};

export default Header;
