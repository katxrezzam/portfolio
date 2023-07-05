import { HomeProjects } from '../components'
import { AvatarProfile, ContactProfile, GradientContainer, InfoProfile } from '../components/home-profile/components'
import styles from './HomeMobile.module.scss'

const HomeMobile = () => {
  return (
    <section className={styles.homeMobileContainer}>
      <div className="width-wrapper">
        <div className={styles.homeMobileWrapper}>
          <GradientContainer gradient='gradientContainer'>
            <div className={styles.profileMobile}>
              <AvatarProfile/>
              <InfoProfile/>
              <ContactProfile/>
            </div>
          </GradientContainer>
          <GradientContainer gradient='homeProjectsContainerGradient'>
            <HomeProjects/>
          </GradientContainer>
        </div>
      </div>
    </section>
  )
}

export default HomeMobile