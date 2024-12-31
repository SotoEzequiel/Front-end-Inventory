import React, { useContext } from 'react';
import NavbarLoggedIn from '../../pages/Navbar/NavbarLoggedIn';
import NavbarLoggedOut from '../../pages/Navbar/NavbarLoggedOut';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return isLoggedIn ? <NavbarLoggedIn /> : <NavbarLoggedOut />;
};

export default Navbar;




