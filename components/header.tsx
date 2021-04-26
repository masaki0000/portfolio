import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/header.module.scss'
import HeaderTab from './parts/header_tab'
import HeaderHamburger from './parts/header_hambuerger'


function Header() {

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header_title_wrapper}>
          <div className={styles.header_title}>
              <Link href='/'>
                <a>Masaki's Portfolio</a>
              </Link>
          </div>
          <HeaderHamburger />
          <HeaderTab />
        </div>
        
      </header>

    </>
  )
    
  
}

export default Header;