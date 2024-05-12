import styles from './Navigation.module.scss';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {

  const location = useLocation();

  const checkActive = (path: string): string => {
    return location.pathname === path ? styles.active : '';
  };

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/" className={checkActive('/')}>FORM</Link>
        </li>
        <li>
          <Link to="/user" className={checkActive('/user')}>USER</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
