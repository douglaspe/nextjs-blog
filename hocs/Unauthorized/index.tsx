import React, { useEffect } from 'react';
import nextCookie from 'next-cookies';
import { useRouter } from 'next/router';
import { Loading } from 'components';

type Props = {
  token?: string;
};

const unauthorized = (Component) => {
  const Unauthorized = ({ token }: Props) => {
    const router = useRouter();

    useEffect(() => {
      if (!token) {
        router.push('/login');
      }
    }, []);

    return token ? (
      <Component token={token} />
    ) : (
      <Loading>
        <h1>Carregando...</h1>
      </Loading>
    );
  };

  Unauthorized.getInitialProps = (context) => {
    const { token } = nextCookie(context) || null;

    return { token };
  };

  return Unauthorized;
};

export default unauthorized;
