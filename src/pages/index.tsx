import Image from 'next/image'
import { Layout } from '../components/Layout'
import { SquareIconFrame } from '../components/SquareIconFrame'
import { BsPlayFill } from 'react-icons/bs'

import styles from '../styles/Home.module.css'

import photoOne from '../../public/images/photo-1.png'
import herbalife from '../../public/images/herbalife_logo.svg'

export default function Home () {
  return (
      <Layout>
        <div className={styles.container}>
          <section className={styles.hero}>

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

          </section>
          </div>

          <section className={styles.brandsSection}>
            <div className={styles.brandsContent}>
              <Image className={styles.brandsImg} src={herbalife} alt="Herbalife" layout='fill' objectFit='contain' />
            </div>
          </section>
          <section>
            <div>
              <SquareIconFrame>
              </SquareIconFrame>
            </div>
          </section>

      </Layout>
  )
}
