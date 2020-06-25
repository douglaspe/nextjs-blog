import React, { useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { Layout, Alert } from 'components/';
import nextCookie from 'next-cookies';

type Props = {
  token?: string;
};

const FirstPost = ({ token }: Props) => {
  useEffect(() => {
    if (!token) Router.push('/login');
  }, []);

  return (
    <Layout home={false} token={token}>
      <Head>
        <title>First Post</title>
      </Head>
      <Alert type="success">
        <h1>First Post</h1>
      </Alert>
    </Layout>
  );
};

FirstPost.getInitialProps = (context) => {
  const { token } = nextCookie(context) || null;

  return { token };
};

export default FirstPost;
