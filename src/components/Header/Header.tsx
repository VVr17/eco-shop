import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { FiSearch, FiUser, FiShoppingBag } from "react-icons/fi";
import { CgMenuGridO } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import Box from "components/Box";
import Button from "components/UIkit/Button";
import Cart from "components/Cart";
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
import { useGetCategoriesQuery } from "redux/api/manualApi";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const router = useRouter();
  const { isDesktop, isTablet, isMobile } = useWindowSize();
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const { isLoading, error, data: categories } = useGetCategoriesQuery();
  console.log(categories);

  return (
    <>
      {/* <article>
        {error ? (
          <>Oh no, there was an error</>
        ) : router.isFallback || isLoading ? (
          <>Loading...</>
        ) : categories ? (
          <>{categories.map((category) => category.title)}</>
        ) : null}
      </article> */}

      <Box as="header" pt={3} pb={3}>
        <HeaderContainer>
          <LeftSideContainer>
            <Logo />
            {(isTablet || isDesktop) && <Search />}
            {isDesktop ? (
              <Button
                text="Categories"
                iconLeft={CgMenuGridO}
                backgroundColor={theme.colors.mainBackground}
                hoverColor={theme.colors.hoverHeaderLink}
                borderColor="transparent"
                iconSize="24"
              />
            ) : (
              <Button
                aria-label="Categories"
                text=""
                iconLeft={CgMenuGridO}
                iconMargin="0"
                backgroundColor="transparent"
                borderColor="transparent"
                pl={theme.space[2]}
                pr={theme.space[2]}
                pt={theme.space[2]}
                pb={theme.space[2]}
                iconSize="20px"
              />
            )}
          </LeftSideContainer>

          <RightSideContainer>
            {isMobile && (
              <li>
                <Button
                  aria-label="search"
                  text=""
                  iconLeft={FiSearch}
                  iconMargin="0"
                  backgroundColor="transparent"
                  borderColor="transparent"
                  pl={theme.space[2]}
                  pr={theme.space[2]}
                  pt={theme.space[2]}
                  pb={theme.space[2]}
                  iconSize="20px"
                />
              </li>
            )}

            <li>
              {isMobile || isTablet ? (
                <Button
                  aria-label="auth"
                  text=""
                  iconLeft={FiUser}
                  iconMargin="0"
                  backgroundColor="transparent"
                  borderColor="transparent"
                  pl={theme.space[2]}
                  pr={theme.space[2]}
                  pt={theme.space[2]}
                  pb={theme.space[2]}
                  iconSize="20px"
                />
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
                <Button
                  aria-label="cart"
                  id="tooltipID"
                  text=""
                  iconLeft={FiShoppingBag}
                  iconMargin="0"
                  onClick={() => {
                    setIsTooltipOpen(true);
                  }}
                  backgroundColor="transparent"
                  borderColor="transparent"
                  pl={theme.space[2]}
                  pr={theme.space[2]}
                  pt={theme.space[2]}
                  pb={theme.space[2]}
                  iconSize="20px"
                />
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
                <Button
                  aria-label="mobile-menu"
                  text=""
                  iconLeft={RxHamburgerMenu}
                  iconMargin="0"
                  backgroundColor="transparent"
                  borderColor="transparent"
                  pl={theme.space[2]}
                  pr={theme.space[2]}
                  pt={theme.space[2]}
                  pb={theme.space[2]}
                  iconSize="20px"
                />
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
          <Cart
            onModalClose={() => {
              setIsTooltipOpen(false);
            }}
          />
        </ModalTooltip>
      )}
    </>
  );
};

export default Header;
