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
import { IconWrapper, StyledSelect } from "./Select.styled";
import { FiChevronDown } from "react-icons/fi";
import { ISelectList } from "types/types";
import SelectList from "./SelectList";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface ISelectProps extends IBaseProps {
  list: ISelectList[];
  id?: HTMLInputTypeAttribute;
  name: string;
  width?: string;
  placeholder?: string;
  className?: string;
  //Voronova
  defaultValue?: string;
  onChangeSelect?: (name: string, value: string) => void;
  //Voronova
}

const Select: FC<ISelectProps> = ({
  list,
  id,
  name,
  width = DEFAULT_STYLES_VALUE,
  placeholder = "",

  className = "",
  defaultValue,
  onChangeSelect,
  ...rest
}) => {
  const commonProps = { ...UI_BASE_PROPS, ...rest };

  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const refSelect: { current: HTMLInputElement | null } = useRef(null);
  const onSelectItem = (value: string) => {
    setValue(value);
    setIsOpen(false);
    refSelect.current?.focus();

    onChangeSelect && onChangeSelect(name, value); // Voronova
  };

  useEffect(() => {
    if (defaultValue) {
      onSelectItem(defaultValue);
    }
  }, [defaultValue]);

  const toggleDropDownList = () => {
    setIsOpen(!isOpen);
  };

  const closeDropDownList = (e: SyntheticEvent) => {
    if (refSelect.current !== e.target) {
      setIsOpen(false);
    }
  };

  return (
    <Box
      position="relative"
      width={width === DEFAULT_STYLES_VALUE ? "340px" : width}
    >
      <StyledSelect
        // {...restRegisterProps}
        name={name}
        id={id}
        type="text"
        readOnly
        {...commonProps}
        onClick={toggleDropDownList}
        placeholder={placeholder}
        value={value}
        className={className}
        ref={refSelect}
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
