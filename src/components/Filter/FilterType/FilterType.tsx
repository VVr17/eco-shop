import PriceRange from "components/UIkit/PriceRange";
import { useSelector } from "react-redux";
import { selectFilter } from "redux/filter/filterSelectors";
import { ICheckboxType, IPriceRange } from "types/filter";
import FilterList from "./FilterList";
import { Title } from "./FilterType.styled";

interface IProps {
  name: string;
  type: "range" | "list" | "listWithSearch";
  priceRange?: IPriceRange;
  listItems?: ICheckboxType[];
  onCheckboxChange?: (value: string, checked: boolean) => void;
}

const FilterType: React.FC<IProps> = ({
  name,
  type,
  listItems,
  onCheckboxChange,
  priceRange,
}) => {
  return (
    <>
      <Title>{name}</Title>
      {type === "range" && priceRange && (
        <PriceRange
          currency="$"
          minPrice={priceRange.min}
          maxPrice={priceRange.max}
          step={1}
        />
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
