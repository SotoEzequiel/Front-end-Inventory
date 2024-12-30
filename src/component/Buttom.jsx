import React from 'react';
import styles from './Button.module.css'; // Importamos el archivo de estilos

// El componente Button acepta un "texto" y una "acción" (por ejemplo, una función onClick)
const Button = ({ text, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
