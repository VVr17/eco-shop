import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { FiSearch, FiUser, FiShoppingBag } from "react-icons/fi";
import { CgMenuGridO } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import Box from "components/Box";
import Button from "components/UIkit/Button";
import Cart from "components/Cart";
import { cartData } from "utils/fakeData/fakeCartData";
import { DEFAULT_ICON_SIZE } from "constants/constants";
import IconButton from "components/UIkit/IconButton";
import Logo from "components/UIkit/Logo";
import ModalTooltip from "components/UIkit/Modal/ModalTooltip";
import Search from "components/UIkit/Search";
import { theme } from "constants/theme";
import { useWindowSize } from "hooks/useWindowSize";
import {
  HeaderContainer,
  LeftSideContainer,
  RightSideContainer,
} from "./Header.styled";

const Header: React.FC = () => {
  const { isDesktop, isTablet, isMobile } = useWindowSize();
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  return (
    <>
      <Box as="header" pt={3} pb={3}>
        <HeaderContainer>
          <LeftSideContainer>
            <Logo />
            {(isTablet || isDesktop) && <Search />}
            {isDesktop && (
              <Button
                text="Categories"
                iconLeft={CgMenuGridO}
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
                  id="tooltipID"
                  text="Cart"
                  iconLeft={FiShoppingBag}
                  hoverColor={theme.colors.hoverHeaderLink}
                  borderColor="transparent"
                  iconSize="24"
                  onClick={() => {
                    setIsTooltipOpen(true);
                  }}
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
        </HeaderContainer>
      </Box>

      {isTooltipOpen && (
        <ModalTooltip
          onClose={() => {
            setIsTooltipOpen(false);
          }}
        >
          <Cart data={cartData} />
        </ModalTooltip>
      )}
    </>
  );
};

export default Header;
