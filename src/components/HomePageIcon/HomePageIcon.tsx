import { ComponentType, FC } from "react";
import styles from "./HomePageIcon.module.css";

interface IHomePageIconProps {
  icon: ComponentType<{ className: string }>;
}

const HomePageIcon: FC<IHomePageIconProps> = ({ icon: Icon }) => {
  return <Icon className={styles.homePageIcon} />;
};

export default HomePageIcon;
