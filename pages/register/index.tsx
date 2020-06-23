import React, { useState } from 'react';
import Head from 'next/head';
import { Layout } from '../../src/components';
import { post } from '../../src/services/user';
import styles from './register.module.scss';

const Register = () => {
  const [user, setUser] = useState({ name: '', email: '', password: '' });

  const handleChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    setUser((prevState) => {
      return {
        ...prevState,
        [field]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    post(user);
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
          type="text"
          name="email"
          onChange={handleChange}
          value={user.email}
          placeholder="email"
        />
        <input
          type="text"
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
