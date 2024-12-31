import React, { useState, useContext, useCallback } from 'react';
import { registerUser } from '../../services/apiService';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import styles from './RegisterForm.module.css'; // CSS Module
import Button from '../../component/Buttom';

const RegisterForm = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    nameUser: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'user',
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setError(null);
  }, []); // Esta función no depende de variables externas y se memoriza

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Validaciones
    if (!formData.nameUser || formData.nameUser.length < 3 || formData.nameUser.length > 20) {
      setError('El nombre debe tener entre 3 y 20 caracteres.');
      setLoading(false);
      return;
    }

    if (!formData.password || formData.password.length < 6 || formData.password.length > 15) {
      setError('La contraseña debe tener entre 6 y 15 caracteres.');
      setLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden.');
      setLoading(false);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('El correo electrónico no es válido.');
      setLoading(false);
      return;
    }

    try {
      const response = await registerUser(formData);
      console.log('Registro exitoso:', response);

      if (response?.accessToken) {
        login(response.accessToken); // Llamamos a login desde el contexto
        navigate('/itemsview');
      } else {
        setError('No se recibió un accessToken válido del servidor.');
      }
    } catch (err) {
      setError('Hubo un problema al registrar el usuario.');
      console.error('Error al registrar:', err);
    } finally {
      setLoading(false);
    }
  }, [formData, login, navigate]); // Se memoriza y se recrea solo si las dependencias cambian

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Crea una cuenta</h2>
      {error && <p className={styles.error}>{error}</p>}
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Nombre de Usuario:</label>
          <input
            type="text"
            name="nameUser"
            value={formData.nameUser}
            onChange={handleInputChange}
            placeholder="Ej: Usuario123"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="ejemplo@correo.com"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Contraseña:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Mínimo 6 caracteres"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Confirmar Contraseña:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            placeholder="Repite tu contraseña"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Rol:</label>
          <select name="role" value={formData.role} onChange={handleInputChange}>
            <option value="user">Usuario</option>
            <option value="admin">Administrador</option>
          </select>
        </div>
        <Button type="submit" text={"Registrarse"} />
      </form>
    </div>
  );
};

export default RegisterForm;
