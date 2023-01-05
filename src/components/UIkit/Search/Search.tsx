import { FC } from "react";
import { IBaseProps, UI_BASE_PROPS } from "../base/uiBaseProps";

interface ISearchProps extends IBaseProps {
  placeholder: string;
}

const Search: FC<ISearchProps> = ({ placeholder, ...rest }) => {
  const commonProps = { ...UI_BASE_PROPS, ...rest };

  return (
    <form>
      <input type="text" placeholder={placeholder} {...commonProps} />
      <button type="submit">
        <span>icon</span>
      </button>
    </form>
  );
};

export default Search;
