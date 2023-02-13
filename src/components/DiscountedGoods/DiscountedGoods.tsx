import { BonusIcon, DiscountedGoodsIcon } from "assets/icons/homePageIcons";
import Container from "components/Container";
import HomePageContainer from "components/HomePageContainer";
import HomePageTitle from "components/HomePageTitle";
import ProductSlider from "components/ProductSlider/ProductSlider";

import { discountedList } from "utils/fakeData/fakeDiscountedList";

const DiscountedGoods = () => {
  return (
    <HomePageContainer>
      <Container>
        <HomePageTitle title="Discounted goods" icon={DiscountedGoodsIcon} />
      </Container>
      <ProductSlider list={discountedList} />
    </HomePageContainer>
  );
};

export default DiscountedGoods;
