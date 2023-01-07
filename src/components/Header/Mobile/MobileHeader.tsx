import Box from "components/Box";
import IconButton from "components/UIkit/IconButton";
import Logo from "components/UIkit/Logo";
import Search from "components/UIkit/Search";
import { DEFAULT_ICON_SIZE } from "constants/constants";
import { theme } from "constants/theme";
import { useWindowSize } from "hooks/useWindowSize";
import { FiSearch, FiUser, FiShoppingBag } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";

const MobileHeader = () => {
  const { isMobile, isTablet } = useWindowSize();

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Box display="flex" alignItems="center" gridGap={theme.space[3]}>
        <Logo />
        {isTablet && <Search />}
      </Box>
      <Box as="ul" display="flex" gridGap={theme.space[3]} alignItems="center">
        {isMobile && (
          <li>
            <IconButton aria-label="search">
              <FiSearch size={DEFAULT_ICON_SIZE} />
            </IconButton>
          </li>
        )}
        <li>
          <IconButton aria-label="auth">
            <FiUser size={DEFAULT_ICON_SIZE} />
          </IconButton>
        </li>
        <li>
          <IconButton aria-label="cart">
            <FiShoppingBag size={DEFAULT_ICON_SIZE} />
          </IconButton>
        </li>
        <li>
          <IconButton aria-label="mobile-menu">
            <RxHamburgerMenu size={DEFAULT_ICON_SIZE} />
          </IconButton>
        </li>
      </Box>
    </Box>
  );
};

export default MobileHeader;
