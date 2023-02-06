import { TableInfo } from "./MainInfo.styled";

interface IProps {
  composition: string;
  country: string;
  brand: string;
}

const MainInfo: React.FC<IProps> = ({ composition, country, brand }) => {
  return (
    <TableInfo>
      <tbody>
        <tr>
          <th>Composition:</th>
          <td>
            <>{composition}</>
          </td>
        </tr>
        <tr>
          <th>Country:</th>
          <td>
            <>{country}</>
          </td>
        </tr>
        <tr>
          <th>Brand:</th>
          <td>
            <>{brand}</>
          </td>
        </tr>
      </tbody>
    </TableInfo>
  );
};

export default MainInfo;
