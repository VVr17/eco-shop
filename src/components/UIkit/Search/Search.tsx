import { FC, SyntheticEvent, useState } from "react";
import {
  IBaseProps,
  UI_BASE_PROPS,
  DEFAULT_STYLES_VALUE,
} from "../base/uiBaseProps";
import { SearchButton, SearchField, SearchForm } from "./Search.styled";
import { FiSearch } from "react-icons/fi";

interface ISearchProps extends IBaseProps {
  placeholder?: string;
  iconSize?: string;
  iconMargin?: string;
  onSearch?: (searchValue: string) => void;
}

const Search: FC<ISearchProps> = ({
  placeholder = "Search",
  width = DEFAULT_STYLES_VALUE,
  iconSize = DEFAULT_STYLES_VALUE,
  iconMargin = "default",
  onSearch,

  ...rest
}) => {
  const commonProps = { ...UI_BASE_PROPS, ...rest };

  //   const [searchValue, setSearchValue] = useState("");

  const onSubmitHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formElements = form.elements as any;
    const searchValue = formElements.search.value as string;

    if (!onSearch) {
      throw new Error(
        "Anton's custom Error exception: callback function onSearch is not defined"
      );
    }

    onSearch(searchValue);
  };

  return (
    <SearchForm width={width} onSubmit={onSubmitHandler}>
      <SearchField
        type="text"
        name="search"
        // value={searchValue}
        // onChange={onSearchHandler}
        placeholder={placeholder}
        {...commonProps}
      />
      <SearchButton type="submit" iconMargin={iconMargin}>
        <FiSearch
          size={iconSize === DEFAULT_STYLES_VALUE ? "18px" : iconSize}
        />
      </SearchButton>
    </SearchForm>
  );
};

export default Search;
