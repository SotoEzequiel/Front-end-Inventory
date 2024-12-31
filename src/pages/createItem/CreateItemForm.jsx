import React, { useState } from 'react';
import { createItem } from '../../services/ApiService.jsx';
import styles from "../../pages/createItem/CreateItemForm.module.css";
import Button from '../../component/Buttom';
const CreateItemForm = () => {
  const [formData, setFormData] = useState({
    userName: '', 
    title: '',
    talle: '',
    price: '',
    category: '',
    color: '',
    images: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    if (!/https?:\/\/\S+\.\S+/.test(formData.images)) {
      setError('Por favor, ingrese un enlace de imagen válido.');
      setLoading(false);
      return;
    }

    try {
      const response = await createItem(formData);
      console.log('Ítem creado:', response);
      setSuccess(true);

      setFormData({
        userName: '',
        title: '',
        talle: '',
        price: '',
        category: '',
        color: '',
        images: '',
      });
    } catch (err) {
      console.error('Error al crear el ítem:', err);
      setError('Hubo un error al crear el ítem. Intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Crear Ítem</h2>
      {success && <p className={styles.successMessage}>Ítem creado exitosamente.</p>}
      {error && <p className={styles.errorMessage}>{error}</p>}
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Título:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={styles.formInput}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Talle:</label>
          <input
            type="text"
            name="talle"
            value={formData.talle}
            onChange={handleChange}
            className={styles.formInput}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Precio:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className={styles.formInput}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Categoría:</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={styles.formInput}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Color:</label>
          <input
            type="text"
            name="color"
            value={formData.color}
            onChange={handleChange}
            className={styles.formInput}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Link de la Imagen:</label>
          <input
            type="text"
            name="images"
            value={formData.images}
            onChange={handleChange}
            className={styles.formInput}
            placeholder="https://example.com/images.jpg"
            required
          />
        </div>
        
        <Button text='Crear Ítem'  />
      </form>
    </div>
  );
};

export default CreateItemForm;
