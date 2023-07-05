import styles from "./GradientContainer.module.scss";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  gradient: string
}

const GradientContainer = ({ children,gradient }: Props) => {
  return <section className={styles[gradient]}>{children}</section>;
};

export default GradientContainer;
