import Container from "components/Container";
import HomePageContainer from "components/HomePageContainer";
import HomePageTitle from "components/HomePageTitle";
import ProductSlider from "components/ProductSlider/ProductSlider";
import { NewAdditionsIcon } from "assets/icons/homePageIcons";
import { newAdditionList } from "utils/fakeData/fakeNewAdditionList";

const NewAdditions = () => {
  return (
    <HomePageContainer>
      <Container>
        <HomePageTitle
          title="New additions"
          icon={NewAdditionsIcon}
          needViewAllLink
        />
      </Container>
      <ProductSlider list={newAdditionList as any} />
    </HomePageContainer>
  );
};

export default NewAdditions;
