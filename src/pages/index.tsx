import Image from 'next/image'
import { Layout } from '../components/Layout'
import styles from '../styles/Home.module.css'
import { BsPlayFill } from 'react-icons/bs'

import photoOne from '../../public/images/photo-1.png'
import herbalife from '../../public/images/herbalife_logo.svg'

export default function Home () {
  return (
    <div>
      <Layout>
        <div className={styles.heroBg}>
          <div className={styles.hero}>

            <div className={styles.left}>
              <h1 className={styles.heroTitle}>Changing your <span>eating</span> habits</h1>
              <p className={styles.heroSubtitle}>Always take care of your health starting from the
              food menu that you consume every day</p>
              <div className={styles.buttons}>
                <button className={styles.button}>Explore Menu</button>
                <div className={styles.watch}>
                  <div className={styles.playButton}>
                    <BsPlayFill className={styles.playIcon} />
                  </div>
                  <p>Watch Video</p>
                </div>
              </div>
            </div>

            <div className={styles.right}>
              <Image className={styles.heroImg} src={photoOne} alt="hero" width={500} height={500} />
            </div>

          </div>
          <div className={styles.heroFooter}>
            <div className={styles.footerContent}>
              <Image className={styles.footerImg} src={herbalife} alt="herbalife" width={300} height={300} />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
