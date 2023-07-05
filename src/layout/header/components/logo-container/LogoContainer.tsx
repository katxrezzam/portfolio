import { Link } from 'react-router-dom'
import styles from './LogoContainer.module.scss'

const LogoContainer = () => {
  return (
    <div className={styles.logoContainer}>
      <Link to={"/"}>
        <img
          src="https://community.cloudflare.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016"
          alt="Logo"
          className={styles.imageLogo}
        />
      </Link>
    </div>
  );
};

export default LogoContainer;
