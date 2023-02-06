import { ICustomerReview } from "types/product";
import { ImStarFull, ImStarHalf, ImStarEmpty } from "react-icons/im";
import Stars from "./Stars";
import { useWindowSize } from "hooks/useWindowSize";
import {
  Date,
  Description,
  Name,
  Number,
  Rating,
  Review,
  ReviewsList,
  ReviewsQuantity,
  Title,
} from "./CustomerReviews.styled";
import Box from "components/Box";
import { theme } from "constants/theme";

interface IProps {
  customerReviews: ICustomerReview[];
  rating: string;
}

const CustomerReviews: React.FC<IProps> = ({ customerReviews, rating }) => {
  const { isMobile } = useWindowSize();

  return (
    <div>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        marginBottom={3}
      >
        <Title>Customer reviews </Title>
        <Rating>
          {isMobile ? (
            <ImStarFull size={20} />
          ) : (
            <Stars size={20} rating={rating} fillColor={theme.colors.accent} />
          )}
          <Number>{rating}/5</Number>
          <ReviewsQuantity>({customerReviews.length} reviews)</ReviewsQuantity>
        </Rating>
      </Box>

      <ReviewsList>
        {customerReviews.map(({ id, name, desc, date, rating }) => (
          <Review key={id}>
            <Name>{name}</Name>
            <Description>{desc}</Description>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Date>{date}</Date>
              <Stars
                size={16}
                rating={rating}
                fillColor={theme.colors.backButton}
              />
            </Box>
          </Review>
        ))}
      </ReviewsList>
    </div>
  );
};

export default CustomerReviews;
