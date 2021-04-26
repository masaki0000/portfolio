import Link from 'next/link'
import styles from '../../styles/works.module.scss'
import Image from 'next/image'


type Props = {
  worksItem: {
    id: string
    name: string
    image: string
    lang?: string
    mini_desc: string
    desc: string
    page_url?: string
    gh_url?: string
    pre_url?: string
    ope_url?: string
  }
}

export default function SkillCard ({worksItem}: Props) {
  return (

    <div className={styles.works_card}>
      <p className={styles.works_card_name}>{worksItem.name}</p>
      <div className={styles.works_card_img}>
        <Image
          src={`/images/works_img/${worksItem.image}`}
          layout='fill'
          objectFit='contain'
          alt="blog_img"
        />
      </div>

      <div className={styles.works_card_text}>
        <p className={styles.works_card_text_mini_desc}>{worksItem.mini_desc}</p>
        <p className={styles.works_card_text_lang}>{worksItem.lang}</p>
      </div>

      <Link href={`/works/${worksItem.id}`} > 
        <a className={styles.button}> More </a>
      </Link>
      
    </div>
  )
}