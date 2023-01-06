import { FC, useEffect } from "react";
import { ICountry } from "types/types";
import {
  DropDownItem,
  DropDownList,
  DropDownListWrapper,
} from "./Select.styled";

interface ISelectListProps {
  list: ICountry[];
  commonProps?: any;
  onSelectItem: (value: string) => void;
  onClose: () => void;
}

const SelectList: FC<ISelectListProps> = ({
  list,
  commonProps,
  onSelectItem,
  onClose,
}) => {
  useEffect(() => {
    window.addEventListener("click", onClose);
  }, []);

  return (
    <DropDownListWrapper {...commonProps}>
      <DropDownList>
        {list.map((country) => (
          <DropDownItem
            key={country.name}
            onClick={() => {
              onSelectItem(country.name);
            }}
          >
            {country.name}
          </DropDownItem>
        ))}
      </DropDownList>
    </DropDownListWrapper>
  );
};

export default SelectList;
