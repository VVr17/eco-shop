import { Button } from "components/UIkit";
import { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";
import { Article, Meta, Text, Title } from "./InteractiveBanner.styled";

interface IInteractiveBannerProps {
  title: string;
  titleColor?: string;
  text: string;
  textColor?: string;
  buttonText: string;
  buttonTextColor?: string;
  buttonRouteUrl?: string;
  buttonColor?: string;
  backgroundColor?: string;
  backgroundImage: string;
}

const InteractiveBanner: FC<IInteractiveBannerProps> = ({
  title,
  titleColor = "#000000",
  text,
  textColor = "#000000",
  buttonText,
  buttonTextColor = "#ffffff",
  buttonRouteUrl = "/",
  buttonColor = "grey",
  backgroundColor = "#ffffff",
  backgroundImage,
}) => {
  const router = useRouter();

  return (
    <Article
      backgroundColor={backgroundColor}
      backgroundImage={backgroundImage}
    >
      <Meta>
        <Title color={titleColor}>{title}</Title>
        <Text color={textColor}>{text}</Text>
        <Button
          text={buttonText}
          color={buttonTextColor}
          backgroundColor={buttonColor}
          onClick={() => {
            router.push(buttonRouteUrl);
          }}
          pt="16px"
          pb="16px"
          pl="32px"
          pr="32px"
        />
      </Meta>
    </Article>
  );
};

export default InteractiveBanner;
