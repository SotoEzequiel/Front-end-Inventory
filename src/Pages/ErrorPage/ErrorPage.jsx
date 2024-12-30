import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ErrorPage.module.css'; // Opcional: Estilos para la página de error

const ErrorPage = () => {
  return (
    <div className={styles.errorPage}>
      <h1>404</h1>
      <p>¡Lo sentimos! La página que estás buscando no existe.</p>
      <Link to="/" className={styles.homeLink}>
        Volver al inicio
      </Link>
    </div>
  );
};

export default ErrorPage;
