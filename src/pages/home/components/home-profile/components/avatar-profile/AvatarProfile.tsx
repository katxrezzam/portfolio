import styles from "./AvatarProfile.module.scss";

const AvatarProfile = () => {
  return (
    <section className={styles.avatarProfileContainer}>
      <div className={styles.avatarInner}>
        <div className={styles.avatarPictureFrame}>
          <img
            src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1940340/a3fd05864d89733e0da3f64c17309b6be1c03df5.png"
            alt="profile-frame"
            className={styles.avatarPicture}
          />
        </div>
        <img
          src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1940340/07a1c1fe7ad0bb4806a013264d68665c0e8f01a1.gif"
          alt="profile-picture"
        />
      </div>
    </section>
  );
};

export default AvatarProfile;
