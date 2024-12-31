import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../../services/ApiService.jsx';
import styles from './Navbar.module.css';
import Button from '../../component/Buttom';
import Logo from '../../component/Logo';

const NavbarLoggedIn = () => {
  const [userName, setUserName] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem('name'); // Obtén el nombre del usuario desde localStorage
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  const handleLogout = () => {
    logoutUser(); // Llama a la función de logout
    setUserName(null); // Limpia el estado
    navigate('/'); // Redirige al login
    window.location.reload(); // Refresca la página
  };

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
          
          <li>
            <Link to="/createitem" className={styles.navbarLink}>Crear Ítem</Link>
          </li>
          <li>
            <Link to="/itemsview" className={styles.navbarLink}>Todos los Ítems</Link>
          </li>
        </ul>
        <div className={styles.navbarUser}>
          <span className={`${styles.logout}`}>Hola, {userName}!</span>
          
          <Button text={"Cerrar sesión"} onClick={handleLogout}  />
        </div>
      </div>
    </nav>
  );
};

export default NavbarLoggedIn;
