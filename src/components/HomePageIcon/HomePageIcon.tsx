import { FC, ReactNode } from "react";
import styles from "./HomePageIcon.module.css";

interface IHomePageIconProps {
  icon: React.ComponentType;
}

const HomePageIcon: FC<IHomePageIconProps> = ({ icon: Icon }) => {
  return <Icon className={styles.homePageIcon} />;
};

export default HomePageIcon;
