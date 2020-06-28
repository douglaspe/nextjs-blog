import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import { Loading } from 'components';

const Auth = (Component) => {
  const WithAuth = () => {
    const [signIn, setSignIn] = useState(false);

    useEffect(() => {
      const token = localStorage.getItem('token');
      const user = localStorage.getItem('user');

      if (user && token) {
        Router.replace('/');
        return;
      }

      setSignIn(true);
    }, []);

    return signIn ? (
      <Component />
    ) : (
      <Loading>
        <h1>Carregando...</h1>
      </Loading>
    );
  };

  return WithAuth;
};

export default Auth;
