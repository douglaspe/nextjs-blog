import React from 'react';
import styles from './loading.module.scss';

type Props = {
  children?: React.ReactNode;
};

const Loading = ({ children }: Props) => {
  return <div className={styles.loading}>{children}</div>;
};

export default Loading;
