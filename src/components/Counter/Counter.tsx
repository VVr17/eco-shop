import React, { useState } from "react";
import { CounterStyled } from "./Counter.styled";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <CounterStyled>
      <button onClick={() => setCounter((prev) => prev - 1)}>
        <AiOutlineMinus size={12} />
      </button>
      <input type="number" value={counter} readOnly max={20} min={1} /> kg
      <button onClick={() => setCounter((prev) => prev + 1)}>
        <AiOutlinePlus size={12} />
      </button>
    </CounterStyled>
  );
};

export default Counter;
