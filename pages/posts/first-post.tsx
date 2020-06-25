import React from 'react';
import Head from 'next/head';
import { Layout, Alert } from 'components/';
import { unauthorized } from 'hocs';

type Props = {
  token?: string;
};

const FirstPost = ({ token }: Props) => {
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

export default unauthorized(FirstPost);
