import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from "./Pages/navbar/Navbar";
import Home from "./Pages/home/Home";
import Register from "./Pages/register/Register";
import SignIn from './pages/signin/SignIn';
import CreateItem from './Pages/createItem/CreateItem';
import EditItem from './Pages/editItem/EditItem';
import ItemDetail from './Pages/itemDetail/ItemDetail';
import ItemView from './Pages/home/ItemsView';
import { AuthProvider } from './context/AuthContext';
import ErrorPage from './pages/errorPage/ErrorPage';
import "../src/app.css";


function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} /> {/* Redirige la raíz a /home */}
            <Route path="/signin" element={<SignIn />} />
            <Route path="/home" element={<Home />} />
            <Route path="/items/:id" element={<ItemDetail />} />
            <Route path="/edititem" element={<EditItem />} />
            <Route path="/items" element={<ItemView />} />
            <Route path="/createitem" element={<CreateItem />} />
            <Route path="/register" element={<Register />} />
            <Route path="/itemsview" element={<ItemView />} />
            <Route path="*" element={<ErrorPage />} /> {/* Manejo de rutas inexistentes */}
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
