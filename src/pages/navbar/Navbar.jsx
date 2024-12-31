import React, { useContext } from 'react';
import NavbarLoggedIn from '../../pages/navbar/NavbarLoggedIn';
import NavbarLoggedOut from '../../pages/navbar/NavbarLoggedOut';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return isLoggedIn ? <NavbarLoggedIn /> : <NavbarLoggedOut />;
};

export default Navbar;




