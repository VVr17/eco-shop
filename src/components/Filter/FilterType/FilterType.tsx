import PriceRange from "components/UIkit/PriceRange";
import FilterList from "./FilterList";
import { Title } from "./FilterType.styled";

interface IProps {
  name: string;
  type: "range" | "list" | "listWithSearch";
  listItems?: string[];
  onCheckboxChange?: (value: string, checked: boolean) => void;
}

const FilterType: React.FC<IProps> = ({
  name,
  type,
  listItems,
  onCheckboxChange,
}) => {
  return (
    <>
      <Title>{name}</Title>
      {type === "range" && (
        <PriceRange currency="$" minPrice={0} maxPrice={50} step={1} />
      )}
      {type === "list" && onCheckboxChange && (
        <FilterList listItems={listItems} onCheckboxChange={onCheckboxChange} />
      )}

      {type === "listWithSearch" && onCheckboxChange && (
        <FilterList
          listItems={listItems}
          withSearch={true}
          onCheckboxChange={onCheckboxChange}
        />
      )}
    </>
  );
};

export default FilterType;
