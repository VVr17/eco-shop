import styled from "styled-components";
import labelRibbon10Percent from "assets/images/banner/discount-image-background.png";
import { theme } from "constants/theme";

export const Article = styled("article")<{ labelImageUrl: string }>`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 24px 100px 24px 24px;

  border-radius: 24px;

  background-image: url(${labelRibbon10Percent.src});
  background-repeat: no-repeat;
  background-position: bottom 80px left 0;

  background-color: #383634;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-image: url(${({ labelImageUrl }) => labelImageUrl});
    background-repeat: no-repeat;
    background-size: contain;
    background-color: transparent;
  }

  ${theme.mq.desktop} {
    padding: 100px 30px 40px 30px;
  }
`;

export const Meta = styled("div")`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${theme.mq.desktop} {
    align-items: center;
  }
`;

export const TitleWrapper = styled("div")`
  color: #ffffff;
`;

export const Title = styled("h1")`
  font-size: 17px;
  line-height: 1.2;

  margin-bottom: 16px;

  ${theme.mq.desktop} {
    font-size: 24px;
    margin-bottom: 32px;
  }
`;

export const PromoCode = styled("p")`
  font-size: 32px;
  line-height: 1.2;
  font-weight: 600;

  ${theme.mq.mobileOnly} {
    font-size: 26px;
  }

  ${theme.mq.desktop} {
    font-size: 56px;
  }
`;

export const Text = styled("p")`
  font-size: 15px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.8);

  ${theme.mq.desktop} {
    font-size: 16px;
    line-height: 1.75;
  }
`;

export const LabelWrapper = styled("div")``;
