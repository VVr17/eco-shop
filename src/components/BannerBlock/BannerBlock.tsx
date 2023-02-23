import Container from "components/Container";
import { useState } from "react";
import {
  BannerContainer,
  Item,
  List,
  ListWrapper,
  LongBanner,
  ShortBanner,
  Dots,
  Dot,
} from "./BannerBlock.styled";
import { useSwipeable } from "react-swipeable";
import InteractiveBanner from "./templates/InteractiveBanner";
import PromoCodeBanner from "./templates/PromoCodeBanner";
import organicBarImage from "assets/images/banner/organic-bar.png";
import labelRibbon10Percent from "assets/images/banner/label-ribbon-10-percent.png";

const BannerBlock = () => {
  const [pos, setPos] = useState<1 | 2>(1);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setPos(2),
    onSwipedRight: () => setPos(1),
    preventScrollOnSwipe: true,
  });

  return (
    <>
      <BannerContainer {...swipeHandlers}>
        <ListWrapper>
          <List pos={pos}>
            <Item>
              <LongBanner>
                <InteractiveBanner
                  title="Organic bar"
                  titleColor="#383634"
                  text="Especially suitable for athletes, but also ideal for preventing fatigue and loss 
                        of productivity."
                  textColor="#383634"
                  buttonText="Shop now"
                  buttonTextColor="#FFFFFF"
                  buttonColor="#4C7C7D"
                  buttonRouteUrl="/"
                  backgroundColor="#EDEAE7"
                  backgroundImage={organicBarImage.src}
                />
              </LongBanner>
            </Item>
            <Item>
              <ShortBanner>
                <PromoCodeBanner
                  title="Spring promo code:"
                  text="Gives 10% off all seasonal fruits on your first purchase"
                  promocode="FRUITS2021"
                  labelImage={labelRibbon10Percent.src}
                />
              </ShortBanner>
            </Item>
          </List>
        </ListWrapper>
      </BannerContainer>
      <Container>
        <Dots>
          <Dot
            active={pos === 1}
            onClick={() => {
              setPos(1);
            }}
          ></Dot>
          <Dot
            active={pos === 2}
            onClick={() => {
              setPos(2);
            }}
          ></Dot>
        </Dots>
      </Container>
    </>
  );
};

export default BannerBlock;
