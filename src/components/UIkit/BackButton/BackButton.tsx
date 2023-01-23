import { useRouter } from "next/router";
import { MouseEventHandler } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { BackButtonStyled } from "./BackButton.styled";

const BackButton = () => {
  const router = useRouter();

  return (
    <BackButtonStyled onClick={() => router.back()}>
      <IoIosArrowBack size={20} />
      Go back
      {/* To Dried fruits */}
    </BackButtonStyled>
  );
};

export default BackButton;
