import styles from '../styles/works.module.scss'
import utilStyles from '../styles/utils.module.scss'
import WorksCard from './parts/works_card'


export default function Works () {
  return (
    <div className={`${styles.container} ${utilStyles.util_container}`}>
      <div>
        <h1 className={utilStyles.util_container_title} >WORKS</h1>
        <div className={styles.works_container}>
          {worksList.map((worksItem, index) => (
              <WorksCard
                key={index}
                worksItem={worksItem}
              />
          ))}
        </div>
      </div>
      
      <div id='contact'></div>
    </div>
  )
}


export const worksList = [
  {
    id: 'portfolit',
    name: 'Masaki\'s Postfolio',
    image: `works1.png`,
    lang: 'HTML / CSS / React.js / Next.js',
    mini_desc: `今表示しているポートフォリオサイトです。`,
    desc: '今表示しているポートフォリオサイトです。\nReact,Next.jsを利用して作成しました。\n' + 
          '当初SPA(Single Page Application)で制作しましたが、ブログサイトの制作後にSSG（Static Site Generator）で作り変えました。\n' + 
          '制作物の詳細ページはgetStaticPathsを利用した動的ページ生成を行っています。',
    page_url: 'https://portfolio-eosin-two.vercel.app/',
    gh_url: 'https://github.com/masaki0000/portfolio'
  },
  {
    id: 'tanksblog',
    name: 'Tank\'s Blog',
    image: `works2.png`,
    lang: 'HTML / CSS / React.js / Next.js',
    mini_desc: `ブログサイトです。`,
    desc: '個人用のブログサイトです。 \nReact,Next.jsを利用して作成しました。\n' + 
          'SSG（Static Site Generator）を利用しており、ブログの詳細ページはgetStaticPathsを利用した動的ページ生成を行っています。\n' +
          '特定ディレクトリ下のMarkdownファイルを読み取り、ブログページを生成しています。\n' +
          '初めてNext.jsを利用して制作したWebアプリケーションです。\n' +
          '\nプログラミングを学習する中で詰まった事や、自分の趣味に関する事を書き溜める目的で制作しました。',
    page_url: 'https://tanks-blog.vercel.app/',
    gh_url: 'https://github.com/masaki0000/tanks-blog'
  },
  {
    id: 'solution-share',
    name: 'ソリューションシェア',
    image: `works22.png`,
    lang: 'HTML / CSS / Bootstrap / JavaScript / PHP / DB(MySQL) / Firebase',
    mini_desc: `質問掲示板サイトです。`,
    desc: '※要件定義から運用まで全てをチームで制作をしました。\n' + 
          'デザイン・ページング処理・検索機能(サニタイズ除く)以外の大部分を担当しました\n' +
          'ログイン認証にはFirebaseAuthenticationを利用しました。\n' +
          'スレッド投稿機能や検索機能のサニタイズ処理に苦労しました。\n' +
          '\n質問掲示板と技術系ブログを合わせたような利用を目的として作成しました。\n' + 
          '詳細は動画リンクへ'
          ,
    page_url: 'https://oops-tridentziro.ssl-lolipop.jp/',
    gh_url: 'https://github.com/tridenttaro/SS1F',
    pre_url: 'https://youtu.be/zOxAIIw3338',
    ope_url: 'https://youtu.be/AS4VEhRPW2E'
  },
  {
    id: 'inout',
    name: 'In/Out',
    image: `works33.png`,
    lang: 'Java',
    mini_desc: 'カメラを利用した在宅確認アプリです。\n',
    desc: '※要件定義から運用まで全てをチームで制作をしました。\n' + 
          'ホスト側とゲスト側でそれぞれ端末を用意。\n' + 
          'ホストはカメラを使った顔認識を利用して、ゲストの在宅/不在を確認することができるが、ホスト側はゲスト側の顔を直接見ることができない。\n' +
          '詳細は動画リンクへ',
    pre_url: 'https://youtu.be/HvObG7vGHOM',
    ope_url: 'https://youtu.be/i-M8maDtSl4',

  }
]