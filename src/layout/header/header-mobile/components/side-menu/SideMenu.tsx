import { useState } from "react";
import styles from "./SideMenu.module.scss";
import { SideMenuItem, SideMenuProfile } from "./components";
import { Overlay } from "../../../../../components";

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={styles.menuLinks} onClick={() => setIsOpen(true)}>
        <img
          src="https://community.cloudflare.steamstatic.com/public/shared/images/responsive/header_menu_hamburger.png"
          alt=""
          className={styles.menuIcon}
        />
      </div>
      {isOpen && (
        <Overlay setIsOpen={setIsOpen}>
          <div className={styles.sideMenuContainer}>
            <div className={styles.sideMenuWrapper}>
              <div className={styles.sideMenuContent}>
                <SideMenuProfile />
                <SideMenuItem label="Store"/>
                <SideMenuItem label="Community"/>
                <SideMenuItem label="About"/>
                <SideMenuItem label="Support"/>
              </div>
            </div>
          </div>
        </Overlay>
      )}
    </>
  );
};

export default SideMenu;
