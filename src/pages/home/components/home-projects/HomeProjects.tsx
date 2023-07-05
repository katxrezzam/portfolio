import styles from './HomeProjects.module.scss'
import { ProjectBox } from './components'

const HomeProjects = () => {
  return (
    <section className={styles.homeProjectsContainerGradient}>
      <div className={styles.homeProjectsContainer}>
        <ProjectBox/>
        <ProjectBox/>
        <ProjectBox/>
        <ProjectBox/>
      </div>
    </section>
  )
}

export default HomeProjects