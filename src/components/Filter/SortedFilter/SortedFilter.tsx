import Box from "components/Box";
import Select from "components/UIkit/Select";
import { useSelector } from "react-redux";
import { selectFilter } from "redux/filter/filterSelectors";
import { ISelectList } from "types/types";
import FilterLabel from "./FilterLabel";
import { Labels } from "./SortedFilter.styled";

const sortBy: ISelectList[] = [{ name: "Ascending" }, { name: "Deschending" }];

const SortedFilter = () => {
  const filter = useSelector(selectFilter);
  const { price, brand, volume, form } = filter;
  const isPriceSet = price.min !== 0 || price.max !== 0;
  // const types = Object.keys(filter).map((type) => ({ [type]: type }));
  // console.log("types", types);

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
          <FilterLabel type="price" value={`${price.min} - ${price.max} $`} />
        )}
        {volume.length !== 0 &&
          volume.map((item) => (
            <FilterLabel key={item} type="volume" value={item} />
          ))}
        {form.length !== 0 &&
          form.map((item) => (
            <FilterLabel key={item} type="form" value={item} />
          ))}
        {brand.length !== 0 &&
          brand.map((item) => (
            <FilterLabel key={item} type="brand" value={item} />
          ))}
        <button>Clear all filters</button>
      </Labels>
    </Box>
  );
};

export default SortedFilter;
