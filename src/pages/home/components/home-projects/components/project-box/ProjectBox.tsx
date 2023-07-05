import styles from "./ProjectBox.module.scss";
import { SpecificationBox } from "./components";

const ProjectBox = () => {
  return (
    <section className={styles.projectBoxContainer}>
      <div className={styles.projectTitle}>Project 1</div>
      <div className={styles.projectContentContainer}>
        <div className={styles.projectContent}>
          <div className={styles.projectImage}>PROJECT IMAGE</div>
          <div className={styles.projectInfo}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              beatae animi fugit, cum quaerat illo, eius mollitia quos veniam
              facilis quod, odit ex quam facere. Corrupti sapiente consectetur
              natus sit.
            </p>
          </div>
        </div>
        <div className={styles.projectSpecifications}>
          <SpecificationBox/>
          <SpecificationBox/>
          <SpecificationBox/>
          <SpecificationBox/>
        </div>
      </div>
    </section>
  );
};

export default ProjectBox;
