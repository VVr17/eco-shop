import Box from "components/Box";
import { containerWidth } from "constants/constants";
import { useWindowSize } from "hooks/useWindowSize";
import IconButton from "components/UIkit/IconButton";
import Logo from "components/UIkit/Logo";
import Search from "components/UIkit/Search";
import { DEFAULT_ICON_SIZE } from "constants/constants";
import { theme } from "constants/theme";
import { FiSearch, FiUser, FiShoppingBag } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoListOutline } from "react-icons/io5";
import { BiChevronDown } from "react-icons/bi";
import Button from "components/UIkit/Button";
import { LeftSideContainer, RightSideContainer } from "./Header.styled";

const Header: React.FC = () => {
  const { isDesktop, isTablet, isMobile } = useWindowSize();

  return (
    <Box as="header" py={[2, 2, 3, 3]}>
      <Box
        px={[2, 2, 4, 4]}
        maxWidth={containerWidth}
        mx="auto"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <LeftSideContainer>
          <Logo />
          {(isTablet || isDesktop) && <Search />}
          {isDesktop && (
            <Button
              text="Categories"
              iconLeft={IoListOutline}
              backgroundColor={theme.colors.mainBackground}
              hoverColor={theme.colors.hoverHeaderLink}
              borderColor="transparent"
              iconSize="24"
            />
          )}
        </LeftSideContainer>

        <RightSideContainer>
          {isMobile && (
            <li>
              <IconButton aria-label="search">
                <FiSearch size={DEFAULT_ICON_SIZE} />
              </IconButton>
            </li>
          )}

          <li>
            {isMobile || isTablet ? (
              <IconButton aria-label="auth">
                <FiUser size={DEFAULT_ICON_SIZE} />
              </IconButton>
            ) : (
              <Button
                text="User"
                iconLeft={FiUser}
                iconRight={BiChevronDown}
                backgroundColor={theme.colors.mainBackground}
                hoverColor={theme.colors.hoverHeaderLink}
                borderColor="transparent"
                iconSize="24"
              />
            )}
          </li>

          <li>
            {isMobile || isTablet ? (
              <IconButton aria-label="cart">
                <FiShoppingBag size={DEFAULT_ICON_SIZE} />
              </IconButton>
            ) : (
              <Button
                text="Cart"
                iconLeft={FiShoppingBag}
                hoverColor={theme.colors.hoverHeaderLink}
                borderColor="transparent"
                iconSize="24"
              />
            )}
          </li>

          {(isMobile || isTablet) && (
            <li>
              <IconButton aria-label="mobile-menu">
                <RxHamburgerMenu size={DEFAULT_ICON_SIZE} />
              </IconButton>
            </li>
          )}
        </RightSideContainer>
      </Box>
    </Box>
  );
};

export default Header;
