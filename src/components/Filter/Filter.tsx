import { useSelector, useDispatch } from "react-redux";
import { filterTypes } from "constants/filterTypes";
import FilterType from "./FilterType";
import { FilterThumb, Title } from "./Filter.styled";
import { selectFilter } from "redux/filter/filterSelectors";
import {
  setBrandFilter,
  setFormFilter,
  setSaleFilter,
  // setVolumeFilter,
} from "redux/filter/filterSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const { form, brand, sale } = useSelector(selectFilter);

  // const onVolumeChange = (value: string, checked: boolean) => {
  //   dispatch(setVolumeFilter({ value, checked }));
  // };

  const onSaleChange = (value: string, checked: boolean) => {
    dispatch(setSaleFilter({ value, checked }));
  };

  const onBrandChange = (value: string, checked: boolean) => {
    dispatch(setBrandFilter({ value, checked }));
  };

  const onFormChange = (value: string, checked: boolean) => {
    dispatch(setFormFilter({ value, checked }));
  };

  return (
    <>
      <Title>Filter</Title>

      <ul>
        <FilterThumb key={filterTypes.price}>
          <FilterType type="range" name={filterTypes.price} />
        </FilterThumb>
        <FilterThumb key={filterTypes.onSale}>
          <FilterType
            type="list"
            name={filterTypes.onSale}
            listItems={sale}
            onCheckboxChange={onSaleChange}
          />
        </FilterThumb>
        <FilterThumb key={filterTypes.form}>
          <FilterType
            type="list"
            name={filterTypes.form}
            listItems={form}
            onCheckboxChange={onFormChange}
          />
        </FilterThumb>
        <FilterThumb key={filterTypes.brand}>
          <FilterType
            type="listWithSearch"
            name={filterTypes.brand}
            listItems={brand}
            onCheckboxChange={onBrandChange}
          />
        </FilterThumb>
        {/* <FilterThumb key={filterTypes.volume}>
          <FilterType
            type="list"
            name={filterTypes.volume}
            listItems={volume}
            onCheckboxChange={onVolumeChange}
          />
        </FilterThumb> */}
      </ul>
    </>
  );
};

export default Filter;
