import React from 'react';
import Head from 'next/head';
import { Layout, Alert } from 'components/';
import { unauthorized } from 'routes';

interface FirstPostData {
  user: object;
}

const FirstPost = ({ user }: FirstPostData) => (
  <Layout user={user}>
    <Head>
      <title>First Post</title>
    </Head>
    <Alert type="success">
      <h1>First Post</h1>
    </Alert>
  </Layout>
);

export default unauthorized(FirstPost);
