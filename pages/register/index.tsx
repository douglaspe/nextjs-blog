import React, { useState } from 'react';
import Head from 'next/head';
import { Layout } from 'components';
import { apiPost } from 'services';
import styles from './register.module.scss';

const Register = () => {
  const [user, setUser] = useState({ name: '', email: '', password: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUser((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await apiPost(user);

    console.log(response);
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
          value={user.name}
          placeholder="nome"
        />
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={user.email}
          placeholder="email"
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={user.password}
          placeholder="senha"
        />
        <button type="submit">Add</button>
      </form>
    </Layout>
  );
};

export default Register;
