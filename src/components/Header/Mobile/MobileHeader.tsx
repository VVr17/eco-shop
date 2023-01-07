import Box from "components/Box";
import IconButton from "components/UIkit/IconButton";
import Logo from "components/UIkit/Logo";
import { DEFAULT_ICON_SIZE } from "constants/constants";
import { theme } from "constants/theme";
import { FiSearch, FiUser, FiShoppingBag } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";

const MobileHeader = () => {
  return (
    <Box
      as="nav"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Logo />
      <Box as="ul" display="flex" gridGap={theme.space[3]}>
        <li>
          <IconButton aria-label="search">
            <FiSearch size={DEFAULT_ICON_SIZE} />
          </IconButton>
        </li>
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
          <IconButton aria-label="cart">
            <RxHamburgerMenu size={DEFAULT_ICON_SIZE} />
          </IconButton>
        </li>
      </Box>
    </Box>
  );
};

export default MobileHeader;
