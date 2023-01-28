import Checkbox from "components/UIkit/Checkbox";
import FilterSearch from "components/UIkit/FilterSearch";
import ListCheckbox from "components/UIkit/ListCheckbox";
import { useState } from "react";
import { ICheckboxType } from "types/filter";
import { boolean } from "yup";
import { List } from "./FilterList.styled";

interface IProps {
  listItems?: ICheckboxType[];
  withSearch?: boolean;
  isChecked?: boolean;
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
    : listItems?.filter(({ value }) =>
        value.toLowerCase().includes(search.toLowerCase())
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
          {visibleItems.map(({ checked, value }) => (
            <li key={value}>
              <ListCheckbox
                label={value}
                checked={checked}
                onChange={(checked) => {
                  onCheckboxChange(value, checked);
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
