import { ReactNode } from "react";
import styles from './Main.module.scss'

interface Props {
  children: ReactNode;
}

const Main = ({ children }: Props) => {
  return (
    <main className={styles.animatedBackground}>
      <div className={styles.videoContainer}>
        <video
          poster="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1940340/a35dd7861df7dc8495f3838e61eef8615dfd50ab.jpg"
          playsInline
          autoPlay
          loop
          muted
          className={"background-video"}
        >
          <source
            src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1940340/6c2f7d0d6b2262ffdf8e7bfdc1aff662256b5282.webm"
            type="video/webm"
          />
          <source
            src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1940340/fbeab7e0b7e923a3e5ce54ca6cdb86ab859cce85.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      {children}
    </main>
  );
};

export default Main;
