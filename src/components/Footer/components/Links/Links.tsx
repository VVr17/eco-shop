import { FC } from "react";
import LinksList from "./LinksList";

export interface ILink {
  name: string;
  href: string;
}

export interface ILinksChapter {
  title: string;
  links: ILink[];
}

[{ name: "About", href: "/" }];

const list: ILinksChapter[] = [
  {
    title: "Company",
    links: [
      { name: "About", href: "/" },
      { name: "Store", href: "/" },
      { name: "FAQ", href: "/" },
    ],
  },
  {
    title: "Service",
    links: [
      { name: "Delivery", href: "/" },
      { name: "Payment", href: "/" },
      { name: "Contacts", href: "/" },
    ],
  },
  {
    title: "Follow us",
    links: [
      { name: "Instagram", href: "/" },
      { name: "Facebook", href: "/" },
      { name: "Twitter", href: "/" },
    ],
  },
];

const Links: FC = () => {
  return <LinksList list={list} />;
};

export default Links;
