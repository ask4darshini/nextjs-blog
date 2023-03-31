import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi There! Am a UI developer turned Technical Project Manager! I still love coding & updating my skills on latest js frameworks. Currently am learning next.js & I totally recommend using this since it is built on top of react & does server side rendering, static page generation, automatic routing, automatic code splitting, ease to use and maintain for developers.</p>
        <p>
          (This static website is built using next.js{' '}
          <a href="https://nextjs.org/learn">Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
