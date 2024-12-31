import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Para la navegación
import { getItems } from '../../services/apiService';
import Pagination from '../../pages/Home/pagination/Pagination'; // Importa el componente de paginación
import styles from './ItemView.module.css'; // Importa los estilos

const ItemView = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const itemsPerPage = 6; // Ítems por página
  const navigate = useNavigate(); // Hook de React Router para navegación

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await getItems(); // Llama a la API para obtener los ítems
        setItems(response);
      } catch (err) {
        console.error('Error al obtener los ítems:', err);
        setError('Hubo un error al cargar los ítems.');
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  const handleItemClick = (id) => {
    navigate(`/items/${id}`); // Navega a la página de detalles del ítem
  };

  // Calcular los ítems a mostrar en la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(items.length / itemsPerPage); // Total de páginas

  return (
    <div>
      <h2>Lista de Ítems</h2>
      {loading && <p>Cargando ítems...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && !error && items.length === 0 && <p>No hay ítems disponibles.</p>}
      <div className={styles.itemsContainer}>
        {currentItems.map((item) => (
          <div
            key={item._id}
            className={styles.card}
            onClick={() => handleItemClick(item._id)}
            onMouseEnter={(e) => e.currentTarget.classList.add(styles.cardHover)} // Agregar efecto hover
            onMouseLeave={(e) => e.currentTarget.classList.remove(styles.cardHover)} // Quitar efecto hover
          >
            {item.images && (
              <img
                src={item.images}
                alt={item.title}
                className={styles.image}
              />
            )}
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}><strong>Talle:</strong> {item.talle}</p>
            <p className={styles.text}><strong>Precio:</strong> ${item.price}</p>
            <p className={styles.text}><strong>Categoría:</strong> {item.category}</p>
            <p className={styles.text}><strong>Color:</strong> {item.color}</p>
          </div>
        ))}
      </div>
      {/* Usar el componente de paginación */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default ItemView;
