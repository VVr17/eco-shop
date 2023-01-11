import React from "react";
import { CounterStyled } from "./Counter.styled";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface IProps {
  value: number;
  measure: "kg" | "g";
  onIncrement: () => void;
  onDecrement: () => void;
}

const Counter: React.FC<IProps> = ({
  value,
  onIncrement,
  onDecrement,
  measure,
}) => {
  return (
    <CounterStyled>
      <button onClick={onDecrement}>
        <AiOutlineMinus size={12} />
      </button>
      <input type="text" value={value} readOnly />
      {measure}
      <button onClick={onIncrement}>
        <AiOutlinePlus size={12} />
      </button>
    </CounterStyled>
  );
};

export default Counter;
