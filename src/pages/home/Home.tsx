import { ResponsiveLayout } from "../../layout";
import styles from "./Home.module.scss";
import HomeDesktop from "./home-desktop/HomeDesktop";
import HomeMobile from "./home-mobile/HomeMobile";

const Home = () => {
  return (
    <section className={styles.homeContainer}>
      <ResponsiveLayout media="desktop">
        <HomeDesktop/>
      </ResponsiveLayout>
      <ResponsiveLayout media="tablet">
        <HomeDesktop/>
      </ResponsiveLayout>
      <ResponsiveLayout media="phone">
        <HomeMobile/>
      </ResponsiveLayout>
    </section>
  );
};

export default Home;
