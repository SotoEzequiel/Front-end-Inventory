import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from "./Pages/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
import SignIn from './Pages/Signin/SignIn';
import CreateItem from './Pages/CreateItem/CreateItem';
import EditItem from './Pages/EditItem/EditItem';
import ItemDetail from './Pages/ItemDetail/ItemDetail';
import ItemView from './Pages/Home/ItemsView';
import { AuthProvider } from './context/AuthContext';
import ErrorPage from './pages/ErrorPage/ErrorPage';
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
