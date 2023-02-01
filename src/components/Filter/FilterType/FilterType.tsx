import FilterList from "./FilterList";
import { ICheckboxType } from "types/filter";
import PriceRange from "components/UIkit/PriceRange";
import { Title } from "./FilterType.styled";

interface IProps {
  name: string;
  type: "range" | "list" | "listWithSearch";
  listItems?: ICheckboxType[];
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
      {type === "range" && <PriceRange currency="$" step={1} />}
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
