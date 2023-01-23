import Checkbox from "components/UIkit/Checkbox";

import { FiSearch } from "react-icons/fi";
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
  return (
    <>
      {withSearch && (
        <>
          <input
            type="text"
            name="search"
            // value={searchValue}
            // onChange={onSearchHandler}
            // placeholder={placeholder}
            // {...commonProps}
          />
          <button type="submit">
            <FiSearch size={"18px"} />
          </button>
        </>
      )}
      {listItems && (
        <List>
          {listItems.map((item) => (
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
