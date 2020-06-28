import React from 'react';
import Head from 'next/head';
import { Layout, Alert } from 'components/';
import { unauthorized } from 'hocs';

interface FirstPostData {
  signIn: boolean;
}

const FirstPost = ({ signIn }: FirstPostData) => (
  <Layout signIn={signIn}>
    <Head>
      <title>First Post</title>
    </Head>
    <Alert type="success">
      <h1>First Post</h1>
    </Alert>
  </Layout>
);

export default unauthorized(FirstPost);
