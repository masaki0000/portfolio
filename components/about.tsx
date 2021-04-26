import styles from '../styles/about.module.scss'
import utilStyles from '../styles/utils.module.scss'

export default function About () {
  return (
        <div className={`${styles.container} ${utilStyles.util_container}`}>
          <h1 className={utilStyles.util_container_title}>ABOUT</h1>
          <div>
            <div>
              <p>Masaki Saito</p>
            </div>
            <div>
              <p>
                はじめまして。現在は情報系の専門学校に通っています。<br />
                Webエンジニアを目指しており、最近はReact.js等、JavaScript関連を中心に勉強しています。<br />
                取得資格は、基本情報技術者・応用情報技術者です。<br />
                ガジェットついて調べる事やゲームが趣味です。<br /><br />

                よろしくお願いします。
              </p>
            </div>
          </div>

          <div  id='skill'></div>
        </div>

  )

}
