import Checkbox from "components/UIkit/Checkbox";
import FilterSearch from "components/UIkit/FilterSearch";
import { useState } from "react";
import { List } from "./FilterList.styled";

interface IProps {
  listItems?: string[];
  withSearch?: boolean;
  onCheckboxChange: (value: string, checked: boolean) => void;
}

const FilterList: React.FC<IProps> = ({
  listItems,
  withSearch = false,
  onCheckboxChange,
}) => {
  const [search, setSearch] = useState("");
  const visibleItems = !withSearch
    ? listItems
    : listItems?.filter((item) =>
        item.toLowerCase().includes(search.toLowerCase())
      );

  return (
    <>
      {withSearch && (
        <FilterSearch
          placeholder="Name of brand"
          searchValue={search}
          onSearchHandler={(event) => {
            setSearch(event.target.value);
          }}
        />
      )}
      {visibleItems && (
        <List>
          {visibleItems.map((item) => (
            <li key={item}>
              <Checkbox
                label={item}
                initialChecked={false}
                onChange={(checked) => {
                  onCheckboxChange(item, checked);
                }}
              />
            </li>
          ))}
        </List>
      )}
    </>
  );
};

export default FilterList;
