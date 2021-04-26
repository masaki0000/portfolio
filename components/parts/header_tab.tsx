import Link from 'next/link'
import styles from '../../styles/parts_styles/header_tab.module.scss'
import Image from 'next/image'

const HeaderTab = () => {

  return (
    <div className={styles.header_tab}>

      <div className={styles.link}>
          <div className={styles.link_inner}>
            <div className={styles.img}>
              <Image
                src={`/images/about_icon.svg`}
                height={24}
                width={24}
                // layout='fill'
                // objectFit='contain'
                alt="blog_img"
              />
            </div>
            <a href='/#'>ABOUT</a>
          </div>
      </div>
      
      <div className={styles.link}>
          <div className={styles.link_inner}>
            <div className={styles.img}>
              <Image
                src={`/images/skill_icon.svg`}
                height={24}
                width={24}
                alt="blog_img"
              />
            </div>
            <a href='/#skill'>SKILL</a>
          </div>
      </div>
  
      <div className={styles.link}>
          <div className={styles.link_inner}>
            <div className={styles.img}>
              <Image
                src={`/images/works_icon.svg`}
                height={24}
                width={24}
                alt="blog_img"
              />
            </div>
            <a href='/#works'>WORKS</a>
          </div>
      </div>
      
      <div className={styles.link}>
          <div className={styles.link_inner}>
            <div className={styles.img}>
              <Image
                src={`/images/contact_icon.svg`}
                height={24}
                width={24}
                alt="blog_img"
              />
            </div>
            <a href='/#contact'>CONTACT</a>
          </div>
      </div>
      
    
    </div>
  )
}

export default HeaderTab;


