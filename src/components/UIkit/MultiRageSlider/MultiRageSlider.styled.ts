import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Slider = styled.div`
  position: relative;
  width: 200px;
`;

export const SliderTrack = styled.div`
  position: absolute;
  border-radius: 3px;
  height: 5px;
  background-color: #ced4da;
  width: 100%;
  z-index: 1;
`;

// range number
export const SliderRange = styled.div`
  position: absolute;
  border-radius: 3px;
  height: 5px;
  background-color: #9fe5e1;
  z-index: 2;
`;

export const SliderLeftValue = styled.div`
  position: absolute;
  color: #dee2e6;
  font-size: 12px;
  margin-top: 20px;
  left: 6px;
`;
export const SliderRightValue = styled.div`
  position: absolute;
  color: #dee2e6;
  font-size: 12px;
  margin-top: 20px;
  right: -4px;
`;

export const ThumbLeft = styled.input`
  pointer-events: none;
  position: absolute;
  height: 0;
  width: 200px;
  outline: none;
  z-index: 3;

  /* Removing the default appearance */
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
  }

  /* For Chrome browsers */
  ::-webkit-slider-thumb {
    background-color: #f1f5f7;
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 1px 1px #ced4da;
    cursor: pointer;
    height: 18px;
    width: 18px;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
  }

  /* For Firefox browsers */
  ::-moz-range-thumb {
    background-color: #f1f5f7;
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 1px 1px #ced4da;
    cursor: pointer;
    height: 18px;
    width: 18px;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
  }
`;

export const ThumbRight = styled.input`
  pointer-events: none;
  position: absolute;
  height: 0;
  width: 200px;
  outline: none;
  z-index: 4;

  /* Removing the default appearance */
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
  }

  /* For Chrome browsers */
  ::-webkit-slider-thumb {
    background-color: #f1f5f7;
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 1px 1px #ced4da;
    cursor: pointer;
    height: 18px;
    width: 18px;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
  }

  /* For Firefox browsers */
  ::-moz-range-thumb {
    background-color: #f1f5f7;
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 1px 1px #ced4da;
    cursor: pointer;
    height: 18px;
    width: 18px;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
  }
`;
