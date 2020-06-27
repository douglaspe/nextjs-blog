import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { siteConfig } from 'config';
import { Loading } from 'components';
import utilStyles from 'styles/utils.module.scss';
import styles from './layout.module.scss';

const name = 'Douglas Pereira';

interface LayoutData {
  children?: React.ReactNode;
  home?: boolean;
  isLogged?: boolean;
  user?: object;
  loading?: boolean;
}

const Layout = ({ children, home, user, loading }: LayoutData) => {
  const router = useRouter();

  console.log(user);

  async function logout() {
    document.cookie = 'user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    router.push('/login');
  }

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteConfig.title
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteConfig.title} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {loading && (
        <Loading>
          <h1>Carregando...</h1>
        </Loading>
      )}
      <div className={styles.container}>
        {home && !user && (
          <Link href="/login">
            <a className={styles.loginButton}>Login</a>
          </Link>
        )}

        {user && (
          <button type="button" className={styles.loginButton} onClick={logout}>
            Logout
          </button>
        )}

        <header className={styles.header}>
          {home ? (
            <>
              <img
                src="/images/profile.jpg"
                className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                alt={name}
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          ) : (
            <>
              <Link href="/">
                <a>
                  <img
                    src="/images/profile.jpg"
                    className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                    alt={name}
                  />
                </a>
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/">
                  <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
              </h2>
            </>
          )}
        </header>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Layout;
