import IconButton from "components/UIkit/IconButton";
import Logo from "components/UIkit/Logo";
import { DEFAULT_ICON_SIZE } from "constants/constants";
import { FiSearch, FiUser, FiShoppingBag } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";

const MobileHeader = () => {
  return (
    <>
      <Logo />
      <IconButton aria-label="search">
        <FiSearch size={DEFAULT_ICON_SIZE} />
      </IconButton>

      <IconButton aria-label="auth">
        <FiUser size={DEFAULT_ICON_SIZE} />
      </IconButton>

      <IconButton aria-label="cart">
        <FiShoppingBag size={DEFAULT_ICON_SIZE} />
      </IconButton>
      <IconButton aria-label="cart">
        <RxHamburgerMenu size={DEFAULT_ICON_SIZE} />
      </IconButton>
    </>
  );
};

export default MobileHeader;
