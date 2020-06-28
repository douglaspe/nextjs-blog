import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import { Loading } from 'components';

const unauthorized = (Component) => {
  const Unauthorized = () => {
    const [signIn, setSignIn] = useState(false);

    useEffect(() => {
      const token = localStorage.getItem('token');
      const user = localStorage.getItem('user');
      if (!user && !token) {
        Router.replace('/login');
        return;
      }

      setSignIn(true);
    }, []);

    return signIn ? (
      <Component signIn={signIn} />
    ) : (
      <Loading>
        <h1>Carregando...</h1>
      </Loading>
    );
  };

  return Unauthorized;
};

export default unauthorized;
