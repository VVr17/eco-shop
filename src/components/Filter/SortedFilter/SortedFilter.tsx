import Box from "components/Box";
import Select from "components/UIkit/Select";
import { filterTypes } from "constants/filterTypes";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectFilter } from "redux/filter/filterSelectors";
import { defaultPriceRange, removeAllFilters } from "redux/filter/filterSlice";
import { ISelectList } from "types/types";
import FilterLabel from "./FilterLabel";
import { Labels } from "./SortedFilter.styled";

const sortBy: ISelectList[] = [{ name: "Ascending" }, { name: "Deschending" }];

const SortedFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const { price, brand, volume, form } = filter;
  const isPriceSet =
    price.min !== defaultPriceRange.min || price.max !== defaultPriceRange.max;

  const handleRemoveAll = () => {
    console.log("remove all");
    dispatch(removeAllFilters());
  };

  return (
    <Box marginBottom={[32, 32, 48, 48]}>
      <Box marginBottom={32}>
        <p>Showed 84 goods</p>

        <Select
          name="sort"
          list={[{ name: "Ascending" }, { name: "Descending" }]}
          placeholder="Sort by"
        />
      </Box>
      <Labels>
        {isPriceSet && (
          <FilterLabel
            type={filterTypes.price}
            value={`${price.min} - ${price.max} $`}
          />
        )}
        {volume.length !== 0 &&
          volume.map(({ value, checked }) => (
            <>
              {checked && (
                <FilterLabel
                  key={value}
                  type={filterTypes.volume}
                  value={value}
                />
              )}
            </>
          ))}
        {form.length !== 0 &&
          form.map(({ value, checked }) => (
            <>
              {checked && (
                <FilterLabel
                  key={value}
                  type={filterTypes.form}
                  value={value}
                />
              )}
            </>
          ))}
        {brand.length !== 0 &&
          brand.map(({ value, checked }) => (
            <>
              {checked && (
                <FilterLabel
                  key={value}
                  type={filterTypes.brand}
                  value={value}
                />
              )}
            </>
          ))}
        <button onClick={handleRemoveAll}>Clear all filters</button>
      </Labels>
    </Box>
  );
};

export default SortedFilter;
