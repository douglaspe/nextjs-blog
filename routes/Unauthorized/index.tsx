import React, { useEffect } from 'react';
import nextCookie from 'next-cookies';
import Router from 'next/router';
import { Loading } from 'components';

interface UnauthorizedData {
  user: string;
  token: string;
}

const unauthorized = (Component) => {
  const Unauthorized = ({ user, token }: UnauthorizedData) => {
    useEffect(() => {
      if (!token && !user) {
        Router.replace('/login');
      }
    }, []);

    return token && user ? (
      <Component user={user} />
    ) : (
      <Loading>
        <h1>Carregando...</h1>
      </Loading>
    );
  };

  Unauthorized.getInitialProps = (context) => {
    const { user, token } = nextCookie(context) || null;

    return { user, token };
  };

  return Unauthorized;
};

export default unauthorized;
