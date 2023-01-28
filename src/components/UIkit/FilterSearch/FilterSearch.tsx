import { ChangeEventHandler } from "react";
import { FiSearch } from "react-icons/fi";
import { Label, SearchField, SearchIcon } from "./FilterSearch.styled";

interface IProps {
  placeholder: string;
  searchValue: string;
  onSearchHandler: ChangeEventHandler<HTMLInputElement>;
}
const FilterSearch: React.FC<IProps> = ({
  placeholder,
  searchValue,
  onSearchHandler,
}) => {
  return (
    <Label>
      <SearchField
        type="text"
        name="search"
        value={searchValue}
        onChange={onSearchHandler}
        placeholder={placeholder}
      />
      <SearchIcon>
        <FiSearch size={"18px"} />
      </SearchIcon>
    </Label>
  );
};

export default FilterSearch;
