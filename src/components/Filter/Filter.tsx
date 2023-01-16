import { brands, volumes } from "utils/fakeData/filter";
import { FilterThumb, Title } from "./Filter.styled";
import FilterType from "./FilterType";

const Filter = () => {
  return (
    <>
      <Title>Filter</Title>
      <ul>
        <FilterThumb key="price">
          <FilterType type="range" name="price" />
        </FilterThumb>
        <FilterThumb key="volume">
          <FilterType type="list" name="volume" listItems={volumes} />
        </FilterThumb>
        <FilterThumb key="brand">
          <FilterType type="list" name="brand" listItems={brands} />
        </FilterThumb>
      </ul>
    </>
  );
};

export default Filter;
