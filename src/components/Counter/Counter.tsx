import React, { useState } from "react";
import { CounterStyled } from "./Counter.styled";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { getCounterSets } from "helpers/getCounterSets";

interface IProps {
  id: string;
  initialValue: number;
  measure: "kg" | "g";
}

const Counter: React.FC<IProps> = ({ initialValue, measure, id }) => {
  const [value, setValue] = useState(initialValue);
  const counterSets = getCounterSets(measure);

  const setIncrement = () => {
    if (value < counterSets.max) setValue((prev) => prev + counterSets.step);
  };
  const setDecrement = () => {
    if (value > counterSets.min) setValue((prev) => prev - counterSets.step);
  };

  return (
    <CounterStyled>
      <button onClick={setDecrement}>
        <AiOutlineMinus size={12} />
      </button>
      <input type="text" value={value} readOnly />
      {measure}
      <button onClick={setIncrement}>
        <AiOutlinePlus size={12} />
      </button>
    </CounterStyled>
  );
};

export default Counter;
