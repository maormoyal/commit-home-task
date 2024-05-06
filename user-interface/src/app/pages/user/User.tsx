import { Route, Link } from 'react-router-dom';

import styles from './User.module.scss';

/* eslint-disable-next-line */
export interface UserProps { }

export function User(props: UserProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to User!</h1>
    </div>
  );
}

export default User;
