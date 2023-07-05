import { LogoContainer } from '../components';
import styles from './HeaderDesktop.module.scss'
import { Link } from 'react-router-dom'
 
const HeaderDesktop = () => {
  return (
    <header className={styles.headerContainer}>
      <div className="width-wrapper">
        <div className={styles.headerWrapper}>
          <LogoContainer/>
          <div className={styles.menuContainer}>
            <ul className={styles.menuHeader}>
              <li className={styles.menuHeaderItem}>
                <Link to={"/"}>STORE</Link>
              </li>
              <li className={styles.menuHeaderItem}>
                <Link to={"/"}>COMMUNITY</Link>
              </li>
              <li className={styles.menuHeaderItem}>
                <Link to={"/"}>ABOUT</Link>
              </li>
              <li className={styles.menuHeaderItem}>
                <Link to={"/"}>SUPPORT</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderDesktop;
