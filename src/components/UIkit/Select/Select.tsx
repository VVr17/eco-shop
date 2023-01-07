import Box from "components/Box";
import {
  DEFAULT_STYLES_VALUE,
  IBaseProps,
  UI_BASE_PROPS,
} from "components/UIkit/base/uiBaseProps";
import {
  FC,
  HTMLInputTypeAttribute,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  DropDownItem,
  DropDownList,
  DropDownListWrapper,
  IconWrapper,
  StyledSelect,
} from "./Select.styled";
import { FiChevronDown } from "react-icons/fi";
import { ICountry } from "types/types";
import SelectList from "./SelectList";

interface ISelectProps extends IBaseProps {
  list: ICountry[];
  id?: HTMLInputTypeAttribute;
  name?: string;
  width?: string;
  placeholder?: string;
}

const Select: FC<ISelectProps> = ({
  list,
  id,
  name,
  width = DEFAULT_STYLES_VALUE,
  placeholder = "",

  ...rest
}) => {
  const commonProps = { ...UI_BASE_PROPS, ...rest };

  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const refSelect = useRef();
  // const onCloseList = () => {
  //   console.log("close");
  //   setIsOpen(false);
  // };

  function closeDropDownList(e: any) {
    if (refSelect.current !== e.target) {
      console.log(" click outside");
      setIsOpen(false);
      // return;
    }
    // console.log("select ref");
  }

  const toggleDropDownList = () => {
    console.log("toggle", isOpen);
    setIsOpen(!isOpen);
  };

  const onOpenList = () => {
    setIsOpen(true);
  };

  const onSelectItem = (value: string) => {
    setValue(value);
    setIsOpen(false);
  };

  useEffect(() => {
    // console.log(isOpen);

    console.log("isOpen", isOpen);

    if (isOpen) {
      document.addEventListener("click", closeDropDownList);
    } else {
      console.log("i am here");
      document.removeEventListener("click", closeDropDownList);
    }

    // if (isOpen) {
    //   window.addEventListener("click", closeDropDownList);
    // }

    // if (!isOpen) {
    //   window.removeEventListener("click", closeDropDownList);
    // }
  }, [isOpen]);

  return (
    <Box
      position="relative"
      width={width === DEFAULT_STYLES_VALUE ? "340px" : width}
    >
      <StyledSelect
        ref={refSelect as any}
        id={id}
        name={name}
        type="text"
        readOnly
        {...commonProps}
        onClick={toggleDropDownList}
        value={value}
        placeholder={placeholder}
      />
      <IconWrapper>
        <FiChevronDown size="20px" />
      </IconWrapper>

      {isOpen && (
        <SelectList
          list={list}
          commonProps={commonProps}
          onSelectItem={onSelectItem}
          onClose={closeDropDownList}
        />
      )}
    </Box>
  );
};

export default Select;

// check form submit - outside
// names for all inputs
// Select  and out of select close
