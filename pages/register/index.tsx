import React, { useState } from 'react';
import Head from 'next/head';
import { Layout } from 'components';
import { User } from 'services';
import Router from 'next/router';
import styles from './register.module.scss';

const Register = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await User.post(userData);

    if (response.ok && response.status === 200) {
      Router.push('/login');
      return;
    }

    setError(response.data.error);
  };

  return (
    <Layout home={false}>
      <Head>
        <title>Register</title>
      </Head>
      <form onSubmit={handleSubmit} className={styles.register}>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={userData.name}
          placeholder="nome"
        />
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={userData.email}
          placeholder="email"
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={userData.password}
          placeholder="senha"
        />
        <button type="submit">Add</button>
        {error && <span>{error}</span>}
      </form>
    </Layout>
  );
};

export default Register;
