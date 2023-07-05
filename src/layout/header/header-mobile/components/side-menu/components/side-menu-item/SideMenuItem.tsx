import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SideMenuItem.module.scss";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface Props {
  label: string;
}

const SideMenuItems = ({ label }: Props) => {
  return (
    <div className={styles.menuItemContainer}>
      {label}
      <FontAwesomeIcon icon={faChevronDown} />
    </div>
  );
};

export default SideMenuItems;
