import React, { useEffect } from 'react';
import nextCookie from 'next-cookies';
import { useRouter } from 'next/router';
import { Loading } from 'components';

type Props = {
  token?: string;
};

const withAuth = (Component) => {
  const WithAuth = ({ token }: Props) => {
    const router = useRouter();

    useEffect(() => {
      if (token) {
        router.push('/');
      }
    }, []);

    return !token ? (
      <Component token={token} />
    ) : (
      <Loading>
        <h1>Carregando...</h1>
      </Loading>
    );
  };

  WithAuth.getInitialProps = (context) => {
    const { token } = nextCookie(context) || null;

    return { token };
  };

  return WithAuth;
};

export default withAuth;
