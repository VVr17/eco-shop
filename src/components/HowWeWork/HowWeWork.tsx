import Box from "components/Box";
import Container from "components/Container";
import HomePageContainer from "components/HomePageContainer";
import HomePageTitle from "components/HomePageTitle";
import { HowWeWorkIcon } from "assets/icons/homePageIcons";
import {
  DeliveryIcon,
  GatheringIcon,
  PackagingIcon,
  TransportationIcon,
} from "assets/icons/homePageIcons";
import { Item, Label, List, Meta, Text } from "./HowWeWork.styled";
import { useWindowSize } from "hooks/useWindowSize";

import {
  ArrowLeftDownIcon,
  ArrowRightUpIcon,
  ArrowRightDownIcon,
} from "assets/icons/homePageIcons";

const HowWeWork = () => {
  const { isMobile } = useWindowSize();

  console.log(ArrowRightUpIcon);
  return (
    <>
      <Container>
        <Box borderTop="1px solid rgba(56, 54, 52, 0.08)"></Box>
      </Container>
      <HomePageContainer>
        <Container>
          <HomePageTitle title="How we work" icon={HowWeWorkIcon} />
          <List>
            <Item>
              <GatheringIcon
                width={isMobile ? 48 : 83}
                height={isMobile ? 45 : 78}
              />
              <Meta>
                <Label>Gathering</Label>
                <Text>Picking fresh plants from all over the world</Text>
              </Meta>
            </Item>

            <Item>
              <TransportationIcon
                width={isMobile ? 54 : 99}
                height={isMobile ? 37 : 68}
              />
              <Meta>
                <Label>Transportation</Label>
                <Text>Select the best and transport it to our bases</Text>
              </Meta>
            </Item>

            <Item>
              <PackagingIcon
                width={isMobile ? 52 : 100}
                height={isMobile ? 50 : 96}
              />
              <Meta>
                <Label>Packaging</Label>
                <Text>Carefully pack your order in ecological packaging</Text>
              </Meta>
            </Item>

            <Item>
              <DeliveryIcon
                width={isMobile ? 50 : 89}
                height={isMobile ? 45 : 80}
              />
              <Meta>
                <Label>Delivery</Label>
                <Text>
                  We can deliver any products within five business days
                </Text>
              </Meta>
            </Item>
          </List>
        </Container>
      </HomePageContainer>
    </>
  );
};

export default HowWeWork;
