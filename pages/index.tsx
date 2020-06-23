import React from 'react';
import Head from 'next/head';
import { Layout } from '../src/components';
import 'isomorphic-fetch';
import { siteConfig } from '../src/config';
import utilStyles from '../styles/utils.module.scss';

interface Props {
  repositories?: Array<string>;
}

function Home({ repositories }: Props) {
  return (
    <Layout home>
      <Head>
        <title>{siteConfig.title}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I&apos;m Douglas. I&apos;m a Front-End Developer.</p>
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
