import { Link } from "react-router-dom";
import styles from "./HeaderMobile.module.scss";
import { SideMenu } from "./components";

const HeaderMobile = () => {
  return (
    <header className={styles.headerContainer}>
      <div className="width-wrapper">
        <div className={styles.headerWrapper}>
          <div className="logoContainer">
            <Link to={"/"}>
              <img
                src="https://community.cloudflare.steamstatic.com/public/shared/images/responsive/header_logo.png"
                alt=""
                style={{ height: "36px" }}
              />
            </Link>
          </div>
        </div>
        <SideMenu />
      </div>
    </header>
  );
};

export default HeaderMobile;
