import styles from './InfoProfile.module.scss'

const InfoProfile = () => {
  return (
    <section className={styles.infoProfileContainer}>
      <div className={styles.infoProfileName}>Adrian James</div>
      <div className={styles.infoProfileCountry}>
        <img
          src="https://community.cloudflare.steamstatic.com/public/images/countryflags/pe.gif"
          alt="peru-flag"
        />
        <p>Peru</p>
      </div>
      <div className={styles.infoProfileDescription}>
        <p>
          I am a Systems Engineering student at Universidad Privada del Norte.
          My passion for web development drives me to constantly seek new
          challenges to grow professionally.
        </p>
      </div>
    </section>
  );
};

export default InfoProfile;
