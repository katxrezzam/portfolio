import styles from "./SocialMedia.module.scss";

interface Props {
  link: string;
  img: string;
  altImg?: string;
  label: string;
}

const SocialMedia = ({ link, img, altImg, label }: Props) => {
  return (
    <li className={styles.socialMediaItem}>
      <a className={styles.socialMediaLink} href={link}>
        <img src={img} alt={altImg} style={{ width: "15px" }} />
        {label}
      </a>
    </li>
  );
};

export default SocialMedia;
