import styles from './Navigation.module.scss';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">FORM</Link></li>
        <li><Link to="/user">USER</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;