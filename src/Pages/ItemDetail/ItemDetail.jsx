import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { logoutUser, getItemById, deleteItemById } from '../../services/apiService';
import EditItem from '../EditItem/EditItem';
import styles from './ItemDetail.module.css'; // Importamos los estilos con CSS Module

const ItemDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);


  useEffect(() => {
    // Verifica si existe un token en el localStorage
    const token = localStorage.getItem("token"); // O sessionStorage.getItem("token");
    const role = localStorage.getItem("role");

    if(role!=="admin"){
      alert("No tienes permiso de administrador")
      navigate("/"); // Redirige al home

    }

    if (!token) {
      // Si no hay token, redirige al Home (por ejemplo, "/")
      navigate("/"); // Redirige al home
    }
  }, [navigate]);  // Solo se ejecuta cuando el componente se monta

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const itemData = await getItemById(id);
        setItem(itemData);
      } catch (err) {
        console.error('Error al obtener el ítem:', err);
        setError('Hubo un error al cargar los detalles del ítem.');
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  const handleLogout = () => {
    logoutUser();
    navigate('/login');
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = (updatedItem) => {
    setItem(updatedItem);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleDelete = async () => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este ítem?')) {
      try {
        await deleteItemById(id);
        alert('Ítem eliminado exitosamente.');
        navigate('/items');
      } catch (err) {
        console.error('Error al eliminar el ítem:', err);
        setError('Hubo un error al eliminar el ítem.');
      }
    }
  };

  return (
    <div>
      <h1>Detalles del Ítem</h1>
      
      {loading && <p>Cargando detalles del ítem....</p>}
      {error && <p className={styles.error}>{error}</p>}
      {!loading && item && !isEditing && (
        <div className={styles.card}>
          <h2>{item.title}</h2>
          <p><strong>Talle:</strong> {item.talle}</p>
          <p><strong>Precio:</strong> ${item.price}</p>
          <p><strong>Categoría:</strong> {item.category}</p>
          <p><strong>Color:</strong> {item.color}</p>
          {item.images && (
            <img
              src={item.images}
              alt={item.title}
              className={styles.image}
            />
          )}
          <button className={styles.button} onClick={handleEditClick}>Editar Ítem</button>
          <button className={styles.deleteButton} onClick={handleDelete}>Eliminar Ítem</button>
        </div>
      )}
      {isEditing && <EditItem item={item} onSave={handleSave} onCancel={handleCancel} />}
    </div>
  );
};

export default ItemDetail;
