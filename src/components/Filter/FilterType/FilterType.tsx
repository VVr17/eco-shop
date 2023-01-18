import PriceRange from "components/UIkit/PriceRange";
import FilterList from "./FilterList";
import { Title } from "./FilterType.styled";

interface IProps {
  name: string;
  type: "range" | "list";
  listItems?: string[];
}

const FilterType: React.FC<IProps> = ({ name, type, listItems }) => {
  return (
    <>
      <Title>{name}</Title>
      {type === "range" && (
        <PriceRange
          currency="$"
          initialMinPriceRange={4}
          initialMaxPriceRange={10}
          minPrice={0}
          maxPrice={50}
          step={1}
        />
      )}
      {type === "list" && <FilterList listItems={listItems} />}
    </>
  );
};

export default FilterType;
