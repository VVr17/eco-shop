import { StarsContainer } from "./ReviewsRange.styled";
import { AiOutlineStar } from "react-icons/ai";
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";
import { theme } from "constants/theme";
import ReviewStarIcon from "./ReviewStarIcon";
import { FC } from "react";

interface IReviewsRangeProps {
  color: string;
  fraction: number;
  starSize?: number;
}

const ReviewsRange: FC<IReviewsRangeProps> = ({
  color,
  fraction,
  starSize,
}) => {
  if (fraction < 0 || fraction > 5) {
    throw new Error("fraction must be >= 0  and <=5");
  }

  return (
    <StarsContainer>
      {[...Array(5)].map((_, i) => {
        let offset = 0;
        if (fraction >= i + 1) {
          offset = 100;
        } else if (fraction < i + 1 && fraction > i) {
          offset = Number((fraction - Math.trunc(fraction)).toFixed(1)) * 100;
        }
        return (
          <ReviewStarIcon
            key={i}
            color={color}
            offset={offset}
            size={starSize}
          />
        );
      })}
    </StarsContainer>
  );
};

export default ReviewsRange;
