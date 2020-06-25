import React, { useState } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { Layout } from 'components';
import { auth } from 'services';
import styles from './login.module.scss';

const Login = () => {
  const [fieldsUser, setFieldUser] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFieldUser((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await auth(fieldsUser);

    if (response.ok && response.status === 200) {
      const { token, user } = response.data;
      await localStorage.setItem('token', token);
      await localStorage.setItem('user', JSON.stringify(user));
      document.cookie = `token=${token}`;
      Router.push('/posts/first-post');
      return;
    }

    setError(response.data.error);
  };

  return (
    <Layout isLogged>
      <Head>
        <title>Register</title>
      </Head>
      <form onSubmit={handleSubmit} className={styles.login}>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={fieldsUser.email}
          placeholder="email"
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={fieldsUser.password}
          placeholder="senha"
        />
        <button type="submit">Add</button>
        {error && <span>{error}</span>}
      </form>
    </Layout>
  );
};

export default Login;
