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
        <div className={styles.introSectionImageContainer}>
            <Image className={styles.isImage}src={"./images/Group 20.svg"} height={30} width={300} alt={"GitHub Logo"}></Image>
          </div>
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
         </div>
      </section>
      <section className={styles.dynamicSection}>
        <h1 className={styles.dsHeader}>
          Interested in learning more about me?<span className={styles.flashingUnderscore}>_</span>
        </h1>
        <div className={styles.pagesContainer}>
            <div className={styles.pageOption}>
              <h1>// Recent Works</h1>
              <h2 className={styles.pageOptionH2}>A quick look at some of my more recent projects.</h2>
              <div className={styles.keywordsContainer}>
                <div className={styles.keyWord}>SpotifyAPI</div>
                <div className={styles.keyWord}>Soon</div>
                <div className={styles.keyWord}>Soon</div>
              </div>
            </div>
            <div className={styles.pageOption2}>
              <h1>// Experience </h1> 
              <h2 className={styles.pageOptionH2}>A recount of my work and collaboration experiences.</h2>
              <div className={styles.keywordsContainer}>
                <div className={styles.keyWord}>SpotifyAPI</div>
                <div className={styles.keyWord}>Soon</div>
                <div className={styles.keyWord}>Soon</div>
              </div>
            </div>
            <div className={styles.pageOption3}>
               <h1>// Education </h1>
               <h2 className={styles.pageOptionH2}>Some insight on the trajectory of my past/present education.</h2>
                <div className={styles.keywordsContainer}>
                  <div className={styles.keyWord}>SpotifyAPI</div>
                  <div className={styles.keyWord}>Soon</div>
                  <div className={styles.keyWord}>Soon</div>
                </div>
             </div> 
             <div className={styles.pageOption5}>
                <h1>// Skills</h1>
                <h2 className={styles.pageOptionH2}>A review over the skills I've acquired, both soft and technical.</h2>
                <div className={styles.keywordsContainer}>
                  <div className={styles.keyWord}>SpotifyAPI</div>
                  <div className={styles.keyWord}>Soon</div>
                  <div className={styles.keyWord}>Soon</div>
                </div>
             </div> 
             <div className={styles.pageOption5}>
                <h1>// About Me</h1>
                <h2 className={styles.pageOptionH2}>An overall look at who I am, what I love to do and what I value.</h2>
                <div className={styles.keywordsContainer}>
                  <div className={styles.keyWord}>SpotifyAPI</div>
                  <div className={styles.keyWord}>Soon</div>
                  <div className={styles.keyWord}>Soon</div>
                </div>
             </div> 
        </div>
      </section>
      <footer>dbdevbusiness@gmail.com | hosted by Vercel</footer>
    </main>
  )
}
