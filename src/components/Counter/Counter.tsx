import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { CounterStyled } from "./Counter.styled";

interface IProps {
  id: string;
  initialValue: number;
  measure: string;
  step: number;
}

const Counter: React.FC<IProps> = ({ initialValue, measure, step, id }) => {
  const [value, setValue] = useState(initialValue);

  const setIncrement = () => {
    setValue((prev) => prev + step);
  };
  const setDecrement = () => {
    if (value > step) setValue((prev) => prev - step);
  };

  return (
    <CounterStyled>
      <button onClick={setDecrement}>
        <AiOutlineMinus size={12} />
      </button>
      <input type="text" value={value} readOnly />
      <span>{measure}</span>
      <button onClick={setIncrement}>
        <AiOutlinePlus size={12} />
      </button>
    </CounterStyled>
  );
};

export default Counter;
