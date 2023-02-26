import Link from "next/link";
import { FC } from "react";
import { ILinksChapter } from "./Links";
import {
  Chapter,
  ChapterList,
  List,
  ListItem,
  Title,
} from "./LinksList.styled";

interface ILinksListProps {
  list: ILinksChapter[];
}

const LinksList: FC<ILinksListProps> = ({ list }) => {
  return (
    <ChapterList>
      {list.map(({ title, links }) => (
        <Chapter key={title}>
          <Title>{title}</Title>
          <List>
            {links.map(({ name, href }) => (
              <ListItem key={name}>
                <Link href={href}>{name}</Link>
              </ListItem>
            ))}
          </List>
        </Chapter>
      ))}
    </ChapterList>
  );
};

export default LinksList;
