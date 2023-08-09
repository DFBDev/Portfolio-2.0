'use client' //Switched to client-side rendering for dynamic interactions (less compatible with SSR).

import Image from 'next/image'
import './styles/globals.css'
import styles from './styles/pageFoundation.module.css'
import { useRef } from 'react'

export default function Home() {
  const scrollButtonStatusRef = useRef(false);
  const scrollButton = document?.getElementById("scrollButtonContainer");

  if(typeof window !== 'undefined'){
    scrollButton?.addEventListener('mousedown', () => {
      let scrollButtonHeight = (scrollButton.offsetHeight) / 2;
      console.log("event fired!");
  
      scrollButtonStatusRef.current = true;
        scrollButton?.addEventListener('mousemove', (instance2) => {
          if(scrollButtonStatusRef.current === true && scrollButton.offsetTop >= 272 && scrollButton.offsetTop <= 554){
            scrollButton!.style.top = (instance2.clientY - scrollButtonHeight).toString() + "px";
          }
          else if(scrollButton.offsetTop < 272){
            scrollButton!.style.top = "272px";
          }
          else if(scrollButton.offsetTop > 550){
            scrollButton!.style.top = "554px";
          }
        })
    });
    
    if(typeof window !== 'undefined'){
      scrollButton?.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', () => {});
        scrollButtonStatusRef.current = false;
      });
    };
  }

  return (
    <main>
      <header>
        <div className={styles.headerNameAndLogo}>
          <Image className={styles.logoImage} src={'./images/Group 15.svg'} height={34} width={34} alt={"Leaf Logo"}></Image>
          <span className='mt-0.5'>DFB</span>
          //
          <span className={styles.hnlSpan}>Full-stack Developer</span>
        </div>
        <div className={styles.headerOptions}>
          <button className={styles.headerOpt}>
          <a>
            Contact
          </a>
          </button>
          <button className={styles.headerOpt}>
            <a>
              References
            </a>
          </button>
          <button className={styles.headerOpt}>
            Resume
          </button>
        </div>
      </header>
      <section className={styles.introAndScrollSelector}>
        <div className={styles.nameAndGraphicContainer}>
         <article className={styles.introTextContainer}>
            <h1 className={styles.itcH1}>Hi there!</h1>
            <h2 className={styles.itcH2}>I'm Donathan Brown.</h2>
            <p className={styles.itcP}>I'm a self-taught, full-stack developer looking for opportunities to expand upon my abilities and 
            collaborate with others towards a higher goal! I specialize in creating scalable, extensively interactable 
            Web Applications, using the latest open-source frameworks and technologies. 
            From optimizing UI fluidity to creating a dynamic, REST API-driven backend 
            architecture; I love it all!</p>
            <div className={styles.socialsContainer}>
              <a className={styles.linkedInLink}>
                <Image src={"./images/LinkedInLogo.svg"} height={30} width={30} alt={"LinkedIn Logo"}>
                </Image>
              </a>
              <a className={styles.gitHubLink}>
                <Image src={"./images/GitHubLogo.svg"} height={30} width={30} alt={"GitHub Logo"}></Image>
              </a>
            </div>
         </article>
          <div className={styles.sectionScroll}>
            <div className={styles.scrollBar}>
              <div className={styles.scrollBarButtonContainer} id="scrollButtonContainer">
                <div className={styles.scrollBarButton}></div>
              </div>
            </div>
              <div className={styles.sectionSelections}>
                <ul className={styles.sectionsContainer}>
                  <li className={'flex w-64 justify-between items-center ml-auto'} id={"recentWorksOption"}>Recent Works <Image className={styles.activeIconImage} src={'./images/Group 1.svg'} height={0} width={34} alt={"Active Icon."}></Image></li>
                  <li className={'flex w-64 justify-between items-center ml-auto'} id={"experienceOption"}>Experience <div className={styles.selectionIndicator}></div></li>
                  <li className={'flex w-64 justify-between items-center ml-auto'} id={"educationOption"}>Education <div className={styles.selectionIndicator}></div></li>
                  <li className={'flex w-64 justify-between items-center ml-auto'} id={"skillsOption"}>Skills <div className={styles.selectionIndicator}></div></li>
                  <li className={'flex w-64 justify-between items-center ml-auto'} id={"aboutMeOption"}>About Me <div className={styles.selectionIndicator}></div></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.dynamicSection}>
          <h1 className={styles.dynamicSectionHeader}>
            <div>
              <span className={styles.dshText}>Recent Works</span>
              A few of my most recent works, developed wholly by yours truly!
            </div>
            <div className={styles.recentWorksArrowsContainer}>
              <button className={styles.rwa1}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path className={styles.rwa1SVG} d="M0 15L22.5 2.00962V27.9904L0 15Z" fill="white"/>
                  <path className={styles.rwa1SVG2} d="M13 15L22.75 2.00962V27.9904L13 15Z" fill="#141414"/>
                </svg>
              </button>
              <button className={styles.rwa2}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path className={styles.rwa2SVG} d="M30 15L7.5 27.9904V2.00962L30 15Z" fill="white"/>
                  <path className={styles.rwa2SVG2} d="M17 15L7.25 27.9904L7.25 2.00962L17 15Z" fill="#141414"/>
                </svg>
              </button>
            </div>
          </h1>
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
                    <Image className={styles.moreIcon} src={'./images/Group 6.svg'} height={0} width={50} alt={"Show more info."}></Image>
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
