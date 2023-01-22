import Box from "components/Box";
import {
  DEFAULT_STYLES_VALUE,
  IBaseProps,
  UI_BASE_PROPS,
} from "components/UIkit/base/uiBaseProps";
import {
  FC,
  HTMLInputTypeAttribute,
  MutableRefObject,
  SyntheticEvent,
  useRef,
  useState,
} from "react";
import { IconWrapper, StyledSelect } from "./Select.styled";
import { FiChevronDown } from "react-icons/fi";
import { ISelectList } from "types/types";
import SelectList from "./SelectList";

interface ISelectProps extends IBaseProps {
  list: ISelectList[];
  id?: HTMLInputTypeAttribute;
  name: string;
  width?: string;
  placeholder?: string;
  register?: any;
  className?: string;
}

const Select: FC<ISelectProps> = ({
  list,
  id,
  name,
  width = DEFAULT_STYLES_VALUE,
  placeholder = "",
  register = null,
  className = "",

  ...rest
}) => {
  const commonProps = { ...UI_BASE_PROPS, ...rest };

  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const refSelect = useRef();

  const toggleDropDownList = () => {
    // console.log("toggle", !isOpen);
    // e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const onSelectItem = (value: string) => {
    setValue(value);
    setIsOpen(false);
  };

  const closeDropDownList = (e: SyntheticEvent) => {
    if (refSelect.current !== e.target) {
      setIsOpen(false);
    }
  };

  // let registerProps = null;
  // if (register) {
  //   registerProps = { ...register(name) };
  // }

  console.log("render");

  return (
    <Box
      position="relative"
      width={width === DEFAULT_STYLES_VALUE ? "340px" : width}
    >
      <StyledSelect
        id={id}
        name={name}
        type="text"
        readOnly
        {...commonProps}
        onClick={toggleDropDownList}
        value={value}
        placeholder={placeholder}
        // {...registerProps}
        {...register}
        className={className}
        ref={refSelect as MutableRefObject<undefined>}
      />
      <IconWrapper>
        <FiChevronDown size="20px" />
      </IconWrapper>

      {isOpen && (
        <SelectList
          list={list}
          commonProps={commonProps}
          onSelectItem={onSelectItem}
          // onClose={() => {}}
          onClose={closeDropDownList}
        />
      )}
    </Box>
  );
};

export default Select;
