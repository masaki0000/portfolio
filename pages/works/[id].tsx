import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '../../components/layout'
import styles from '../../styles/id.module.scss'
import utilStyles from '../../styles/utils.module.scss'
import skillStyles from '../../styles/skill.module.scss'
import { GetStaticProps, GetStaticPaths } from 'next'
import { getPostIds, getWorksItem } from '../../lib/posts'
import { skillList } from '../../components/skill'
import SkillCard from '../../components/parts/skill_card'

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

export default function Post({ worksItem }: Props) {
  const langList = worksItem.lang.split(' / ');
  
  return (
    <Layout>
      <Head>
        <title>{worksItem.name} | {siteTitle}</title>
      </Head>

      <article className={` ${styles.container} ${utilStyles.util_container}`}>
        <h1 className={utilStyles.util_container_title}>{worksItem.name}</h1>
        <div className={styles.image}>
          <Image
            src={`/images/works_img/${worksItem.image}`}
            // height={500}
            // width={500}
            layout='fill'
            objectFit='contain'
            alt="blog_img"
          />
        </div>
        <div className={styles.text}>
          <p className={styles.text_desc}>{worksItem.desc}</p>
          <ul>
            {checkUrl(worksItem.page_url, 'page')}
            {checkUrl(worksItem.gh_url, 'gh')}
            {checkUrl(worksItem.pre_url, 'pre')}
            {checkUrl(worksItem.ope_url, 'ope')}
          </ul>
        </div>
        {/* <p className={styles.works_card_text_lang}>{worksItem.lang}</p> */}
        <h3>使用技術</h3>
        <div className={skillStyles.skill_container}>
          {langList.map((langItem) => (
            skillList.map((skillItem, index) => (
              (() => {
                if (langItem === skillItem.name) {
                  return (
                    <SkillCard
                      key={index}
                      skillItem={skillItem}
                    />
                  )
                }
              })()
            ))
          ))}
        </div>
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = getWorksItem(params.id as string)
  const worksItem = postData.postData
  return {
    props: {
      worksItem
    }
  }
}

const checkUrl =  (url: string, type: string) => {

  if (url && url != '' ) {
    if (type === 'page') {
      return (
        <li><a className={styles.text_page_url} href={url} target="_blank">
          サイトURLリンク
        </a></li>
      )

    } else if (type === 'gh') {
      return (
        <li><a className={styles.text_gh_url} href={url} target="_blank">
          GitHubページリンク
        </a></li>
      )

    } else if (type == 'pre') {
      return (
        <li><a className={styles.text_pre_url} href={url} target="_blank">
          アプリプレゼン動画リンク
        </a></li>
      )
    } else if (type == 'ope') {
      return (
        <li><a className={styles.text_ope_url} href={url} target="_blank">
          実機説明動画リンク
        </a></li>
      )
    }
  }
}
