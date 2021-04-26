import styles from '../styles/about.module.scss'
import utilStyles from '../styles/utils.module.scss'
import Image from 'next/image'

export default function Contact () {
  return (

    <div className={`${styles.container} ${utilStyles.util_container}`}>
      <div>
        <h1 className={utilStyles.util_container_title} >CONTACT</h1>

        <div className={styles.image}>
          <Image
            src={`/images/address.png`}
            // height={100}
            // width={500}
            layout={'fill'}
            objectFit={'contain'}
            alt="アドレス画像"
          />
        </div>
        <p>※スパム対策の為、アドレスは画像化しています</p>

      </div>
    </div>
  )
}