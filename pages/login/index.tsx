import React, { useState } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { Layout } from 'components';
import { User } from 'services';
import { withAuth } from 'hocs';
import styles from './login.module.scss';

const Login = () => {
  const [fieldsUser, setFieldUser] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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

    setLoading(true);

    const response = await User.authenticate(fieldsUser);

    if (response.ok && response.status === 200) {
      const { token, user } = response.data;
      document.cookie = `token=${token}`;
      document.cookie = `user=${JSON.stringify(user)}`;
      Router.push('/posts/first-post');
      setLoading(false);
      return;
    }

    setError(response.data.error);
    setLoading(false);
  };

  return (
    <Layout loading={loading}>
      <Head>
        <title>Register</title>
      </Head>
      <form
        onSubmit={!loading ? handleSubmit : () => {}}
        className={styles.login}
      >
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
        <button type="submit">{loading ? 'Carregando' : 'Entrar'}</button>
        {error && <span>{error}</span>}
      </form>
    </Layout>
  );
};

export default withAuth(Login);
