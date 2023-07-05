import { Dispatch, ReactNode, MouseEvent, useRef } from "react";
import styles from "./Overlay.module.scss";

interface Props {
  children: ReactNode;
  setIsOpen: Dispatch<boolean>;
}

const Overlay = ({ children, setIsOpen }: Props) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === overlayRef.current) {
      setIsOpen(false);
    }
  }
  
  return (
    <div
      className={`${styles.overlayContainer}`}
      onClick={handleClick}
      ref={overlayRef}
    >
      {children}
    </div>
  );
};

export default Overlay;
