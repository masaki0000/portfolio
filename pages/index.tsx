import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import About from '../components/about'
import Skill from '../components/skill'
import Works from '../components/works'
import Contact from '../components/contact'



export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <About />
      <Skill />
      <Works />
      <Contact />

    </Layout>
  )
}