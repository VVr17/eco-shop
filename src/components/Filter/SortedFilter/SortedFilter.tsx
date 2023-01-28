import Box from "components/Box";
import ClearFilterButton from "components/UIkit/ClearFilterButton";
import Select from "components/UIkit/Select";
import { filterTypes } from "constants/filterTypes";
import { theme } from "constants/theme";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectFilter } from "redux/filter/filterSelectors";
import { defaultPriceRange, removeAllFilters } from "redux/filter/filterSlice";
import { ISelectList } from "types/types";
import FilterLabel from "./FilterLabel";
import { Labels, Sort, SortLabel, SortWrapper } from "./SortedFilter.styled";

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
      <SortWrapper>
        <p>Showed 84 goods</p>

        <Sort>
          <SortLabel>Sort by</SortLabel>
          <Select
            width="148px"
            name="sort"
            list={[{ name: "Ascending" }, { name: "Descending" }]}
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
              <FilterLabel key={value} type={filterTypes.form} value={value} />
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
