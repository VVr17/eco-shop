import FilterItem from "./FilterItem";
import { List } from "./FilterList.styled";

interface IProps {
  listItems?: string[];
}

const FilterList: React.FC<IProps> = ({ listItems }) => {
  return (
    <>
      {listItems && (
        <List>
          {listItems.map((item) => (
            <FilterItem key={item} label={item} />
          ))}
        </List>
      )}
    </>
  );
};

export default FilterList;
