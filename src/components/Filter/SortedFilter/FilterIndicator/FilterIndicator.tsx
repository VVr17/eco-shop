import Button from "components/UIkit/Button";
import { useWindowSize } from "hooks/useWindowSize";
import { MouseEventHandler } from "react";
import { FilterButton, Showed, SortWrapper } from "./FilterIndicator.styled";

interface IProps {
  amountOfCheckedFilters: number;
  openFilterModal: MouseEventHandler<HTMLButtonElement>;
}

const FilterIndicator: React.FC<IProps> = ({
  amountOfCheckedFilters,
  openFilterModal,
}) => {
  const { isDesktop, isMobile } = useWindowSize();

  return (
    <SortWrapper>
      {!isDesktop && (
        <FilterButton type="button" onClick={openFilterModal}>
          <>Filter {isMobile && ` (${amountOfCheckedFilters})`}</>
        </FilterButton>
      )}
      <Showed>Showed 84 goods</Showed>
    </SortWrapper>
  );
};

export default FilterIndicator;
