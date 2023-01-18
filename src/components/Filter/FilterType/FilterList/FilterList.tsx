import Checkbox from "components/UIkit/Checkbox";
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
            <li key={item}>
              <Checkbox
                label={item}
                initialChecked={false}
                onChange={(checked: boolean) => {
                  console.log("checked", checked);
                }}
              />
            </li>
          ))}
        </List>
      )}
    </>
  );
};

export default FilterList;
