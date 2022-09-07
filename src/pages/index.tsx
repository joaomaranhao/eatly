import Image from 'next/image'
import { Layout } from '../components/Layout'

import { AiFillCrown } from 'react-icons/ai'
import { BsPlayFill } from 'react-icons/bs'
import { GiChefToque } from 'react-icons/gi'
import { FaConciergeBell } from 'react-icons/fa'
import { IoRestaurantSharp } from 'react-icons/io5'
import { ImShield } from 'react-icons/im'

import styles from '../styles/Home.module.css'

import photoOne from '../../public/images/photo-1.png'
import herbalife from '../../public/images/herbalife_logo.svg'
import { SectionTitle } from '../components/SectionTitle'
import { SquareIconFrame } from '../components/SquareIconFrame'

export default function Home () {
  return (
      <Layout>
        <section className={styles.heroSection}>
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
        </section>

          <section className={styles.brandsSection}>
            <div className={styles.brandsContent}>
              <Image className={styles.brandsImg} src={herbalife} alt="Herbalife" layout='fill' objectFit='contain' />
            </div>
          </section>

          <section className={styles.bestProgramsSection}>
            <div className={styles.bestProgramsTitle}>
              <SectionTitle title={'Our Best Programs'}>
                <AiFillCrown />
              </SectionTitle>
            </div>

            <div className={styles.bestPrograms}>
              <div className={styles.bestProgramsContent}>

                <div className={styles.bestProgramsCard}>
                  <SquareIconFrame>
                    <GiChefToque />
                  </SquareIconFrame>
                  <h3 className={styles.bestProgramsCardTitle}>Healthy Recipe</h3>
                  <p className={styles.bestProgramsCardSubtitle}>Healthier Recipes, from food & nutrition experts</p>
                </div>

                <div className={styles.bestProgramsCard}>
                  <SquareIconFrame>
                    <FaConciergeBell />
                  </SquareIconFrame>
                  <h3 className={styles.bestProgramsCardTitle}>Healthy Meals</h3>
                  <p className={styles.bestProgramsCardSubtitle}>Learn how to become a meal-planning pro</p>
                </div>

                <div className={styles.bestProgramsCard}>
                  <SquareIconFrame>
                    <IoRestaurantSharp />
                  </SquareIconFrame>
                  <h3 className={styles.bestProgramsCardTitle}>Healthy Eating</h3>
                  <p className={styles.bestProgramsCardSubtitle}>Eat healthy with our expert & inspiration tips</p>
                </div>

                <div className={styles.bestProgramsCard}>
                  <SquareIconFrame>
                    <ImShield />
                  </SquareIconFrame>
                  <h3 className={styles.bestProgramsCardTitle}>Healthy Lifes</h3>
                  <p className={styles.bestProgramsCardSubtitle}>Your life is your choice, make yourself healthier</p>
                </div>

              </div>
            </div>

          </section>

      </Layout>
  )
}
