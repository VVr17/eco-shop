import { cardDetailAdditionalInfo } from "constants/cardDetailAdditionalInfo";
import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { AdditionalInfoList } from "./AdditionalInfo.styled";

interface IProps {
  nutritionalValue: string;
  vitamins: string;
  minerals: string;
}

const AdditionalInfo: React.FC<IProps> = ({
  nutritionalValue,
  vitamins,
  minerals,
}) => {
  const handleClick = () => {
    console.log("click open accordion");
  };

  return (
    <AdditionalInfoList>
      {cardDetailAdditionalInfo.map(({ type }) => (
        <li key={type}>
          <button onClick={handleClick}>
            <p>{type}:</p>
            <BiChevronDown size={20} />
          </button>
        </li>
      ))}
    </AdditionalInfoList>
  );
};

export default AdditionalInfo;
