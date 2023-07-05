import styles from "./ContactProfile.module.scss";
import { SocialMedia } from "./components";

const ContactProfile = () => {
  return (
    <section className={styles.contactProfileContainer}>
      <div className={styles.contactProfileAge}>
        <p className={styles.ageLabel}>Age</p>
        <p className={styles.ageNumber}>23</p>
      </div>
      <div className={styles.contactProfileSocialMedia}>
        <ul className={styles.socialMediaList}>
          <SocialMedia
            link="mailto:katxrezzam@gmail.com"
            img="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico"
            altImg="email-ico"
            label="katxrezzam@gmail.com"
          />
          <SocialMedia
            link="https://www.linkedin.com/in/adrian-james-delgado-reyes-b1215625b/"
            img="https://static.licdn.com/sc/h/akt4ae504epesldzj74dzred8"
            altImg="linkedin-ico"
            label="Adrian James"
          />
          <SocialMedia
            link="https://twitter.com/katxrezzam"
            img="https://abs.twimg.com/favicons/twitter.2.ico"
            altImg="twitter-ico"
            label="@katxrezzam"
          />
        </ul>
      </div>
    </section>
  );
};

export default ContactProfile;
