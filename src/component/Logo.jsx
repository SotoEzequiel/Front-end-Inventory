import React from "react";
import image from "../assets/logo.jpeg";
import styles from "./Logo.module.css";

const Logo = () => {
  return <img src={image} alt="Logo" className={styles.logo} />;
};

export default Logo;
