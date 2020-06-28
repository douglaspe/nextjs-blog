import React, { useEffect, useState } from 'react';

const Route = (Component) => {
  const WithRoute = () => {
    const [signIn, setSignIn] = useState(false);

    useEffect(() => {
      const token = localStorage.getItem('token');
      const user = localStorage.getItem('user');

      if (user && token) {
        setSignIn(true);
      }
    }, []);

    return <Component signIn={signIn} />;
  };

  return WithRoute;
};

export default Route;
