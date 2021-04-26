import styles from '../styles/skill.module.scss'
import utilStyles from '../styles/utils.module.scss'
import SkillCard from './parts/skill_card'


export default function Skill () {
  return (
    <div className={`${styles.container} ${utilStyles.util_container}`}>
      <div>
        <h1 className={utilStyles.util_container_title}>SKILL</h1>
        <div className={styles.skill_container}>
          {skillList.map((skillItem, index) => (
            <SkillCard
              key={index}
              skillItem={skillItem}
            />
          ))}

        </div>
      </div>

      <div id='works'></div>
    </div>
  )

}

export const skillList = [
  {
    name: 'HTML',
    // text: '経験年数: 約1年',
    image: 'html.svg',
  },
  {
    name: 'CSS',
    // text: '経験年数: 約1年',
    image: 'css.svg',
  },
  {
    name: 'Sass',
    image: 'sass.svg'    
  },
  {
    name: 'Bootstrap',
    image: 'boot.svg'
  },
  {
    name: 'PHP',
    // text: '経験年数: 約1年',
    image: 'php.svg',
  },
  {
    name: 'JavaScript',
    // text: '経験年数: 約1年',
    image: 'js.svg',
  },
  {
    name: 'React.js',
    // text: '経験年数: 半年未満',
    image: 'react.svg',
  },
  {
    name: 'Next.js',
    image: 'nextjs.svg'
  },
  {
    name: 'TypeScript',
    image: 'ts.svg'
  },
  {
    name: 'Java',
    // text: '経験年数: 約1年半',
    image: 'java.svg',
  },
  {
    name: 'DB(MySQL)',
    text: 'SQL',
    image: 'mysql.svg'
  },
  {
    name: 'Firebase',
    image: 'firebase.svg'
  },
  {
    name: '[取得資格]',
    text: '基本情報技術者\n応用情報技術者\nGAIQ(2021年取得)',
    image: 'qual.svg'
  },
];