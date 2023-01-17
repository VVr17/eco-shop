import Checkbox from "components/UIkit/Checkbox";
import { useState } from "react";

interface IProps {
  label: string;
}

const FilterItem: React.FC<IProps> = ({ label }) => {
  const [checked, setChecked] = useState(false);

  return (
    <li>
      <Checkbox
        label={label}
        checked={checked}
        onChange={() => setChecked((prev) => !prev)}
      />
    </li>
  );
};

export default FilterItem;
