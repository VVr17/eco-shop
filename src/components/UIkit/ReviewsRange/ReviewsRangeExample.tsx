import Box from "components/Box";
import { theme } from "constants/theme";
import ReviewsRange from "./ReviewsRange";

const ReviewsRangeExample = () => {
  return (
    <Box p="30px" backgroundColor="#F5F3F1">
      <ReviewsRange color={theme.colors.accent} fraction={4} starSize={22} />
    </Box>
  );
};

export default ReviewsRangeExample;
