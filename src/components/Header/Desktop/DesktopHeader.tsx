import Box from "components/Box";
import Button from "components/UIkit/Button";
import IconButton from "components/UIkit/IconButton";
import Logo from "components/UIkit/Logo";
import Search from "components/UIkit/Search";
import { DEFAULT_ICON_SIZE } from "constants/constants";
import { theme } from "constants/theme";
import { useWindowSize } from "hooks/useWindowSize";
import { FiSearch, FiShoppingBag, FiUser } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoListOutline } from "react-icons/io5";
import { BiChevronDown } from "react-icons/bi";

const DesktopHeader = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Box display="flex" gridGap={theme.space[4]}>
        <Logo />
        <Search />
        <Button
          text="Categories"
          iconLeft={IoListOutline}
          backgroundColor={theme.colors.mainBackground}
          hoverColor={theme.colors.hoverHeaderLink}
          borderColor="transparent"
          iconSize="24"
        />
      </Box>
      <Box as="ul" display="flex" gridGap={theme.space[3]}>
        <li>
          <Button
            text="User"
            iconLeft={FiUser}
            iconRight={BiChevronDown}
            backgroundColor={theme.colors.mainBackground}
            hoverColor={theme.colors.hoverHeaderLink}
            borderColor="transparent"
            iconSize="24"
          />
        </li>
        <li>
          <Button
            text="Cart"
            iconLeft={FiShoppingBag}
            hoverColor={theme.colors.hoverHeaderLink}
            borderColor="transparent"
            iconSize="24"
          />
        </li>
      </Box>
    </Box>
  );
};

export default DesktopHeader;
