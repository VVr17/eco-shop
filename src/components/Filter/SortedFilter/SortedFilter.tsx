import Box from "components/Box";
import Select from "components/UIkit/Select";
import FilterLabel from "./FilterLabel";
import { Labels } from "./SortedFilter.styled";

const SortedFilter = () => {
  return (
    <Box marginBottom={[32, 32, 48, 48]}>
      <Box marginBottom={32}>
        <p>Showed 84 goods</p>

        {/* <Select list={["byDecs", "byAsc"]} placeholder="Sort by" /> */}
      </Box>
      <Labels>
        <FilterLabel type="price" value="10-20" />
        <FilterLabel type="form" value="onWeight" />
        <p>Clear all filters</p>
      </Labels>
    </Box>
  );
};

export default SortedFilter;
