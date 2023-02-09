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
import { useWindowSize } from "hooks/useWindowSize";
import FilterIndicator from "./FilterIndicator";
import { useState } from "react";
import Modal from "components/UIkit/Modal/Modal";
import Filter from "../Filter";

const SortedFilter = () => {
  const { isTablet, isDesktop } = useWindowSize();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const { price, brand, form, sale } = filter;
  const isPriceSet =
    price.min !== defaultPriceRange.min || price.max !== defaultPriceRange.max;

  const getAmountOfCheckedFilters = () => {
    let amount = 0;
    if (isPriceSet) {
      amount += 1;
    }

    brand.forEach(({ checked }) => {
      if (checked) amount += 1;
    });

    sale.forEach(({ checked }) => {
      if (checked) amount += 1;
    });

    form.forEach(({ checked }) => {
      if (checked) amount += 1;
    });

    // volume.forEach(({ checked }) => {
    //   if (checked) amount += 1;
    // });

    return amount;
  };

  const amountOfCheckedFilters = getAmountOfCheckedFilters();

  const handleRemoveAll = () => {
    console.log("remove all");
    dispatch(removeAllFilters());
  };

  const onChangeSort = (name: string, value: string) => {
    console.log("name", name, "value", value);
  };

  return (
    <>
      <Box marginBottom={[32, 32, 48, 48]}>
        <SortWrapper>
          <FilterIndicator
            amountOfCheckedFilters={amountOfCheckedFilters}
            openFilterModal={() => setIsModalOpen(true)}
          />
          <Sort>
            <SortLabel>Sort by</SortLabel>
            <Select
              width="180px"
              name="sort"
              list={[
                { name: "relevancy" },
                { name: "price ascending" },
                { name: "price descending" },
              ]}
              backgroundColor={theme.colors.mainBackground}
              defaultValue="relevancy"
              onChangeSelect={onChangeSort}
            />
          </Sort>
        </SortWrapper>

        {(isTablet || isDesktop) && (
          <Labels>
            {isPriceSet && (
              <FilterLabel
                type={filterTypes.price}
                value={`${price.min} - ${price.max} $`}
              />
            )}
            {form.map(({ value, checked }) => {
              if (checked) {
                return (
                  <FilterLabel
                    key={value}
                    type={filterTypes.form}
                    value={value}
                  />
                );
              }
            })}
            {brand.map(({ value, checked }) => {
              if (checked) {
                return (
                  <FilterLabel
                    key={value}
                    type={filterTypes.brand}
                    value={value}
                  />
                );
              }
            })}
            {sale.map(({ value, checked }) => {
              if (checked) {
                return (
                  <FilterLabel
                    key={value}
                    type={filterTypes.onSale}
                    value={value}
                  />
                );
              }
            })}

            {/* {volume.map(({ value, checked }) => {
              if (checked) {
                return (
                  <FilterLabel
                    key={value}
                    type={filterTypes.volume}
                    value={value}
                  />
                );
              }
            })} */}
            <ClearFilterButton onClick={handleRemoveAll}>
              Clear all filters
            </ClearFilterButton>
          </Labels>
        )}
      </Box>
      {isModalOpen && (
        <Modal
          onClose={() => {
            setIsModalOpen(false);
          }}
        >
          <Filter />
        </Modal>
      )}
    </>
  );
};

export default SortedFilter;
