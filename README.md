# Plataforma de Administración de Ítems

Este es un proyecto de una plataforma para la administración de productos. Los usuarios pueden crear, editar, ver y eliminar productos. Además, los administradores tienen acceso a funcionalidades adicionales como la gestión de ítems. El proyecto está basado en React para el frontend, con un enfoque en la gestión eficiente de los productos.

## Características

- **Interfaz de usuario intuitiva** para la administración de productos.
- **Autenticación de usuarios**: Registro y login para acceder a la plataforma.
- **Gestión de productos**: Los usuarios pueden ver, crear, editar y eliminar productos.
- **Paginación de productos**: Los productos se muestran en páginas para facilitar la navegación.
- **Gestión de roles**: Los administradores pueden acceder a más funciones de gestión.
- **Diseño adaptable**: Interfaz responsiva para diferentes dispositivos.

## Tecnologías

- **Frontend**: React.js, React Router, Context API (para autenticación)
- **Estilos**: CSS Modules
- **Backend**: https://github.com/SchetoT/inventary

## Instalación

1. Clona el repositorio:

   ``` bash
   git clone https://github.com/tu-usuario/plataforma-de-administracion.git

Instala las dependencias:

 ``` bash
cd plataforma-de-administracion
npm install
 ```
Inicia el servidor de desarrollo:

 ``` bash
 npm start
 ```
Esto abrirá la aplicación en tu navegador en http://localhost:3000.

Estructura del Proyecto
 ``` bash
/src
  /assets              # Imágenes y otros recursos estáticos
  /component           # Componentes reutilizables (Botón, Logo, etc.)
  /context             # Contexto de la aplicación (Autenticación)
  /pages               # Páginas principales (Home, SignIn, Register, etc.)
  /services            # Servicios de la API (llamadas a la API)
  /styles              # Archivos de estilos globales y CSS Modules
  App.js               # Componente principal de la aplicación
  index.js             # Punto de entrada de la aplicación
 ```
## Rutas
- /home: Página de inicio de la plataforma.
- /signin: Página de inicio de sesión.
- /register: Página de registro de nuevos usuarios.
- /itemsview: Vista de todos los productos.
- /createitem: Página para crear nuevos productos (solo administradores).
- /edititem: Página para editar un producto existente.
## Autenticación
La aplicación utiliza un sistema de autenticación basado en JWT. Los usuarios deben registrarse para acceder a sus funciones y los administradores tienen permisos especiales.
## Licencia
Este proyecto está bajo la licencia MIT.
