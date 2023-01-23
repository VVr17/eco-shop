import { useState } from "react";
import { brands, volumes } from "utils/fakeData/filter";
import { FilterThumb, Title } from "./Filter.styled";
import FilterType from "./FilterType";

interface IFilterState {
  price: { min: number; max: number };
  volume: string[];
  brand: string[];
}

const Filter = () => {
  const [filterState, setFilterState] = useState<IFilterState>({
    price: { min: 0, max: 0 },
    volume: [],
    brand: [],
  });

  const onPriceChange = (min: number, max: number) => {
    console.log("onPriceChange", min, max);
    setFilterState((prevState) => ({
      ...prevState,
      price: { min, max },
    }));
  };

  const onVolumeChange = (value: string, checked: boolean) => {
    console.log("onVolumeChange", value);
    if (checked) {
      setFilterState((prevState) => ({
        ...prevState,
        volume: [...prevState.volume, value],
      }));
      return;
    }

    setFilterState((prevState) => {
      const updatedVolumes = prevState.volume.filter(
        (stateValue) => stateValue !== value
      );

      return {
        ...prevState,
        volume: [...updatedVolumes],
      };
    });
  };

  const onBrandChange = (value: string, checked: boolean) => {
    console.log("onBrandChange", value);
    if (checked) {
      setFilterState((prevState) => ({
        ...prevState,
        brand: [...prevState.brand, value],
      }));
      return;
    }

    setFilterState((prevState) => {
      const updatedBrands = prevState.brand.filter(
        (stateValue) => stateValue !== value
      );

      return {
        ...prevState,
        brand: [...updatedBrands],
      };
    });
  };

  console.log("filterState", filterState);
  return (
    <>
      <Title>Filter</Title>
      <form>
        <ul>
          <FilterThumb key="price">
            <FilterType
              type="range"
              name="price"
              onPriceChange={onPriceChange}
            />
          </FilterThumb>
          <FilterThumb key="volume">
            <FilterType
              type="list"
              name="volume"
              listItems={volumes}
              onCheckboxChange={onVolumeChange}
            />
          </FilterThumb>
          <FilterThumb key="brand">
            <FilterType
              type="listWithSearch"
              name="brand"
              listItems={brands}
              onCheckboxChange={onBrandChange}
            />
          </FilterThumb>
        </ul>
      </form>
    </>
  );
};

export default Filter;
