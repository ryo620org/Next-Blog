import Head from 'next/head'
import Link from 'next/link'
import { NextPage } from 'next'
import Layout, { siteTitle } from '~/components/layout'
import utilStyles from '~/styles/utils.module.css'

const Home: NextPage = () => (
  <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <section className={utilStyles.headingMd}>
      <p>[Your Self Introduction]</p>
      <p>
        (This is a sample website - you’ll be building a site like this on{' '}
        <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
      </p>
      <Link href="/posts/first-post">
        <a>First Post</a>
      </Link>
    </section>
  </Layout>
)

export default Home
