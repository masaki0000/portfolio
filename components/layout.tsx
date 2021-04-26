import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/layout.module.scss'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'
import Header from './header'
import Footer from './footer'

export const siteTitle = 'Masaki\'s Portfolio'

type Props = {
  children: React.ReactNode,
  home?: boolean,
}

export default function Layout({
  children,
  home,
}: Props) 
{
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="ポートフォリオサイトです。プロフィール・使用経験のある言語・サービス・制作物・連絡先を記載しています。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
        <meta property="og:type" content="website" />
        <meta name="og:site_name" content={siteTitle} />
        <meta name="og:title" content={siteTitle} />
        
        <meta
          property="og:image"
          content={"/images/big_theme.png"}
        />
      </Head>

      <Header />

      <main className={styles.main}>

        {children}
        
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← 前のページに戻る</a>
            </Link>
          </div>
        )}
      </main>
      

      <Footer />
    </div>
  )
}

