import React from 'react';
import Head from 'next/head';
import { Layout } from '../src/components';
import { siteConfig } from '../src/config';
import utilStyles from '../styles/utils.module.scss';
import 'isomorphic-fetch';

function Home({ repositories }) {
  return (
    <Layout home>
      <Head>
        <title>{siteConfig.title}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Douglas. I'm a Front-End Developer.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section>
        {repositories.map((repo) => (
          <h1 key={repo.id}>{repo.name}</h1>
        ))}
      </section>
    </Layout>
  );
}

Home.getInitialProps = async () => {
  const response = await fetch('https://api.github.com/orgs/rocketseat/repos');

  return { repositories: await response.json() };
};

export default Home;
