import styles from '../styles/about.module.scss'
import utilStyles from '../styles/utils.module.scss'

export default function About () {
  return (
        <div className={`${styles.container} ${utilStyles.util_container}`}>
          <h1 className={utilStyles.util_container_title}>ABOUT</h1>
          <div>
            <div>
              <ul>
                <li>名前： 齋藤 真輝</li>
                <li>出身:　愛知県</li>
                <li>学歴:　トライデントコンピュータ専門学校(在学中)</li>
              </ul>
              <p>
                はじめまして。現在20歳の専門学生の齋藤真輝と申します。<br />
                Webエンジニアを目指しており、最近はReactやNext.js等、JavaScript関連を中心に勉強しています。<br />
                取得資格は、基本情報技術者・応用情報技術者・GAIQ(Google アナリティクス個人認定資格。2021年取得)です。<br />
                趣味はガジェットついて調べものをすることや、ゲームをすることです。<br />
                よろしくお願い致します。<br />
              </p>
            </div>
          </div>

          <div  id='skill'></div>
        </div>

  )

}
