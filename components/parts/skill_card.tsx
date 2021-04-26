import styles from '../../styles/skill.module.scss'
import Image from 'next/image'


type Props = {
  skillItem: {
    name: string
    text?: string
    image: string
  }
}

export default function SkillCard ({skillItem}: Props) {
  return (

    <div className={styles.skill_card}>
      <div className={styles.skill_card_img}>
        <Image
          className={styles.image}
          src={`/images/skill_img/${skillItem.image}`}
          height={100}
          width={100}
          // layout='fill'
          // objectFit='contain'
          alt="blog_img"
        />
      </div>

      <div className={styles.skill_card_text}>
        <p className={styles.skill_card_text_name}>{skillItem.name}</p>
        <p className={styles.skill_card_text_text}>{skillItem.text}</p>
      </div>
      
    </div>
  )
}