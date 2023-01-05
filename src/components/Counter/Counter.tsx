import React from "react";
import { CounterStyled } from "./Counter.styled";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface IProps {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const Counter: React.FC<IProps> = ({ value, onIncrement, onDecrement }) => {
  return (
    <CounterStyled>
      <button onClick={onDecrement}>
        <AiOutlineMinus size={12} />
      </button>
      <input type="text" value={value} readOnly max={10} min={0.5} /> kg
      <button onClick={onIncrement}>
        <AiOutlinePlus size={12} />
      </button>
    </CounterStyled>
  );
};

export default Counter;
