import React from 'react';
import cn from 'classnames';
import styles from './alert.module.scss';

type Props = {
  children?: React.ReactNode;
  type?: string;
};

const Alert = ({ children, type }: Props) => {
  return (
    <div
      className={cn({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error',
      })}
    >
      {children}
    </div>
  );
};

export default Alert;
