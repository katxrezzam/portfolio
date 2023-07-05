import { HomeProfile, HomeProjects } from "../components";
import styles from './HomeDesktop.module.scss'

const HomeDesktop = () => {
  return (
    <section className={styles.homeContainer}>
      <div className="width-wrapper">
        <HomeProfile />
        <HomeProjects />
      </div>
    </section>
  );
};

export default HomeDesktop;
