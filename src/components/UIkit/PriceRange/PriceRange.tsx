import {
  ChangeEventHandler,
  FocusEventHandler,
  MouseEvent,
  useEffect,
  useState,
} from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Box from "components/Box";
import { defaultPriceRange, setPriceFilter } from "redux/filter/filterSlice";
import { Field, PriceBox, SubmitButton } from "./PriceRange.styled";
import Slider from "rc-slider";
import { selectFilter } from "redux/filter/filterSelectors";
import { theme } from "constants/theme";

const styles = {
  slider: { marginBottom: theme.space[3] },
  rail: {
    backgroundColor: `${theme.colors.lightText}`,
    height: 6,
    borderColor: `${theme.colors.input}`,
    borderWidth: 1,
  },

  track: { backgroundColor: `${theme.colors.accent}`, height: 6 },
  range: {
    backgroundColor: `${theme.colors.lightText}`,
    borderColor: `${theme.colors.accent}`,
    borderWidth: 1,
    opacity: 1,
    borderRadius: 4,
    width: 16,
    height: 20,
    transform: "translate(-50%, -15%)",
  },
};

interface IProps {
  // minPrice: number;
  // maxPrice: number;
  step: number;
  currency: string;
}

const PriceRange: React.FC<IProps> = ({
  // minPrice,
  // maxPrice,
  step,
  currency,
}) => {
  const dispatch = useDispatch();
  const { price } = useSelector(selectFilter);
  const minPrice = defaultPriceRange.min;
  const maxPrice = defaultPriceRange.max;
  const [priceRange, setPriceRange] = useState({
    minRange: 0,
    maxRange: 0,
  });

  useEffect(() => {
    setPriceRange({
      minRange: price.min,
      maxRange: price.max,
    });
  }, [price]);

  const handleChange = (_input: number | number[]) => {
    const inputValue = _input as number[];
    setPriceRange({ minRange: inputValue[0], maxRange: inputValue[1] });
  };

  const handleMinInputChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const data = event.target.value.match(/\d+/);
    if (data) {
      setPriceRange((prev) => ({
        ...prev,
        minRange: +data[0],
      }));
      return;
    }

    setPriceRange((prev) => ({
      ...prev,
      minRange: 0,
    }));
  };

  const handleMaxInputChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const data = event.target.value.match(/\d+/);
    if (data) {
      setPriceRange((prev) => ({
        ...prev,
        maxRange: +data[0],
      }));
      return;
    }

    setPriceRange((prev) => ({
      ...prev,
      maxRange: 0,
    }));
  };

  const handleMinInputBlur: FocusEventHandler<HTMLInputElement> = (event) => {
    const { maxRange } = priceRange;
    const data = event.target.value.match(/\d+/);

    if (data && +data > maxRange) {
      setPriceRange((prev) => ({
        ...prev,
        minRange: maxRange - step,
      }));
    }
  };

  const handleMaxInputBlur: FocusEventHandler<HTMLInputElement> = (event) => {
    const { minRange } = priceRange;
    const data = event.target.value.match(/\d+/);

    if (data && +data < minRange) {
      setPriceRange((prev) => ({
        ...prev,
        maxRange: minRange + step,
      }));
    }

    if (data && +data > maxPrice) {
      setPriceRange((prev) => ({
        ...prev,
        maxRange: maxPrice,
      }));
    }
  };

  const onSubmit = (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    event.preventDefault();
    dispatch(setPriceFilter({ min: minRange, max: maxRange }));
  };

  const { minRange, maxRange } = priceRange;
  return (
    <Box width="100%">
      <PriceBox>
        <p>{minPrice}</p>
        <p>{maxPrice}</p>
      </PriceBox>
      <Slider
        range
        step={step}
        min={minPrice}
        max={maxPrice}
        startPoint={minRange}
        value={[minRange, maxRange]}
        onChange={handleChange}
        style={styles.slider}
        railStyle={styles.rail}
        trackStyle={styles.track}
        handleStyle={styles.range}
      />
      <Box display="flex">
        <Field>
          From
          <input
            min={minPrice}
            max={maxRange}
            value={`${currency} ${minRange}`}
            onChange={handleMinInputChange}
            onBlur={handleMinInputBlur}
          />
        </Field>
        <Field>
          To
          <input
            min={minRange}
            max={maxPrice}
            value={`${currency} ${maxRange}`}
            onChange={handleMaxInputChange}
            onBlur={handleMaxInputBlur}
          />
        </Field>
        <SubmitButton onClick={(event) => onSubmit(event)}> OK </SubmitButton>
      </Box>
    </Box>
  );
};

export default PriceRange;
