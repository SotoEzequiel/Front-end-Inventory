import React from "react";
import styles from "./Home.module.css";
import heroImage from "../../assets/imagenhome.jpeg"; // Asegúrate de tener una imagen en esta ruta

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Bienvenido a Nuestra Plataforma</h1>
        <p className={styles.subtitle}>
          Administra nuestros productos y encuentra lo que necesitas con el mejor diseño y calidad. 
        </p>
        
      </div>
      <div className={styles.imageContainer}>
        <img src={heroImage} alt="Hero" className={styles.heroImage} />
      </div>
    </div>
  );
};

export default Home;
