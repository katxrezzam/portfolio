import styles from "./HomeProfile.module.scss";
import { AvatarProfile, ContactProfile, InfoProfile, GradientContainer } from "./components";

const HomeProfile = () => {
  return (
    <GradientContainer gradient="gradientContainer">
      <div className={styles.homeProfileContainer}>
        <AvatarProfile/>
        <InfoProfile/>
        <ContactProfile/>
      </div>
    </GradientContainer>
  );
};

export default HomeProfile;
