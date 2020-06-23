import React from 'react';
import Head from 'next/head';
import { Layout, Alert } from '../../src/components';

export default function FirstPost() {
  return (
    <Layout home={false}>
      <Head>
        <title>First Post</title>
      </Head>
      <Alert type="success">
        <h1>First Post</h1>
      </Alert>
    </Layout>
  );
}
