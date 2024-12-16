import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "/api/auth",
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para incluir el token en las solicitudes
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Obtener el token desde localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Función para registrar un usuario
export const registerUser = async (userData) => {
  try {
    console.log("Datos enviados para el registro:", userData);

    const response = await api.post('/register', userData);

    console.log('Datos de la respuesta:', response.data);

    // Guardar el token en localStorage si existe
    if (response.data && response.data.accessToken) {
      localStorage.setItem('token', response.data.accessToken);
      console.log('Token guardado en localStorage:', localStorage.getItem('token'));
    }

    return response.data; // Devuelve la respuesta de la API
  } catch (error) {
    console.error('Error registrando al usuario:', error.response?.data || error.message);
    throw error;
  }
};


// Función para iniciar sesión
export const signInUser = async (userData) => {
  try {
    console.log("Datos enviados para iniciar sesión:", userData);

    const response = await api.post('/login', userData);

    console.log('Respuesta del servidor:', response.data);

    // Guardar el token en localStorage
    if (response.data && response.data.accessToken) {
      localStorage.setItem('token', response.data.accessToken);
      console.log('Token guardado en localStorage:', localStorage.getItem('token'));
    }

    return response.data; // Devuelve la respuesta de la API
  } catch (error) {
    console.error('Error al iniciar sesión:', error.response?.data || error.message);
    throw error;
  }
};


export default api;