import { FC, useEffect } from "react";
import { ISelectList } from "types/types";
import {
  DropDownItem,
  DropDownList,
  DropDownListWrapper,
} from "./Select.styled";

interface ISelectListProps {
  list: ISelectList[];
  commonProps?: any;
  onSelectItem: (value: string) => void;
  onClose: (e: any) => void;
}

const SelectList: FC<ISelectListProps> = ({
  list,
  commonProps,
  onSelectItem,
  onClose,
}) => {
  useEffect(() => {
    window.addEventListener("click", onClose);

    return () => {
      window.removeEventListener("click", onClose);
    };
  }, []);

  return (
    <DropDownListWrapper {...commonProps}>
      <DropDownList>
        {list.map(({ name }) => (
          <DropDownItem
            key={name}
            onClick={() => {
              onSelectItem(name);
            }}
          >
            {name}
          </DropDownItem>
        ))}
      </DropDownList>
    </DropDownListWrapper>
  );
};

export default SelectList;
