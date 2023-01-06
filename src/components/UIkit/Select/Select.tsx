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

  // useEffect(() => {
  //   window.addEventListener("click", () => {
  //     console.log("click");
  //   });
  // }, []);

  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const refDropDown = useRef(null);

  // console.log(refDropDown.current);

  // const closeDropDownList = (e: any) => {
  //   // console.log(e.currentTarget);
  //   console.dir(e.currentTarget);
  //   console.dir(refDropDown);
  //   if (e.currentTarget === refDropDown) {
  //     console.log("bingo");
  //   }
  //   // if()
  //   // setIsOpen(false);
  //   // console.log("click");
  // };

  useEffect(() => {
    if (isOpen) {
      console.log("open");
      window.addEventListener("click", closeDropDownList);
    } else {
      console.log("close");
      // window.removeEventListener("click", closeDropDownList);
    }
  }, [isOpen]);

  const toggleDropDownList = () => {
    setIsOpen(!isOpen);
  };

  const onSelectItem = (value: string) => {
    setValue(value);
    setIsOpen(false);
  };

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
      />
      <IconWrapper>
        <FiChevronDown size="20px" />
      </IconWrapper>

      {isOpen && (
        <DropDownListWrapper {...commonProps} ref={refDropDown}>
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
      )}
    </Box>
  );
};

export default Select;

// check form submit - outside
// names for all inputs
// Select  and out of select close
