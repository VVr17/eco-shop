import { nanoid } from "nanoid";
import { FC, useEffect } from "react";
import { ISelectList } from "types/types";
import {
  DropDownItem,
  DropDownList,
  DropDownListWrapper,
} from "./Select.styled";

interface ISelectListProps {
  list: ISelectList[] | string[];
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

  // if (list as [{ name: string }]) {
  //   return (
  //     <DropDownListWrapper {...commonProps}>
  //       <DropDownList>
  //         {list.map((item) => (
  //           <DropDownItem
  //             key={`${item.name}_${nanoid(4)}`}
  //             onClick={() => {
  //               onSelectItem(item.name);
  //             }}
  //           >
  //             {item.name}
  //           </DropDownItem>
  //         ))}
  //       </DropDownList>
  //     </DropDownListWrapper>
  //   );
  // }

  // return (
  //   <DropDownListWrapper {...commonProps}>
  //     <DropDownList>
  //       {list.map((item) => {
  //         if (item type) {
  //           return (
  //             <DropDownItem
  //               key={`${item.name}_${nanoid(4)}`}
  //               onClick={() => {
  //                 onSelectItem(item.name);
  //               }}
  //             >
  //               {item.name}
  //             </DropDownItem>
  //           );
  //         }
  //       })}
  //     </DropDownList>
  //   </DropDownListWrapper>
  // );

  return (
    <DropDownListWrapper {...commonProps}>
      <DropDownList>
        {list.map((item) => {
          if (typeof item !== "string") {
            return (
              <DropDownItem
                key={`${item.name}_${nanoid(4)}`}
                onClick={() => {
                  onSelectItem(item.name);
                }}
              >
                {item.name}
              </DropDownItem>
            );
          } else {
            return (
              <DropDownItem
                key={`${item}_${nanoid(4)}`}
                onClick={() => {
                  onSelectItem(item);
                }}
              >
                {item}
              </DropDownItem>
            );
          }
        })}
      </DropDownList>
    </DropDownListWrapper>
  );
};

export default SelectList;
