import React from 'react';
import Head from 'next/head';
import { Layout } from 'components/';
import { siteConfig } from 'config';
import { Route } from 'routes';
import utilStyles from 'styles/utils.module.scss';

interface HomeData {
  signIn: boolean;
}

function Home({ signIn }: HomeData) {
  return (
    <Layout home signIn={signIn}>
      <Head>
        <title>{siteConfig.title}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I&apos;m Douglas. I&apos;m a Front-End Developer.</p>
      </section>
    </Layout>
  );
}

export default Route(Home);
