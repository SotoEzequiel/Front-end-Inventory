import React from 'react';
import SignInForm from './SignInForm';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {

  const navigate = useNavigate();  // Hook de React Router para la navegación

  useEffect(() => {
    console.log("se entro al signin use efe")
    // Verifica si existe un token en el localStorage
    const token = localStorage.getItem("token"); // O sessionStorage.getItem("token");

    if (token) {
      // Si no hay token, redirige al Home (por ejemplo, "/")
      navigate("/"); // Redirige al home
    }
  }, [navigate]);  // Solo se ejecuta cuando el componente se monta

    return (
      <SignInForm/>
    );
  }