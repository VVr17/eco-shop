import { brands, volumes } from "utils/fakeData/filter";
import { Title } from "./Filter.styled";
import FilterType from "./FilterType";

const Filter = () => {
  return (
    <>
      <Title>Filter</Title>
      <FilterType type="range" name="price" />
      <FilterType type="list" name="volume" listItems={volumes} />
      <FilterType type="list" name="brand" listItems={brands} />
    </>
  );
};

export default Filter;
