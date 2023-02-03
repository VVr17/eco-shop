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
  const { price, brand, volume, form } = filter;
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

    volume.forEach(({ checked }) => {
      if (checked) amount += 1;
    });

    form.forEach(({ checked }) => {
      if (checked) amount += 1;
    });

    return amount;
  };

  const amountOfCheckedFilters = getAmountOfCheckedFilters();

  const handleRemoveAll = () => {
    console.log("remove all");
    dispatch(removeAllFilters());
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
              width="148px"
              name="sort"
              list={[{ name: "price ascending" }, { name: "price descending" }]}
              placeholder="Relevancy"
              backgroundColor={theme.colors.mainBackground}
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

{
  /* {isTablet || isDesktop ? (
        <SortWrapper>
          {isTablet && (
            <Box display="flex">
              <Button
                text="Filter (2)"
                backgroundColor="transparent"
                fontSize="17px"
                borderColor="transparent"
              />
              <p>Showed 84 goods</p>
            </Box>
          )}

          {isDesktop && <p>Showed 84 goods</p>}
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
      ) : (
        <>
          <SortWrapper>
            <Button
              text="Filter (2)"
              backgroundColor="transparent"
              fontSize="17px"
              borderColor="transparent"
            />
            <Showed>Showed 84 goods</Showed>
          </SortWrapper>
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
        </>
      )} */
}
