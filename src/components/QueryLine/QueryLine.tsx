import { splitRoute } from "helpers/splitRoute";
import { QueryStyled } from "./QueryLine.styled";

interface IProps {
  message: string;
}

const QueryLine: React.FC<IProps> = ({ message }) => {
  return (
    <QueryStyled>
      {message === "/" ? "Homepage" : `Homepage / ${message}`}
    </QueryStyled>
  );
};

export default QueryLine;
