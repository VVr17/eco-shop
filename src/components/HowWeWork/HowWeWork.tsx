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
  ArrowLeftDownIcon,
  ArrowRightDownIcon,
  ArrowRightUpLargeIcon,
  ArrowRightDownLargeIcon,
  ArrowLeftDownLargeIcon,
} from "assets/icons/homePageIcons";
import {
  ArrowWrapper,
  Item,
  Label,
  List,
  Meta,
  Text,
} from "./HowWeWork.styled";
import { useWindowSize } from "hooks/useWindowSize";

const HowWeWork = () => {
  const { isMobile, isTablet, isDesktop } = useWindowSize();

  return (
    <>
      <Container>
        <Box borderTop="1px solid rgba(56, 54, 52, 0.08)"></Box>
      </Container>
      <HomePageContainer>
        <Container>
          <HomePageTitle title="How we work" icon={HowWeWorkIcon} />
          <List>
            {/*  ITEM 1 */}
            <Item>
              <GatheringIcon
                width={isMobile ? 48 : 83}
                height={isMobile ? 45 : 78}
              />
              <Meta>
                <Label>Gathering</Label>
                <Text>Picking fresh plants from all over the world</Text>
              </Meta>
              {isDesktop && (
                <ArrowWrapper width="100px" right="-65px" bottom="0">
                  <ArrowRightUpLargeIcon />
                </ArrowWrapper>
              )}
              {isTablet && (
                <ArrowWrapper width="100px" right="-150px" bottom="-15px">
                  <ArrowRightDownLargeIcon />
                </ArrowWrapper>
              )}
              {isMobile && (
                <ArrowWrapper width="60px" right="-60px" bottom="0">
                  <ArrowRightDownIcon />
                </ArrowWrapper>
              )}
            </Item>

            {/*  ITEM 2 */}
            <Item>
              <TransportationIcon
                width={isMobile ? 54 : 99}
                height={isMobile ? 37 : 68}
              />
              <Meta>
                <Label>Transportation</Label>
                <Text>Select the best and transport it to our bases</Text>
              </Meta>
              {isDesktop && (
                <ArrowWrapper width="100px" right="-80px" top="-20px">
                  <ArrowRightDownLargeIcon />
                </ArrowWrapper>
              )}
              {isTablet && (
                <ArrowWrapper width="100px" left="-140px" bottom="-20px">
                  <ArrowLeftDownLargeIcon />
                </ArrowWrapper>
              )}
              {isMobile && (
                <ArrowWrapper width="60px" left="-80px" bottom="-25px">
                  <ArrowLeftDownIcon />
                </ArrowWrapper>
              )}
            </Item>

            {/*  ITEM 3 */}
            <Item>
              <PackagingIcon
                width={isMobile ? 52 : 100}
                height={isMobile ? 50 : 96}
              />
              <Meta>
                <Label>Packaging</Label>
                <Text>Carefully pack your order in ecological packaging</Text>
              </Meta>
              {isDesktop && (
                <ArrowWrapper width="100px" right="-65px" bottom="0">
                  <ArrowRightUpLargeIcon />
                </ArrowWrapper>
              )}
              {isTablet && (
                <ArrowWrapper width="100px" right="-135px" bottom="-15px">
                  <ArrowRightDownLargeIcon />
                </ArrowWrapper>
              )}
              {isMobile && (
                <ArrowWrapper width="60px" right="-55px" bottom="-10px">
                  <ArrowRightDownIcon />
                </ArrowWrapper>
              )}
            </Item>

            {/*  ITEM 4 */}
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
