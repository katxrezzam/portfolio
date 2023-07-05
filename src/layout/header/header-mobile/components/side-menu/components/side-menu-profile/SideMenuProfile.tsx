import styles from "./SideMenuProfile.module.scss";
import { Link } from "react-router-dom";

const SideMenuProfile = () => {
  return (
    <section className={styles.sideMenuProfileContainer}>
      <div className={styles.profileUser}>
        <div className={styles.profileImageContainer}>
          <img
            src="https://avatars.cloudflare.steamstatic.com/7fbab9bb9e64fea4d608a8cddab000c1f87ea55a.jpg"
            alt="profile-image"
          />
        </div>
        <Link to={"/"}>Kat</Link>
      </div>
      <div className={styles.profileProjects}>Projects <b>(x)</b></div>
    </section>
  );
};

export default SideMenuProfile;
