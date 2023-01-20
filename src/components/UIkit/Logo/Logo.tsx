import { LogoIcon } from "assets/icons";
import Image from "next/image";
import { LogoWrapper } from "./Logo.styled";

const Logo = () => {
  return (
    <LogoWrapper href="/">
      {/* <LogoIcon /> */}
      <Image src={"logo.svg"} width={83} height={32} alt="logo" />
    </LogoWrapper>
  );
};

export default Logo;
