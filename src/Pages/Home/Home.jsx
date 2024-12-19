import React from 'react';
import ItemView from './ItemsView';
import { logoutUser } from '../../Services/api';


const handleLogout = () => {
  logoutUser();
};



const Home = () => {
  return (
    <div>
      <h1>Bienvenido a la Página de Inicio</h1>
      <ItemView/>
      <button onClick={handleLogout}>Cerrar sesión</button>;
    </div>
  );
};

export default Home;