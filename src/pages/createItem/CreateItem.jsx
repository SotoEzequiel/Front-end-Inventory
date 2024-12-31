import CreateItemForm from "./CreateItemForm"
import {useNavigate} from "react-router-dom"
import { useEffect } from "react";

export default function CreateItem(){

    const navigate = useNavigate();  // Hook de React Router para la navegación

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
    return(<>
        <CreateItemForm/>
    </>
    )
}