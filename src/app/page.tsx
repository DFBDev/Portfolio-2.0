import Image from 'next/image'
import './styles/globals.css'
import styles from './styles/pageFoundation.module.css'

export default function Home() {
  return (
    <main>
      <header>
        <div className={styles.headerNameAndLogo}>
          DFB
          <Image src={'./images/Group 1.svg'} height={25} width={25} alt={"Leaf Logo"}></Image>
          <span className={styles.hnlSpan}>Full-stack Developer</span>
        </div>
        <div className={styles.headerOptions}>
          <button className={styles.headerLinkedIn}>
          <a href={'https://www.linkedin.com/in/donathan-brown-929255248/'} target={'_blank'}>
            LinkedIn
          </a>
          </button>
          <button className={styles.headerGitHub}>
            <a href={'https://github.com/DFBDev'} target={'_blank'}>
              GitHub
            </a>
          </button>
          <button className={styles.headerResume}>
            Resume
          </button>
        </div>
      </header>
      <div className={styles.headerTrail}>
        <span className={styles.htText}>Passionate in both Computer and Web Technologies, with a burning desire for professional quality and improvement.</span>
      </div>
      <section className={styles.introAndScrollSelector}>
        <div className={styles.nameAndGraphicContainer}>
          <Image className={styles.introductionImage} src={'./images/Group 2.svg'} height={650} width={650} alt={"Donathan Brown Intro Art"}></Image>
          <div className={styles.sectionScroll}>
            <div className={styles.scrollBar}>
              <div className={styles.scrollBarButton}></div>
            </div>
              <div className={styles.sectionSelections}>
                <ul className={styles.sectionsContainer}>
                  <li className={'flex w-64 justify-between items-center'}>Recent Works <Image className={styles.activeIconImage} src={'./images/Group 3.svg'} height={0} width={34} alt={"Active Icon."}></Image></li>
                  <li className={'flex w-64 justify-between items-center'}>Experience <div className={styles.selectionIndicator}></div></li>
                  <li className={'flex w-64 justify-between items-center'}>Education <div className={styles.selectionIndicator}></div></li>
                  <li className={'flex w-64 justify-between items-center'}>Skills <div className={styles.selectionIndicator}></div></li>
                  <li className={'flex w-64 justify-between items-center'}>About Me <div className={styles.selectionIndicator}></div></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.dynamicSection}>
        <div className={styles.stcContainer}>
          <div className={styles.sectionTitleOverlap}>
            <div className={styles.sectionTitle}>Recent Works</div>
          </div>
        </div>
        <div className={styles.sectionTransitionCover}>
          <Image className={styles.stcImage} src={'./images/Group 7.svg'} height={150} width={150} alt={"Leaf Logo"}></Image>
          <div className={styles.stcLine}></div>
        </div>
        <div className={styles.projectsContainer}>
            <div className={styles.projectOutline}>
              <div className={styles.projectBox}>
                <div className={styles.projImageCover}>
                  <h1 className={styles.projectTitle}>Radio Hill</h1>
                  <div className={styles.projectOptions}>
                    <Image className={styles.optionImage} src={'./images/Ellipse 18.svg'} height={30} width={30} alt={"GitHub Repository."}></Image>
                    <Image className={styles.optionImage} src={'./images/Group 5.svg'} height={30} width={30} alt={"Live Demo."}></Image>
                    <Image className={styles.optionImage} src={'./images/Group 4.svg'} height={30} width={30} alt={"Show Project Image."}></Image>
                  </div>
                  <h2 className={styles.projMore}>
                    <Image className={styles.moreIcon} src={'./images/Group 6.svg'} height={0} width={50} alt={"Arrow pointing right."}></Image>
                  </h2>
                </div>
                <Image className={styles.projImage} src={'./images/Rectangle 66.svg'} height={0} width={1000} alt={"Radio Hill Picture."}></Image>
              </div>
            </div>
            <div className={styles.projectOutline2}>
              <div className={styles.projectBox2}>
              <div className={styles.projImageCover}>
                  <h1 className={styles.projectTitle}>Coming Soon!</h1>
                  <div className={styles.projectOptions}>
                    <Image className={styles.optionImage} src={'./images/Ellipse 18.svg'} height={30} width={30} alt={"GitHub Repository."}></Image>
                    <Image className={styles.optionImage} src={'./images/Group 5.svg'} height={30} width={30} alt={"Live Demo."}></Image>
                    <Image className={styles.optionImage} src={'./images/Group 4.svg'} height={30} width={30} alt={"Show Project Image."}></Image>
                  </div>
                  <h2 className={styles.projMore}>
                    <Image className={styles.moreIcon} src={'./images/Group 6.svg'} height={0} width={50} alt={"Arrow pointing right."}></Image>
                    </h2>
                </div>
              </div>
            </div>
            <div className={styles.projectOutline3}>
              <div className={styles.projectBox3}>
              <div className={styles.projImageCover}>
                  <h1 className={styles.projectTitle}>Coming Soon!</h1>
                  <div className={styles.projectOptions}>
                    <Image className={styles.optionImage} src={'./images/Ellipse 18.svg'} height={30} width={30} alt={"GitHub Repository."}></Image>
                    <Image className={styles.optionImage} src={'./images/Group 5.svg'} height={30} width={30} alt={"Live Demo."}></Image>
                    <Image className={styles.optionImage} src={'./images/Group 4.svg'} height={30} width={30} alt={"Show Project Image."}></Image>
                  </div>
                  <h2 className={styles.projMore}>
                    <Image className={styles.moreIcon} src={'./images/Group 6.svg'} height={0} width={50} alt={"Arrow pointing right."}></Image>
                  </h2>
                </div>
              </div>
            </div>
        </div>
      </section>
      <footer>dbdevbusiness@gmail.com | hosted by Vercel</footer>
    </main>
  )
}
