import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css'; // Asegúrate de que la ruta al archivo CSS sea correcta
import Logo from '../../component/Logo';

const NavbarLoggedOut = () => {
  const navigate = useNavigate();

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link to="/" className={styles.navbarLogo}>
        <Logo/>
        </Link>
        <ul className={styles.navbarLinks}>
          <li>
            <Link to="/" className={styles.navbarLink}>Inicio</Link>
          </li>
          
        </ul>
        <div className={styles.navbarUser}>
          <button className={styles.navbarButton} onClick={() => navigate('/signin')}>Iniciar sesión</button>
          <button className={styles.navbarButton} onClick={() => navigate('/register')}>Registrarse</button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarLoggedOut;
