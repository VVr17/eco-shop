import Container from "components/Container";
import React, { useCallback, useEffect, useState, useRef } from "react";
import {
  Slider,
  SliderLeftValue,
  SliderRange,
  SliderRightValue,
  SliderTrack,
  ThumbLeft,
  ThumbRight,
} from "./MultiRageSlider.styled";

interface IProps {
  min: number;
  max: number;
  onChange: () => void;
}

const MultiRangeSlider: React.FC<IProps> = ({ min, max, onChange }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  // useEffect(() => {
  //   const minPercent = getPercent(minVal);
  //   const maxPercent = getPercent(maxValRef.current);

  //   if (range.current) {
  //     range.current.style.left = `${minPercent}%`;
  //     range.current.style.width = `${maxPercent - minPercent}%`;
  //   }
  // }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  // useEffect(() => {
  //   const minPercent = getPercent(minValRef.current);
  //   const maxPercent = getPercent(maxVal);

  //   if (range.current) {
  //     range.current.style.width = `${maxPercent - minPercent}%`;
  //   }
  // }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  // useEffect(() => {
  //   onChange({ min: minVal, max: maxVal });
  // }, [minVal, maxVal, onChange]);

  return (
    <Container>
      <ThumbLeft
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxVal - 1);
          setMinVal(value);
          minValRef.current = value;
        }}
        // style={{ zIndex: minVal > max - 100 && "5" }}
      />
      <ThumbRight
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal + 1);
          setMaxVal(value);
          maxValRef.current = value;
        }}
      />

      <Slider>
        <SliderTrack />
        <SliderRange ref={range} />
        <SliderLeftValue>{minVal}</SliderLeftValue>
        <SliderRightValue>{maxVal}</SliderRightValue>
      </Slider>
    </Container>
  );
};

export default MultiRangeSlider;
