import { splitRoute } from "helpers/splitRoute";
import Link from "next/link";
import { useRouter } from "next/router";
import { BreadcrumbStyled } from "./Breadcrumb.styled";

interface IProps {
  route: { href: string; name: string }[];
}

const Breadcrumb: React.FC<IProps> = ({ route }) => {
  return (
    <BreadcrumbStyled>
      {route.map(({ href, name }, index, array) => {
        if (index === 0) {
          return (
            <Link key={index} href={href}>
              {name}
              {index !== array.length - 1 && " / "}
            </Link>
          );
        }

        let wholeRoute = [""];

        for (let i = 1; i <= index; i++) {
          wholeRoute.push(array[i].href);
        }

        return (
          <Link key={index} href={wholeRoute.join("/")}>
            {name}
            {index !== array.length - 1 && " / "}
          </Link>
        );
      })}
    </BreadcrumbStyled>
  );
};

export default Breadcrumb;
