import React, { useEffect } from 'react';
import nextCookie from 'next-cookies';
import Router from 'next/router';
import { Loading } from 'components';

interface AuthData {
  user: string;
  token: string;
}

const Auth = (Component) => {
  const WithAuth = ({ user, token }: AuthData) => {
    useEffect(() => {
      if (user && token) {
        Router.replace('/');
      }
    }, []);

    return !user && !token ? (
      <Component />
    ) : (
      <Loading>
        <h1>Carregando...</h1>
      </Loading>
    );
  };

  WithAuth.getInitialProps = (context) => {
    const { user, token } = nextCookie(context) || null;

    return { user, token };
  };

  return WithAuth;
};

export default Auth;
