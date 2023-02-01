import { useDispatch, useSelector } from "react-redux";
import Box from "components/Box";
import ClearFilterButton from "components/UIkit/ClearFilterButton";
import { defaultPriceRange, removeAllFilters } from "redux/filter/filterSlice";
import FilterLabel from "./FilterLabel";
import { filterTypes } from "constants/filterTypes";
import { Labels, Sort, SortLabel, SortWrapper } from "./SortedFilter.styled";
import Select from "components/UIkit/Select";
import { selectFilter } from "redux/filter/filterSelectors";
import { theme } from "constants/theme";

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
      <SortWrapper>
        <p>Showed 84 goods</p>

        <Sort>
          <SortLabel>Sort by</SortLabel>
          <Select
            width="148px"
            name="sort"
            list={[{ name: "price ascending" }, { name: "price descending" }]}
            placeholder="Relevancy"
            backgroundColor={theme.colors.mainBackground}
          />
        </Sort>
      </SortWrapper>
      <Labels>
        {isPriceSet && (
          <FilterLabel
            type={filterTypes.price}
            value={`${price.min} - ${price.max} $`}
          />
        )}
        {volume.map(({ value, checked }) => {
          if (checked) {
            return (
              <FilterLabel
                key={value}
                type={filterTypes.volume}
                value={value}
              />
            );
          }
        })}
        {form.map(({ value, checked }) => {
          if (checked) {
            return (
              <FilterLabel key={value} type={filterTypes.form} value={value} />
            );
          }
        })}
        {brand.map(({ value, checked }) => {
          if (checked) {
            return (
              <FilterLabel key={value} type={filterTypes.brand} value={value} />
            );
          }
        })}
        <ClearFilterButton onClick={handleRemoveAll}>
          Clear all filters
        </ClearFilterButton>
      </Labels>
    </Box>
  );
};

export default SortedFilter;
