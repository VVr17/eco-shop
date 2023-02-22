import {
  BannerContainer,
  Item,
  List,
  LongBanner,
  ShortBanner,
} from "./BannerBlock.styled";

const BannerBlock = () => {
  return (
    <BannerContainer>
      <List>
        <Item>
          <LongBanner>Baner1</LongBanner>
        </Item>
        <Item>
          <ShortBanner>Baner2</ShortBanner>
        </Item>
      </List>
    </BannerContainer>
  );
};

export default BannerBlock;
