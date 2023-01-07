import Box from "components/Box";
import { containerWidth } from "constants/constants";

interface IProps {
  children?: React.ReactNode;
}
const Container: React.FC<IProps> = ({ children }) => {
  return (
    <Box px={[3, 3, 4, 4]} maxWidth={containerWidth} mx="auto">
      {children}
    </Box>
  );
};
export default Container;
