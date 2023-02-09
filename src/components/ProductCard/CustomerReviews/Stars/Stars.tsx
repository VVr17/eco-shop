import Box from "components/Box";
import { ImStarEmpty, ImStarFull, ImStarHalf } from "react-icons/im";

interface IProps {
  rating: string;
  size: number;
  fillColor: string;
}
const Stars: React.FC<IProps> = ({ rating, size, fillColor }) => {
  // console.log(fillColor);
  return (
    <Box>
      <ImStarFull size={size} color={fillColor} />
      <ImStarFull size={size} color={fillColor} />
      <ImStarFull size={size} color={fillColor} />
      <ImStarHalf size={size} color={fillColor} />
      <ImStarEmpty size={size} color={fillColor} />
    </Box>
  );
};

export default Stars;
