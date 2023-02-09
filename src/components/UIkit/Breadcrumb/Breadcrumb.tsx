import { useRouter } from "next/router";
import Link from "next/link";
import { BreadcrumbStyled } from "./Breadcrumb.styled";
import { homePageRoute } from "constants/constants";
import { IRoute } from "types/route";

interface IProps {
  route?: IRoute[];
}

const Breadcrumb: React.FC<IProps> = ({ route }) => {
  const router = useRouter();
  const isHomePage = router.asPath === "/";
  const isDynamicRoute = router.route.includes("[productCatalogId]");

  let routeLine: IRoute[] = [];

  if (isDynamicRoute && route) {
    routeLine = route;
  }

  if (isHomePage) {
    routeLine = [homePageRoute];
  }

  if (!isDynamicRoute && !isHomePage) {
    routeLine = router.asPath.split("/").map((item) => {
      const name = item
        .trim()
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, function (str) {
          return str.toUpperCase();
        });

      return item === "" ? homePageRoute : { href: item, name };
    });
  }

  return (
    <BreadcrumbStyled>
      {routeLine.map(({ href, name }, index, array) => {
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
